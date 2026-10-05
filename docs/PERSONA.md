# Prueba sintética de comprensión — Patricia

## Alcance y método

Persona ficticia: Patricia, 49 años, dueña de una papelería mexicana con ocho personas. Usa WhatsApp, sabe poco de tecnología, teme cargos adicionales y no sabe si tener una copia equivale a poder recuperar su negocio. Tiene tres minutos para decidir qué hacer.

Evaluación independiente del código y de las decisiones de construcción. Se observaron únicamente las cinco capturas suministradas, en orden: 01-onboarding, 02-results, 03-plan, 04-incident y 05-approval. La narración y los tiempos siguientes son una simulación, no una sesión cronometrada con una participante real. No se hicieron clics, no se comprobó funcionamiento, descarga, almacenamiento, pagos ni envío de datos. Esto es una prueba sintética de usabilidad; no valida demanda, disposición a pagar ni resultados con personas reales.

Las capturas tienen contenido duplicado y grandes espacios vacíos. Puede ser un artefacto de captura. Se reporta como limitación y no como defecto confirmado de la aplicación. Fue necesario volver a ver las tres primeras a resolución original para leer texto pequeño; esto no permite concluir cómo se ve en un dispositivo real.

## Recorrido simulado de tres minutos, en voz de Patricia

**0:00–0:35 · Inicio.** «Dice que no cobra y que es una demo. Eso me tranquiliza. Voy a poner ocho personas y más o menos lo que vendemos. Hay una opción de papelería ficticia; no sé si al tocarla me cambia lo que ya escribí. De los respaldos, yo tengo una copia guardada, pero nunca la he abierto para probar. Pongo “No sé”. La frase de abajo sí me ayuda: una copia no es una recuperación probada. Espero que no tenga que saber de sistemas para seguir».

**0:35–1:10 · Resultados.** «Primero tengo que comprobar que puedo recuperar un archivo. Ya entendí que tenerlo guardado no basta. Pero dice que le pida a mi proveedor una prueba en un entorno separado. Yo puse que todavía no tengo a alguien; entonces ¿a quién se lo pido? No quiero borrar lo que sí funciona. Veo $790 por mes con impuestos. Me sirve saberlo, pero “checklist” no sé exactamente qué me entregan. ¿Me ayudan a hacer la prueba o sólo me dan una lista?».

**1:10–2:05 · Plan y comparación.** «Si cierro ocho horas, dice $8,000 de ingreso interrumpido. No son $8,000 que necesariamente pierda: algunas ventas quizá vuelvan mañana. La aclaración lo dice, pero está chiquita. Los $790 son menos que una hora de ventas según esto; “0.79 h” me obliga a pensar. No sé si es el tiempo que tardan en recuperarme. Abajo encuentro que no incluye guardar el respaldo, otras licencias ni atención todo el día. Eso sí necesito verlo junto al precio. Si el precio es una hipótesis y no hay servicio activo, entiendo que todavía no puedo contratarlo. No sabría cuánto terminaría pagando de verdad».

**2:05–2:30 · Incidente.** «Si algo pasa, uso el teléfono que ya tengo de una persona conocida. No subo fotos ni datos de mis clientes aquí. Eso está claro. Veo el 088 muy grande, pero necesito recordar que es para orientación o denuncia, no para que me arreglen la computadora. “Preparar revisión local” me suena a hacer una cita cerca de mi negocio; voy a leer antes de seguir».

**2:30–3:00 · Preparar revisión.** «Ahora sí: no se envía, no agenda cita y no contrata. Es un borrador para descargar. Puedo marcar la casilla y preparar el borrador sin pagar ni mandárselo a nadie, según lo que dice aquí. Si se lo quiero mandar a mi contador por WhatsApp, lo haría yo después. Todavía no he visto qué contiene ni si trae mis respuestas. No puedo afirmar que ya lo descargué: sólo estoy viendo esta pantalla».

## Resultado por tarea

| Tarea | Resultado sintético | Evidencia y límite |
|---|---|---|
| Entender primera acción | Parcial | Identifica probar recuperación de un archivo; no tiene una persona a quien encargar la prueba. El paso no queda ejecutable para alguien que declaró no tener ayuda. |
| Entender costo mensual y exclusiones | Parcial | Encuentra $790 MXN/mes con impuestos para 5–10 personas y entiende que no hay contratación. Exclusiones aparecen lejos del precio; costo real futuro no está validado. |
| Comparar interrupción | Parcial | Comprende escenario de 8 h y $8,000; la métrica 0.79 h puede confundirse con tiempo de recuperación. No se probó el deslizador. |
| Preparar revisión sin pagar/enviar | Comprensión lograda en el modal | El modal dice explícitamente que no envía, agenda ni contrata. No se verificó la acción posterior ni el archivo. |

