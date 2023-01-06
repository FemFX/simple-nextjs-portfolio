import { StaticImageData } from "next/image";
import React, { FC } from "react";
import Image from "next/image";

interface ISkillBlockProps {
  image: StaticImageData;
  text: string;
}

const SkillBlock: FC<ISkillBlockProps> = ({ image, text }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={image} width={64} height={64} alt={text} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillBlock;
