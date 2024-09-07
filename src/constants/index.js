import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  hfilm,
  css,
  reactjs,
  redux,
  findhome,
  tailwind,
  nodejs,
  mongodb,
  h2shop,
  git,
  figma,
  mui,
  docker,
  mobifone,
  meta,
  travelcaps,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  carforyou,
  ncc,
  sugnanuma,
  nextjs,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Angular",
    icon: angular,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "NCC ASIAN",
    icon: ncc,
    iconBg: "#383E56",
    date: "August 2022 - November 2022",
    points: [
      "Assisted in developing and maintaining web applications using HTML, CSS, JavaScript, and React, focusing on building responsive and user-friendly interfaces.",
      "Supported the team in reviewing and debugging frontend code.",
      "Worked closely with senior developers to gain insights into best practices in web development.",
      "Gained hands-on experience with version control systems like Git, and participated in team sprints and code reviews.",
      "Assisted in creating wireframes.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "MobifoneIT",
    icon: mobifone,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2023",
    points: [
      "Developed and customized web applications using the Odoo framework.",
      "Utilized HTML, CSS, JavaScript, and jQuery for building responsive and dynamic user interfaces for Odoo applications.",
      "Integrated Odoo backend functionality with frontend components using XML-RPC API.",
      "Collaborated with backend developers, project managers, and designers to deliver fully functional Odoo-based solutions, addressing both technical and client requirements.",
      "Stayed up-to-date with Odoo releases and new features to provide cutting-edge solutions and customizations to clients.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Motech-Suganuma group",
    icon: sugnanuma,
    iconBg: "#E6DEDD",
    date: "August 2023 to present",
    points: [
      "Built and maintained web applications using HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Angular, and VueJS.",
      "Assessed UX and UI designs for technical feasibility.",
      "Implemented a responsive, mobile-first approach and strategy.",
      "Possess knowledge and experience using RESTful APIs.",
      "Created wireframes to plan and visualize web application layouts and features.",
      "Worked effectively with designers and developers, participated in team meetings, and contributed to project goals.",
      "Improved application performance and resolved issues to enhance user experience.",
      "Committed to continuous learning by updating skills and knowledge with industry trends and best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CarForYou",
    description:
      "A web interface designed to buy and sell cars. The platform offers a user-friendly experience that allows users to browse through a wide selection of vehicles and easily find their dream car.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "javscript",
        color: "green-text-gradient",
      },
    ],
    image: carforyou,
    source_code_link: "https://github.com/vanutcho123/CarForYou",
    link_demo: "https://vanutcho123.github.io/CarForYou/",
  },
  {
    name: "hFilm",
    description:
      "This is a movie streaming website built with ReactJS, Redux, Redux Toolkit, and the TMDB API. Immerse yourself in an entertainment world with a vast collection of movies spanning various genres. The platform offers a seamless user experience, making it easy to search for, discover, and watch your favorite films.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "orange-text-gradient",
      },
      {
        name: "tmdb Api",
        color: "pink-text-gradient",
      },
    ],
    image: hfilm,
    source_code_link: "https://github.com/vanutcho123/hFilm",
    link_demo: "https://h-film-five.vercel.app/",
  },
  {
    name: "H2SHOP",
    description:
      "This is an online watch store, featuring a wide range of stylish and high-quality watches. Explore our collection of elegant timepieces from renowned brands, designed to suit every style and occasion. Enjoy a seamless shopping experience, with easy navigation, secure payment options, and fast delivery. Find the perfect watch that complements your unique taste and adds a touch of sophistication to your wrist.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },

      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "boostrap 5",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
    ],
    image: h2shop,
    source_code_link: "https://github.com/vanutcho123/mern-H2SHOP",
    link_demo: "",
  },
  {
    name: "TRAVELCAPS",
    description:
      "This is TravelCaps, your gateway to exploring the breathtaking beauty of the world. Immerse yourself in a diverse array of captivating destinations, from lush forests and pristine beaches to vibrant cities. Let us inspire your wanderlust with unforgettable travel experiences, expert tips, and curated itineraries, ensuring every journey is an adventure of a lifetime.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },

      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "boostrap 5",
        color: "blue-text-gradient",
      },
      {
        name: "material UI",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "google Api",
        color: "green-text-gradient",
      },
    ],
    image: travelcaps,
    source_code_link: "https://github.com/C1SE-52/IntelligentTravelGuide",
    link_demo: "",
  },
  {
    name: "FINDHOME",
    description:
      "Explore your dream property at Findhome - the ultimate destination for real estate. Discover a wide range of listings, from cozy apartments to luxurious villas, and let our expert agents guide you to your perfect home. Start your real estate journey with Findhome today.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },

      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "boostrap 5",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "orange-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Province Open API",
        color: "green-text-gradient",
      },
    ],
    image: findhome,
    source_code_link: "https://github.com/C2SE14/Findhome_project",
    link_demo: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
