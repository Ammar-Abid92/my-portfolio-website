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
  python,
  nextjs,
  postgresql,
  langchain,
  ai,
  ebleIcon,
  koderlabsIcon,
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
    id: "education",
    title: "Education",
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
    title: "AI Engineer",
    icon: ai,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    title: "Senior Software Engineer",
    company_name: "E-BLE · Qatar (Remote)",
    icon: ebleIcon,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Working as a Mobile App and AI Engineer on E-BLE, a large-scale B2B app for iOS and Android.",
      "Built a RAG system with Pinecone vector DB to power context-aware AI features.",
      "Developed react-native-sip-smooth, a custom React Native package that enables in-app VoIP calling through Linphone SIP.",
      "Built a Next.js Web SDK for AHOY Maps.",
    ],
  },
  {
    title: "Mobile Software Engineer",
    company_name: "Koderlabs · Karachi",
    icon: koderlabsIcon,
    iconBg: "#E6DEDD",
    date: "January 2024 - July 2024",
    points: [
      "Developed and optimized cross-platform mobile and web apps across Ride-Hailing, B2B, FinTech, HR and Fitness domains using React, React Native, TypeScript and REST APIs.",
      "Built key features like real-time GPS tracking, advanced search, financial reporting, visa workflows and health tracking.",
      "Ensured smooth, consistent performance across iOS and Android while improving scalability and user engagement.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Udhaar Book · Market IQ",
    icon: udhaarIcon,
    iconBg: "#E6DEDD",
    date: "April 2022 - December 2023",
    points: [
      "Developed and maintained Udhaar Book, a React Native B2B fintech app that now has 3.5M active users.",
      "Developed back-end and front-end of many core features in the app like Vouchers, Group payments, background and foreground notifications.",
      "Set up back-end and front-end syncing of the application and optimized performance using Redis database.",
      "Integrated AWS S3 bucket with the back-end to store files and images for quick access.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality features.",
    ],
  },
  {
    title: "React / React Native Developer",
    company_name: "Toko.pk · Market IQ",
    icon: tokoIcon,
    iconBg: "#383E56",
    date: "November 2021 - April 2022",
    points: [
      "Developed and maintained the Toko marketplace mobile and web application using React.js, React-Native and other related technologies.",
      "Worked on building cart functionality for the Toko marketplace mobile and web application.",
      "Integrated customized store creation for the merchant on the mobile application.",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Oscar ERP · Market IQ",
    icon: posIcon,
    iconBg: "#E6DEDD",
    date: "May 2021 - November 2021",
    points: [
      "Developed multiple modules of Oscar ERP, used by 250+ B2B clients, including POS, Inventory and Sales.",
      "Built features on the Python Odoo framework on the back-end and React.js on the front-end.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    degree: "Masters in Artificial Intelligence",
    institute: "NED University",
    result: "CGPA: 3.72 (in progress)",
  },
  {
    degree: "Bachelors in Software Engineering",
    institute: "NED University",
    result: "CGPA: 3.63",
  },
  {
    degree: "Intermediate",
    institute: "Adamjee Science College",
    result: "Grade A-1 (90.1%, 13th rank)",
  },
];

const achievements = [
  "7th rank in Google Kickstart competitive programming competition.",
  "Won SENTEC speed programming competition.",
  "Won Koderz-Kombat problem solving competition by IEEE Iconics.",
  "Served 1 year as Technical Lead of Google DSC NED-UET.",
];

const certifications = [
  "Microsoft MTA-98-381 Certified Python Programmer",
  "NED Agentic-AI Engineer certificate",
  "Expertizo MERN stack development certificate",
  "Coursera Intro to AI and Data Sciences certificate",
  "Google Kickstart & Codejam competition certificate",
  "LinkedIn MongoDB and REST APIs certificate",
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
    name: "E-BLE AI Assistant",
    description:
      "A RAG system built into E-BLE, a large-scale B2B app for iOS and Android. It uses Pinecone vector DB to give the app context-aware AI features.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "RAG",
        color: "green-text-gradient",
      },
      {
        name: "pinecone",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "react-native-sip-smooth",
    description:
      "A custom React Native package that enables in-app VoIP calling through Linphone SIP on iOS and Android.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "VoIP",
        color: "green-text-gradient",
      },
      {
        name: "linphone-SIP",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "AHOY Maps Web SDK",
    description:
      "A Next.js Web SDK for AHOY Maps that lets web applications integrate AHOY's mapping features.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "maps",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Udhaar Book",
    description:
      "B2B fintech mobile app with 3.5M active users. Built core features like Vouchers, Group payments and notifications, with Redis-backed syncing and AWS S3 storage.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "orange-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Oscar ERP",
    description:
      "Web-based ERP used by 250+ B2B clients that lets businesses run Point of sale, Inventory management, and manage their sales.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "odoo",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "orange-text-gradient",
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

export {
  services,
  technologies,
  experiences,
  education,
  achievements,
  certifications,
  testimonials,
  projects,
};
