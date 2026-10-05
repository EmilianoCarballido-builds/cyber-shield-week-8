# Entrega · Emiliano Carballido · Week 8

- Live URL: https://cyber-shield-week-8.vercel.app
- GitHub: https://github.com/EmilianoCarballido-builds/cyber-shield-week-8
- Packet-before-code: https://github.com/EmilianoCarballido-builds/cyber-shield-week-8/commit/25bcf19f37557949f65fbeeb46ae9bb8b1ae73fc
- PDFs preparados: PACKET_Emiliano_Carballido.pdf, PERSONA_Emiliano_Carballido.pdf, BUILDCHAT_Emiliano_Carballido.pdf. Se entregan en la carpeta outputs de Codex y el ZIP, no requieren claves.
- Guion: docs/DEMO_SCRIPT.md (3:30, con últimos 30 s de reflexión; indicación de recorte a 3:00).
- Pendiente de Emiliano: revisar que la reflexión represente su opinión y grabar DEMO_Emiliano_Carballido.mp4; exportar la conversación final si el docente exige cada mensaje/herramienta, porque BUILDCHAT es un snapshot disponible con límites declarados.
- Límite técnico: LLM real integrado de forma opcional en WebGPU, pero inferencia completa no verificada en este entorno. Default y fallback son simulados y están etiquetados. La app educativa no es un servicio activo de seguridad.
- Límite de fuente: declaración TECHNOLOGIST pendiente en el Blueprint original; no inventada.

## Commits con significado
| Commit | Entrega |
|---|---|
| 25bcf19 | Packet, mockup generado, README; sin código de aplicación |
| 24f9a41 | Prompt de build y evidencia de secuencia |
| 57a2d1f | Motor, validación y tests de dominio |
| 5c78693 | App española, interfaz, primera integración de IA y deploy |
| 0c03598 | Bugs de consentimiento y pérdida de respuestas, regresiones |
| 7db7555 | Correcciones tras persona sintética y tests |
| 43e0094 | Worker, cancelación y recuperación de carga LLM |
| commit final | Evidencia, documentos y cierre; ver historial para hash |

## Deploys comprobados READY
| # | Commit | Deployment | URL inmutable |
|---|---|---|---|
| 1 | 5c78693 | dpl_3giWxZgZBt9EMPbFaBwJPrqDupn7 | https://cyber-shield-week-8-pr7vdtfza-smart-business2.vercel.app |
| 2 | 0c03598 | dpl_5KsymNxjsnBEdtHCxTibMb59EQoF | https://cyber-shield-week-8-8ll8ygn9d-smart-business2.vercel.app |
| 3 | 7db7555 | dpl_HBXa67s3BkeE9eQwVkpWDK3Tf8W8 | https://cyber-shield-week-8-q14h6yg51-smart-business2.vercel.app |

Pushes posteriores conservan el alias público y sus deployment IDs quedan disponibles en Vercel. No contar una creación de proyecto como deploy exitoso; la tabla solo incluye READY consultados.

## Revisión de la rúbrica
URL funciona: verificación real de navegador y HTTP. Packet antes de código: commit remoto previo. Condiciones Blueprint: matriz en packet y límites en SECURITY. Test-fix-redeploy: BUGS, tests y deploys. Persona: agente fresco, hallazgos, correcciones y reprueba. Conversación: snapshot literal de mensajes disponibles con ledger resumido, no una transcripción inventada. Video: guion listo; archivo MP4 aún por grabar.
