import { type TechnicalTest } from '@core/technicalTests/domain/models'

const esTechnicalTests: TechnicalTest[] = [
  {
    title: 'Componente de pasos a paso',
    description:
      'Prueba técnica que consta en realizar un componente de pasos a paso utilizando NextJs, Typescript y TailwindCSS que reciba por hijos un numero indefinido de pasos, dicho componente debe ser totalmente customizable. Basado en Stepper componente de Material Tailwind {url}',
    testTime: 'Tiempo para la prueba: 3 días',
    github: ['https://github.com/cavargasl/promarketing-test'],
    webSite: 'https://promarketing-test.vercel.app/',
    enterprise: 'ProMarketing',
    skills: ['TypeScript', 'Next.js', 'Git', 'GitHub', 'Tailwind CSS', 'clsx', 'Tailwind-merge'],
    order: 9,
  },
  {
    title: 'Maquetación pagina de producto',
    description:
      'Replicar la pagina {url}, donde se debe tener en cuenta Menú principal desplegable, Galería de fotos de producto con slider, Funcionalidad / Adicionar producto al carrito y ser responsive para dispositivos. Requisitos HTML5, CSS3, React Js, Javascript sin plugins y modular, Interacción con JSON para la galería de imágenes, no use componentes de interfaz, responsivo, git y entregar en Github o Bitbucket',
    testTime: 'Tiempo para la prueba: 5 días',
    github: ['https://github.com/cavargasl/mic-test'],
    webSite: 'https://mic-test-v1.vercel.app/',
    enterprise: 'Maquila Internacional de Confección (MIC)',
    skills: ['TypeScript', 'React.js', 'Git', 'GitHub', 'Chakra UI', 'Redux', 'Styled Components'],
    order: 8,
  },
  {
    title: 'Capturar información personal',
    description:
      'Crear en ReactJs cuatro componentes, DataPersonal: Contiene un formulario que captura los datos personales y los guarda en un estado global de Redux. DataAcademic: Captura los datos académicos  y los guarda en Redux. Summary: Contiene el resumen de los datos capturados en los componentes anteriores extrayendo del estado global la info, para su posterior envío a base de datos. TableRegister: Contiene el listado de todos los registros en la base de datos.',
    testTime: 'Tiempo para la prueba: 2 días',
    github: ['https://github.com/cavargasl/one-consultans-test'],
    enterprise: 'One Consultants SAS',
    skills: ['TypeScript', 'React.js', 'Git', 'GitHub', 'Chakra UI', 'Axios', 'Redux'],
    order: 7,
  },
  {
    title: 'Listado de criptomonedas',
    description:
      'Mediante el uso de la API {url}, listar en una tabla las criptomonedas con el precio en USD solo para usuarios que se registren y accedan con su usuario. Puntos a evaluar Arquitectura, Estructura, Documentación, Buenas prácticas de software, Rendimiento, Pruebas unitarias (opcional)',
    testTime: 'Tiempo para la prueba: 4 horas',
    github: ['https://github.com/cavargasl/cobrando-test'],
    webSite: 'https://cobrando-test.netlify.app/',
    enterprise: 'Cobrando BPO',
    skills: ['TypeScript', 'React.js', 'Git', 'GitHub', 'Chakra UI', 'Material UI', 'SASS', 'Redux', 'Axios', 'React Query'],
    order: 6,
  },
  {
    title: 'Subasta de propiedades',
    description:
      'Crear una aplicación para subastar propiedades, debe contar con: Registro e inicio de sesión, restricción de acceso a las diferentes páginas solo a usuarios, subastar propiedades y pujar por propiedades, una página interna donde se listen las propiedades disponibles (por subastar), una página interna donde se listen las propiedades que el usuario actual está subastando, una página interna donde se listen las propiedades obtenidas (Por medio de pujas), Una página interna con un formulario para subastar propiedades, validaciones, el dueño de una propiedad no podrá pujar por su propiedad, quien realiza la subasta de una propiedad podrá finalizar la subasta cuando desee y automáticamente el último pujador tendrá la propiedad en el inventario. Opcional: El último pujador de una propiedad no puede pujar de nuevo hasta que otro usuario puje por la propiedad, Debe de existir un botón para cerrar sesión y llevarlo a la página de Inicio de Sesión, Los usuarios no excedan el dinero actual que tienen, Diseño de la página web (Css).',
    testTime: 'Tiempo para la prueba: 4 horas',
    github: ['https://github.com/cavargasl/jeduca-test'],
    enterprise: 'Jeduca',
    skills: ['TypeScript', 'React.js', 'Git', 'GitHub', 'Chakra UI', 'Redux', 'React Hook Form'],
    order: 5,
  },
  {
    title: 'Listado de post',
    description:
      'Realizar una web para el consumo de la API REST {url}, tener en cuenta la documentación y buenas practicas de desarrollo. Se debe mostrar en el inicio los Post con sus respectivos comentarios paginados en una tabla, cada post debe tener el botón de eliminar, se debe crear los formularios respectivos para publicar y actualizar un Post y mostrar una ventana (modal) de notificación para cualquiera de las operaciones realizadas.',
    testTime: 'Tiempo para la prueba: 3 días',
    github: ['https://github.com/cavargasl/empleamos-temporales-test'],
    webSite: 'https://empleamos-temporales-test.netlify.app/',
    enterprise: 'Empleamos Temporales',
    skills: ['TypeScript', 'React.js', 'Git', 'GitHub', 'Material UI', 'Redux', 'React Hook Form', 'Axios', 'Styled Components'],
    order: 4,
  },
  {
    title: 'Red social',
    description:
      'Realizar en React una web que incluya un inicio de sesión utilizando autenticado externo y datos de la API {url}, en el inicio de la pagina listar los Post y cada uno debe contener foto y nombre del usuario que hizo el post, imagen y texto del post, tags del post, cantidad de likes y comentarios, se debe mostrar un modal con todos los comentarios, Se debe mostrar un modal con toda la información del usuario que hizo el post, Se deben poder filtrar los posts por tag, La información del usuario autenticado debe ser mostrada la parte superior.',
    testTime: 'Tiempo para la prueba: 1 día',
    github: ['https://github.com/cavargasl/titaMedia-test'],
    webSite: 'https://titamedia-test.netlify.app/',
    enterprise: 'Tita Media',
    skills: ['TypeScript', 'React.js', 'Git', 'GitHub', 'Redux', 'React Hook Form', 'Axios', 'Styled Components', 'Auth0'],
    order: 3,
  },
  {
    title: 'Formulario de registro',
    description:
      'Prueba de desarrollo con React y Express en donde se realiza un formulario de registro con los campos y el diseño que está en el PDF {url}. La idea es guardar todos estos campos al igual que una imagen y generar una opción para que el usuario pueda entrar con el usuario y contraseña que asignó y pueda ver los registró que colocó en el formulario. Además debe existir un rol de administrador donde pueda ver los datos registrados, las preguntas y las imágenes subidas. Además debe tener la posibilidad de cambiar las preguntas como: Comida Favorita, Artista favorito, Lugar favorito y Color favorito sin afectar los datos ya registrados en la base de datos.',
    testTime: 'Tiempo para la prueba: 2 días',
    github: ['https://github.com/cavargasl/test-weplot-front', 'https://github.com/cavargasl/test-weplot-back'],
    webSite: 'https://test-weplot.netlify.app/',
    enterprise: 'Intuition Business',
    skills: ['JavaScript', 'React.js', 'Git', 'GitHub', 'React Hook Form', 'SASS', 'Express.js', 'Node.js', 'MongoDB'],
    order: 2,
  },
  {
    title: 'lista To-Do 1',
    description:
      'Realizar en React una lista To-Do, la cual es una serie de ítems, organizados, que corresponden a las tareas pendientes del usuario. debe contener las siguientes características: Permitir al usuario ver una lista con las actividades pendientes, permitir al usuario agregar una nueva actividad a la lista, permitir al usuario marcar una actividad como realizada, permitir al usuario eliminar una actividad de la lista, permitir editar la descripción de una actividad, permitir filtrar lista de actividades por texto de descripción, permitir al usuario llenar la lista de actividades con frases aleatorias de gatos {url} indicando cuantas quiere agregar.',
    testTime: 'Tiempo para la prueba: 1 día',
    github: ['https://github.com/cavargasl/test-lya-electronic'],
    webSite: 'https://test-lya-electronic.netlify.app/',
    enterprise: 'LA Electronic',
    skills: ['JavaScript', 'React.js', 'Git', 'GitHub', 'SASS', 'Ant Design'],
    order: 1,
  },
  {
    title: 'lista To-Do 2',
    description:
      'La aplicación es una herramienta de gestión de tareas que ayuda a los usuarios a organizar sus actividades diarias de manera eficiente. Permite ver consumiendo la API {url}, agregar, editar y eliminar actividades de una lista. Los usuarios pueden marcar las actividades como realizadas y filtrarlas según su estado (pendientes o completadas) o descripción. El diseño es responsive y ofrece una experiencia de usuario agradable para mantenerse organizado y productivo.',
    testTime: 'Tiempo para la prueba: 3 días',
    github: ['https://github.com/cavargasl/cs3-test'],
    webSite: 'https://cs3-test-camilovargas123.vercel.app/',
    enterprise: 'CS3 - Comercializadora de software, servicios y suministros',
    skills: [
      'TypeScript',
      'React.js',
      'Git',
      'GitHub',
      'Tailwind CSS',
      'React Query',
      'Zod',
      'Jest',
      'Redux',
      'Radix',
      'Axios',
      'Tailwind-merge',
      'React Hook Form',
      'clsx',
    ],
    order: 10,
  },
  {
    title: 'Autenticación y CRUD',
    description:
      "Crear un formulario de inicio de sesión, una tabla para listar usuarios y un formulario para crear nuevos usuarios. Para el inicio de sesión, utiliza el API {url} y almacena el token generado, que se debe enviar en cada solicitud subsiguiente al API en un encabezado llamado 'Authorization'. Organiza tu código siguiendo las pautas de estructura adecuadas para React. Además, considera realizar pruebas de unidad y, opcionalmente, pruebas funcionales e2e si es relevante para tu proyecto.",
    testTime: 'Tiempo para la prueba: 2 días',
    github: ['https://github.com/cavargasl/soluciones-americanas-test'],
    webSite: 'https://soluciones-americanas-test.vercel.app/',
    enterprise: 'Soluciones Americanas S.A.S',
    skills: [
      'TypeScript',
      'React.js',
      'Git',
      'GitHub',
      'Tailwind CSS',
      'Zod',
      'Cypress',
      'Radix',
      'Axios',
      'Tailwind-merge',
      'React Hook Form',
      'clsx',
      'React Router Dom',
    ],
    order: 11,
  },
  {
    title: 'To-Do-List Mobile',
    description:
      'Desarrollar una aplicación de "to-do list" usando React Native, donde el usuario pueda agregar, marcar como realizado o eliminar elementos de la lista, almacenando los datos localmente en el dispositivo y utilizando React Hooks para la gestión de estado. La app debe incluir animaciones simples al agregar, marcar o eliminar elementos, y se permite el uso de librerías de animación como react-native-reanimated. La apariencia debe ser minimalista, con un campo de entrada para nuevas tareas y una lista de ítems, inspirado en el diseño "Dona mobile composer interactions" {url} de Jakub Antalik.',
    testTime: 'Tiempo para la prueba: 2 días',
    github: ['https://github.com/cavargasl/DoneApp_test'],
    enterprise: 'Colurs, dinero sin fronteras',
    skills: ['TypeScript', 'React Native', 'Git', 'GitHub', 'CSS'],
    order: 12,
  },
  {
    title: 'GitHub user search app',
    description:
      'Desarrolla una aplicación web utilizando React que consuma la API {url} pública de GitHub para obtener una lista de usuarios y mostrar información de sus perfiles, permitiéndote proponer, idear y plasmar tu filosofía de trabajo. Usa un framework CSS de tu elección para asegurar compatibilidad entre navegadores, e integra una librería de iconos (se sugiere Font Awesome o Glyphicons) donde consideres necesario.',
    testTime: 'Tiempo para la prueba: 2 días',
    github: ['https://github.com/cavargasl/double-v-partners_test'],
    enterprise: 'Double V Partners',
    skills: [
      'TypeScript',
      'React.js',
      'Shadcn/ui',
      'Tailwind CSS',
      'Axios',
      'Hexagonal Architecture',
      'Clean Code',
      'ESLint',
      'Prettier',
      'Husky',
      'lint-staged',
    ],
    order: 13,
  },
]

