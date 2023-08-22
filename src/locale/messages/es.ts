export default {
  "home": {
    "welcome": "Bienvenid@ a mi portafolio profesional, soy Ingeniero Multimedia, vivo en Colombia, me apasionan los desafíos y adquirir conocimientos que me permitan crecer tanto a nivel profesional como personal. Mi objetivo es aportar valor a los que me rodean.",
    "iAm": "Desarrollador Frontend"
  },
  "experience": {
    amount: 4,
    tech: "Tecnologías",
    jobs: [
      {
        position: 'Fullstack Developer',
        title: 'Big Safe',
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
        title: 'CloudAPPi',
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
        title: 'Proyecto de grado',
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
        title: 'DexFreight',
        date: 'ene. 2021 - jun. 2021 · 6 meses',
        descriptions: [
          "Agregar funcionalidades nuevas en React Native.",
          "Migración de funcionalidades de Redux a hooks nativos de React que no eran necesario mantener en un estado global.",
          "Resolver tareas de ajustes de estilos con sass y correcciones de bugs en la web."
        ]
      },
    ]
  },
  "education": {
    title: "Educación",
    "university": {
      title: "Ingeniería Multimedia",
      name: "Universidad de San Buenaventura | Cartagena - Colombia",
      date: "2015 - 2021 · 6 años",
      description: "Durante mi formación, adquirí un sólido conocimiento en áreas clave como diseño gráfico, desarrollo web, animación, producción audiovisual y programación. Mi enfoque académico estuvo orientado al desarrollo web y diseño de soluciones combinando diferentes medios y tecnologías, con el fin de ofrecer experiencias digitales atractivas y de alto impacto."
    },
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
    "description": "Portafolio profesional de Camilo Vargas, desarrollador frontend.",
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