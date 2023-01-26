import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaListAlt } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed flex h-[80px] w-full items-center justify-between border-b-2 border-black bg-[#FBB623] px-4 text-white">
      {/* LOGO */}
      <div className="group flex">
        <div className="group-hover:hidden">
          <h1 className="text-5xl font-extrabold">
            &lt;
            <span className="text-black">DEV</span>
            &#47;&#62;
          </h1>
        </div>

        <div className="invisible group-hover:visible">
          <h1 className="text-5xl font-extrabold">
            &lt;
            <span className="text-black">DEVAUGHN</span>
            &#47;&#62;
          </h1>
        </div>
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li className="text-2xl hover:text-[#0A0909]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="text-2xl hover:text-[#0A0909]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="text-2xl hover:text-[#0A0909] ">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className="text-2xl hover:text-[#0A0909] ">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li className="text-2xl hover:text-[#0A0909] ">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-[#FBB623]"
        }>
        <li className="py-6 text-4xl font-bold text-[#40484F]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl font-bold text-[#40484F]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl font-bold text-[#40484F]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className="py-6 text-4xl font-bold text-[#40484F]">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li className="py-6 text-4xl font-bold text-[#40484F]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="fixed top-[35%] left-0 hidden flex-col lg:flex">
        <ul>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#0E76A8] duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between text-[white]"
              href="https://www.linkedin.com/in/devaughn-stephens-8b8852146/">
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#6e5494] duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between text-[white]"
              href="https://github.com/DeVaughntheDev">
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#333333] duration-300 hover:ml-[-10px]">
            <a className="flex w-full items-center justify-between text-[white]" href="/">
              Resumè
              <FaListAlt size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
