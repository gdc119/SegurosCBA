/* =====================================================================
   RESPUESTAS — Seguroscba
   Cada rama: titulo, icono (opcional), respuestas [] y sub [] (subramas).
   Cada respuesta: titulo + textos [] (varias versiones; el botón 🔄 rota entre ellas).
   Lo que va entre [CORCHETES] se vuelve un casillero editable.
   [NOMBRE] usarlo así: "¡Hola [NOMBRE]!" o al inicio de línea "[NOMBRE], ..."
   (si el nombre queda vacío, se borra solo y el texto queda prolijo).
   En WhatsApp: *negrita*  _cursiva_
   ===================================================================== */
const FIRMA = "Gustavo Correa – Seguroscba";
const HORARIO = "lunes a viernes de 8:30 a 18 hs";

const RAMAS = [
{
  titulo: "CONTACTO", icono: "💬",
  sub: [
    { titulo: "1er contacto", respuestas: [
      { titulo: "Bienvenida + pedido de datos (auto)", textos: [
`¡Hola [NOMBRE]! 👋 Soy ${FIRMA}. Gracias por escribirme.

Para cotizarte con varias compañías y conseguirte la mejor opción, pasame:
• Marca, modelo, versión y año
• ¿Tiene GNC?
• Código postal donde se guarda
• Uso: particular o comercial
• Tu DNI 🪪 (las compañías lo usan para aplicar descuentos según tu historial)

Con eso te armo las opciones y te las paso 🙌`,
`¡Hola [NOMBRE]! ¿Cómo estás? Te saluda ${FIRMA} 😊

Trabajo con muchas compañías, así que te puedo comparar precios y coberturas en un solo lugar.

Para arrancar necesito:
• Vehículo: marca, modelo, versión y año
• Si tiene GNC
• Código postal
• Uso particular o comercial
• Número de DNI, así la compañía te reconoce los beneficios que te correspondan 🪪

¡Y listo! Te paso las opciones enseguida.`,
`¡Buenas [NOMBRE]! 🙌 Soy Gustavo, de Seguroscba.

Te armo una cotización comparando varias compañías. Solo pasame estos datos:

🚗 Marca, modelo, versión y año
⛽ ¿Tiene GNC?
📍 Código postal
🧾 Uso particular o comercial
🪪 DNI (sirve para que la compañía aplique los descuentos que tengas)

Apenas los tenga, te mando las opciones.`
      ]},
      { titulo: "Bienvenida general (otros ramos)", textos: [
`¡Hola [NOMBRE]! 👋 Soy ${FIRMA}. Gracias por contactarme.

Contame qué querés asegurar (auto, moto, hogar, comercio, vida, celular…) y te armo una cotización comparando varias compañías.

Quedo atento 😊`,
`¡Hola [NOMBRE]! ¿Cómo estás? Te saluda Gustavo, de Seguroscba 😊

Además de autos, trabajo hogar, comercio, vida, accidentes personales, celulares, bicis, drones y más.

¿Qué necesitás asegurar? Contame un poco y te preparo opciones de varias compañías.`,
`¡Buenas [NOMBRE]! 🙌 Gracias por escribirme.

Soy productor asesor de seguros y comparo entre muchas compañías para que encuentres lo que mejor te sirve.

Contame qué te gustaría asegurar y lo vemos juntos.`
      ]}
    ]},
    { titulo: "2do contacto", respuestas: [
      { titulo: "Seguimiento del presupuesto", textos: [
`¡Hola [NOMBRE]! ¿Cómo estás? 😊

Te escribo para saber si pudiste ver las opciones que te pasé.

Si tenés alguna duda sobre las coberturas o querés que compare con lo que tenés hoy, avisame y lo vemos juntos.`,
`¡Hola [NOMBRE]! 👋 ¿Llegaste a mirar la cotización?

Si querés, te explico en dos minutos las diferencias entre las opciones, así elegís con tranquilidad.`,
`¡Buenas [NOMBRE]! Paso a saludarte por las opciones que te envié 🙌

¿Alguna te cerró? Si querés ver otra compañía o ajustar la cobertura, decime y lo reviso.`
      ]},
      { titulo: "Faltan datos para cotizar", textos: [
`¡Hola [NOMBRE]! 👋

Para poder pasarte la cotización me falta:
• [DATO FALTANTE]

Apenas me lo pases te armo las opciones 🙌`,
`¡Hola [NOMBRE]! Ya tengo casi todo para cotizarte 😊

Solo me falta: *[DATO FALTANTE]*

Con eso te paso las opciones enseguida.`,
`[NOMBRE], estoy por armarte la cotización y me quedó un dato pendiente: [DATO FALTANTE].

¿Me lo pasás cuando puedas? 🙌`
      ]}
    ]},
    { titulo: "3er contacto", respuestas: [
      { titulo: "Último seguimiento (amable)", textos: [
`¡Hola [NOMBRE]! Te escribo una vez más por la cotización de tu [VEHÍCULO/BIEN].

Sé que a veces no hay tiempo de verlo 🙂 Si te sirve, puedo actualizarte los valores o sumar otra compañía para comparar.

¿Lo seguimos viendo?`,
`¡Hola [NOMBRE]! 👋 ¿Pudiste decidir algo con el seguro de tu [VEHÍCULO/BIEN]?

Si el precio fue lo que te frenó, contame y busco otra alternativa entre las compañías con las que trabajo.`,
`¡Buenas [NOMBRE]! Te dejo este último mensajito por la cotización 😊

Si en algún momento querés retomarlo, me escribís y en el día te paso todo actualizado.`
      ]}
    ]},
    { titulo: "Más contactos", respuestas: [
      { titulo: "Cierre: quedo a disposición", textos: [
`¡Hola [NOMBRE]! No quiero molestarte, así que te dejo mi contacto agendado 📲

Cuando necesites cotizar o tengas cualquier consulta de seguros, escribime por acá. Te atiendo de ${HORARIO}.

¡Que tengas un lindo día!
${FIRMA}`,
`¡Hola [NOMBRE]! Te agradezco el tiempo 🙌

Quedo a disposición para lo que necesites: autos, hogar, comercio, vida y más. Guardá este número así me encontrás rápido.

${FIRMA}`,
`[NOMBRE], gracias por tenerme en cuenta 😊

Cuando quieras retomar la cotización o consultar por otro seguro, acá voy a estar.

¡Saludos!
${FIRMA}`
      ]},
      { titulo: "Reactivar contacto (tiempo después)", textos: [
`¡Hola [NOMBRE]! ¿Cómo andás? Soy Gustavo, de Seguroscba 👋

Hace un tiempo hablamos por el seguro de tu [VEHÍCULO/BIEN]. Las compañías actualizaron valores y hay opciones nuevas.

¿Querés que te pase una cotización actualizada, sin compromiso?`,
`¡Hola [NOMBRE]! 😊 Te escribe Gustavo, de Seguroscba.

¿Seguís con el mismo seguro? Si querés, comparo lo que estás pagando con otras compañías y te digo si podés mejorar precio o cobertura.`,
`¡Buenas [NOMBRE]! Tanto tiempo 🙌

Estoy revisando opciones nuevas en varias compañías y me acordé de tu consulta. ¿Te paso una cotización actualizada?`
      ]}
    ]}
  ]
},
{
  titulo: "SINIESTRO", icono: "🚗",
  sub: [
    { titulo: "Carga Denuncia", respuestas: [
      { titulo: "Primer aviso: contención + pedido de datos", textos: [
`[NOMBRE], no te preocupes, te acompaño con la denuncia 🤝

Lo primero: ¿están todos bien? ¿Hubo personas lesionadas?

Para cargarla necesito que me pases:
• Fecha, hora y lugar exacto
• Cómo fue el hecho (breve relato)
• Fotos de los daños de tu vehículo
• Datos del tercero: nombre, DNI, teléfono, patente y compañía de seguro
• Foto de registro y cédula del conductor

Es importante hacer la denuncia dentro de las *72 hs* del hecho.`,
`Lamento lo que pasó [NOMBRE] 😕 Antes que nada, ¿están todos bien?

Yo me encargo de la denuncia. Mandame por acá:
📅 Día, hora y lugar
📝 Un breve relato de cómo fue
📸 Fotos de los daños
👤 Datos del otro vehículo: nombre, DNI, teléfono, patente y seguro
🪪 Registro y cédula de quien manejaba

Recordá que el plazo para denunciar es de *72 hs*.`,
`[NOMBRE], gracias por avisarme rápido 🙌 ¿Hubo heridos o fueron solo daños materiales?

Para la denuncia necesito:
• Fecha, hora y dirección del hecho
• Relato corto de lo sucedido
• Fotos de tu vehículo dañado
• Datos y seguro del tercero (con patente)
• Registro y cédula del conductor

Con eso la cargo y te paso el número de siniestro. El plazo es de *72 hs*, así que mejor no demorarlo.`
      ]},
      { titulo: "Denuncia cargada", textos: [
`[NOMBRE], listo ✅ Ya cargué la denuncia en [COMPAÑÍA].

Número de siniestro: *[N° SINIESTRO]*

Te voy avisando cada novedad. Cualquier duda, escribime por acá.`,
`¡Listo [NOMBRE]! ✅ La denuncia ya está cargada.

📌 Compañía: [COMPAÑÍA]
📌 N° de siniestro: *[N° SINIESTRO]*

Guardá este número. Yo sigo el trámite y te aviso cómo continúa.`,
`[NOMBRE], te confirmo que la denuncia quedó registrada en [COMPAÑÍA] 🙌

N° de siniestro: *[N° SINIESTRO]*

Ahora la compañía la analiza. Apenas tenga novedades, te escribo.`
      ]},
      { titulo: "Cerca del cierre / fuera de horario", textos: [
`[NOMBRE], recibí todo 👍

Como ya estamos cerca del horario de cierre, la denuncia la cargo mañana a primera hora (día hábil) y te paso el número de siniestro.

No te preocupes: está dentro del plazo.`,
`¡Gracias [NOMBRE]! Ya tengo toda la documentación 🙌

La denuncia la cargo el próximo día hábil a primera hora y te envío el número de siniestro. Estás dentro de las 72 hs.`,
`[NOMBRE], quedó todo recibido ✅

Mi horario de atención es de ${HORARIO}, así que la carga la hago el próximo día hábil temprano. Te aviso apenas esté.`
      ]},
      { titulo: "Falta documentación", textos: [
`[NOMBRE], para completar la denuncia me falta:
• [DOCUMENTO FALTANTE]

Apenas lo tenga la cargo 🙌`,
`[NOMBRE], ya tengo casi todo 👍 Solo me falta *[DOCUMENTO FALTANTE]* para poder cargar la denuncia.

¿Me lo mandás cuando puedas? Así no se nos pasa el plazo.`,
`¡Hola [NOMBRE]! Te recuerdo que para la denuncia necesito [DOCUMENTO FALTANTE] 📎

Con eso la cargo enseguida.`
      ]}
    ]},
    { titulo: "Todo Riesgo", respuestas: [
      { titulo: "Daño propio: pasos a seguir", textos: [
`[NOMBRE], te cuento cómo sigue con tu cobertura Todo Riesgo:

1️⃣ Cargamos la denuncia con fotos y relato
2️⃣ La compañía coordina la inspección del vehículo
3️⃣ Se define la reparación (taller o presupuesto)

Tené en cuenta que tu póliza tiene una *franquicia* (el monto que queda a tu cargo). Te confirmo el valor exacto según tu póliza.

Cualquier duda, acá estoy 🤝`,
`[NOMBRE], con tu Todo Riesgo el trámite es así 👇

• Primero la denuncia (yo me encargo)
• Después la inspección que pide la compañía
• Y por último la reparación

Hay una *franquicia* a tu cargo según tu póliza. Te paso el monto exacto así no tenés sorpresas.`,
`Tranqui [NOMBRE], lo vamos resolviendo paso a paso 🙌

📝 Denuncia ➜ 🔍 Inspección ➜ 🔧 Reparación

Recordá que tu póliza tiene una franquicia (lo que queda a tu cargo). Ya te confirmo cuánto es en tu caso.`
      ]},
      { titulo: "Inspección coordinada", textos: [
`[NOMBRE], la compañía ya coordinó la inspección 📋

📅 [FECHA Y HORA]
📍 [LUGAR]

Llevá registro, cédula y DNI. Cualquier cambio avisame.`,
`¡Hola [NOMBRE]! Ya tenés turno de inspección ✅

Día y hora: *[FECHA Y HORA]*
Lugar: [LUGAR]

No te olvides el registro, la cédula y el DNI.`,
`[NOMBRE], te paso los datos de la inspección 🔍

• Cuándo: [FECHA Y HORA]
• Dónde: [LUGAR]
• Qué llevar: registro, cédula y DNI

Si no podés ir, avisame y pido reprogramar.`
      ]}
    ]},
    { titulo: "Reposición", sub: [
      { titulo: "Rueda", respuestas: [
        { titulo: "Robo de rueda: qué necesito", textos: [
`[NOMBRE], lamento lo de la rueda 😕 Te ayudo con el reclamo.

Pasame:
• Denuncia policial (copia o foto)
• Fotos del vehículo donde se vea la falta de la rueda
• Fecha, hora y lugar del hecho
• Medida de la cubierta (está en el costado de la goma)

Con eso cargo la denuncia en [COMPAÑÍA] y te aviso cómo sigue la reposición según tu póliza.`,
`¡Qué mala suerte [NOMBRE]! 😕 Vamos con el trámite de la rueda.

Necesito:
🚔 Denuncia policial
📸 Fotos del auto mostrando la rueda faltante
📅 Día, hora y lugar
🔢 Medida de la cubierta

Después te confirmo cómo es la reposición según tu cobertura.`,
`[NOMBRE], para gestionar la reposición de la rueda mandame:
• La denuncia policial
• Fotos del vehículo (que se note la falta)
• Fecha, hora y lugar
• Medida de la cubierta

Con eso hago la denuncia y te cuento los pasos 🙌`
        ]}
      ]},
      { titulo: "Cristal", respuestas: [
        { titulo: "Rotura de cristal: qué necesito", textos: [
`[NOMBRE], te ayudo con el cristal 🙌

Pasame:
• Qué cristal es (parabrisas, luneta, lateral)
• Fotos del daño y una foto general del vehículo con la patente
• Fecha, hora y lugar
• Cómo pasó (piedra, robo, vandalismo…)

Si fue por robo o vandalismo, también la denuncia policial.

Con eso cargo la denuncia y te paso el proveedor/cristalería que asigna la compañía.`,
`¡Hola [NOMBRE]! Vamos con el cristal 🚗

Necesito:
🪟 Qué cristal se dañó
📸 Fotos del daño + una general con la patente
📅 Día, hora y lugar
📝 Cómo ocurrió

Si fue robo o vandalismo, sumá la denuncia policial. Después te paso a qué cristalería ir.`,
`[NOMBRE], para la reposición del cristal mandame:
• Fotos del cristal dañado y del auto con patente
• Cuál es (parabrisas, luneta o lateral)
• Fecha, lugar y cómo pasó
• Denuncia policial si hubo robo o vandalismo

Yo cargo la denuncia y te aviso el proveedor asignado 🙌`
        ]}
      ]},
      { titulo: "Cerradura", respuestas: [
        { titulo: "Cerradura forzada: qué necesito", textos: [
`[NOMBRE], te ayudo con la cerradura 🔑

Pasame:
• Fotos de la cerradura dañada y del vehículo con la patente
• Fecha, hora y lugar
• Denuncia policial si fue intento de robo
• Si faltó algo del interior, detallalo

Con eso cargo la denuncia y te aviso los pasos según tu cobertura.`,
`¡Hola [NOMBRE]! Lamento lo de la cerradura 😕

Para el trámite necesito:
📸 Fotos de la cerradura y del auto con patente
📅 Día, hora y lugar
🚔 Denuncia policial (si intentaron robar)
📝 Si se llevaron algo, contame qué

Con eso avanzo con la denuncia.`,
`[NOMBRE], para gestionar la cerradura mandame fotos del daño (con la patente visible), fecha, hora y lugar, y la denuncia policial si fue un intento de robo 🔑

Después te confirmo cómo sigue según tu póliza.`
        ]}
      ]}
    ]},
    { titulo: "Reclamo 3ro", sub: [
      { titulo: "Plazos Reclamos", respuestas: [
        { titulo: "Explicar tiempos (bajar ansiedad)", textos: [
`[NOMBRE], te cuento cómo son los tiempos del reclamo 👇

• Una vez presentado, la compañía del tercero lo analiza y puede pedir inspección o documentación extra.
• Los plazos los maneja la compañía, y suelen llevar algunas semanas.
• Yo hago el seguimiento y te aviso cada novedad, no hace falta que llames vos.

El reclamo ya está en marcha 🤝`,
`[NOMBRE], entiendo que querés resolverlo rápido 🙏

El reclamo depende de los tiempos de la compañía del tercero: primero lo analizan, después pueden pedir inspección o papeles, y recién ahí hacen la propuesta.

Yo lo sigo de cerca y te mantengo al tanto en cada paso.`,
`¡Hola [NOMBRE]! Te explico cómo viene el reclamo 📋

📝 Presentación ➜ 🔍 Análisis e inspección ➜ 💬 Propuesta de la compañía

Cada etapa lleva su tiempo y lo define la aseguradora del tercero. Yo hago el seguimiento por vos y te aviso apenas haya novedades.`
        ]},
        { titulo: "Actualización de estado", textos: [
`[NOMBRE], te actualizo el reclamo 📋

Estado: *[ESTADO]*
Próximo paso: [PRÓXIMO PASO]

Apenas haya novedades te escribo.`,
`¡Hola [NOMBRE]! Novedades de tu reclamo 🙌

📌 Ahora está en: [ESTADO]
➡️ Lo que sigue: [PRÓXIMO PASO]

Te sigo informando.`,
`[NOMBRE], te paso cómo va el reclamo:
• Situación actual: [ESTADO]
• Siguiente paso: [PRÓXIMO PASO]

Cualquier consulta, escribime 🤝`
        ]}
      ]},
      { titulo: "Cía 3ro", respuestas: [
        { titulo: "Pedir datos del seguro del tercero", textos: [
`[NOMBRE], para iniciar el reclamo a la compañía del tercero necesito:
• Nombre de la compañía de seguro del tercero
• N° de póliza (si lo tenés)
• Patente del vehículo
• Nombre, DNI y teléfono del conductor
• Foto del registro y la cédula del tercero (si los tenés)

Si no tenés algún dato, pasame lo que tengas y vemos cómo conseguirlo 🙌`,
`¡Hola [NOMBRE]! Para reclamarle a la compañía del otro vehículo necesito:

🏢 Compañía de seguro
📄 N° de póliza (si lo tenés)
🚗 Patente
👤 Nombre, DNI y teléfono de quien manejaba
🪪 Registro y cédula (si te los pasó)

Mandame lo que tengas y yo completo el resto.`,
`[NOMBRE], vamos con el reclamo al tercero 🤝

Pasame los datos que te dio: compañía de seguro, póliza, patente, nombre, DNI y teléfono del conductor. Si sacaste foto del registro o la cédula, mejor todavía.`
        ]},
        { titulo: "Tercero sin seguro / no da datos", textos: [
`[NOMBRE], si el tercero no te pasa los datos del seguro, no te preocupes.

Pasame la *patente* y lo que tengas (fotos, testigos, lugar exacto) y vemos los pasos a seguir para tu reclamo.`,
`[NOMBRE], tranqui: aunque el otro conductor no te haya dado los datos, la *patente* es lo más importante 🚗

Mandame la patente, fotos y si hubo testigos, y analizamos cómo seguir.`,
`¡Hola [NOMBRE]! Si no conseguiste los datos del seguro del tercero, con la patente, fotos del lugar y testigos (si hubo) podemos avanzar 🙌

Pasame lo que tengas y te digo los pasos.`
        ]}
      ]}
    ]}
  ]
},
{
  titulo: "FOTOS INSPECCIÓN", icono: "📸",
  sub: [
    { titulo: "1er pedido", respuestas: [
      { titulo: "Pedido de fotos", textos: [
`[NOMBRE], para completar tu póliza la compañía necesita las fotos de inspección del vehículo 📸

Sacalas de día, con buena luz y el auto limpio:
• Frente y parte trasera (que se vea la patente)
• Lateral izquierdo y lateral derecho
• Las 4 esquinas en diagonal
• Tablero encendido (que se vea el kilometraje)
• Rueda de auxilio
• Equipo de GNC y oblea (si tiene)

Mandámelas por acá 🙌`,
`¡Hola [NOMBRE]! 👋 Ya casi está tu póliza. Solo faltan las fotos de inspección 📸

Te dejo la lista:
1. Frente con patente
2. Parte trasera con patente
3. Ambos laterales
4. Las 4 esquinas en diagonal
5. Tablero encendido con los km
6. Rueda de auxilio
7. GNC y oblea (si tiene)

Tip: de día y con el auto limpio salen mejor 😉`,
`[NOMBRE], para que la compañía complete tu póliza necesito estas fotos del vehículo 📸

🚗 Frente, trasera y ambos costados
↗️ Las 4 diagonales
⏱️ Tablero con el kilometraje
🛞 Rueda de auxilio
⛽ GNC y oblea (si corresponde)

Con luz natural y que se vea bien la patente. ¡Gracias!`
      ]}
    ]},
    { titulo: "2do pedido", respuestas: [
      { titulo: "Recordatorio", textos: [
`¡Hola [NOMBRE]! 👋 Te recuerdo las fotos de inspección de tu vehículo.

Son necesarias para que la compañía deje tu póliza completa. Con el celular se sacan en 5 minutos 📸

Cualquier duda de cómo sacarlas, avisame.`,
`[NOMBRE], ¿cómo estás? 😊 Todavía me faltan las fotos de inspección del auto.

Es un trámite rápido y es requisito de la compañía. ¿Te parece si las sacás hoy o mañana?`,
`¡Hola [NOMBRE]! Paso a recordarte las fotos del vehículo para la inspección 📸

Si querés te reenvío la lista de qué fotos sacar.`
      ]}
    ]},
    { titulo: "3er pedido", respuestas: [
      { titulo: "Último aviso (firme y amable)", textos: [
`[NOMBRE], te escribo por última vez por las fotos de inspección 📸

Es importante que las envíes cuanto antes: sin la inspección, la compañía no puede completar tu póliza y podrías tener problemas si llegás a necesitar la cobertura.

¿Te viene bien sacarlas hoy? Si se te complica, avisame y buscamos la forma 🤝`,
`[NOMBRE], necesito que me ayudes con esto 🙏

Las fotos de inspección siguen pendientes y son obligatorias para la compañía. Sin ellas tu póliza queda incompleta, y no quiero que tengas un inconveniente si pasa algo.

¿Las podés mandar hoy?`,
`¡Hola [NOMBRE]! Último recordatorio de las fotos de inspección ⚠️

Sin la inspección, la compañía no completa tu póliza. Es un trámite de 5 minutos con el celular y te evita problemas a futuro.

Si necesitás ayuda para sacarlas, avisame y te guío 🤝`
      ]}
    ]}
  ]
}
];
