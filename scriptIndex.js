
const filters = document.querySelectorAll(".main__chip")
const colorMode = document.querySelector(".toggle__btn")
const body = document.body
const toggleLeft = document.querySelector(".toggle__left")
const toggleRight = document.querySelector(".toggle__right")
const cardContainer = document.querySelector(".cards__container")




function filterSelected (event) {
    filters.forEach(filter => {
        filter.setAttribute("aria-pressed", "false")
    })
    event.target.setAttribute("aria-pressed","true")
}

filters.forEach(filter => {
    filter.addEventListener("click", filterSelected)
})

colorMode.addEventListener("click", () => {
    const modoActual = localStorage.getItem("theme")
    if (modoActual === "light") {
        body.classList.remove("lightMode")
        toggleRight.classList.add("hidden")
        toggleLeft.classList.remove("hidden")
        localStorage.setItem("theme","dark")

    } else {
        body.classList.add("lightMode")
        toggleRight.classList.remove("hidden")
        toggleLeft.classList.add("hidden")
        localStorage.setItem("theme","light")
    }
})



const posts = [
    {
        id:1,
        title:"Arte en el tiempo",
        subtitle : "Un viaje a través del tiempo",
        author:"Juan Valdés",
        category:"Arte",
        time:"5 min",
        date:"23/06/24",
        img:"/Assets/img1.jpg",
        resume: "El arte es una de las expresiones más profundas de la humanidad, reflejando emociones, ideas y culturas a lo largo de la historia. Desde las pinturas rupestres hasta las vanguardias contemporáneas, cada movimiento artístico ha dejado una huella única en nuestra percepción del mundo. En este artículo exploramos la evolución del arte y su impacto en la sociedad.",
        content:"El arte ha sido, desde tiempos inmemoriales, un lenguaje universal capaz de transmitir emociones, contar historias y representar la realidad desde diversas perspectivas. Su evolución a lo largo de la historia ha estado marcada por cambios culturales, sociales y tecnológicos, convirtiéndolo en un reflejo de cada época.Desde las primeras pinturas rupestres encontradas en cuevas prehistóricas, donde los humanos primitivos representaban su entorno y sus creencias, hasta las esculturas y frescos de la Antigua Grecia y Roma, el arte siempre ha servido como una ventana a la mentalidad de su tiempo. Durante la Edad Media, el arte estuvo fuertemente influenciado por la religión, dando lugar a majestuosas catedrales góticas y detalladas iluminaciones en manuscritos. El Renacimiento trajo consigo una revolución en la manera de concebir el arte, con maestros como Leonardo da Vinci y Miguel Ángel explorando la anatomía humana, la perspectiva y el realismo. Este periodo fue seguido por el Barroco y el Rococó, estilos que jugaron con el dramatismo y la ornamentación para evocar emociones más intensas.Con la llegada del siglo XIX y XX, el arte tomó caminos inesperados.",
        content2:" Movimientos como el Impresionismo, el Cubismo, el Surrealismo y el Expresionismo rompieron con las reglas tradicionales, permitiendo que los artistas exploraran nuevas formas de expresión. Picasso, Dalí, Van Gogh y muchos otros se convirtieron en símbolos de una era en la que la subjetividad y la innovación eran clave.Hoy en día, el arte continúa evolucionando con el uso de nuevas tecnologías, como el arte digital y el NFT, que han abierto caminos nunca antes imaginados. Desde las galerías tradicionales hasta las exposiciones virtuales, el arte sigue siendo un testimonio de la creatividad humana y una forma de conectar con nuestras emociones y con el mundo que nos rodea. El arte no solo embellece nuestra vida, sino que también nos invita a reflexionar, a cuestionar y a soñar. Es, sin duda, un pilar fundamental de nuestra existencia.",
        textbold:"\"El arte sigue siendo un testimonio de la creatividad humana\"",
        
    },

    {
        id: 2,
        title: "El impacto del Impresionismo en la pintura",
        subtitle: "Un vistazo a cómo cambió la percepción del arte",
        author: "Carlos Gómez",
        category: "Arte",
        time: "5 min",
        date: "15/03/25",
        img: "/Assets/img2.jpg",
        resume:"El Impresionismo rompió con las tradiciones establecidas y trajo consigo una nueva forma de ver el mundo.",
        content: "A finales del siglo XIX, un grupo de pintores franceses comenzó a desafiar las normas tradicionales de la pintura. En lugar de representar escenas de forma realista y con detalles minuciosos, los impresionistas buscaban capturar la luz, el color y la atmósfera del momento. Este cambio de enfoque fue visto como radical en su época, ya que rompía con las reglas de la pintura académica tradicional.Claude Monet, Edgar Degas, Pierre-Auguste Renoir y Camille Pissarro fueron algunos de los grandes maestros de este movimiento. Mientras que los artistas anteriores trataban de replicar la realidad de forma fiel, los impresionistas se centraron en la percepción visual de los sujetos, utilizando colores brillantes y pinceladas rápidas. En lugar de detalles finos, los impresionistas emplearon pinceladas rápidas para dar una sensación de movimiento y vida.Las obras de Monet, como “Impresión, sol naciente”, fueron clave para definir el movimiento, y la pintura de este título fue la que inspiró el nombre de Impresionismo. En lugar de una imagen precisa y nítida, Monet capturaba un momento fugaz de luz y atmósfera. El Impresionismo no solo cambió el arte, sino también la forma en que percibimos el mundo. La luz y el color se convirtieron en los principales protagonistas de las obras. Los impresionistas no solo se centraron en la representación de la luz natural, sino que también exploraron cómo la luz transformaba los colores, creando efectos de sombras y reflejos que revolucionaron la pintura. Este cambio de enfoque fue una ruptura con la tradición, pero al mismo tiempo, abrió la puerta a nuevas formas de expresión.Hoy en día, el Impresionismo sigue siendo una de las formas de arte más admiradas y estudiadas, y su influencia sigue viva en la pintura moderna y en otras formas de arte.",
        content2: "El Impresionismo fue el principio de una nueva era en el arte, donde la percepción subjetiva y las emociones jugaron un papel fundamental. La pintura ya no solo era un medio para imitar la naturaleza, sino una forma de expresar lo que el artista veía y sentía. Los impresionistas no solo rompieron con la tradición en términos de técnica, sino también en su elección de temas. Pintaron escenas cotidianas, paisajes, personas y lugares que antes se consideraban triviales o irrelevantes para la pintura académica.Este enfoque más libre y accesible hizo que el Impresionismo fuera inicialmente rechazado por muchos críticos, pero con el tiempo, la belleza de estas obras fue reconocida por su capacidad de capturar la esencia de un momento en el tiempo. La técnica impresionista, con sus pinceladas rápidas y colores vibrantes, sigue siendo una de las más influyentes de la historia del arte.",
        textbold: "\"La luz como protagonista del arte\""
    },

    {
        id: 3,
        title: "El Renacimiento de la Música Clásica",
        subtitle: "Cómo la música clásica sigue cautivando al mundo moderno",
        author: "Laura Martín",
        category: "Música",
        time: "6 min",
        date: "17/03/25",
        img: "/Assets/img3.jpg",
        resume: "La música clásica, aunque antigua, sigue teniendo un impacto profundo en la cultura y la emoción humana.",
        content: "La música clásica es considerada una de las formas más refinadas de arte. Aunque pertenece a épocas pasadas, su influencia sigue siendo un pilar en la cultura musical global. Los compositores clásicos como Beethoven, Mozart, Bach y Tchaikovsky han dejado una marca indeleble en la historia de la música. Las composiciones de estos genios continúan siendo interpretadas en grandes salas de conciertos alrededor del mundo, y sus melodías resuenan con fuerza tanto en los conciertos como en las películas contemporáneas.Lo que hace que la música clásica sea tan relevante hoy en día es su capacidad de emocionar y conectar con la audiencia. Las obras clásicas son complejas y profundas, lo que permite una interpretación única en cada ejecución. Además, la música clásica ha servido como un modelo para otros géneros musicales, influyendo en la composición de música de cine, jazz e incluso en la música pop.Las orquestas sinfónicas y los coros siguen siendo lugares en los que se celebran estas composiciones, y se espera que las generaciones venideras continúen apreciando estas obras maestras. La música clásica no solo se disfruta por su belleza, sino también por su capacidad para evocar emociones humanas profundas y universales.Más allá de su elegancia y belleza, la música clásica también fue clave para el desarrollo de la teoría musical moderna. Compositores como Johann Sebastian Bach no solo fueron pioneros en términos de estilo, sino que también perfeccionaron las estructuras y técnicas musicales que se utilizan hasta hoy.Por último, la música clásica sigue siendo una herramienta educativa fundamental. Las composiciones clásicas se enseñan en escuelas de música y universidades de todo el mundo, y las técnicas de interpretación y análisis musical que se enseñan están profundamente influenciadas por las estructuras clásicas.",
        textbold: "\"Una influencia que perdura\"",
        content2: "Las composiciones clásicas, además de su estética, siguen siendo un instrumento poderoso para el aprendizaje y la exploración del alma humana. La complejidad de las sinfonías de Beethoven o la delicadeza de las piezas de Chopin siguen siendo una fuente de inspiración para generaciones de compositores y músicos. La música clásica también es terapéutica, ayudando en procesos de relajación, meditación y concentración. De hecho, muchos estudios han demostrado que la música clásica puede tener un impacto positivo en la cognición, lo que explica su continua popularidad tanto en el ámbito académico como en la vida cotidiana."
      },

      {
        id: 4,
        title: "La Revolución del Rock en los años 60",
        subtitle: "El nacimiento de una nueva era musical",
        author: "Miguel Sánchez",
        category: "Música",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img4.jpg",
        resume: "Los años 60 fueron clave para el cambio en la música, trayendo consigo el poder del rock y su capacidad para transformar la cultura.",
        content: "La década de 1960 fue testigo de una revolución musical sin precedentes. Con el surgimiento de bandas como The Beatles, The Rolling Stones, y Jimi Hendrix, el rock pasó de ser un género marginal a convertirse en un fenómeno global que transformó por completo la cultura musical. Los años 60 fueron una época de agitación social y política, y la música fue el reflejo perfecto de ese cambio. El rock and roll de los primeros años 50 había sentado las bases, pero fue en los 60 cuando este género experimentó una transformación radical. The Beatles, por ejemplo, no solo cambiaron el estilo musical, sino también la forma en que se veía a los músicos. Su capacidad para innovar, experimentar y fusionar diferentes estilos les permitió no solo marcar la década, sino también influir en generaciones de músicos. Con álbumes como Sgt. Pepper's Lonely Hearts Club Band, la banda británica trajo una nueva forma de experimentar la música, llevando la producción a nuevas alturas y desafiando las convenciones del rock clásico. Jimi Hendrix, por su parte, revolucionó la guitarra eléctrica, utilizando efectos y técnicas que no solo marcaron una época, sino que todavía influyen en la música moderna. Su estilo innovador y su actitud desafiantes fueron emblemáticos de una generación que estaba cambiando el mundo. El rock de los años 60 no solo cambió la música, sino que también reflejó los cambios sociales que estaban ocurriendo en ese momento. La música se convirtió en un vehículo de expresión para las preocupaciones y aspiraciones de la juventud. Movimientos como el amor libre, los derechos civiles y la paz encontraron su eco en las letras de canciones que hablaron de revolución, libertad y justicia. Con su influencia en la cultura juvenil y su capacidad para conectar con un público global, el rock de los años 60 sigue siendo considerado como uno de los movimientos más importantes en la historia de la música popular.",
        textbold: "\"La música como forma de protesta\"",
        contentsec: "Aunque el rock de los años 60 se diversificó y evolucionó en diferentes subgéneros, su influencia sigue viva hoy en la música moderna. Bandas como Nirvana, U2, y Radiohead siguen llevando el legado del rock clásico, pero con un enfoque contemporáneo. Así, el impacto de la década de 1960 sigue siendo palpable en todos los géneros musicales que han surgido desde entonces. El rock no solo cambió la música, sino también la forma en que las personas piensan sobre la cultura, la política y la identidad."
      },

      {
        id: 5,
        title: "La magia de la literatura fantástica",
        subtitle: "La fantasía no tiene límites.",
        author: "Miguel Sánchez",
        category: "Libros",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img5.jpg",
        resume: "La literatura fantástica transporta a los lectores a mundos imaginarios, donde todo es posible. Este género ha cautivado a generaciones de lectores por su capacidad de crear universos complejos y emocionales.",
        content: "La literatura fantástica ha sido un pilar de la ficción desde los primeros relatos orales, y sigue siendo uno de los géneros más queridos hoy en día. A través de la magia, los seres mitológicos y los mundos imaginarios, este tipo de literatura permite explorar lo imposible y lo extraordinario, lo cual es fascinante para lectores de todas las edades. Uno de los grandes exponentes del género es J.R.R. Tolkien, cuyo El Señor de los Anillos no solo definió la fantasía moderna, sino que también influyó profundamente en la literatura popular. La creación de mundos completos, con su propia historia, idiomas y culturas, llevó la narrativa fantástica a un nivel completamente nuevo. Tolkien no fue el único en capturar la imaginación de los lectores. Escritores como C.S. Lewis, J.K. Rowling y George R.R. Martin también han dejado una huella indeleble con sus mundos ricos y complejos, personajes inolvidables y tramas épicas. La saga de Harry Potter es un claro ejemplo de cómo un mundo de fantasía puede conectar emocionalmente con lectores de todo el mundo, y cómo los temas universales como la amistad, la valentía y el sacrificio se abordan con magia y criaturas fantásticas. Lo fascinante de la literatura fantástica es su capacidad para ofrecer una escapatoria mientras trata temas profundamente humanos. A través de héroes y villanos, monstruos y magia, se exploran los dilemas más grandes de la existencia humana: el bien frente al mal, el destino frente a la libertad, la guerra, el amor, la muerte y la esperanza. Este género también se caracteriza por sus mundos increíblemente detallados, con un enfoque en la construcción de la atmósfera, los sistemas de magia y la creación de criaturas fantásticas que enriquecen la historia. Además, las historias de fantasía nos invitan a cuestionar la realidad y a imaginar lo impensable, lo que las hace perfectas para quienes buscan algo más allá de lo cotidiano.",
        textbold: "\"Un universo más allá de lo posible\"",
        content2: "La literatura fantástica también invita a los lectores a reflexionar sobre la condición humana a través de la metáfora. Los relatos de magia pueden ser una representación de nuestros propios desafíos, miedos y esperanzas. Es un género que permite a los lectores experimentar grandes emociones a través de la lucha de los personajes en mundos llenos de obstáculos y maravillas. Así, lo fantástico se convierte en un espejo de nuestra propia realidad, mostrándonos que, al final, siempre hay algo mágico en cada uno de nosotros."
      },

      {
        id: 6,
        title: "El impacto de los clásicos en la literatura moderna",
        subtitle: "La fantasía no tiene límites.",
        author: "Miguel Sánchez",
        category: "Libros",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img6.jpg",
        resume: "La literatura clásica ha marcado el camino para las obras contemporáneas. Desde los griegos hasta el siglo XIX, las grandes obras han establecido una base sólida sobre la que las obras modernas se apoyan.",
        content: "Los grandes clásicos de la literatura siguen siendo la columna vertebral sobre la que se edifica la literatura moderna. Autores como Homero, William Shakespeare, Victor Hugo y Fiódor Dostoyevski crearon historias que no solo definieron épocas, sino que ofrecieron una visión profunda de la naturaleza humana. La Ilíada y La Odisea de Homero, por ejemplo, no solo son mitos fundacionales de la literatura occidental, sino que también abordan temas como el honor, la valentía, la venganza y el destino, que siguen siendo relevantes hoy en día. A lo largo de la historia, estos temas han sido adaptados y reinterpretados por innumerables autores, lo que demuestra la trascendencia de estos clásicos. William Shakespeare, por su parte, cambió la forma de entender el teatro y la narrativa con obras como Hamlet, Romeo y Julieta y Macbeth. A través de sus personajes complejos y sus tramas universales, Shakespeare introdujo temas sobre el amor, el poder, la traición y la moralidad que siguen siendo fundamentales en las narrativas contemporáneas. El siglo XIX también fue testigo de algunos de los mayores logros literarios, con autores como Charles Dickens, Leo Tolstoy y Mary Shelley. Matar a un ruiseñor, de Harper Lee, o 1984 de George Orwell, tienen en común la influencia de los clásicos, ya que exploran temas sobre la injusticia, el totalitarismo y la moralidad.Lo más interesante de los clásicos es su capacidad para seguir siendo relevantes y adaptables a lo largo del tiempo. Aunque la sociedad ha cambiado, las preguntas y los dilemas que plantean estas obras siguen siendo los mismos. La literatura clásica no solo fue un reflejo de su tiempo, sino una ventana al alma humana que ha resistido la prueba del tiempo.",
        textbold: "\"El legado de los grandes autores\"",
        content2: "Muchos de los escritores contemporáneos que admiramos hoy deben mucho a los grandes clásicos. Las estructuras narrativas, los arquetipos de personajes y los temas universales siguen vivos en las novelas modernas. Además, los clásicos sirven como una forma de puente entre generaciones, conectando a los lectores de hoy con aquellos del pasado. La lectura de estos libros es esencial no solo para los amantes de la literatura, sino para cualquier persona interesada en entender las raíces de nuestra cultura y los dilemas humanos más profundos."

      },

      {
        id: 7,
        title: "El poder de la meditación para reducir el estrés",
        subtitle: "La meditación está al alcance de todos.",
        author: "Miguel Sánchez",
        category: "Salud",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img7.jpg",
        resume: "La meditación se ha convertido en una herramienta popular para reducir el estrés y mejorar el bienestar emocional. Exploramos cómo la práctica diaria puede transformar nuestra vida.",
        content: "La meditación ha sido practicada por miles de años en diversas culturas, pero en la sociedad moderna ha adquirido una nueva relevancia debido a su capacidad para combatir el estrés y mejorar la salud mental. El ritmo acelerado de la vida moderna puede generar ansiedad y tensión, y la meditación ofrece una vía para desconectar de este estrés. El proceso de meditar implica centrarse en la respiración, liberar la mente de pensamientos intrusivos y lograr un estado de calma mental. Este tipo de práctica no solo ayuda a reducir el estrés, sino que también mejora la concentración, la creatividad y el bienestar emocional. Diversos estudios científicos han demostrado que la meditación regular puede reducir la actividad en las áreas del cerebro asociadas con el estrés y la ansiedad, lo que permite una mayor sensación de paz interior. Una de las formas más populares de meditación es la meditación mindfulness, que se centra en estar presente en el momento y ser consciente de las sensaciones físicas y emocionales sin juzgarlas. Este enfoque no solo reduce el estrés, sino que también promueve una mayor aceptación y comprensión de uno mismo. Además, la meditación puede ser un excelente complemento para el ejercicio físico y otras prácticas de autocuidado. Si bien el ejercicio puede aliviar temporalmente el estrés, la meditación trabaja de manera profunda y sostenida, permitiendo que el cuerpo y la mente se calmen de manera integral. Es importante destacar que la meditación no es solo para aquellos que buscan reducir el estrés, sino también para quienes desean mejorar su bienestar general, encontrar claridad mental o explorar un camino hacia el autoconocimiento. En la sociedad moderna, la meditación ofrece una herramienta accesible y efectiva para encontrar equilibrio.",
        textbold: "\"La mente en calma, el cuerpo en paz\"",
        content2: "La meditación no solo es una práctica mental, sino que también tiene beneficios físicos. Se ha demostrado que reduce la presión arterial, mejora el sueño y fortalece el sistema inmunológico. Al integrar la meditación en nuestra rutina diaria, podemos experimentar una mayor sensación de bienestar físico y emocional, convirtiéndola en una herramienta poderosa para llevar una vida más saludable y equilibrada."

      },

      {
        id: 8,
        title: "Alimentación consciente: cómo transformar tu relación con la comida",
        subtitle: "Alimentación sana que cura.",
        author: "Miguel Sánchez",
        category: "Salud",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img8.jpg",
        resume: "La alimentación consciente es una práctica que implica prestar atención plena a lo que comemos, cómo lo comemos y cómo nos hace sentir. Esta práctica mejora nuestra relación con la comida y promueve una mejor salud.",
        content: "La alimentación consciente es un enfoque que nos invita a dejar de lado las distracciones y a prestar atención plena a nuestra experiencia al comer. En lugar de comer de forma automática o impulsiva, la alimentación consciente nos anima a disfrutar de cada bocado, reflexionar sobre los alimentos que elegimos y ser conscientes de cómo nos afectan tanto física como emocionalmente. Este enfoque se basa en la idea de que muchas veces comemos sin pensar, lo que puede llevar a comer en exceso, elegir alimentos poco saludables o simplemente no disfrutar de la comida. Al practicar la alimentación consciente, aprendemos a sintonizar con nuestras señales de hambre y saciedad, y a hacer elecciones más saludables basadas en lo que realmente necesitamos, no en lo que creemos que debemos comer. Una parte importante de la alimentación consciente es prestar atención a la textura, el sabor y el olor de la comida, y comer despacio para saborear cada bocado. Este enfoque no solo mejora la digestión, sino que también puede ayudarnos a reconocer patrones de comida emocional o impulsiva. Al ser conscientes de cómo nos sentimos mientras comemos, podemos empezar a hacer elecciones más equilibradas y saludables. La alimentación consciente también nos ayuda a alejarnos de las dietas restrictivas y las obsesiones con el peso, y en su lugar nos enseña a cultivar una relación más saludable y equilibrada con la comida. Este enfoque también puede ayudar a reducir el estrés relacionado con la comida y mejorar la autoestima, ya que nos permite disfrutar de la comida sin culpa.",
        textbold: "\"Comer con propósito y presencia\"",
        content2: "Al practicar la alimentación consciente, muchas personas han notado una mayor satisfacción con las comidas y una mayor conciencia de sus hábitos alimenticios. No se trata solo de hacer elecciones saludables, sino también de disfrutar de la comida sin distracciones, saboreando cada momento. Esta práctica puede tener un impacto profundo en nuestra salud física, emocional y mental, ayudándonos a transformar nuestra relación con la comida de manera positiva y duradera."

      },

      {
        id: 9,
        title: "El impacto de los árboles en nuestro ecosistema",
        subtitle: "Alimentación sana que cura.",
        author: "Miguel Sánchez",
        category: "Naturaleza",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img9.jpg",
        resume: "Los árboles son mucho más que simples plantas. Son esenciales para la vida en la Tierra. Este artículo explora cómo los árboles afectan el clima, la biodiversidad y nuestra calidad de vida.",
        content: "Los árboles son el pulmón de nuestro planeta. A través de la fotosíntesis, convierten el dióxido de carbono en oxígeno, lo que resulta fundamental para mantener la calidad del aire. Además, son cruciales en la regulación del clima, ya que absorben grandes cantidades de carbono y ayudan a reducir la temperatura global. El impacto de los árboles va más allá de su capacidad para producir oxígeno. Son la base de muchos ecosistemas, proporcionando hábitats para una amplia variedad de especies. Bosques enteros son el hogar de cientos de animales y plantas, algunas de las cuales no se encuentran en ningún otro lugar del planeta. Los árboles también juegan un papel importante en la conservación del agua. Sus raíces ayudan a filtrar y retener el agua, evitando la erosión del suelo y mejorando la calidad del agua en ríos y lagos. Sin árboles, las lluvias intensas pueden provocar inundaciones devastadoras y la desertificación de grandes áreas de tierra. La deforestación, impulsada por la urbanización, la agricultura y la industria maderera, está destruyendo estos vitales ecosistemas. Cada año, millones de hectáreas de bosques desaparecen, lo que agrava la crisis climática y pone en peligro la biodiversidad. Es crucial tomar conciencia del papel fundamental que los árboles juegan en nuestra vida cotidiana y adoptar prácticas más sostenibles que fomenten su protección. Desde plantar árboles hasta apoyar iniciativas para la conservación de bosques, cada acción cuenta para asegurar un futuro más verde y saludable.",
        textbold: "\"Los árboles: guardianes de la Tierra\"",
        content2: "Afortunadamente, muchas organizaciones están trabajando en proyectos de reforestación que buscan restaurar los bosques perdidos y proteger los que aún existen. Además, diversas ciudades están implementando políticas urbanas para aumentar la cantidad de áreas verdes y promover la plantación de árboles en espacios públicos. Si cada persona pudiera plantar al menos un árbol en su vida, el impacto global sería significativo."

      },

      {
        id: 9,
        title: "El impacto de los árboles en nuestro ecosistema",
        subtitle: "Alimentación sana que cura.",
        author: "Miguel Sánchez",
        category: "Naturaleza",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img9.jpg",
        resume: "Los árboles son mucho más que simples plantas. Son esenciales para la vida en la Tierra. Este artículo explora cómo los árboles afectan el clima, la biodiversidad y nuestra calidad de vida.",
        content: "Los árboles son el pulmón de nuestro planeta. A través de la fotosíntesis, convierten el dióxido de carbono en oxígeno, lo que resulta fundamental para mantener la calidad del aire. Además, son cruciales en la regulación del clima, ya que absorben grandes cantidades de carbono y ayudan a reducir la temperatura global. El impacto de los árboles va más allá de su capacidad para producir oxígeno. Son la base de muchos ecosistemas, proporcionando hábitats para una amplia variedad de especies. Bosques enteros son el hogar de cientos de animales y plantas, algunas de las cuales no se encuentran en ningún otro lugar del planeta. Los árboles también juegan un papel importante en la conservación del agua. Sus raíces ayudan a filtrar y retener el agua, evitando la erosión del suelo y mejorando la calidad del agua en ríos y lagos. Sin árboles, las lluvias intensas pueden provocar inundaciones devastadoras y la desertificación de grandes áreas de tierra. La deforestación, impulsada por la urbanización, la agricultura y la industria maderera, está destruyendo estos vitales ecosistemas. Cada año, millones de hectáreas de bosques desaparecen, lo que agrava la crisis climática y pone en peligro la biodiversidad. Es crucial tomar conciencia del papel fundamental que los árboles juegan en nuestra vida cotidiana y adoptar prácticas más sostenibles que fomenten su protección. Desde plantar árboles hasta apoyar iniciativas para la conservación de bosques, cada acción cuenta para asegurar un futuro más verde y saludable.",
        textbold: "\"Los árboles: guardianes de la Tierra\"",
        content2: "Afortunadamente, muchas organizaciones están trabajando en proyectos de reforestación que buscan restaurar los bosques perdidos y proteger los que aún existen. Además, diversas ciudades están implementando políticas urbanas para aumentar la cantidad de áreas verdes y promover la plantación de árboles en espacios públicos. Si cada persona pudiera plantar al menos un árbol en su vida, el impacto global sería significativo."

      },

      {
        id: 10,
        title: "La importancia de la biodiversidad y cómo protegerla",
        subtitle: "La biodiversidad es clave para el equilibrio del planeta",
        author: "Miguel Sánchez",
        category: "Naturaleza",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img10.jpg",
        resume: "Este artículo profundiza en su importancia, las amenazas que enfrenta y cómo podemos protegerla.",
        content: "La biodiversidad es la variedad de vida que existe en la Tierra, desde los microorganismos más pequeños hasta los grandes mamíferos. Esta diversidad es esencial para el funcionamiento saludable de los ecosistemas, ya que cada especie juega un papel específico en el equilibrio natural. La biodiversidad contribuye a la estabilidad de los ecosistemas, lo que a su vez asegura el suministro de recursos esenciales para la vida humana, como alimentos, agua limpia y medicamentos. Además, los ecosistemas biodiversos son más resilientes a los cambios, como el cambio climático y las catástrofes naturales. Sin embargo, la biodiversidad está en grave peligro debido a la actividad humana. La deforestación, la contaminación, el cambio climático y la sobreexplotación de los recursos naturales están amenazando a muchas especies. Cada vez más animales y plantas están en peligro de extinción, y muchos ecosistemas están colapsando. Es crucial que tomemos medidas para proteger la biodiversidad. Esto incluye la creación de áreas protegidas, la lucha contra la deforestación, la promoción de prácticas agrícolas y pesqueras sostenibles, y la reducción de las emisiones de gases de efecto invernadero. Además, todos podemos contribuir a la protección de la biodiversidad mediante nuestras decisiones diarias, como reducir el consumo de plásticos, apoyar productos ecológicos y educar a las nuevas generaciones sobre la importancia de cuidar nuestro entorno. La biodiversidad no solo es valiosa por su belleza, sino también por su impacto directo en nuestra supervivencia. Sin ella, los ecosistemas se desestabilizarían, y la humanidad perdería los recursos esenciales para su bienestar.",
        textbold: "\"La vida en la Tierra depende de la biodiversidad\"",
        content2: "La creación de corredores ecológicos y la restauración de hábitats naturales son algunos de los métodos más efectivos para preservar la biodiversidad. Además, iniciativas de conservación comunitaria y programas de educación ambiental pueden marcar una diferencia significativa en la lucha por la preservación de la naturaleza."

      },

      {
        id: 11,
        title: "Consejos para mantener una piel saludable durante todo el año",
        subtitle: "El cuidado de la piel es esencial para mantenerla saludable y radiante",
        author: "Miguel Sánchez",
        category: "Belleza",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img11.jpg",
        resume: "El cuidado de la piel es esencial para mantenerla saludable y radiante. Aquí te damos algunos consejos para cuidar tu piel durante todo el año y adaptarte a las estaciones.",
        content: "La biodiversidad es la variedad de vida que existe en la Tierra, desde los microorganismos más pequeños hasta los grandes mamíferos. Esta diversidad es esencial para el funcionamiento saludable de los ecosistemas, ya que cada especie juega un papel específico en el equilibrio natural. La biodiversidad contribuye a la estabilidad de los ecosistemas, lo que a su vez asegura el suministro de recursos esenciales para la vida humana, como alimentos, agua limpia y medicamentos. Además, los ecosistemas biodiversos son más resilientes a los cambios, como el cambio climático y las catástrofes naturales. Sin embargo, la biodiversidad está en grave peligro debido a la actividad humana. La deforestación, la contaminación, el cambio climático y la sobreexplotación de los recursos naturales están amenazando a muchas especies. Cada vez más animales y plantas están en peligro de extinción, y muchos ecosistemas están colapsando. Es crucial que tomemos medidas para proteger la biodiversidad. Esto incluye la creación de áreas protegidas, la lucha contra la deforestación, la promoción de prácticas agrícolas y pesqueras sostenibles, y la reducción de las emisiones de gases de efecto invernadero. Además, todos podemos contribuir a la protección de la biodiversidad mediante nuestras decisiones diarias, como reducir el consumo de plásticos, apoyar productos ecológicos y educar a las nuevas generaciones sobre la importancia de cuidar nuestro entorno. La biodiversidad no solo es valiosa por su belleza, sino también por su impacto directo en nuestra supervivencia. Sin ella, los ecosistemas se desestabilizarían, y la humanidad perdería los recursos esenciales para su bienestar.",
        textbold: "\"El cuidado constante es la clave para una piel radiante\"",
        content2: "La hidratación y la protección solar son dos de los pilares más importantes del cuidado de la piel. Asegúrate de usar productos que se adapten a tu tipo de piel y de consultar con un dermatólogo si tienes dudas sobre qué productos utilizar. Cuidar la piel es una inversión en salud y bienestar que puede tener resultados notables con el tiempo."

      },

      {
        id: 12,
        title: "Maquillaje natural: cómo resaltar tu belleza sin esfuerzo",
        subtitle: "El cuidado de la piel es esencial para mantenerla saludable y radiante",
        author: "Miguel Sánchez",
        category: "Belleza",
        time: "8 min",
        date: "18/03/25",
        img: "/Assets/img12.jpg",
        resume: "El maquillaje natural es perfecto para quienes buscan un look fresco y luminoso. Aquí te enseñamos algunos consejos para lograr un maquillaje sencillo pero efectivo.",
        content: "El maquillaje natural ha ganado mucha popularidad en los últimos años, ya que se enfoca en resaltar la belleza de la piel y los rasgos faciales sin recargar el rostro con demasiados productos. Este look se basa en lograr un acabado fresco, luminoso y natural, ideal para el día a día. Para comenzar, es fundamental contar con una piel bien hidratada. Utiliza una crema hidratante ligera antes de aplicar cualquier producto, y si tu piel lo necesita, opta por un primer que suavice la textura de la piel y reduzca el brillo. El siguiente paso es una base de maquillaje ligera, como una BB cream o una base fluida que se difumine fácilmente. El objetivo es unificar el tono de la piel sin perder su aspecto natural. Si tienes imperfecciones o manchas, puedes corregirlas con un corrector en las áreas específicas. Para resaltar tus ojos, opta por tonos neutros y cálidos en los párpados. Una capa de máscara de pestañas que alargue y defina las pestañas será suficiente para abrir la mirada sin sobrecargar el look. En cuanto al rubor, elige tonos suaves como el rosa o durazno, que darán un toque de frescura sin ser demasiado intensos. Finalmente, para los labios, un bálsamo hidratante con un toque de color o un labial nude es perfecto para mantener el maquillaje sutil y natural. El maquillaje natural también resalta la belleza de las cejas. Un simple gel fijador o lápiz de cejas puede ayudar a definirlas de manera discreta, en lugar de un delineado dramático.",
        textbold: "\"La belleza está en lo simple\"",
        content2: "El maquillaje natural no solo te hace ver más fresca y radiante, sino que también es ideal para quienes prefieren no gastar mucho tiempo en su rutina de belleza. Con unos pocos productos y técnicas sencillas, puedes lograr un look que te haga sentir segura y lista para cualquier ocasión."

      },

      {
        id: 13,
        category: "Gaming",
        title: "La evolución de los videojuegos: del píxel al hiperrealismo",
        subtitle:"",
        img:"/Assets/img13",
        author: "Carlos Méndez",
        date: "05/04/25",
        readingTime: "6 min",
        resume: "Los videojuegos han recorrido un largo camino desde los primeros arcades hasta los gráficos hiperrealistas de hoy en día. Exploramos cómo la tecnología ha transformado la industria.",
        content: `Desde los días de Pong y Pac-Man hasta títulos con gráficos ultrarrealistas como Red Dead Redemption 2 o Cyberpunk 2077, los videojuegos han experimentado una evolución increíble. 
                  En la década de 1980, los juegos tenían gráficos en 8 bits y mecánicas simples, pero cautivaban a millones de jugadores en las salas de arcade. Luego, con la llegada de las consolas de 16 y 32 bits, los juegos adquirieron más profundidad en la jugabilidad y la narrativa.
                  El salto a los gráficos en 3D en los 90 marcó una revolución. Juegos como Super Mario 64 o The Legend of Zelda: Ocarina of Time establecieron nuevos estándares de exploración y diseño de niveles. 
                  Hoy en día, gracias a la inteligencia artificial, el ray tracing y la potencia de las nuevas consolas, los videojuegos ofrecen experiencias casi cinematográficas. La evolución no se detiene, y con la llegada del metaverso y la realidad virtual, el futuro del gaming promete ser aún más inmersivo.`,
        boldText: "De los píxeles a la realidad virtual",
        content2: `A medida que la tecnología avanza, también lo hacen las expectativas de los jugadores. Las narrativas más profundas, los mundos abiertos cada vez más detallados y la inteligencia artificial más avanzada están marcando el camino de la próxima generación de videojuegos.`
      },

      {
        id: 14,
        category: "Gaming",
        title: "E-Sports: el fenómeno que está revolucionando la industria del entretenimiento",
        subtitle:"",
        img:"/Assets/img14",
        author: "Lucía Fernández",
        date: "07/04/25",
        readingTime: "7 min",
        resume: "Los deportes electrónicos han pasado de ser una afición de nicho a una industria millonaria que atrae a millones de espectadores en todo el mundo. Descubre cómo ha cambiado el panorama del gaming competitivo.",
        content:"Lo que comenzó como competiciones entre amigos en salones recreativos se ha convertido en un fenómeno global con eventos que llenan estadios y ofrecen premios millonarios. Juegos como League of Legends, Counter-Strike y Valorant han elevado el gaming competitivo a un nuevo nivel, con ligas profesionales, equipos patrocinados y jugadores que se han convertido en verdaderas celebridades. Las plataformas de streaming como Twitch han impulsado la popularidad de los e-sports, permitiendo que millones de personas sigan las partidas en vivo y generando nuevas oportunidades para los creadores de contenido. Además, las universidades ya ofrecen becas para jugadores de e-sports, consolidando su estatus como una disciplina deportiva legítima.",
        boldText: "El gaming competitivo ya no es solo un hobby",
        content2: `La creciente inversión en e-sports por parte de marcas y patrocinadores sugiere que esta industria seguirá expandiéndose. Se espera que en los próximos años, los e-sports se integren aún más en los medios de comunicación tradicionales.`
      },
    
      {
        id: 15,
        category: "Tecnología",
        title: "La inteligencia artificial y su impacto en el futuro del trabajo",
        subtitle:"",
        img:"/Assets/img15",
        author: "Daniel Suárez",
        date: "09/04/25",
        readingTime: "6 min",
        resume: "La inteligencia artificial está transformando el mercado laboral. Exploramos cómo esta tecnología cambiará la forma en que trabajamos y qué sectores se verán más afectados.",
        content: `La inteligencia artificial ya no es cosa del futuro. Su influencia en diversas industrias, desde la medicina hasta la logística, está redefiniendo el mundo laboral. 
                  Con el auge de los algoritmos de machine learning y la automatización, muchas tareas repetitivas están siendo reemplazadas por sistemas inteligentes capaces de analizar datos en tiempo récord y tomar decisiones más eficientes.
                  Si bien esto ha generado preocupación sobre la pérdida de empleos, también está dando lugar a nuevas oportunidades. Los expertos sugieren que el futuro del trabajo estará marcado por la necesidad de adaptabilidad y el aprendizaje constante.
                  Sectores como la programación, la ciberseguridad y la analítica de datos seguirán en alta demanda, mientras que empleos más rutinarios podrían quedar en manos de la IA.`,
        boldText: "La IA no reemplazará a los humanos, pero cambiará la forma en que trabajamos",
        content2: `Las empresas y los trabajadores deben prepararse para esta transformación adoptando nuevas habilidades tecnológicas. La colaboración entre humanos y máquinas será clave para el éxito en la era de la IA.`
      },
      {
        id: 16,
        category: "Tecnología",
        title: "El 5G y la revolución de las telecomunicaciones",
        subtitle:"",
        img:"/Assets/img16",
        author: "Patricia López",
        date: "11/04/25",
        readingTime: "7 min",
        resume: "La red 5G no solo mejorará la velocidad de internet, sino que transformará industrias enteras. Descubre cómo esta tecnología está dando forma a la conectividad del futuro.",
        content: `La tecnología 5G ha llegado para cambiar la manera en que nos comunicamos. Con velocidades de descarga hasta 100 veces más rápidas que el 4G y una latencia casi nula, el 5G permite una conectividad sin precedentes.
                  Esta mejora no solo beneficiará a los usuarios comunes con descargas más rápidas y streaming en alta definición, sino que también impulsará avances en campos como la medicina, el transporte y la automatización industrial.
                  En la medicina, permitirá el desarrollo de cirugías a distancia con mayor precisión. En el sector automotriz, facilitará la implementación de coches autónomos al proporcionar conexiones ultrarrápidas y seguras.
                  Sin embargo, la expansión del 5G también ha generado debates sobre la seguridad y la privacidad de los datos, ya que una mayor conectividad conlleva riesgos de ciberataques más sofisticados.`,
        boldText: "El 5G es mucho más que internet rápido",
        content2: `A medida que las redes 5G se despliegan a nivel global, las empresas de telecomunicaciones trabajan para garantizar una infraestructura segura y eficiente. Se espera que en los próximos años, esta tecnología transforme completamente la manera en que interactuamos con el mundo digital.`
      }
    ];

    

