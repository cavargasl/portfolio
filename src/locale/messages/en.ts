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
    ],
    "techTest": "Technical tests",
    itemsTest: [
      {
        title: "Stepper component",
        description: "Technical test which involves creating a Stepper component using NextJs, Typescript, and TailwindCSS. This component should receive an indefinite number of steps as children and must be fully customizable.",
        time: "Time for the test: 3 days"
      },
      {
        title: "Mockup product page",
        description: "Replicate the page {url}, taking into account the dropdown main menu, product photo gallery with a slider, functionality to add products to the cart, and responsiveness for devices. Requirements include HTML5, CSS3, React Js, plain JavaScript without plugins, modularity, interaction with JSON for the image gallery, avoidance of UI frameworks, responsiveness, version control with Git, and delivery on Github or Bitbucket.",
        time: "Time for the test: 5 days"
      },
      {
        title: "Capture personal data",
        description: "Create four components in ReactJs, DataPersonal: Contains a form that captures personal data and stores it in a global Redux state. DataAcademic: Captures academic data and stores it in Redux. Summary: Contains a summary of the data captured in the previous components by extracting the info from the global state for later database submission. TableRegister: Contains a list of all records in the database.",
        time: "Time for the test: 2 days"
      },
      {
        title: "List of cryptocurrencies",
        description: "Using the {url} API, list cryptocurrencies in a table with their prices in USD, exclusively for registered users who log in with their credentials. Points to evaluate include Architecture, Structure, Documentation, Software Best Practices, Performance, and optionally, Unit Testing",
        time: "Time for the test: 4 hours"
      },
      {
        title: "Auctioning properties",
        description: "Create an application for auctioning properties that must include: Registration and login functionality, access restriction to different pages only for registered users, ability to auction properties and place bids on them. The app should have an internal page listing available properties (for auction), another internal page showing properties the current user is auctioning, and yet another internal page listing properties obtained through bids. There should be a separate internal page with a form for listing properties for auction, along with validations. Property owners cannot bid on their own properties. The auction initiator can conclude the auction at will, and the last bidder will automatically obtain the property. Optional features include preventing the last bidder from bidding again until another user places a bid, a logout button redirecting to the login page, ensuring users do not exceed their available funds, and designing the webpage (CSS).",
        time: "Time for the test: 4 hours"
      },
      {
        title: "List of posts",
        description: "Develop a website for consuming the REST API at {url}, considering the documentation and best development practices. The homepage should display Posts with their corresponding comments in a paginated table. Each post should have a delete button. You should create the necessary forms for publishing and updating a Post. Additionally, implement a notification window (modal) for any of the operations performed.",
        time: "Time for the test: 3 days"
      },
      {
        title: "Social network",
        description: "Create a React web application that features an external authentication and utilizes data from the API {url}. On the homepage, list Posts, each of which should display the user's photo and name who created the post, the post's image and text, post tags, number of likes and comments. Clicking on a post should open a modal displaying all comments related to that post. Another modal should show detailed information about the user who created the post. Users should be able to filter posts by tags. The authenticated user's information should be displayed at the header page.",
        time: "Time for the test: 1 day"
      },
      {
        title: "Form register",
        description: "Development test using React and Express where a registration form is created with the fields and design shown in the PDF at {url}. The goal is to store all these fields, along with an image, and provide an option for users to log in with the username and password they assigned. They should be able to view the information they entered in the form. Additionally, an admin role should exist to view registered data, questions, and uploaded images. The admin should have the ability to change questions such as: Favorite Food, Favorite Artist, Favorite Place, and Favorite Color, without affecting the data already stored in the database.",
        time: "Time for the test: 2 days"
      },
      {
        title: "To-Do list",
        description: "Create a To-Do list in React, which is a series of organized items corresponding to the user's pending tasks. It should include the following features: Allow users to view a list of pending activities, let users add a new activity to the list, allow users to mark an activity as done, let users delete an activity from the list, allow users to edit the description of an activity, enable filtering the activity list by description text, and allow users to populate the activity list with random cat phrases from {url}, indicating how many they want to add.",
        time: "Time for the test: 1 day"
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