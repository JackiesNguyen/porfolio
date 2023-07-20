import { color } from "framer-motion";
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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  docker,
  mobifone,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  carforyou,
  ncc,
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
    title: "Intern frontend Developer",
    company_name: "NCC ASIAN",
    icon: ncc,
    iconBg: "#383E56",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Using typescript language to develop two web applications, todo-app and employee management, combining redux, redux-toolkit, using libraries like mateialUi, react-hook-form, formik and yup...",
      "About the employee management application, the company provides an api to handle on the interface",
    ],
  },
  {
    title: "Intern fullstack Developer",
    company_name: "Mobifone",
    icon: mobifone,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Using python with odoo framework to write an internal employee management app.",
      "Using react.js to complete figma designs by design.",
      "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in the actual project with the assigned task of writing an interface for the company and cms in the application 'Sổ Tay Đoàn Viên Mobifone'",
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
    image: tripguide,
    source_code_link: "https://github.com/vanutcho123/mern-H2SHOP",
    link_demo: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
