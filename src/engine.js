export const SAMPLE = Object.freeze({ employees:8, revenue:8000, hours:8, sector:'comercio', partner:'contador', backup:'unknown', access:'no', updates:'yes', incident:'no' });
export const DEFAULTS = Object.freeze({ employees:5, revenue:4000, hours:8, sector:'comercio', partner:'ninguno', backup:'unknown', access:'unknown', updates:'unknown', incident:'no' });
export const ENUMS = { sector:['comercio','servicios','salud','alimentos'], partner:['contador','ti','asociacion','banco','ninguno'], backup:['yes','no','unknown'], access:['yes','no','unknown'], updates:['yes','no','unknown'], incident:['yes','no'] };
export function validate(input) {
 if(!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Completa los datos del escenario.');
 const keys=Object.keys(DEFAULTS);
 if(Object.keys(input).some(k=>!keys.includes(k))) throw new Error('Hay campos no permitidos.');
 const limits={employees:[5,25],revenue:[0,1000000],hours:[1,72]};
 for(const [key,[min,max]] of Object.entries(limits)) {
  const n=input[key];
  if(typeof n!=='number'||!Number.isFinite(n)||n<min||n>max||!Number.isInteger(n)) throw new Error(`${key==='employees'?'Personas':key==='revenue'?'Ingreso diario':'Horas'}: usa un número entero de ${min} a ${max}.`);
 }
 for(const [key,values] of Object.entries(ENUMS)) if(!values.includes(input[key])) throw new Error('Selecciona una opción válida en cada pregunta.');
 return Object.fromEntries(keys.map(k=>[k,input[k]]));
}
export const PACKAGES = Object.freeze([
 {id:'esencial',name:'Esencial',min:5,max:10,price:790,minutes:30,features:['Revisión mensual de accesos','Checklist de respaldo y recuperación','30 min/mes de revisión humana propuesta'],costs:[250,150,120,79]},
 {id:'continuidad',name:'Continuidad',min:11,max:25,price:1490,minutes:60,features:['Todo lo incluido en Esencial','Ensayo trimestral de recuperación','60 min/mes de revisión humana propuesta'],costs:[500,300,180,149]}
]);
const ACTIONS={
 incident:{id:'incident',title:'Habla con una persona de confianza',detail:'Contacta a tu responsable de TI por un canal que ya conozcas. Si hubo fraude, llama a tu banco desde su app oficial. No ejecutes borrados ni restauraciones por tu cuenta.',owner:'Dueño + especialista',time:'Ahora',critical:true},
 backup:{id:'backup',title:'Comprueba que puedes recuperar un archivo',detail:'Pide a tu proveedor una prueba con un archivo ficticio, en un entorno separado. Tener una copia no demuestra que puedas recuperar la operación.',owner:'Proveedor de TI',time:'Esta semana',critical:true},
 access:{id:'access',title:'Prepara el doble paso para entrar',detail:'Revisa con tu proveedor la verificación en dos pasos del correo. Antes de cambiar accesos, acuerden cómo recuperar la cuenta sin interrumpir el negocio.',owner:'Dueño + proveedor',time:'Esta semana',critical:true},
 updates:{id:'updates',title:'Agenda una revisión de actualizaciones',detail:'Pide una revisión de los equipos. Acordar horario, respaldo y aprobación antes de instalar evita interrumpir las ventas.',owner:'Proveedor de TI',time:'Esta semana',critical:true},
 recovery:{id:'recovery',title:'Define a quién llamar si el negocio se detiene',detail:'Prepara fuera de esta app una lista de responsables y canales oficiales. Ensaya quién decide y qué operación debe recuperarse primero.',owner:'Dueño',time:'Esta semana',critical:false},
 verify:{id:'verify',title:'Revisa qué falta comprobar',detail:'Tus respuestas son declaraciones, no pruebas. Pide evidencia de recuperación y accesos a tu proveedor; aquí no subas documentos ni credenciales.',owner:'Dueño + proveedor',time:'Próxima revisión',critical:false},
 practice:{id:'practice',title:'Ensaya un día sin tu equipo principal',detail:'Con datos ficticios, revisa cómo seguir atendiendo y quién autorizaría recuperar información. No apagues ni bloquees sistemas para probarlo.',owner:'Dueño + equipo',time:'Este mes',critical:false}
};
export function assess(raw) {
 const input=validate(raw); const plan=PACKAGES.find(p=>input.employees<=p.max);
 const controls=['backup','access','updates'];
 const unknown=controls.filter(k=>input[k]==='unknown');
 const missing=controls.filter(k=>input[k]==='no');
 const ids=input.incident==='yes'?['incident']:[];
 for(const k of ['backup','access','updates']) if(input[k]!=='yes') ids.push(k);
 for(const k of ['recovery','verify','practice']) if(ids.length<3) ids.push(k);
 const severity=input.incident==='yes'?'Atención inmediata':missing.length>=2?'Prioridad alta':unknown.length||missing.length?'Por revisar':'Mantener y comprobar';
 const hourly=input.revenue/8;
 return {input,plan,unknown,missing,actions:ids.slice(0,3).map(k=>({...ACTIONS[k]})),severity,humanRequired:input.incident==='yes'||unknown.length>0||missing.length>=2,hourly,exposure:hourly*input.hours,equivalentHours:hourly>0?plan.price/hourly:null,simulated:true};
}
export function simulatedExplanation(result) {
 return `Con ${result.input.employees} personas, el paquete ${result.plan.name} plantea un costo mensual de $${result.plan.price.toLocaleString('es-MX')} MXN. Empieza por: ${result.actions[0].title.toLowerCase()}. ${result.unknown.length?'Hay controles que todavía no sabes si están listos; deben comprobarse con una persona.':'Las respuestas no sustituyen una revisión real.'} El escenario de interrupción ayuda a comparar magnitudes; no demuestra ahorro ni garantiza recuperación.`;
}
export function prepareDraft(result,approved) {
 if(approved!==true) throw new Error('Confirma que solo quieres preparar un borrador local.');
 return {type:'Borrador local; no enviado',simulated:true,request:'Revisión humana de continuidad',severity:result.severity,plan:result.plan.name,actions:result.actions.map(a=>a.title),notice:'Sin cita ni servicio contratado. Contacta tú a tu proveedor; nunca compartas credenciales.'};
}
export function exportReport(result,audit,draft) {
 return {product:'SME Shield MX',version:1,demo:true,notice:'Datos ficticios o escenario declarado. No es auditoría ni cotización comercial. No se ejecutó ninguna acción.',assessment:result,draft:draft||null,audit};
}