## Registro completo de confusiones observadas en esta simulación

Severidad: alta = bloquea una tarea principal o puede producir una decisión materialmente equivocada; media = requiere releer o inferir; baja = fricción menor. Las citas de Patricia son simuladas, no testimonios reales.

| ID | Pantalla | Cita de Patricia | Severidad | Consecuencia probable | Cambio propuesto |
|---|---|---|---|---|---|
| P01 | 01 Inicio | «¿La papelería ficticia me cambia lo que escribí?» | Baja | Evita una ayuda útil por no saber si reemplaza respuestas. | Etiquetar “Cargar un ejemplo de papelería” y aclarar si sustituye los campos. |
| P02 | 01 Inicio | «¿Ingreso diario es lo que vendo o lo que me queda?» | Media | Introduce ganancia en lugar de ventas y altera el escenario. | Usar “Ventas aproximadas en un día, antes de gastos” con ejemplo corto. |
| P03 | 01 Inicio | «Tengo copia, pero nunca probé abrirla; pongo No sé.» | Baja, resuelta por texto | Puede confundir respaldo con recuperación al leer deprisa. | Conservar la aclaración actual y acercar ejemplo: “¿Han recuperado y abierto un archivo de prueba desde esa copia?” |
| P04 | 02 Resultados | «Puse que no tengo a alguien; ¿a qué proveedor se lo pido?» | Alta | La primera acción termina sin responsable ni siguiente paso viable. | Cuando no tiene ayuda, mostrar primero “Elige una persona de confianza para revisar contigo” y una tarea segura: anotar dónde cree que está la copia y localizar quién la configuró, sin compartir claves ni cambiar sistemas. Mantener la prueba real para una persona competente. |
| P05 | 02 Resultados | «¿Qué es un entorno separado? No quiero borrar lo que funciona.» | Media | Abandona el paso o no sabe cómo solicitarlo con precisión. | Explicar “Una prueba fuera de los archivos que usas para trabajar, sin sustituirlos” y ofrecer texto breve para pedirla a su proveedor. |
| P06 | 02 Resultados | «¿El checklist incluye que alguien me recupere el archivo?» | Media | Sobreestima el alcance del precio. | Cambiar “Checklist” por “Lista guiada de comprobaciones” y explicar si la ejecución de recuperación está fuera del alcance. |
| P07 | 02 Resultados | «Dice revisión humana, pero también que no hay asesores.» | Media | Interpreta una propuesta futura como atención disponible. | Titular “Ejemplo de paquete, todavía no disponible” cerca de prestaciones y precio; mantener carácter hipotético en todo el bloque. |
| P08 | 03 Plan | «¿0.79 h es cuánto tardan en recuperarme?» | Alta | Confunde equivalencia monetaria con tiempo de recuperación y asigna una garantía inexistente. | Expresar “El precio equivale a unos 47 minutos de ventas, bajo este supuesto”. Añadir junto a la cifra “No estima cuánto tardarías en volver a operar”. |
| P09 | 03 Plan | «¿Entonces el plan me ahorra los $8,000?» | Media | Lee una comparación de magnitudes como ahorro esperado. | Mantener la advertencia y moverla junto al monto: “Ventas que podrían interrumpirse; no es pérdida segura ni ahorro del plan”. |
| P10 | 03 Plan | «¿Los $790 ya cubren todo lo que necesito?» | Alta | Presupuesta un costo insuficiente por descubrir tarde licencias y almacenamiento excluidos. | Junto a cada precio incluir “No incluye licencias, almacenamiento de copias ni atención 24/7; podrían costar aparte”. No inventar sus importes. |
| P11 | 03 Plan | «Soy ocho; ¿no puedo pedir el ensayo que sale en el paquete de once?» | Media | No sabe si la banda de tamaño es recomendación, límite o elegibilidad. | Aclarar si la banda sólo orienta; explicar que el alcance y precio requieren validación. |
| P12 | 03 Plan | «¿Mi contador ya trabaja con ustedes?» | Media, parcialmente resuelta | Puede asumir afiliación por el protagonismo del bloque. | Sustituir lenguaje comercial de distribución por “Puedes revisar este borrador con tu contador de confianza. No tenemos convenio con él”. |
| P13 | 04 Incidente | «El 088 está enorme; ¿ellos recuperan mi equipo?» | Media, parcialmente resuelta | Llama a orientación esperando reparación técnica. | Añadir junto al número “Orientación para denuncia; no es soporte técnico para recuperar archivos”. Conservar fuente y fecha. |
| P14 | 04 Incidente / 05 Modal | «¿Revisión local es una cita cerca de mi papelería?» | Media, resuelta en modal | Duda antes de continuar, aunque el modal luego elimina contratación/envío. | Reemplazar “Preparar revisión local” por “Crear borrador para descargar”. |
| P15 | 05 Modal | «¿Qué llevará el borrador? ¿Se lo mando yo por WhatsApp?» | Media | Necesita inspeccionar datos antes de compartir; no sabe el siguiente paso. | Añadir vista previa o lista de campos y “Después decides si lo compartes por tu cuenta”. Mantener el texto claro de no envío, no cita y no contratación. |
| P16 | Conjunto de capturas | «Veo otra vez el mismo precio y mucho espacio vacío; ¿ya terminé?» | No confirmable como defecto | La repetición hace difícil estimar el recorrido en capturas. | Verificar una captura fiel y el recorrido real antes de atribuir duplicación a la UI. |

