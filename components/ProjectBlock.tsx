import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProjectBlockProps {
  title: string;
  image: StaticImageData;
  url: string;
}

const ProjectBlock: FC<IProjectBlockProps> = ({ title, image, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={image}
        alt="property"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:flex absolute text-white flex-col  items-center justify-center">
        <h3 className="text-2xl tracking-widest">{title}</h3>
        <p className="pb-4 pt-2">React JS</p>
        <Link href={url}>
          <p className="p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectBlock;
