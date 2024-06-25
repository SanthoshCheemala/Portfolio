import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Invest Africa",
    href: "/projects",
    tags: ["ReactJs", "Tailwindcss", "ExpressJS", "PostgreSQL"],
    image: {
      LIGHT: "/images/projects/InvestAfrica.png",
      DARK: "/images/projects/InvestAfrica.png",
    },
  },
  {
    index: 1,
    title: "EatsExpress",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "TailwindCss",
      "React-router-dom",
      "Redux",
      "Vercel",
      "Express",
    ],
    image: {
      LIGHT: "images/projects/EatsExpress.png",
      DARK: "images/projects/EatsExpress.png",
    },
  },
  {
    index: 2,
    title: "CampusConcern",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "ExpressJs", "React-router-dom"],
    image: {
      LIGHT: "images/projects/Campus_concern.png",
      DARK: "images/projects/Campus_concern.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Invest Africa",
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: ["/images/projects/InvestAfrica.png"],
    description:
      "Developed the Invest Africa Platform using React.js and TypeScript. This business platform connects users with African professionals, fostering collaboration and promoting business growth across the continent.",
    sourceCodeHref: "https://github.com/SanthoshCheemala/Adam-I",
    liveWebsiteHref: "https://adam-i.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/Porfolio.png",
      "/images/projects/Porfolio.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/santhoshcheemala",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Eats Express",
    favicon: "/images/projects/logos/food-delivery.png",
    imageUrl: ["images/projects/EatsExpress.png"],
    description:
      "Developed EatsExpress using the MERN stack with TypeScript, providing a user-friendly interface similar to Zomato. It facilitates easy exploration of diverse culinary options, enhancing the dining experience with seamless functionality.",
    sourceCodeHref: "https://github.com/SanthoshCheemala/EatsExpress",
  },
  {
    name: "Campus Concern",
    favicon: "/images/projects/logos/Campus.png",
    imageUrl: ["images/projects/Campus_concern.png"],
    description:
      "Developed a student complaint management system utilizing the MERN stack (MongoDB, Express.js, React, Node.js), designed for efficient complaint submission, tracking, and resolution, ensuring scalability and robust security measures.",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
  },
  // {
  //   name: "Gym Guru Hub",
  //   favicon: "/images/projects/logos/Gym.webp",
  //   imageUrl: ["images/projects/FitWeb.png"],
  //   description:
  //     "RapidAPI facilitates seamless data integration from various sources, enriching the gym trainer website with enhanced functionality and real-time updates.",
  //   sourceCodeHref: "https://github.com/SanthoshCheemala/Gym-Trainer-App",
  // },
];
