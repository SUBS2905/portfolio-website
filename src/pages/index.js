import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-profile.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subhransu | Home Page</title>
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-8">
          <div className="flex flex-col justify-between items-center w-full lg:flex-row">
            <div className="lg:w-1/2">
              <Image
                src={profilePic}
                alt=""
                className="h-auto rounded-lg lg:w-3/4"
              />
            </div>
            <div className="flex flex-col items-center self-center lg:w-1/2">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="text-center lg:text-left"
              />
              <p className="my-4 text-base font-medium text-center lg:text-left">
                Welcome to my portfolio! I&apos;m thrilled to share my journey
                as a final year Computer Science and Engineering student with a
                passion for Web Development. Get ready to explore the
                captivating world of websites and digital experiences, where
                creativity meets functionality.
              </p>
              <p className="my-4 text-base font-medium text-center lg:text-left">
                So, whether you&apos;re a fellow enthusiast, a potential
                collaborator, or simply curious about the fascinating world of
                web development, I invite you to explore my portfolio and
                discover the possibilities that lie within. Let&apos;s embark on
                this journey together and create extraordinary digital
                experiences!
              </p>
              <div className="flex flex-col items-center gap-4 mt-2 lg:flex-row lg:self-start lg:gap-0">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
                >
                  Resume <LinkArrow className={"w-6 m-1"} />
                </Link>
                <Link
                  href="mailto:subhransu.majhi2020@vitbhopal.ac.in"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize underline "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