const TempEnTechnicalTests: Pick<TechnicalTest, 'title' | 'description' | 'testTime' | 'order'>[] = [
  {
    title: 'Stepper component',
    description:
      'Technical test which involves creating a Stepper component using NextJs, Typescript, and TailwindCSS. This component should receive an indefinite number of steps as children and must be fully customizable.',
    testTime: 'Time for the test: 3 days',
    order: 9,
  },
  {
    title: 'Mockup product page',
    description:
      'Replicate the page {url}, taking into account the dropdown main menu, product photo gallery with a slider, functionality to add products to the cart, and responsiveness for devices. Requirements include HTML5, CSS3, React Js, plain JavaScript without plugins, modularity, interaction with JSON for the image gallery, avoidance of UI frameworks, responsiveness, version control with Git, and delivery on Github or Bitbucket.',
    testTime: 'Time for the test: 5 days',
    order: 8,
  },
  {
    title: 'Capture personal data',
    description:
      'Create four components in ReactJs, DataPersonal: Contains a form that captures personal data and stores it in a global Redux state. DataAcademic: Captures academic data and stores it in Redux. Summary: Contains a summary of the data captured in the previous components by extracting the info from the global state for later database submission. TableRegister: Contains a list of all records in the database.',
    testTime: 'Time for the test: 2 days',
    order: 7,
  },
  {
    title: 'List of cryptocurrencies',
    description:
      'Using the {url} API, list cryptocurrencies in a table with their prices in USD, exclusively for registered users who log in with their credentials. Points to evaluate include Architecture, Structure, Documentation, Software Best Practices, Performance, and optionally, Unit Testing',
    testTime: 'Time for the test: 4 hours',
    order: 6,
  },
  {
    title: 'Auctioning properties',
    description:
      'Create an application for auctioning properties that must include: Registration and login functionality, access restriction to different pages only for registered users, ability to auction properties and place bids on them. The app should have an internal page listing available properties (for auction), another internal page showing properties the current user is auctioning, and yet another internal page listing properties obtained through bids. There should be a separate internal page with a form for listing properties for auction, along with validations. Property owners cannot bid on their own properties. The auction initiator can conclude the auction at will, and the last bidder will automatically obtain the property. Optional features include preventing the last bidder from bidding again until another user places a bid, a logout button redirecting to the login page, ensuring users do not exceed their available funds, and designing the webpage (CSS).',
    testTime: 'Time for the test: 4 hours',
    order: 5,
  },
  {
    title: 'List of posts',
    description:
      'Develop a website for consuming the REST API at {url}, considering the documentation and best development practices. The homepage should display Posts with their corresponding comments in a paginated table. Each post should have a delete button. You should create the necessary forms for publishing and updating a Post. Additionally, implement a notification window (modal) for any of the operations performed.',
    testTime: 'Time for the test: 3 days',
    order: 4,
  },
  {
    title: 'Social network',
    description:
      "Create a React web application that features an external authentication and utilizes data from the API {url}. On the homepage, list Posts, each of which should display the user's photo and name who created the post, the post's image and text, post tags, number of likes and comments. Clicking on a post should open a modal displaying all comments related to that post. Another modal should show detailed information about the user who created the post. Users should be able to filter posts by tags. The authenticated user's information should be displayed at the header page.",
    testTime: 'Time for the test: 1 day',
    order: 3,
  },
  {
    title: 'Form register',
    description:
      'Development test using React and Express where a registration form is created with the fields and design shown in the PDF at {url}. The goal is to store all these fields, along with an image, and provide an option for users to log in with the username and password they assigned. They should be able to view the information they entered in the form. Additionally, an admin role should exist to view registered data, questions, and uploaded images. The admin should have the ability to change questions such as: Favorite Food, Favorite Artist, Favorite Place, and Favorite Color, without affecting the data already stored in the database.',
    testTime: 'Time for the test: 2 days',
    order: 2,
  },
  {
    title: 'To-Do list 1',
    description:
      "Create a To-Do list in React, which is a series of organized items corresponding to the user's pending tasks. It should include the following features: Allow users to view a list of pending activities, let users add a new activity to the list, allow users to mark an activity as done, let users delete an activity from the list, allow users to edit the description of an activity, enable filtering the activity list by description text, and allow users to populate the activity list with random cat phrases from {url}, indicating how many they want to add.",
    testTime: 'Time for the test: 1 day',
    order: 1,
  },
  {
    title: 'To-Do list 2',
    description:
      'The application is a task management tool that helps users organize their daily activities efficiently. It allows you to view by consuming the API {url}, add, edit, and delete tasks from a list. Users can mark tasks as completed and filter them based on their status (pending or completed) or description. The design is responsive and offers a pleasant user experience to stay organized and productive.',
    testTime: 'Time for the test: 3 days',
    order: 10,
  },
  {
    title: 'Authentication and CRUD',
    description:
      "Create a login form, a table to list users, and a form to create new users. For login, use the {url} API and store the generated token, which must be sent in each subsequent request to the API in a header called 'Authorization'. Organize your code following the proper structure guidelines for React. Additionally, consider performing unit testing and optionally e2e functional testing if relevant to your project.",
    testTime: 'Time for the test: 2 days',
    order: 11,
  },
  {
    title: 'To-Do-List Mobile',
    description:
      "Develop a 'to-do list' application using React Native, where the user can add, mark as completed, or delete items from the list, storing data locally on the device and using React Hooks for state management. The app should include simple animations when adding, marking, or deleting items, and animation libraries like react-native-reanimated are allowed. The design should be minimalist, with an input field for new tasks and a list of items, inspired by the 'Dona mobile composer interactions' design by Jakub Antalik {url}.",
    testTime: 'Time for the test: 2 days',
    order: 12,
  },
  {
    title: 'GitHub user search app',
    description:
      'Develop a web application using React that consumes the public GitHub API {url} to retrieve a list of users and display information from their profiles, allowing you to propose, ideate, and showcase your work philosophy. Use a CSS framework of your choice to ensure cross-browser compatibility, and integrate an icon library (suggested: Font Awesome or Glyphicons) wherever necessary.',
    testTime: 'Time for the test: 2 days',
    order: 13,
  },
]

const enTechnicalTests: TechnicalTest[] = esTechnicalTests.map((test) => ({
  ...test,
  title: TempEnTechnicalTests.find((t) => t.order === test.order)?.title || test.title,
  description: TempEnTechnicalTests.find((t) => t.order === test.order)?.description || test.description,
  testTime: TempEnTechnicalTests.find((t) => t.order === test.order)?.testTime || test.testTime,
}))

export const TechnicalTests = {
  es: esTechnicalTests,
  en: enTechnicalTests,
}
