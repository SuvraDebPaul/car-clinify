import Image from "next/image";
import React from "react";
import logo from "../../public/logo.jpg";

const Logo = ({ className }) => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={200}
      height={100}
      className={`${className}`}
    />
  );
};

export default Logo;
