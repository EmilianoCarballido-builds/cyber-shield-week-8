# SME Shield MX

**[Abrir demo pública](https://cyber-shield-week-8.vercel.app)** · Emiliano Carballido · Business Bending Week 8 · MONEY

Planificador educativo en español para negocios mexicanos de 5–25 personas: tres acciones priorizadas, paquetes mensuales conceptuales y escenarios de continuidad. No es antivirus ni gestor de contraseñas.

## Qué funciona
1. Carga la papelería ficticia o introduce un escenario sin identidad.
2. Declara recuperación, acceso, actualizaciones e incidente; «No sé» queda desconocido.
3. Consulta tres acciones y una propuesta Esencial ($790 MXN) o Continuidad ($1,490 MXN).
4. Ajusta horas de interrupción: ventas diarias / 8 × horas. No es pérdida neta, probabilidad ni ahorro garantizado.
5. Prepara un borrador con consentimiento explícito; consulta bitácora y descarga JSON local.
6. Opcional: descarga un modelo abierto y genera una explicación con WebLLM/WebGPU en tu dispositivo. La guía por defecto está marcada como **simulada**. El modelo nunca decide riesgo, precio o acciones sobre sistemas.

**Demo, no servicio activo:** sin conexiones, escaneos, backups reales, cobros, envío de tickets ni personal atendiendo. Precios y costos son hipótesis; licencias, almacenamiento, forense y SOC 24/7 están excluidos. Nunca pide contraseñas, PIN, e.firma, nombres o datos de clientes. Datos del formulario y bitácora solo en memoria; descargar guarda una copia local elegida por el usuario.

## Packet antes del código
[Packet](docs/PACKET.md) + [mockup generado](docs/assets/mockup.png) en commit **25bcf19f37557949f65fbeeb46ae9bb8b1ae73fc**, anterior a todo código. [Evidencia](docs/evidence/PACKET_FIRST.md). No se reescribió el packet para esconder decisiones cambiadas.

## Desarrollo
Node 22 o 24, pnpm. Dependencias y lockfile fijados.

```sh
pnpm install
pnpm dev
pnpm test
pnpm build
pnpm preview
```

No variables de entorno ni secretos requeridos. WebLLM necesita WebGPU, ~300 MB de descarga y cerca de 1 GB de memoria; funciona como opción separada. Cancelar termina el worker; 180 segundos sin progreso producen fallback simulado. El diagnóstico funciona aunque el modelo no cargue.

Vercel detecta Vite, instala desde el lockfile y publica `dist`; configuración y headers en vercel.json. GitHub main está conectado a Vercel. No se contrató un servicio de pago.

## DRAGON stack
| Componente | Tecnología | Frontera |
|---|---|---|
| LLM | WebLLM + Qwen2.5 0.5B en worker/WebGPU | Opt-in, local, sin herramientas; default simulado |
| Seguridad | Motor determinista propio | Simulado, sin exploración de red; desconocido nunca implica seguro |
| Datos / automatización | Schema validado, playbooks, paquetes, bitácora y export JSON | Sin backend ni datos personales persistidos |
| Interfaz / hosting | Vite + HTML/CSS/JS, Vercel | HTTPS, CSP y sin analytics |

## Documentación
- [Prompt de construcción](docs/BUILD_PROMPT.md)
- [Decisiones y cierre de sesión](DECISIONS.md)
- [Pruebas y limitaciones](docs/TEST_REPORT.md)
- [Bugs reproducidos y fixes](docs/evidence/BUGS.md)
- [Persona sintética, confusiones y cambios](docs/PERSONA.md)
- [Security floor](docs/SECURITY.md)
- [Guion 3:30, con últimos 30 s de reflexión](docs/DEMO_SCRIPT.md)
- [Conversación disponible y alcance de exportación](docs/BUILDCHAT.md)
- [Entregables y deploys](docs/SUBMISSION.md)

## Fuentes y límites
Blueprint del equipo es fuente de verdad; su declaración de TECHNOLOGIST estaba pendiente y no fue inventada. Benchmark: [Huntress](https://www.huntress.com/pricing), controles de [NIST para pymes](https://www.nist.gov/itl/smallbusinesscyber), [orientación 088 de GN CERT-MX](https://www.gob.mx/gncertmx/articulos/en-caso-de-ser-victima-de-algun-ciberdelito-llama-al-088-atencion-ciudadana). No afirmamos certificación, protección verificada ni equivalencia con un SOC comercial. Licencia MIT.
