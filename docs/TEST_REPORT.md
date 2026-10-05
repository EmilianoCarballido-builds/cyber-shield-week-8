# Verificación · SME Shield MX

Fecha: 4 de octubre de 2026, America/Mexico_City. Historia: dueño completa diagnóstico → motor simulado → tres acciones → paquete/escenario → aprobación local → descarga y bitácora. No hay API de negocio ni base de datos.

## Mecánica
- La primera pasada completa tuvo 14 pruebas Node aprobadas: siete de dominio y siete DOM, incluidas 54 combinaciones de controles/incidente; 5/10/11/25 personas; inputs inválidos y campos extra; ingreso cero; aprobación explícita; reset; preservación al navegar; cálculo de escenario; prioridad de incidente; correcciones de persona.
- Build Vite correcto. SDK local AI está en un chunk diferido; advertencia esperada por su tamaño. No se descarga en el recorrido normal.
- Bugs reales reproducidos en primera URL y corregidos: consentimiento conservado tras cancelar; respuestas perdidas al ir a Ayuda. Una regresión de reset apareció durante el fix y también se corrigió. Ver evidence/BUGS.md.

## Navegador real, URL pública
En commit 7db7555, sin sesión de Vercel y sin protección retirada:
- HTTP 200 en https://cyber-shield-week-8.vercel.app; título correcto, contenido y navegación visibles.
- 26 personas rechazadas con mensaje en español; ejemplo de 8 personas → Esencial $790.
- Escenario por teclado: 8 a 9 horas → $9,000 MXN; equivalencia 47 min y advertencia explícita de que no es tiempo de recuperación.
- Cancelar → reabrir: botón de confirmar deshabilitado hasta nueva marca.
- Aprobar → bitácora dice borrador local preparado, no enviado.
- Descarga real guardada como SME-Shield-resumen-demo.json. Archivo leído y validado: demo=true, tres acciones, escenario de 9000, borrador local y eventos. El watcher de descargas de la herramienta expiró, pero la presencia/contenido del archivo confirma que el navegador sí lo descargó.
- Editar a 12 personas → Ayuda → volver: conserva 12, propone $1,490. Canal sin ayuda → primer paso «Elige a una persona de confianza para empezar».
- Desktop 1440×1000 y móvil 390×844. ScrollWidth y viewport móvil ambos 390: no desbordamiento horizontal observado.
- Consola capturada: ningún error ni warning en el recorrido estándar. No se afirma cobertura de todos los navegadores.
- Fuente de 088 visible y enlace a gob.mx. No se llamó a ninguna institución ni se enviaron mensajes.

## Seguridad
HTTPS/HSTS provistos por Vercel; CSP, nosniff, no-referrer, frame DENY, cámara/micrófono/geolocalización deshabilitados. Código revisado: no endpoints que reciban respuestas, localStorage, cookies de aplicación, SQL, credenciales o envío de formularios. Modelo opcional descarga pesos, sin enviar respuestas al proveedor. La verificación de no transmisión combina inspección de arquitectura/código; no se declara una auditoría exhaustiva de paquetes de red.

## Persona
Subagente fresco sin historial de construcción, cinco capturas en orden. 16 confusiones documentadas. Corregidas las peores: falta de proveedor, equivalencia de horas confundible con recuperación, exclusiones lejos del precio. Reprueba visual independiente de las correcciones adjunta a PERSONA.md. Hipótesis sintética, no usuarios reales ni validación de precio.

## Entorno y límites
El CLI agent-browser y Playwright no pudieron lanzar Chromium por restricción macOS MachPort del sandbox. Se usó el navegador integrado real para verificar UI; jsdom para regresiones. Capturas full-page originales tuvieron artefactos, documentados; capturas finales son de viewport. No se presenta el intento CLI fallido como prueba aprobada.

## IA local
Integración real: WebLLM 0.2.85 + Qwen2.5 0.5B cuantizado, sin API keys, con consentimiento de descarga. La primera prueba llegó a 202 MB / 76% y se estancó antes de completar inferencia. Se agregó worker para mantener UI responsiva, cancelación y timeout de 180 segundos sin progreso; no se etiqueta una plantilla como inferencia real. Resultado final de la prueba posterior se añade al cierre.

### Cierre de IA local
La prueba posterior en worker terminó en fallback simulado sin bloquear el diagnóstico. No se obtuvo una generación real completa en este entorno: la integración existe, pero la inferencia real queda **no verificada**. Se verifican consentimiento previo y fallback sin WebGPU en regresión DOM; carga y fallback en navegador. No se debe presentar la explicación de plantilla como un modelo ejecutado. Total final: **15 pruebas automatizadas aprobadas**.

Cancelación manual: el intento de pulsar Cancelar no se confirmó en el navegador integrado; el botón no fue localizado por la herramienta. No se reporta ese clic como prueba aprobada. El control y terminación del worker están implementados; callbacks antiguos ahora se descartan por número de revisión.
