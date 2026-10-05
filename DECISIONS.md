# Decisiones · SME Shield MX

## 2026-10-04 · Antes del código
- Fuente de verdad: BLUEPRINT_Week8_Team.pdf; MONEY prioriza valor/paquetes. TECHNOLOGIST pendiente en la fuente.
- Slice educativo sin conexiones ni datos personales; zero-data evita una base de datos innecesaria.
- Motor determinista simulado, LLM local opcional, plantillas claramente simuladas por defecto. La IA explica, no controla cuentas ni precios.
- No garantías de ahorro: escenario de ingresos interrumpidos con supuestos editables.
- Paquetes conceptuales, distribución hipotética, sin servicio humano activo ni compra.
- Confirmación solo prepara un borrador local; críticos requieren humano fuera del demo.
- Benchmark primario: Huntress; controles inspirados en NIST; 088 según GN CERT-MX.
- Próximo movimiento: commit del packet y mockup, después prompt de implementación, después código.

## Primera implementación y deploy
- GitHub remoto: packet 25bcf19 → prompt 24f9a41 → motor 57a2d1f → interfaz 5c78693.
- Primer deploy READY: dpl_3giWxZgZBt9EMPbFaBwJPrqDupn7, URL https://cyber-shield-week-8.vercel.app (versión inmutable: https://cyber-shield-week-8-pr7vdtfza-smart-business2.vercel.app).
- Build local y Vercel correctos. Se autoriza solo el script de instalación de esbuild. Dependencias fijadas y lockfile; no secretos.
- Seis pruebas unitarias pasan, incluidas 54 combinaciones de controles/incidente. Próximo: navegador, bug real, persona fresca, fix y redeploy.

## Pruebas y correcciones
- Dos bugs reproducidos en URL pública: Cancelar conservaba consentimiento; navegar a ayuda descartaba respuestas sin enviar. Corregidos en 0c03598, con regresiones DOM.
- El nuevo guardado de formulario reveló una regresión en reset; la prueba la detectó y se corrigió antes del commit.
- Segundo deploy READY: dpl_5KsymNxjsnBEdtHCxTibMb59EQoF, commit 0c03598; https://cyber-shield-week-8-8ll8ygn9d-smart-business2.vercel.app.
- Persona fresca: Patricia, 49, 8 personas, baja familiaridad técnica. No sustituye entrevistas reales. Mayor bloqueo: depender de un proveedor inexistente; añadimos paso seguro para conseguir ayuda.
- Mejoramos claridad de equivalencia monetaria, exclusiones junto al precio, borrador y lectura móvil.
- Inconsistencia de capturas originales (defaults vs fixture) documentada; caso sin proveedor confirmado aparte.
- La cifra de contribución del packet se corrige en UI a saldo antes de impuestos. Packet original queda intacto.

## Robustez de IA opcional
- Descarga real observada: 202 MB / 76%; no inferencia completa. No declarar éxito que no ocurrió.
- Worker, cancelar y watchdog de 180 s sin progreso mantienen el control del usuario. La prueba posterior regresó al modo simulado.
- 15 tests finales: consentimiento y WebGPU ausente también preservan el resultado.
