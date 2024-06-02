import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
} from "../types";

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
  sim,
  chess,
  fiverr,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Frontend Developer",
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
    title: "Penetration Tester",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Backend Developer",
    companyName: "Chess.com",
    icon: chess,
    iconBg: "#383E56",
    date: "January 2021 - July 2021",
    points: [
      "Developing and maintaining web applications using related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Translating elements to other languages for app development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Developer & Penetration Tester",
    companyName: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining websites and applications using pure HTML, CSS & JS",
      "Penetration tests and preparing reports for vulnerabilities.",
      "Developing apps and chatbots for according to customer's requests.",
    ],
  },
  {
    title: "Security Researcher",
    companyName: "SimSpace",
    icon: sim,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jan 2023",
    points: [
      "Design and implement new solutions and strategies to enhance and strengthen the company's security infrastructure.",
      "Scan software, hardware, and network systems for weaknesses using manual and automated tools.",
      "Detect, analyze, and respond to security breaches and cyberattacks.",
      "Provide training to employees on cybersecurity threats and protection methods.",
    ],
  },
];


export { services, technologies, experiences};
