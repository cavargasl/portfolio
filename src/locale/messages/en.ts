export default {
  "home": {
    "welcome": "Welcome to my professional portfolio, i am Multimedia Engineer, i live in Colombia, i'm passionate about challenges and acquire knowledge that allows me to grow both professionally and personally. My goal is to add value to those around me.",
    "iAm": "Frontend Developer"
  },
  "experience": {
    amount: 4,
    tech: "Technologies",
    jobs: [
      {
        position: 'Fullstack Developer',
        title: 'Big Safe',
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
        title: 'CloudAPPi',
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
        title: 'Degree project',
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
        title: 'DexFreight',
        date: 'jan. 2021 - jun. 2021 · 6 months',
        descriptions: [
          "Add new functionalities in React Native.",
          "Migration of Redux functionalities to native React hooks that did not need to be maintained in a global state.",
          "Resolve tasks of style adjustments with sass and bug fixes on the web."
        ]
      },
    ]
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