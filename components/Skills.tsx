import React, { useRef } from "react";
import SkillBlock from "./SkillBlock";
import { skills } from "../utils/skills";
import Header from "./Header";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      id="skills"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all",
        transitionDuration: "1s",
        transitionDelay: "0.3s",
      }}
      className="w-full lg:h-screen p-2"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <Header title="Skills" text="What I Can Do" />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => {
            return <SkillBlock key={idx} {...skill} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
