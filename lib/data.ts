import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
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
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Graduated bootcamp",
    location: "Adana, TR",
    description:
      "I enrolled patika.dev full-stack developer bootcamp for about 6 months. After six months i have graduated from bootcamp and i received my certificate.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Back-End Developer",
    location: "Adana, TR",
    description:
      "I'm now a back-end developer working as a freelancer. My stack includes Java, Spring Boot, Docker, Render Cloud Server, PostqreSql. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Car Registeration System",
    description:
      "I created a car registration site as a final project to graduate from bootcamp.",
    tags: ["Java", "Spring Boot", "PostqreSql", "React", "JavaScript", "Node.js", "CSS", "Mui Material"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-commerce",
    description:
      "E-commerce website. It has a register, login system. It shows products, can able to add to basket, add image of product on this website and also it has a admin panel that can able to crud process all products.",
    tags: ["React", "JavaScript", "Node.js", "CSS", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "TypeScript",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "C#",
  ".Net",
  "Framer Motion",
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