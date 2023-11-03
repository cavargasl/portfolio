export default {
  "home": {
    "welcome": "Bienvenid@ a mi portafolio profesional, soy Ingeniero Multimedia, vivo en Colombia, me apasionan los desafíos y adquirir conocimientos que me permitan crecer tanto a nivel profesional como personal. Mi objetivo es aportar valor a los que me rodean.",
    "iAm": "Desarrollador Frontend"
  },
  "experience": {
    tech: "Tecnologías",
    jobs: [
      {
        position: 'Fullstack Developer',
        title: 'Big Safe · Profesional independiente',
        date: 'jul. 2023 · 1 mes',
        descriptions: [
          "E - Commerce de ventas de servicios de impresión en Next 13 con sus nuevas funcionalidades.",
          "Componentes reutilizable hechos con Tailwind, CVA y clsx frameworks.",
          "Manejo de usuarios con Clerk framework.",
          "Estado global con Redux toolkit para carrito de compra.",
          "Implementación de Firebase Database y Firebase Storage."
        ]
      },
      {
        position: 'Frontend Developer',
        title: 'CloudAPPi · Jornada completa',
        date: 'abr. 2022 - ene. 2023 · 10 meses',
        descriptions: [
          "Crear aplicación web encargada de procesos de selección de profesionales de la tecnología.",
          "Manejo de usuario utilizando la tecnología de Keycloack framework.",
          "Consumo de REST API con React Query y Axios al backend de Django implementando adapters.",
          "Diseños de Figma convertidos a código mediante el concepto pixel perfect.",
          "Migración de proyecto de React a Next 12 para optimizar el SEO.",
          "Teletrabajo mediante la metodología SCRUM."
        ]
      },
      {
        position: 'Fullstack Developer',
        title: 'Proyecto de grado · Jornada completa',
        date: 'jul. 2021 - abr. 2022 · 10 meses',
        descriptions: [
          "DESARROLLO DE UN APLICATIVO WEB PARA LA EVALUACIÓN DE PROPUESTAS E INFORMES FINALES DE MODALIDADES DE GRADO EN LA UNIVERSIDAD SAN BUENAVENTURA CARTAGENA.",
          "Identificar los requerimientos funcionales y no funcionales con los que debe contar la aplicación Web para gestionar el proceso de evaluación, aplicando SCRUM.",
          "Diseñar la aplicación, utilizando Figma y las bases de UX / UI para hacerla intuitiva y cómoda para su uso.",
          "Implementar la base de datos haciendo uso de los servicios de Firebase.",
          "Desarrollar el frontend con React JS"
        ]
      },
      {
        position: 'Frontend Developer',
        title: 'DexFreight · Contrato de prácticas',
        date: 'ene. 2021 - jun. 2021 · 6 meses',
        descriptions: [
          "Agregar funcionalidades nuevas en React Native.",
          "Migración de funcionalidades de Redux a hooks nativos de React que no eran necesario mantener en un estado global.",
          "Resolver tareas de ajustes de estilos con sass y correcciones de bugs en la web."
        ]
      },
    ]
  },
  "projects": {
    tech: "Tecnologías",
    items: [
      {
        title: "Portafolio",
        description: "Portafolio web personal, donde puedes encontrar información sobre mí, mis habilidades, mi experiencia laboral y mis proyectos.",
      },
      {
        title: "Hackathon · Periferia",
        description: "Aplicación de ReactJs y NestJs, mediante solicitudes HTTP al backend se puede detectar patrones de más de cuatro letras iguales en una matriz de NxN en diferentes direcciones (oblicua, horizontal o vertical) para recibir la respuesta, Además, registra los intentos consultados y calcula su promedio, brindando una solución completa y eficiente con las mejores practicas. En El front se muestran los intentos consultados (satisfactorios y fallido) y un promedio, gracias a la lógica implementada en backend.",
      },
      {
        title: "Comercio electrónico · Amar",
        description: "Sitio web de comercio electrónico, donde se pueden comprar productos de belleza y cuidado personal. Se implementa un carrito de compras para proceder a pagar por WhatsApp desplegado en Vercel.",
      },
      {
        title: "Curso de backend con NodeJS",
        description: "Proyecto backend construido en NodeJS, donde se implementa una API REST con Express, se conecta a una base de datos MongoDB con mongoose, implementando Typescript y buenas practicas",
      },
    ],
    "techTest": "Pruebas técnicas",
    itemsTest: [
      {
        title: "Componente de pasos a paso",
        description: "Prueba técnica que consta en realizar un componente de pasos a paso utilizando NextJs, Typescript y TailwindCSS que reciba por hijos un numero indefinido de pasos, dicho componente debe ser totalmente customizable.",
        time: "Tiempo para la prueba: 3 días"
      },
      {
        title: "Maquetación pagina de producto",
        description: "Replicar la pagina {url}, donde se debe tener en cuenta Menú principal desplegable, Galería de fotos de producto con slider, Funcionalidad / Adicionar producto al carrito y ser responsive para dispositivos. Requisitos HTML5, CSS3, React Js, Javascript sin plugins y modular, Interacción con JSON para la galería de imágenes, no use componentes de interfaz, responsivo, git y entregar en Github o Bitbucket",
        time: "Tiempo para la prueba: 5 días"
      },
      {
        title: "Capturar información personal",
        description: "Crear en ReactJs cuatro componentes, DataPersonal: Contiene un formulario que captura los datos personales y los guarda en un estado global de Redux. DataAcademic: Captura los datos académicos  y los guarda en Redux. Summary: Contiene el resumen de los datos capturados en los componentes anteriores extrayendo del estado global la info, para su posterior envío a base de datos. TableRegister: Contiene el listado de todos los registros en la base de datos.",
        time: "Tiempo para la prueba: 2 días"
      },
      {
        title: "Listado de criptomonedas",
        description: "Mediante el uso de la API {url}, listar en una tabla las criptomonedas con el precio en USD solo para usuarios que se registren y accedan con su usuario. Puntos a evaluar Arquitectura, Estructura, Documentación, Buenas prácticas de software, Rendimiento, Pruebas unitarias (opcional)",
        time: "Tiempo para la prueba: 4 horas"
      },
      {
        title: "Subasta de propiedades",
        description: "Crear una aplicación para subastar propiedades, debe contar con: Registro e inicio de sesión, restricción de acceso a las diferentes páginas solo a usuarios, subastar propiedades y pujar por propiedades, una página interna donde se listen las propiedades disponibles (por subastar), una página interna donde se listen las propiedades que el usuario actual está subastando, una página interna donde se listen las propiedades obtenidas (Por medio de pujas), Una página interna con un formulario para subastar propiedades, validaciones, el dueño de una propiedad no podrá pujar por su propiedad, quien realiza la subasta de una propiedad podrá finalizar la subasta cuando desee y automáticamente el último pujador tendrá la propiedad en el inventario. Opcional: El último pujador de una propiedad no puede pujar de nuevo hasta que otro usuario puje por la propiedad, Debe de existir un botón para cerrar sesión y llevarlo a la página de Inicio de Sesión, Los usuarios no excedan el dinero actual que tienen, Diseño de la página web (Css).",
        time: "Tiempo para la prueba: 4 horas"
      },
      {
        title: "Listado de post",
        description: "Realizar una web para el consumo de la API REST {url}, tener en cuenta la documentación y buenas practicas de desarrollo. Se debe mostrar en el inicio los Post con sus respectivos comentarios paginados en una tabla, cada post debe tener el botón de eliminar, se debe crear los formularios respectivos para publicar y actualizar un Post y mostrar una ventana (modal) de notificación para cualquiera de las operaciones realizadas.",
        time: "Tiempo para la prueba: 3 días"
      },
      {
        title: "Red social",
        description: "Realizar en React una web que incluya un inicio de sesión utilizando autenticado externo y datos de la API {url}, en el inicio de la pagina listar los Post y cada uno debe contener foto y nombre del usuario que hizo el post, imagen y texto del post, tags del post, cantidad de likes y comentarios, se debe mostrar un modal con todos los comentarios, Se debe mostrar un modal con toda la información del usuario que hizo el post, Se deben poder filtrar los posts por tag, La información del usuario autenticado debe ser mostrada la parte superior.",
        time: "Tiempo para la prueba: 1 día"
      },
      {
        title: "Formulario de registro",
        description: "Prueba de desarrollo con React y Express en donde se realiza un formulario de registro con los campos y el diseño que está en el PDF {url}. La idea es guardar todos estos campos al igual que una imagen y generar una opción para que el usuario pueda entrar con el usuario y contraseña que asignó y pueda ver los registró que colocó en el formulario. Además debe existir un rol de administrador donde pueda ver los datos registrados, las preguntas y las imágenes subidas. Además debe tener la posibilidad de cambiar las preguntas como: Comida Favorita, Artista favorito, Lugar favorito y Color favorito sin afectar los datos ya registrados en la base de datos.",
        time: "Tiempo para la prueba: 2 días"
      },
      {
        title: "lista To-Do",
        description: "Realizar en React una lista To-Do, la cual es una serie de ítems, organizados, que corresponden a las tareas pendientes del usuario. debe contener las siguientes características: Permitir al usuario ver una lista con las actividades pendientes, permitir al usuario agregar una nueva actividad a la lista, permitir al usuario marcar una actividad como realizada, permitir al usuario eliminar una actividad de la lista, permitir editar la descripción de una actividad, permitir filtrar lista de actividades por texto de descripción, permitir al usuario llenar la lista de actividades con frases aleatorias de gatos {url} indicando cuantas quiere agregar.",
        time: "Tiempo para la prueba: 1 día"
      },
      {
        title: "lista To-Do",
        description: "La aplicación es una herramienta de gestión de tareas que ayuda a los usuarios a organizar sus actividades diarias de manera eficiente. Permite ver consumiendo la API {url}, agregar, editar y eliminar actividades de una lista. Los usuarios pueden marcar las actividades como realizadas y filtrarlas según su estado (pendientes o completadas) o descripción. El diseño es responsive y ofrece una experiencia de usuario agradable para mantenerse organizado y productivo.",
        time: "Tiempo para la prueba: 3 días"
      },
      {
        title: "Autenticación y CRUD",
        description: "Crear un formulario de inicio de sesión, una tabla para listar usuarios y un formulario para crear nuevos usuarios. Para el inicio de sesión, utiliza el API {url} y almacena el token generado, que se debe enviar en cada solicitud subsiguiente al API en un encabezado llamado 'Authorization'. Organiza tu código siguiendo las pautas de estructura adecuadas para React. Además, considera realizar pruebas de unidad y, opcionalmente, pruebas funcionales e2e si es relevante para tu proyecto.",
        time: "Tiempo para la prueba: 2 días"
      },
    ]
  },
  "education": {
    "university": {
      title: "Ingeniería Multimedia",
      name: "Universidad de San Buenaventura | Cartagena - Colombia",
      date: "2015 - 2021 · 6 años",
      description: "Durante mi formación, adquirí un sólido conocimiento en áreas clave como diseño gráfico, desarrollo web, animación, producción audiovisual y programación. Mi enfoque académico estuvo orientado al desarrollo web y diseño de soluciones combinando diferentes medios y tecnologías, con el fin de ofrecer experiencias digitales atractivas y de alto impacto."
    },
    "courses": {
      title: "Cursos",
      items: [
        {
          title: "Curso de backend con NestJS",
          where: "Platzi"
        },
        {
          title: "Curso de Inglés Básico A1: Conversaciones Cortas y Habituales",
          where: "Platzi"
        },
        {
          title: "Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy",
          where: "Platzi"
        },
        {
          title: "Curso de NextJS con GraphQL y Apollo",
          where: "Platzi"
        },
        {
          title: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
          where: "Udemy"
        },
        {
          title: "Web Personal MERN Full Stack: MongoDB, Express, React y Node",
          where: "Udemy"
        },
      ]
    }
  },
  "contact": {
    title: "¿Buscando una nueva incorporación a tu equipo?",
    content: "Actualmente estoy disponible para unirme a un equipo o empresa.{br}Si quieres saber más sobre mí o mi trabajo, o simplemente quieres saludar, contácteme por cualquiera de las siguientes opciones.",
    cv: "Curriculum"
  },
  "footer": {
    content: "Diseñado y construido por {fullName}"
  },
  "siteConfig": {
    "title": "Camilo Vargas | Desarrollador Frontend",
    "description": "Portafolio web personal, donde puedes encontrar información sobre mí, mis habilidades, mi experiencia laboral y mis proyectos.",
    "sidebarNav": {
      "aboutMe": "Sobre mi",
      "projects": "Proyectos",
      "experience": "Experiencia",
      "education": "Educación",
      "skills": "Habilidades",
      "contact": "Contacto"
    },
    "socialLinks": {
      "github": "ir a Github",
      "LinkedIn": "ir a LinkedIn",
      "twitter": "ir a Twitter",
    }
  },
  "commons": {
    "sidebarNav": "Menú de navegación lateral",
    "openSidebarNav": "Abrir menú de navegación lateral",
    "closeSidebarNav": "Cerrar menú de navegación lateral",
    "openLanguageMenu": "Abrir menú de cambio de idioma",
    "changeToSpanish": "Cambiar a Español",
    "changeToEnglish": "Cambiar a Inglés",
    "toggleTheme": "Cambiar tema",
    "English": "Inglés",
    "Spanish": "Español",
  }
} as const