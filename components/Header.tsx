import React, { FC } from "react";

interface IHeaderProps {
  title: string;
  text: string;
}

const Header: FC<IHeaderProps> = ({ title, text }) => {
  return (
    <>
      <p className="text-xl py-4 uppercase tracking-widest text-[#5651e5]">
        {title}
      </p>
      <h2 className="py-4">{text}</h2>
    </>
  );
};

export default Header;
