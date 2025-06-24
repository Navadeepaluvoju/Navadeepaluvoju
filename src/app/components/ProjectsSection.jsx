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
    tag: ["All", "App/Web"],
    gitUrl: "https://github.com/Navadeepaluvoju/memesapp/",
    previewUrl: "https://github.com/Navadeepaluvoju/memesapp/",
  },

  
  {
    id: 3,
    title: "SADA ANNAPURA",
    description: "Sada Annapurna a wordpres website stands as a beacon of hope and compassion. By bridging the gap between those who have surplus and those in need, it transforms what would be waste into sustenance. This ensures that no one has to suffer from hunger. Sada Annapurna embodies the spirit of generosity and community. It reminds us that together, we can build a hunger-free nation",
    
    image: "/images/projects/12.png",
    tag: ["All", "App/Web"],
    gitUrl: "https://sadaannapurna.wordpress.com/",
    previewUrl: "https://sadaannapurna.wordpress.com/",
  },
    {
    id: 4,
    title: "Applying-ML-to-Identify-Malicious-Behavior",
    description: "This project is a Flask-based web application that enables users to input data and receive real-time predictions using Natural Language Processing (NLP) and Logistic Regression. The app includes a login system, home dashboard, and a detection page for analyzing user input—perfect for text classification tasks like sentiment analysis or spam detection.",
    
    image: "/images/projects/3.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Navadeepaluvoju/Applying-ML-to-Identify-Malicious-Behavior.git",
    previewUrl: "https://github.com/Navadeepaluvoju/Applying-ML-to-Identify-Malicious-Behavior.git",
  },
  {
    id: 5,
    title: "PREDICTING-HOSPITAL-STAY-LENGTH-USING-KNN-REGRESSOR-OPTIMIZED-WITH-GRID-SEARCH-CV",
    description: "Efficient bed management is essential for minimizing hospital costs, improving efficiency, and enhancing patient outcomes. This study introduces a predictive framework for forecasting hospital-ICU length of stay (LOS) at admission, leveraging hospital EHR data. Unlike prior work, which heavily relied on advanced tree-based models, this research proposes a K-Nearest Neighbors (KNN) model with hyper-parameter optimization using Grid-Search CV for predicting ICU patients’ LOS. The KNN model effectively classifies patients into short and long LOS categories by learning patterns in clinical information systems (CIS). To ensure robustness, we evaluated the model using various performance metrics, including Accuracy, AUC, Sensitivity, Specificity, F1-score, Precision, and Recall. The optimized KNN model demonstrated competitive predictive performance with improved interpretability compared to traditional complex models. Additionally, explainable artificial intelligence (xAI) techniques were incorporated to provide transparent insights into the decision-making process, further enhancing the trustworthiness of the predictions. This work highlights the potential of using machine learning models like KNN for reliable, interpretable, and efficient ICU LOS prediction, aiding hospitals in improving resource allocation and patient care outcomes." give it in two line description",
    
    image: "/images/projects/11.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Navadeepaluvoju/PREDICTING-HOSPITAL-STAY-LENGTH-USING-KNN-REGRESSOR-OPTIMIZED-WITH-GRID-SEARCH-CV.git",
    previewUrl: "https://github.com/Navadeepaluvoju/PREDICTING-HOSPITAL-STAY-LENGTH-USING-KNN-REGRESSOR-OPTIMIZED-WITH-GRID-SEARCH-CV.git",
  },
  {
    id: 6,
    title: "Supervised Fine-Tuning of LLMs",
    description: "Supervised fine-tuning involves training a pre-trained LLM on a dataset that contains labeled examples. This means the model learns to map inputs to the correct outputs by minimizing a loss function, which measures the difference between the model &apos; predictions and the actual labels",
    
    image: "/images/projects/6.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Navadeepaluvoju/llm_supervised-",
    previewUrl: "https://github.com/Navadeepaluvoju/llm_supervised-",
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
          name="App/Web"
          isSelected={tag === "App/Web"}
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
