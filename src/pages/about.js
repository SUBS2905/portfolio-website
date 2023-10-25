import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profile-pic.png";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Subhransu | About page</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-8 lg:gap-16">
            <div className="col-span-8 flex flex-col items-start justify-start lg:col-span-4 lg:flex-col">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
              Hey there! I&apos;m a final year Computer Science and Engineering student at Vellore Institute of Technology, Bhopal. Programming and video games are my obsessions, and I&apos;m always seeking new ways to level up my skills.
              </p>
              <p className="my-4 font-medium">
              When I&apos;m not immersed in lines of code, you&apos;ll likely find me with a cup of tea in hand. There&apos;s something magical about the brew that fuels my creativity and keeps me energized throughout the day.
              </p>
              <p className="font-medium">
              Join me on this exciting adventure as I navigate the world of technology, conquer coding challenges, and unlock the secrets of immersive gaming experiences. Together, let&apos;s embark on a journey where code meets pixels, and tea fuels innovation. Cheers to innovation and limitless possibilities!
              </p>
            </div>
            <div className="col-span-8 lg:col-span-1"></div>
            <div className="col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 lg:col-span-3">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image src={profilePic} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <Skills />
          <Education />
          <Certifications />
        </Layout>
      </main>
    </>
  );
};

export default about;