## La confusión más grave

**P04: la primera acción pide ayuda de un proveedor que Patricia declaró no tener.** Es la peor porque bloquea la promesa principal de indicar por dónde empezar. Patricia puede explicar correctamente que guardar una copia no prueba recuperación y aun así cerrar la página sin poder dar el primer paso. Más explicación técnica no resuelve la falta de responsable. La respuesta debe adaptarse a “Aún no tengo a alguien” y dar un paso previo concreto, seguro y realizable por ella.

P08 y P10 también merecen corrección antes de usar el recorrido para decisiones comerciales: afectan expectativas de recuperación y costo. El modal es la parte más clara de las cinco pantallas para explicar que no se paga ni se envían datos.

## Qué sí funcionó

- “No sé” permite responder sin fingir conocimientos.
- La distinción entre copia guardada y recuperación probada aparece tanto en preguntas como en resultados.
- El precio dice MXN/mes e impuestos, y aclara que no existe cobro o contratación en la demo.
- El escenario distingue ingresos interrumpidos de pérdida neta y no promete ahorro; falta dar a esa explicación la misma prominencia que a la cifra.
- El modal describe con precisión que se prepara un borrador y que no envía, agenda ni contrata.
- La página de incidente indica usar contactos conocidos y evitar subir datos de clientes.

## Próxima comprobación recomendada

Después de corregir P04, P08 y P10, repetir con una persona real ajena al proyecto: que diga sin ayuda qué hará primero, cuánto costaría y qué falta pagar, qué significa 0.79 h y qué ocurrirá al preparar el borrador. Observar el flujo real y el archivo generado. Esta evaluación por capturas no acredita ninguna de esas conductas.

## Correcciones implementadas por el constructor

- P04: si el canal es «Aún no tengo a alguien», la primera acción ahora es elegir una persona de confianza, anotar dónde cree que está la copia y quién la configuró, sin modificar archivos ni compartir claves. Un incidente activo sigue teniendo prioridad sobre ese paso preventivo.
- P08: reemplazamos «0.79 h» por «El precio equivale a ventas de 47 min» y una aclaración adyacente: no estima tiempo de recuperación.
- P10: las exclusiones se repiten junto al precio principal y en ambas tarjetas, con advertencia de posibles costos adicionales.
- P02/P05/P06/P07/P13/P14/P15: ventas antes de gastos; prueba fuera de archivos de trabajo; lista guiada en español; paquete todavía no disponible; 088 no es soporte técnico; botón «Crear borrador»; contenido del borrador y decisión de compartir explicados.
- Lectura móvil: texto de acciones y notas sube a 14 px, controles más grandes.

### Corrección del método de captura
La primera captura mostraba valores iniciales (sin proveedor); la segunda usó el ejemplo ficticio que cambia el canal a contador. La persona sintética no recibió ese paso intermedio y lo interpretó como la misma respuesta. No se oculta esa limitación: el constructor reprodujo por separado el caso real «sin proveedor» y confirmó que v1 también pedía directamente una prueba al proveedor. La corrección P04 es válida para ese caso, aunque la secuencia original de capturas era imperfecta. Capturas full-page del navegador también mostraron artefactos de composición; se volvieron a capturar estados en viewport para la revisión final.

