export default {
  home: {
    welcome:
      'Bienvenid@ a mi portafolio profesional, soy Ingeniero Multimedia, vivo en Colombia, me apasionan los desafíos y adquirir conocimientos que me permitan crecer tanto a nivel profesional como personal. Mi objetivo es aportar valor a los que me rodean.',
    iAm: 'Desarrollador Frontend',
  },
  education: {
    university: {
      title: 'Ingeniería Multimedia',
      name: 'Universidad de San Buenaventura | Cartagena - Colombia',
      date: '2015 - 2021 · 6 años',
      description:
        'Durante mi formación, adquirí un sólido conocimiento en áreas clave como diseño gráfico, desarrollo web, animación, producción audiovisual y programación. Mi enfoque académico estuvo orientado al desarrollo web y diseño de soluciones combinando diferentes medios y tecnologías, con el fin de ofrecer experiencias digitales atractivas y de alto impacto.',
    },
    courses: {
      title: 'Cursos',
      items: [
        {
          title: 'Curso de backend con NestJS',
          where: 'Platzi',
        },
        {
          title: 'Curso de Inglés Básico A1: Conversaciones Cortas y Habituales',
          where: 'Platzi',
        },
        {
          title: 'Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy',
          where: 'Platzi',
        },
        {
          title: 'Curso de NextJS con GraphQL y Apollo',
          where: 'Platzi',
        },
        {
          title: 'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL',
          where: 'Udemy',
        },
        {
          title: 'Web Personal MERN Full Stack: MongoDB, Express, React y Node',
          where: 'Udemy',
        },
      ],
    },
  },
  contact: {
    title: '¿Buscando una nueva incorporación a tu equipo?',
    content:
      'Actualmente estoy disponible para unirme a un equipo o empresa.{br}Si quieres saber más sobre mí o mi trabajo, o simplemente quieres saludar, contácteme por cualquiera de las siguientes opciones.',
    cv: 'Curriculum',
    downloadCV: 'Descargar currículum',
  },
  footer: {
    content: 'Diseñado y construido por {fullName}',
  },
  siteConfig: {
    title: 'Camilo Vargas | Desarrollador Frontend',
    description:
      'Portafolio web personal, donde puedes encontrar información sobre mí, mis habilidades, mi experiencia laboral y mis proyectos.',
    sidebarNav: {
      aboutMe: 'Sobre mi',
      projects: 'Proyectos',
      experience: 'Experiencia',
      technicalTest: 'Pruebas técnicas',
      education: 'Educación',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    socialLinks: {
      github: 'ir a Github',
      LinkedIn: 'ir a LinkedIn',
      twitter: 'ir a Twitter',
    },
  },
  commons: {
    sidebarNav: 'Menú de navegación lateral',
    openSidebarNav: 'Abrir menú de navegación lateral',
    closeSidebarNav: 'Cerrar menú de navegación lateral',
    openLanguageMenu: 'Abrir menú de cambio de idioma',
    changeToSpanish: 'Cambiar a Español',
    changeToEnglish: 'Cambiar a Inglés',
    toggleTheme: 'Cambiar tema',
    English: 'Inglés',
    Spanish: 'Español',
    tech: 'Tecnologías',
    techTest: 'Pruebas técnicas',
  },
} as const
