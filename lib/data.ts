import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { LuGraduationCap, LuWorkflow } from "react-icons/lu";
import carregister from "@/public/after-login-home.png";
import ecommerce from "@/public/e-commerce.png"
import weather from "@/public/weather-ss.png";
import billgates from "@/public/bill-ss.png";
import node from "@/public/nodes-app.png";
import wallet from "@/public/wallet.png";
import worldcountries from "@/public/world-countries-explorer.png";
import buildbetter from "@/public/build-better.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Soft-Skills",
    hash: "#soft-skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Feedback",
    hash: "#feedback",
  }

] as const;

export const experiencesData = [
  {
    title: "Junior Software Engineer | Turkmen Media",
    location: "Adana, TR, Remote",
    description:
      "Developed and maintained web-based enterprise-level applications, enhancing user experience and system reliability. My stack includes Java, Spring Boot, Docker, VPS, MySQL, Websocket. Developed backend and contributing to frontend codebases. Designed and implemented RESTful APIs, facilitating seamless integration with third-party services.  Deployment and maintenance of the project on VPS with docker. Stripe SEPA payment method integration. Developed chat room application.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Volunteer Backend Developer | AYS",
    location: "Adana, TR, Remote",
    description:
      "As a volunteer backend developer, I contribute to the development and maintenance of the team's project.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },

  {
    title: "IT Support Technician | KINTEX",
    location: "Adana, TR, Internship",
    description:
      "I worked as a IT support technician intern.",
    icon: React.createElement(LuWorkflow),
    date: "2024",
  },
  {
    title: "6-month Fullstack Web Development Boot Camp | Patika+",
    location: "Adana, TR, Remote",
    description:
      "I participated in a comprehensive bootcamp program at Patika where I mastered Java, Spring Boot and React. I integrated these skills into a final project that showcased my abilities across the entire stack. I created a car registration system.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Backend Developer | Wiki Software",
    location: "Adana, TR, Remote",
    description:
      "I learned how to use Swing, Hibernate in the projects we created. I collaborated with projects, helped my team present the project to customers.",
    icon: React.createElement(LuWorkflow),
    date: "2021 - 2022",
  },
  {
    title: "Business Owner | KARMAR Market",
    location: "Adana, TR",
    description:
      "I ran a grocery store for a year. After purchasing the market, I increased the number of customers from 150 to 300. Sales increased by 40% in one month and my income increased by 50% in one month.",
    icon: React.createElement(LuWorkflow),
    date: "2019 - 2020",
  },


] as const;

export const educationData =[
  {
    title: "Eskisehir Anadolu University",
    departmant: "Management Information Systems",
    description: "I graduated from university, and I received my bachelor's degree. My Department was Management Information Systems",
    image: React.createElement(FaUserGraduate),
    date: "2019 - 2024",

  }, {
    title: "CS50's Introduction to Computer Science",
    departmant: "Computer Science",
    description: "I learned the basics of computer science and programming. I used HTML · Scratch · SQL · C · SQLite · CSS · Python · Flask · JavaScript",
    image: React.createElement(LuGraduationCap),
    date: "2023",


  }, {
    title: "Solidity & BNB Chain Development Bootcamp",
    departmant: "Blockchain",
    description: "I learned how to use Solidity, BNB Chain, and how to create a smart contract. I also learned how to use the BNB Chain blockchain explorer.",
    image: React.createElement(LuGraduationCap),
    date: "2023",


  }, {
    title: "QA Test Engineer, Bootcamp",
    departmant: "QA Test Engineer",
    description: "I learned how to use Selenium, Pytest, and how to create a test case. I also learned how to use the Selenium browser. I used Python · pytest · Selenium · Sauce Labs",
    image: React.createElement(LuGraduationCap),
    date: "2023",

  }
] as const;

export const projectsData = [
  {
    title: "Build Better",
    description:
      "BuildBetter is a Spring Boot based web application. It's a backend API project that includes core features such as user management, advertisement management, and service management.",
    tags: ["Java 17", "Spring Framework", "Spring Boot 3.1.5", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring REST", "JWT Authentication", "WebSocket", "Swagger UI", "Model Mapper", "Maven", "PostgreSQL"],
    imageUrl: buildbetter,
    projectLink: "https://github.com/m1erla/BuildBetter"
  },
  {
    title: "World Countries Explorer",
    description:
      "A modern web application for exploring countries around the world. Built with React, TypeScript, and Redux. ",
    tags: ["React", "TypeScript", "Redux Toolkit", "CSS Modules", "REST Countries API"],
    imageUrl: worldcountries,
    projectLink: "https://world-countries-explorer-mu.vercel.app/"


  },
  {
    title: "Car Registeration System",
    description:
      "I created a car registration site as a final project to graduate from bootcamp.",
    tags: ["Java", "Spring Boot", "PostqreSql", "React", "Redux", "JavaScript", "Node.js", "CSS", "Mui Material"],
    imageUrl: carregister,
    projectLink: "https://github.com/m1erla/car-registration-system"
  },
  {
    title: "E-commerce",
    description:
      "E-commerce website. It has a register, login system. It shows products, can able to add to basket, add image of product on this website and also it has a admin panel that can able to crud process all products.",
    tags: ["React", "JavaScript", "Node.js", "CSS", "Context"],
    imageUrl: ecommerce,
    projectLink: "https://github.com/m1erla/e-commerce"
  },
  {
    title: "Web3",
    description:
      "Chiliz web3 project is an innovative platform that harnesses the power of blockchain technology, particularly utilizing Moralis and Thirdweb, to provide users with seamless access to their cryptocurrency wallets and NFT's.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Context", "CSS", "Moralis", "Thirdweb"],
    imageUrl: wallet,
    projectLink: "https://github.com/m1erla/Chiliz-Web3-Bootcamp-Final-Project"
  },
  {
    title: "Weather App",
    description:
      "A weather app is a digital application that provides users with real-time and forecasted weather information for a specific location.",
    tags: ["React", "Node.js", "JavaScript", "Forecast", "CSS"],
    imageUrl: weather,
    projectLink: "https://github.com/m1erla/weather-app"
  },
 
  {
    title: "Spend Bill Gates's Money",
    description:
      "A money spending app. You can buy any product you want and spend Bill Gates' money as you wish.",
    tags: ["React", "Node.js", "Redux", "JavaScript", "Bootstrap"],
    imageUrl: billgates,
    projectLink: "https://github.com/m1erla/reactPatika/tree/main/React-Lessons/bill-gates-money"
  },
  {
    title: "Node App",
    description:
      "Node app is a versatile and user-friendly application that empowers users to manage their tasks and notes efficiently.",
    tags: ["React", "Node.js", "Redux", "JavaScript", "Bootstrap"],
    imageUrl: node,
    projectLink: "https://github.com/m1erla/nodes-app"
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Boot",
  "Docker",
  "React",
  "Next.js",
  "Node.js",
  "Jira",
  "Scrum",
  "Confluence",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "C#",
  ".Net",
  "Kotlin",
  "TypeScript",
  "Selenium",
  "Pytest",
  "VPS",
  "AWS",
  "CI/CD",
  "Gitlab",
  "Gitlab CI/CD",
  "Swing",
  "Hibernate",
  "Context",
  "Mui Material",
  "Bootstrap",
  "Turkish",
  "English",
  "German",
  
] as const;

export const softskillsData= [
  "Passion and Dedication",
  "Adaptability",
  "Proactivity",
  "Research Orientation",
  "Continuous Learner",
  "Time Management",
  "Team Collaboration",
  "Strong Sense of Responsibility",
  "Attention to Detail",
  "Agile",
] as const;