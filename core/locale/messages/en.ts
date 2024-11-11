export default {
  home: {
    welcome:
      "Welcome to my professional portfolio, I am Multimedia Engineer, I live in Colombia, I'm passionate about challenges and acquire knowledge that allows me to grow both professionally and personally. My goal is to add value to those around me.",
    iAm: 'Frontend Developer',
  },
  education: {
    university: {
      title: 'Multimedia Engineering',
      name: 'San Buenaventura University | Cartagena - Colombia',
      date: '2015 - 2021 · 6 years',
      description:
        'During my training, I gained solid knowledge in key areas such as graphic design, web development, animation, audiovisual production, and programming. My academic focus was oriented to web development and design of solutions combining different media and technologies, in order to offer attractive and high-impact digital experiences.',
    },
    courses: {
      title: 'Courses',
      items: [
        {
          title: 'Backend course with NestJS',
          where: 'Platzi',
        },
        {
          title: 'Basic English Course A1: Short and Habitual Conversations',
          where: 'Platzi',
        },
        {
          title: 'NestJS Course: Modular Programming, Documentation with Swagger and Deploy',
          where: 'Platzi',
        },
        {
          title: 'NextJS with GraphQL and Apollo course',
          where: 'Platzi',
        },
        {
          title: 'Complete Web Development with HTML5, CSS3, JS AJAX PHP and MySQL',
          where: 'Udemy',
        },
        {
          title: 'MERN Full Stack Personal Web: MongoDB, Express, React and Node',
          where: 'Udemy',
        },
      ],
    },
  },
  contact: {
    title: 'Looking for a new addition to your team?',
    content:
      'I am currently available to join a team or company.{br}If you want to know more about me or my work, or just want to say hello, contact me by any of the following options.',
    cv: 'Resume',
    downloadCV: 'Download Resume',
  },
  footer: {
    content: 'Designed & Built by {fullName}',
  },
  siteConfig: {
    title: 'Camilo Vargas | Frontend Developer',
    description: 'Personal web portfolio, where you can find information about me, my skills, my work experience, and my projects.',
    sidebarNav: {
      aboutMe: 'About me',
      projects: 'Projects',
      technicalTest: 'Technical tests',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
    },
    socialLinks: {
      github: 'go to Github',
      LinkedIn: 'go to LinkedIn',
      twitter: 'go to Twitter',
    },
  },
  commons: {
    sidebarNav: 'Sidebar nav',
    openSidebarNav: 'Open sidebar nav',
    closeSidebarNav: 'Close sidebar nav',
    openLanguageMenu: 'Open change language menu',
    changeToSpanish: 'Change to Spanish',
    changeToEnglish: 'Change to english',
    toggleTheme: 'Toggle theme',
    English: 'English',
    Spanish: 'Spanish',
    tech: 'Technologies',
    techTest: 'Technical tests',
  },
} as const