function createCardPost () {

    let currentPage = 1
    const postsPerPage = 4
    const totalPages = Math.ceil(posts.length / postsPerPage); 

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToDisplay = posts.slice(startIndex, endIndex);
    

    const prevBtn = document.querySelector(".prev-button");
    const nextBtn = document.querySelector(".next-button");

    cardContainer.innerHTML = ""

    postsToDisplay.forEach(post => {

        const cardArticle = document.createElement("article")
        cardArticle.classList.add("card__article")

        const cardInfo = document.createElement("div")
        cardInfo.classList.add("card__info")

        const timeCard = document.createElement("time")
        timeCard.classList.add("card__time")
        timeCard.textContent = post.date
        const categoryCard = document.createElement("span")
        categoryCard.classList.add("card__category")
        categoryCard.textContent = post.category

        cardInfo.appendChild(timeCard)
        cardInfo.appendChild(categoryCard)
        cardArticle.appendChild(cardInfo)

        cardContainer.appendChild(cardArticle)

        const imgCard = document.createElement("img")
        imgCard.classList.add("card__img")
        imgCard.src = post.img
        cardArticle.appendChild(imgCard)

        const cardText = document.createElement("div")
        cardText.classList.add("card__text")

        const cardTitle = document.createElement("h2")
        cardTitle.classList.add("card__title")
        cardTitle.textContent = post.title

        const cardParagraph = document.createElement("p")
        cardParagraph.classList.add("card__paragraph")
        cardParagraph.textContent = post.resume

        const cardLink = document.createElement("a")
        cardLink.classList.add("card__link")
        cardLink.innerHTML = 'Leer más <svg class="link__arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>'
        cardLink.href= `blog.html?id=${post.id}`

        cardText.appendChild(cardTitle)
        cardText.appendChild(cardParagraph)
        cardText.appendChild(cardLink)
        cardArticle.appendChild(cardText)

        cardContainer.appendChild(cardArticle)
    })

    function updatePaginationBtn () {
        if(currentPage === 1) {
            prevBtn.disabled = true
        } else {
            prevBtn.disabled = false
        }
    
        if (currentPage === totalPages) {
            nextBtn.disabled = true
        } else {
            nextBtn.disabled = false
        }
    }

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--
        }
    })

    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++
        }
    })
}
createCardPost()


