import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  LeetcodeIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute w-0 left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} my-2 relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-white absolute w-0 left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        isActive ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full p-10 font-medium flex items-center justify-end lg:px-32 lg:justify-between">
      <button
        className="flex flex-col justify-center items-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-1 ${
            isOpen ? "opacity-0" : "opacity-1"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      
      {/* Navbar for large screens */}
      <div className="w-full justify-between items-center hidden lg:flex">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 " />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>
        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://github.com/SUBS2905"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://leetcode.com/SUBS2905/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LeetcodeIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/subhransu-majhi/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/subhranshu_majhi/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/SUBS2905"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
        </nav>
      </div>

      {/*Navbar for Smaller Screens */}
      {isOpen && (
        <div className="min-w-[70vw] flex flex-col gap-6 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-800/80 rounded-lg backdrop-blur-md py-20">
          <nav className="flex flex-col items-center justify-center text-white">
            <CustomMobileLink
              href="/"
              title="Home"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://github.com/SUBS2905"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 text-white"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://leetcode.com/SUBS2905/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LeetcodeIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/subhransu-majhi/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/subhranshu_majhi/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/SUBS2905"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
        </nav>
        </div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
