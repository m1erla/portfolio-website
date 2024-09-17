import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaUserGraduate } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carregister from "@/public/after-login-home.png";
import ecommerce from "@/public/e-commerce.png"
import weather from "@/public/weather-ss.png";
import billgates from "@/public/bill-ss.png";
import node from "@/public/nodes-app.png";
import wallet from "@/public/wallet.png";
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
    title: "Manager",
    location: "Adana, TR",
    description:
      "I ran my own grocery market just a year. After a year i have sold my grocery market.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Graduated bootcamp",
    location: "Adana, TR, Remote",
    description:
      "I enrolled for Patika.dev 6-month full-stack developer bootcamp. Six months later I graduated from bootcamp and received my certification.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Back-End Developer",
    location: "Adana, TR, Remote",
    description:
      "I'm now a back-end developer working as a freelancer. My stack includes Java, Spring Boot, Docker, Render Cloud Server, PostqreSql. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const educationData =[
  {
    title: "Erzurum Atatürk University",
    departmant: "Civil Aviation",
    description: "I graduated from university and received my associate degree. My department was Civil Aviation",
    image: React.createElement(FaUserGraduate),
    date: "2019 - 2022",
  },
  {
    title: "Eskisehir Anadolu University",
    departmant: "Management Information Systems",
    description: "I am currently in my 4th year at university, and I will receive my bachelor's degree this year. My Department Management Information Systems",
    image: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  }
] as const;

export const projectsData = [
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
  "Scrum",
  "Kanban"
] as const;