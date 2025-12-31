"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href, className }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathName === href ? "bg-secondary text-white" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
