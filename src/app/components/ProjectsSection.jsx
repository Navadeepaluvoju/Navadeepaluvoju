"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SAVIOUR",
    description: "A UI/UX design project that aims to create a centralized platform for better collaboration and response management among rescue and relief agencies during disasters.",
    image: "/images/projects/1.png",
    tag: ["All", "All"],
    gitUrl: "https://github.com/Navadeepaluvoju/Saviour/",
    previewUrl: "https://www.figma.com/proto/n624uq7PPue67Oor9tRTGN/saviour1?node-id=1-14&scaling=scale-down&page-id=0%3A1&starting-point-node-id=153%3A209&show-proto-sidebar=1/",
  },
  {
    id: 2,
    title: "MEME SHARE APP",
    description: "I have created an Android app using Kotlin and Android Studio. This app is called “MEME SHARE” and it lets you view and share funny memes with your friends. It has a simple interface that shows you a random meme from an API and two buttons for sharing and moving to the next meme. I learned how to use Kotlin, XML, and emulator tools. I also learned how to make API calls and use libraries like Volley and Glide",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Navadeepaluvoju/memesapp/",
    previewUrl: "https://github.com/Navadeepaluvoju/memesapp/",
  },
  {
    id: 3,
    title: "Brithdaycard App",
    description: "The app has a colorful background with a cake image and a text reading “Happy Birthday”. When the user taps on the screen, they are prompted to enter the name of the recipient and then send a personalized message. The app also displays a toast message confirming that the wish has been sent",
    
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Navadeepaluvoju/Brithdaycard/",
    previewUrl: "https://github.com/Navadeepaluvoju/Brithdaycard/",
  },
  
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
