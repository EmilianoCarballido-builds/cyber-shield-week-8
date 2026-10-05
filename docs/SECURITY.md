# Seguridad y límites de la demo

La app es estática. No tiene cuentas, base de datos, backend de negocio, analytics, pagos, secretos ni acceso a sistemas. El formulario tiene opciones cerradas y números acotados. Ingresos se usan como escenario aproximado; se aconseja usar información ficticia, no identidad ni datos de clientes. Estado y bitácora solo viven en memoria y se borran al recargar. Exportar crea una copia local elegida por el usuario.

## Security floor
| Requisito | Aplicación |
|---|---|
| Sin secretos | No se requieren API keys; revisar git tracked antes de cada release |
| Auth si hay datos personales almacenados | No aplica en este slice: no persistencia personal, cuentas ni servidor |
| RLS en tablas Supabase | No aplica: no Supabase ni tablas; prerrequisito para futura persistencia |
| Validación de todos los formularios | enteros finitos, rangos, enums y rechazo de campos extra; consentimiento booleano |
| Datos ficticios | Papelería ficticia explícita; ningún registro real |

## Fronteras de confianza
- La salida del motor es heurística educativa, no diagnóstico de malware, probabilidad, auditoría ni certificación.
- LLM local opcional: pesos de MLC/Hugging Face, compilado WebGPU. El proveedor ve una descarga/IP como en cualquier petición; las respuestas del usuario no se incluyen en la solicitud de descarga.
- Solo el resumen validado entra al prompt. Sin entrada de texto libre, sin herramientas, sin privilegios. La IA puede alucinar; texto visible no autoritativo.
- Salida LLM insertada con textContent/createTextNode, nunca HTML ejecutable.
- CSP restringe scripts al origen (con WebAssembly), modelos a orígenes concretos y prohíbe frames, objetos y envío de formularios. HTTPS, nosniff, no-referrer y permisos de cámara/micrófono/geolocalización desactivados.
- No se ejecutan cambios destructivos ni críticos. Confirmar prepara borrador; el usuario contacta fuera de la app y un humano debe aprobar cualquier cambio real.
- «Borrar» borra la sesión, no archivos ya descargados ni pesos cacheados por el navegador. No se almacenan los inputs del negocio en esa caché.

## No confundir con seguridad de producción
Una oferta comercial requeriría contratos/SLA, revisión legal, pruebas de restauración reales, profesionales disponibles, integraciones de mínimo privilegio, auth/RLS si hay datos personales y una bitácora de servidor resistente a alteración. La bitácora actual es informativa y modificable por el dueño de su navegador.
