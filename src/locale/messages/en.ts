export default {
  "home": {
    "welcome": "Welcome to my professional portfolio, i am Multimedia Engineer, i live in Colombia, i'm passionate about challenges and acquire knowledge that allows me to grow both professionally and personally. My goal is to add value to those around me.",
    "iAm": "Frontend Developer"
  },
  "experience": {
    tech: "Technologies",
    jobs: [
      {
        position: 'Fullstack Developer',
        title: 'Big Safe · Freelance',
        date: 'jul. 2023 · 1 month',
        descriptions: [
          "E - Commerce of sales of printing services in Next 13 with its new functionalities.",
          "Reusable components made with Tailwind, CVA and clsx frameworks.",
          "User management with Clerk framework.",
          "Global state with Redux toolkit for shopping cart.",
          "Implementation of Firebase Database and Firebase Storage."
        ]
      },
      {
        position: 'Frontend Developer',
        title: 'CloudAPPi · Full time',
        date: 'apr. 2022 - jan. 2023 · 10 months',
        descriptions: [
          "Create web application in charge of selection processes of technology professionals.",
          "User management using the Keycloack framework.",
          "Consumption of REST API with React Query and Axios to the Django backend implementing adapters.",
          "Figma designs converted to code using the pixel perfect concept.",
          "Migration of React project to Next 12 to optimize SEO.",
          "Teleworking using the SCRUM methodology."
        ]
      },
      {
        position: 'Fullstack Developer',
        title: 'Degree project · Full time',
        date: 'jul. 2021 - apr. 2022 · 10 months',
        descriptions: [
          "DEVELOPMENT OF A WEB APPLICATION FOR THE EVALUATION OF PROPOSALS AND FINAL REPORTS OF DEGREE MODALITIES AT THE SAN BUENAVENTURA CARTAGENA UNIVERSITY.",
          "Identify the functional and non-functional requirements that the Web application must have to manage the evaluation process, applying SCRUM.",
          "Design the application, using Figma and the UX / UI bases to make it intuitive and comfortable for use.",
          "Implement the database using Firebase services.",
          "Develop the frontend with React JS"
        ]
      },
      {
        position: 'Frontend Developer',
        title: 'DexFreight · Internship contract',
        date: 'jan. 2021 - jun. 2021 · 6 months',
        descriptions: [
          "Add new functionalities in React Native.",
          "Migration of Redux functionalities to native React hooks that did not need to be maintained in a global state.",
          "Resolve tasks of style adjustments with sass and bug fixes on the web."
        ]
      },
    ]
  },
  "projects": {
    tech: "Technologies",
    items: [
      {
        title: "Portfolio",
        description: "Personal web portfolio, where you can find information about me, my skills, my work experience and my projects.",
      },
      {
        title: "Hackathon frontend · Periferia",
        description: "React application, through HTTP requests to the backend built in NestJS, can detect patterns of more than four identical letters in a resizable array to receive the response. The queried attempts (successful and failed) are displayed, along with an average, thanks to the logic implemented in the backend.",
      },
      {
        title: "Hackathon backend · Periferia",
        description: "Backend built in NestJS that searches for patterns of more than four identical letters in an NxN matrix in different directions (diagonal, horizontal, or vertical). Additionally, it records the queried attempts and calculates their average, providing a comprehensive and efficient solution with best practices.",
      },
      {
        title: "E-Commerce · Amar",
        description: "E-commerce website, where beauty and personal care products can be purchased. A shopping cart is implemented to proceed with payment through WhatsApp, deployed on Vercel.",
      },
      {
        title: "Backend course with NodeJS",
        description: "Backend project built in NodeJS, where a REST API is implemented with Express, connected to a MongoDB database using mongoose, implementing Typescript and best practices.",
      },
    ]
  },
  "education": {
    "university": {
      title: "Multimedia Engineering",
      name: "San Buenaventura University | Cartagena - Colombia",
      date: "2015 - 2021 · 6 years",
      description: "During my training, I gained solid knowledge in key areas such as graphic design, web development, animation, audiovisual production, and programming. My academic focus was oriented to web development and design of solutions combining different media and technologies, in order to offer attractive and high-impact digital experiences."
    },
    "courses": {
      title: "Courses",
      items: [
        {
          title: "Backend course with NestJS",
          where: "Platzi"
        },
        {
          title: "Basic English Course A1: Short and Habitual Conversations",
          where: "Platzi"
        },
        {
          title: "NestJS Course: Modular Programming, Documentation with Swagger and Deploy",
          where: "Platzi"
        },
        {
          title: "NextJS with GraphQL and Apollo course",
          where: "Platzi"
        },
        {
          title: "Complete Web Development with HTML5, CSS3, JS AJAX PHP and MySQL",
          where: "Udemy"
        },
        {
          title: "MERN Full Stack Personal Web: MongoDB, Express, React and Node",
          where: "Udemy"
        },
      ]
    }
  },
  "contact": {
    title: "Looking for a new addition to your team?",
    content: "I am currently available to join a team or company.{br}If you want to know more about me or my work, or just want to say hello, contact me by any of the following options.",
    cv: "Resume"
  },
  "footer": {
    content: "Designed & Built by {fullName}"
  },
  "siteConfig": {
    "title": "Camilo Vargas | Frontend Developer",
    "description": "Professional portfolio of Camilo Vargas. frontend developer.",
    "sidebarNav": {
      "aboutMe": "About me",
      "projects": "Projects",
      "experience": "Experience",
      "education": "Education",
      "skills": "Skills",
      "contact": "Contact"
    },
    "socialLinks": {
      "github": "go to Github",
      "LinkedIn": "go to LinkedIn",
      "twitter": "go to Twitter",
    }
  },
  "commons": {
    "sidebarNav": "Sidebar nav",
    "openSidebarNav": "Open sidebar nav",
    "closeSidebarNav": "Close sidebar nav",
    "openLanguageMenu": "Open change language menu",
    "changeToSpanish": "Change to Spanish",
    "changeToEnglish": "Change to english",
    "toggleTheme": "Toggle theme",
    "English": "English",
    "Spanish": "Spanish",
  }
} as const