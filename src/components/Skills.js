import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-transparent text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:bg-dark lg:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{once: true}}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-4xl mt-28 w-full text-center lg:mt-64 lg:text-6xl">Skills</h2>
      <div className="w-full h-screen relative flex justify-center items-center rounded-full bg-circularLight">
        <motion.div
          className="hidden items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer lg:flex"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <Skill name="C++" x="0" y="-7vw" />
        <Skill name="Java" x="10vw" y="4vw" />
        <Skill name="ReactJS" x="-15vw" y="6vw" />
        <Skill name="NextJS" x="12vw" y="-9vw" />
        <Skill name="TailwindCSS" x="-22vw" y="-7vw" />
        <Skill name="NodeJS" x="0vw" y="15vw" />
        <Skill name="ExpressJS" x="-8vw" y="-18vw" />
        <Skill name="MongoDB" x="26vw" y="0" />
        <Skill name="FireBase" x="25vw" y="-17vw" />
        <Skill name="Framer Motion" x="-28vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
