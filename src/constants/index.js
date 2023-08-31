import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  Home,
  kharyala,
  pos,
  posIcon,
  jobit,
  tripguide,
  threejs,
  tokoIcon,
  udhaarIcon,
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
    title: "Google DSC Technical Lead",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Udhaar Book",
    icon: udhaarIcon,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Developed back-end and front-end of many core features in the app like Vouchers, Group payments, background and foreground notifications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality features.",
      "Set up back-end and front-end syncing of the application and optimized performance using Redis database.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrated AWS S3 bucket with the back-end to store files and images for quick access."
    ],
  },
  {
    title: "React / React Native Developer",
    company_name: "Toko.pk",
    icon: tokoIcon,
    iconBg: "#E6DEDD",
    date: "November 2021 - April 2022",
    points: [
      "Developing and maintaining Toko mobile and web application using React.js, React-Native and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked on building cart functionality for the Toko marketplace mobile and web application.",
      "Integrated customized store creation for the merchant on the mobile application."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Oscar.pk",
    icon: posIcon,
    iconBg: "#383E56",
    date: "May 2021 - November 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "ERP SaaS",
    description:
      "Web-based progressive web application that allows businesses to use Point of sale, Inventory management, and manage their sales.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://github.com/Ammar-Abid92",
  },
  {
    name: "Kharyala Welfare Trust",
    description:
      "Web application for a welfare trust enables users to get knowledge about their welfare work. It was built on the demand of a local client.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kharyala,
    source_code_link: "https://github.com/Ammar-Abid92/kharyalawelfaretrust",
  },
  {
    name: "Tenant Track",
    description:
      "A comprehensive mobile application that let landlord track all of his tenants. It also help tenant to pay rent, request for maintenance. It is also live on play store.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Home,
    source_code_link: "https://github.com/Ammar-Abid92/tenantTrack-backend",
  },
];

export { services, technologies, experiences, testimonials, projects };
