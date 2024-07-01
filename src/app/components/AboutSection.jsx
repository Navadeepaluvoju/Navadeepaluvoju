"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>Java</li>
        <li>Python</li>
        <li>Kotlin</li>
        <li>Mysql</li>
        <li>Machine Learning</li>
      </ul>
    ),
  },
  {
    title: "Volunter and Positions",
    id: "Volunter and Positions",
    content: (
      <ul className="list-disc pl-2">
         <li>IEEEgnitc- ProposalManager</li>
        <li>Google Student Developer</li>
      </ul>
    ),
  },
  
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
    <li>
      <b>Guru Nanak Institutions Technical Campus</b>
      <ul>
       
        <ul>Bachelor of Technology in Computer Science with Aritifical Intelligence and Machine Learning specialization .</ul>
      </ul>
    </li>

   
 
  </ul>
      
    ),
  },
  {
    title: "Internships",
    id: "Internships",
    content: (
      <ul className="list-disc pl-2">
        <li><b>PHN Technology Pvt.Ltd</b></li>
      
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
              I&apos;m a passionate AI/ML enthusiast and I&apos;m in my penultimate year of Computer Science with AIML specialization. I&apos;ve honed my skills in application development using Java, Python, C, Kotlin, and other relevant languages.

My interests extend to application development, where I create user-centric experiences that seamlessly blend form and function. I possess excellent communication and interpersonal skills, with a proven ability to build strong relationships and foster collaborative environments. Demonstrated eagerness to learn and contribute to innovative projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                id={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;