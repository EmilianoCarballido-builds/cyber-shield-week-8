import { CreateWebWorkerMLCEngine } from '@mlc-ai/web-llm';
let engine;
let worker;
let rejectActive;
let watchdog;
export function cancelLocalAI(){
 clearTimeout(watchdog);
 worker?.terminate();
 worker=undefined;engine=undefined;
 rejectActive?.(new Error('Local model canceled'));
 rejectActive=undefined;
}
export async function explainLocally(result,onProgress){
 // A stalled CDN download or model execution must never hold the UI indefinitely.
 const timeout = new Promise((_,reject)=>{rejectActive=reject;});
 const touch=()=>{clearTimeout(watchdog);watchdog=setTimeout(()=>cancelLocalAI(),180000);};
 touch();
 try {
  const work=(async()=>{
   if(!engine){
    worker=new Worker(new URL('./llm-worker.js',import.meta.url),{type:'module'});
    engine=await CreateWebWorkerMLCEngine(worker,'Qwen2.5-0.5B-Instruct-q4f16_1-MLC',{initProgressCallback:p=>{touch();onProgress(`Modelo local: ${Math.round(p.progress*100)}% · ${p.text}`);}});
   }
   touch();
   const summary={personas:result.input.employees,paquete:result.plan.name,precio_mxn:result.plan.price,prioridades:result.actions.map(a=>a.title),desconocidos:result.unknown.length};
   const response=await engine.chat.completions.create({messages:[{role:'system',content:'Explica en español sencillo el resumen de una DEMO educativa de continuidad para pymes. Máximo 80 palabras. No añadas cifras, garantías, precios ni acciones distintas a las dadas. No solicites secretos, dinero ni datos personales. No indiques cambios de sistemas. No estás conectado a cuentas y no has verificado seguridad. Solo explica; no tienes herramientas. Termina diciendo que una persona debe verificar la información.'},{role:'user',content:JSON.stringify(summary)}],temperature:0.2,max_tokens:180});
   const text=response.choices[0]?.message?.content;
   if(typeof text!=='string'||!text.trim())throw new Error('Empty model response');
   return text.slice(0,1500);
  })();
  return await Promise.race([work,timeout]);
 } catch(error){worker?.terminate();worker=undefined;engine=undefined;throw error;}
 finally {clearTimeout(watchdog);rejectActive=undefined;}
}
