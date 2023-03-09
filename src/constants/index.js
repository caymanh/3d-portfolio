import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mastercard,
  tvo,
  diglit,
  stealth,
  threejs,
  cocktail,
  dalle,
  music,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Product Management",
    icon: mobile,
  },
  {
    title: "Product Marketing",
    icon: backend,
  },
  {
    title: "Management Consulting",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Product Marketing Manager",
    company_name: "Stealth Startup",
    icon: stealth,
    iconBg: "#FFFFFF",
    date: "April 2022 - December 2022",
    points: [
      "Developed go-to-market strategies for financial services products by performing user research, competitive analysis, and customer segmentation, developing product positioning and messaging, and leading the marketing team to implement campaigns to grow Monthly Transacting Users",
    ],
  },
  {
    title: "Product Manager",
    company_name: "Mastercard",
    icon: mastercard,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - April 2022",
    points: [
      "Drove commercialization of marketing products by partnering with Sales and Analytics teams to identify customer needs, develop a P4P pricing strategy to resolve customer pain point of high upfront costs, and bundle product suites to meet customer needs",
    ],
  },
  {
    title: "Web Production Artist",
    company_name: "TVO",
    icon: tvo,
    iconBg: "#FFFFFF",
    date: "May 2021 - September 2021",
    points: [
      "Developed layout and arrangement of graphics for online courses using HTML and CSS by incorporating responsive web design and ensuring principles of inclusivity and accessibility were maintained, contributing to the completion of educational courses",
    ],
  },
  {
    title: "Software Developer",
    company_name: "DigLit",
    icon: diglit,
    iconBg: "#FFFFFF",
    date: "March 2021 - July 2021",
    points: [
      "Built front-end React components for a volunteer scheduling application by adding functionality to display a popup card when the user interacts with the webpage",
      "Developed and executed unit tests for web applications using Cypress to identify software",
    ],
  },
  {
    title: "Associate Managing Consultant",
    company_name: "Mastercard",
    icon: mastercard,
    iconBg: "#FFFFFF",
    date: "August 2020 - December 2021",
    points: [
      "Oversaw marketing programs to drive activation and reactivation of credit cardholders through merchant partnerships, collaborated with the Analytics team to identify target customer segments, developed A/B testing strategy for offer constructs, and liaised with agencies to create campaigns",
      "Led workstream to analyze financial institution's credit card portfolio using propensity model, identified customer segments likely to adopt new card product, and developed strategy to drive product adoption",
    ],
  },
];

const projects = [
  {
    name: "AI Image Generator",
    description:
      "Web-based application that enables users to generate an image via OpenAI's DALL-E model and share it with the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/caymanh/ai-image-generator",
  },
  {
    name: "Music App",
    description:
      "Music application that enables users to search for songs, play music, and discover the latest hits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/caymanh/music-app",
  },
  {
    name: "Cocktail Recipe",
    description:
      "Web application that generates cocktail recipes based on user preferences via a Cocktail API.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "materialize",
        color: "pink-text-gradient",
      },
    ],
    image: cocktail,
    source_code_link: "https://github.com/nsuroghon/5-o-Clock-Somewhere",
  },
];

export { services, technologies, experiences, projects };
