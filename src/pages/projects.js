import React from "react";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import chatalot from "../../public/images/projects/chatalot.png";
import scholar from "../../public/images/projects/scholar.png";
import sukoon from "../../public/images/projects/sukoon.png";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-auto hover:scale-110 transition ease-in-out delay-100 duration-200"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Subhransu | Projects page</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Sukoon"
                summary="Sukoon is aimed at addressing the increasing mental health challenges faced by adolescents. 
                It provides a safe and comfortable platform for clients to seek help from the convenience of their homes.
                It offers features like self-screening, connect with professionals at their preferred time, track their progress, 
                and schedule follow-up sessions if needed."
                type="Featured Project"
                image={sukoon}
                link="https://sukoon-web.vercel.app/"
                github="https://github.com/SUBS2905/sukoon2.0"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="chat-A-lot"
                summary="A React x Firebase based chat application with a polished UI, authentication, email verification, and personal chat functionalities, including message and image sending capabilities. Utilized Firebase for real-time communication and data storage, and React for a dynamic front-end."
                type="Featured Project"
                image={chatalot}
                link="https://fluffy-dasik-c2be7c.netlify.app/"
                github="https://github.com/SUBS2905/chatAlot"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Scholar Extension"
                summary="Scholar extension is a feature loaded extension which gives you quick access to various applications and features. It not only saves time, improves user experience but also improves your multitasking. It contains all essential application like news, to-do list, blogs, dictionary, jokes, daily quotes, timer, calculator, game. And the show-stopper YouTube ad-skip feature."
                type="Featured Project"
                image={scholar}
                link="https://microsoftedge.microsoft.com/addons/detail/scholar-extension/ealcaeeibjbbldffggeddeedfaajiekb"
                github="https://github.com/d17012002/scholar-extension"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
