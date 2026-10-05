import { CreateMLCEngine } from '@mlc-ai/web-llm';
let engine;
export async function explainLocally(result,onProgress){
 if(!engine)engine=await CreateMLCEngine('Qwen2.5-0.5B-Instruct-q4f16_1-MLC',{initProgressCallback:p=>onProgress(`Modelo local: ${Math.round(p.progress*100)}% · ${p.text}`)});
 const summary={personas:result.input.employees,paquete:result.plan.name,precio_mxn:result.plan.price,prioridades:result.actions.map(a=>a.title),desconocidos:result.unknown.length};
 const response=await engine.chat.completions.create({messages:[{role:'system',content:'Explica en español sencillo el resumen de una DEMO educativa de continuidad para pymes. Máximo 80 palabras. No añadas cifras, garantías, precios ni acciones distintas a las dadas. No solicites secretos, dinero ni datos personales. No indiques cambios de sistemas. No estás conectado a cuentas y no has verificado seguridad. Solo explica; no tienes herramientas. Termina diciendo que una persona debe verificar la información.'},{role:'user',content:JSON.stringify(summary)}],temperature:0.2,max_tokens:180});
 const text=response.choices[0]?.message?.content;
 if(typeof text!=='string'||!text.trim())throw new Error('Empty model response');
 return text.slice(0,1500);
}