### Verificación posterior
Prueba automatizada: sin proveedor → primera acción findHelp; incidente → primera acción incident. Prueba UI: exclusiones junto al precio, equivalencia de 47 min, aclaración de no recuperación. En navegador local se verificó un negocio de 12 personas sin proveedor: primer paso de confianza y precio de $1,490. Esto sigue siendo evaluación sintética, no validación de demanda ni de precio.
# Reprueba sintética independiente de las correcciones

Se revisaron únicamente `persona-fixed-no-provider.png`, `final-desktop-plan.png` y `final-mobile-no-provider.png`, a resolución original. No se inspeccionó código ni se realizaron clics. Es evaluación sintética por capturas, no validación con personas reales.

## Corrección al alcance del informe original

La captura original 01 mostraba el estado inicial sin proveedor; la 02 correspondía al ejemplo con contador. Por tanto, esas dos imágenes no acreditaban por sí solas la continuidad que mi informe original supuso. La confusión sobre falta de ayuda era una hipótesis pertinente, pero su reproducción debe sustentarse en la prueba separada que reportó el equipo. En esta reprueba la captura de escritorio sí muestra una primera acción dirigida a encontrar ayuda, aunque usa 12 personas, no las ocho de Patricia.

## Lectura de Patricia y veredicto

| Corrección | Lectura simulada | Veredicto de la evidencia |
|---|---|---|
| Primer paso sin proveedor | «Ahora puedo empezar yo: anoto dónde creo que está la copia y quién la hizo. Busco una referencia con alguien conocido. No tengo que cambiar archivos ni dar mis claves. Después alguien que sabe hace la prueba.» | **Comprensión mejorada y bloqueo principal resuelto en el texto de escritorio.** El título “Elige una persona de confianza para empezar” y las instrucciones son concretos. No demuestra que la condición se active correctamente para todas las respuestas ni para ocho personas. |
| Exclusiones cerca del precio | «Son $790 al mes con impuestos en este ejemplo. Licencias, guardar las copias y atención todo el día podrían costar aparte. Todavía no está disponible.» | **Corregido en la captura del plan de escritorio.** La advertencia está inmediatamente debajo del precio y es legible. La tarjeta de $1,490 en la otra captura presenta la misma aclaración. Sigue sin haber costo final real, coherente con el carácter hipotético. |
| Minutos como comparación monetaria | «Los 47 minutos son ventas equivalentes al precio. No es lo que van a tardar en arreglarme el negocio.» | **Corregido en escritorio.** “El precio equivale a ventas de 47 min” y el texto “no estima cuánto tardarías en volver a operar” eliminan la ambigüedad principal de “0.79 h”. El escenario visible es 9 horas/$9,000 sobre $8,000 diarios y jornada de 8 horas; las cifras visibles son coherentes. No se verificó el deslizador ni el cálculo en otros estados. |
| Recuperación en lenguaje simple | «La prueba se hace con un archivo ficticio, fuera de los que uso y sin sustituirlos. Tener copia no basta.» | **Mejora visible en escritorio y móvil.** La explicación de “entorno separado” ahora es concreta y el texto se ajusta al ancho móvil sin recortes horizontales visibles. |

## Limitaciones y fricción residual

- La captura móvil empieza a mitad del primer paso: el encabezado fijo y la posición de desplazamiento dejan fuera su título y sus primeras instrucciones. No permite acreditar que Patricia ve la primera acción completa ni juzgar su descubrimiento inicial. Tampoco muestra precio o comparación monetaria en móvil.
- Las capturas no cubren el modal ni el borrador posterior; no se reprueban envío, descarga, pagos o contenido del archivo.
- “Esta semana · Proveedor de TI” en el segundo paso presupone que ya encontró ayuda. Sería más claro “Después de encontrar ayuda” para evitar que Patricia interprete urgencia de ejecutar sola. Es una fricción menor, no el bloqueo original.
- “El precio equivale a ventas de” es comprensible con la aclaración, aunque “Equivale a 47 minutos de ventas bajo este supuesto” sería una frase más natural.

**Conclusión:** las tres correcciones principales tienen evidencia visual favorable en escritorio. La reprueba móvil sólo respalda la legibilidad del texto de recuperación; requiere una captura desde el inicio y otra del plan para cubrir las tres correcciones allí. No hay evidencia suficiente para declarar validado el flujo completo ni la conducta de usuarios reales.
