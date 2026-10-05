import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const dom=new JSDOM('<div id="app"></div>',{url:'https://sme.test/'});
Object.assign(globalThis,{window:dom.window,document:dom.window.document,FormData:dom.window.FormData});
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
dom.window.scrollTo=()=>{};dom.window.HTMLElement.prototype.scrollIntoView=()=>{};
dom.window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
dom.window.HTMLDialogElement.prototype.close=function(){this.open=false;};
// Native dialog submission is provided by real browsers, modeled here for DOM regression tests.
document.addEventListener('click',e=>{if(e.target.matches('button[value=cancel]')){e.preventDefault();e.target.closest('dialog').close();}});
const code=(await readFile(new URL('../src/main.js',import.meta.url),'utf8')).replace("import './style.css';",'').replace("'./engine.js'",JSON.stringify(new URL('../src/engine.js',import.meta.url).href));
await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const $=s=>document.querySelector(s);
const click=s=>$(s).click();
const submit=()=>$('#assessment').dispatchEvent(new dom.window.Event('submit',{bubbles:true,cancelable:true}));
function sample(){click('#reset');click('#sample');submit();}
test('cancel/reopen always requires fresh consent',()=>{sample();click('#prepare');assert.equal($('#confirm').disabled,true);$('#approve-check').checked=true;$('#approve-check').dispatchEvent(new dom.window.Event('change'));assert.equal($('#confirm').disabled,false);click('button[value=cancel]');click('#prepare');assert.equal($('#approve-check').checked,false);assert.equal($('#confirm').disabled,true);click('button[value=cancel]');});
test('unfinished form values survive navigation and determine correct price',()=>{sample();click('#edit');$('[name=employees]').value='12';click('[data-view=incidente]');click('[data-view=diagnostico]');assert.equal($('[name=employees]').value,'12');submit();assert.match($('.price').textContent,/1,490/);});
test('empty numeric field remains invalid after navigation',()=>{click('#reset');$('[name=employees]').value='';click('[data-view=incidente]');click('[data-view=diagnostico]');assert.equal($('[name=employees]').value,'');submit();assert.match($('#form-error').textContent,/Personas/);assert.equal($('.actions'),null);});
test('incident priority and zero-income math render without Infinity',()=>{click('#reset');$('[name=revenue]').value='0';$('[name=incident]').checked=true;submit();assert.match($('.status-badge').textContent,/Atención inmediata/);assert.match($('.action h3').textContent,/persona de confianza/);click('[data-view=plan]');assert.equal($('#equivalent').textContent,'No calculable');assert.doesNotMatch(document.body.textContent,/Infinity|NaN/);});
test('changing scenario updates displayed amount; audit records it',()=>{sample();click('[data-view=plan]');$('#hours').value='16';$('#hours').dispatchEvent(new dom.window.Event('input'));$('#hours').dispatchEvent(new dom.window.Event('change'));assert.match($('#exposure').textContent,/16,000/);click('[data-view=bitacora]');assert.match($('.audit-list').textContent,/Escenario de interrupción ajustado/);});
test('reset clears prior assessment, draft and audit history',()=>{sample();click('#prepare');$('#approve-check').checked=true;$('#approve-check').dispatchEvent(new dom.window.Event('change'));click('#confirm');assert.match(document.body.textContent,/Borrador listo/);click('#reset');click('[data-view=bitacora]');assert.equal(document.querySelectorAll('.audit-list li').length,1);assert.doesNotMatch($('.audit-list').textContent,/Aprobación explícita/);click('[data-view=plan]');assert.ok($('.empty-state'));});

test('persona fixes show cost exclusions and money equivalence, not recovery time',()=>{sample();assert.match($('.price-exclusions').textContent,/Podrían costar aparte/);click('[data-view=plan]');assert.equal($('#equivalent').textContent,'47 min');assert.match(document.body.textContent,/no estima cuánto tardarías/);});
test('local AI requires consent and unsupported GPU preserves simulated output',async()=>{sample();click('#run-ai');assert.match($('#ai-progress').textContent,/Marca la casilla/);$('#ai-consent').checked=true;click('#run-ai');assert.match($('#ai-progress').textContent,/no ofrece WebGPU/);assert.equal($('#ai-label').textContent,'Explicación simulada');assert.equal(document.querySelectorAll('.action').length,3);});
