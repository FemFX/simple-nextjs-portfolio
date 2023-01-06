import React, { useRef } from "react";
import Header from "./Header";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectBlock from "./ProjectBlock";
import { useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="projects"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all",
        transitionDuration: "1s",
        transitionDelay: "0.3s",
      }}
      className="w-full"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <Header title="Projects" text="What I&#39;ve built" />
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          <ProjectBlock
            title="Property Finder"
            image={propertyImg}
            url="/property"
          />
          <ProjectBlock title="Crypto App" image={cryptoImg} url="/crypto" />
          <ProjectBlock
            title="Netflix Clone"
            image={netflixImg}
            url="/netflix"
          />
          <ProjectBlock title="Twitch Clone" image={twitchImg} url="/twitch" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
