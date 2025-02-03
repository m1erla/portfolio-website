"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Software developer specializing in backend development with Java.{" "}
        <span className="font-medium">
          As a Management Information Systems graduate,
        </span>
        , I have professional experience in developing web applications. I work
        with my passion for technology and the aim of constantly improving
        myself. <span className="font-medium">Currently,</span>.{" "}
        <span className="italic">
          I develop efficient and scalable web applications as a Backend
          developer.
        </span>{" "}
        I have a strong and independent ability to work together successfully as
        a team. My business management background enables me to understand both
        the technical and business capabilities of software development.
        <span className="font-medium"> I am actively learning German</span> and
        serving in Germany's technology sector. A variety of solutions related
        not only to programming but also to business communications, marketing
        and customer relations make me a well-rounded developer who understands
        both code and business needs. I continue to contribute to projects that
        are open to new challenges and developed at an international level. My
        core stack is{" "}
        <span className="font-medium">
          Java, Spring Boot, Docker, React, JavaScript, Cursor AI, MySQL and
          PostqreSql
        </span>
        . I am also familiar with Kotlin, TypeScript, Node.js and Next.js. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and doing workout. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        preparing for the{" "}
        <span className="font-medium">
          IELTS exam for my English and also learning German and how to use AI
          with my core stack.
        </span>
        .
      </p>
    </motion.section>
  );
}
