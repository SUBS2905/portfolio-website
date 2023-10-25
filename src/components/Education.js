import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Detail = ({ degree, time, institute, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/4 mx-auto flex flex-col items-start justify-between lg:w-[60%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl">{degree}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {institute}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-8 lg:my-64">
      <h2 className="font-bold text-4xl mb-32 w-full text-center lg:text-6xl">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 w-[4px] h-full bg-dark origin-top lg:left-28"
        />
        <ul className="w-full flex flex-col items-start justify-between lg:ml-28">
          <Detail
            degree="Bachelor of Technology"
            time="2020-2024"
            institute="Vellore Institute of Technology, Bhopal"
            info="Pursuing my B.tech in Computing Science and Engineering"
          />
          <Detail
            degree="Class XII"
            time="2018-2019"
            institute="DAV Public School, MCL, Bandhabahal"
            info="Completed my AISSCE and secured 93.6%"
          />
          <Detail
            degree="Class X"
            time="2016-2017"
            institute="Delhi Public School, Kamptee Road, Nagpur"
            info="Completed my AISSE and secured 10 CGPA"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
