import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";
import { LinkArrow } from "./Icons";

const Detail = ({ title, time, provider, link }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl">{title}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {provider}
        </span>
        <div className="flex items-center self-start mt-2">
          <Link
            href={link}
            target={"_blank"}
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
          >
            View <LinkArrow className={"w-6 m-1"} />
          </Link>
        </div>
      </motion.div>
    </li>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h1 className="font-bold text-6xl mb-32 w-full text-center">
        Certifications
      </h1>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-28 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-28">
          <Detail
            title="Security, Compliance, and Identity Fundamentals"
            time="June 2023"
            provider="Microsoft Certified Fundamentals"
            link="https://drive.google.com/file/d/1BCbqGuK7ZRJgSQZhgoLtnElHpJtQViyM/view?usp=sharing"
          />
          <Detail
            title="Google Data Analytics"
            time="Feb 2023"
            provider="Coursera"
            link="https://www.coursera.org/account/accomplishments/specialization/certificate/FRLJKRQ7VTU9"
          />
          <Detail
            title="Applied Machine Learning in Python"
            time="Oct 2021"
            provider="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/QE4YNRL6TF5N"
          />
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
