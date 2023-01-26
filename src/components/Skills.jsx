import React from "react";
import HTML from "../assets/html.png";
import REACT from "../assets/react.png";
import NODE from "../assets/node.png";
import TAILWIND from "../assets/tailwind.png";
import GITHUB from "../assets/github.png";
import JAVASCRIPT from "../assets/javascript.png";
import MYSQL from "../assets/mysql.png";
import PYTHON from "../assets/python.png";

const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#40484F] text-[#FFFEFB]">
      {/* CONTAINER */}
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div>
          <p className="inline border-b-4 border-[#FBB623] text-4xl font-bold">Skills</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 py-8 text-center sm:grid-cols-3">
          <div className=" rounded-lg pt-6 shadow-lg shadow-black duration-500  hover:scale-110">
            <img className="mx-auto w-20" src={HTML} alt="HTML" />
            <p className="my-4 text-lg text-[#FBB623]">HTML 5</p>
          </div>

          <div className="rounded-lg pt-6 shadow-lg shadow-black duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={JAVASCRIPT} alt="JAVASCRIPT" />
            <p className="my-4 text-lg text-[#FBB623]">JAVASCRIPT</p>
          </div>

          <div className="rounded-lg pt-6 shadow-lg shadow-black duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={REACT} alt="REACT" />
            <p className="my-4 text-lg text-[#FBB623]">REACT</p>
          </div>

          <div className="rounded-lg pt-6 shadow-lg shadow-black duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={NODE} alt="NODE" />
            <p className="my-4 text-lg text-[#FBB623]">NODE.JS</p>
          </div>

          <div className="rounded-lg pt-6 shadow-lg shadow-black duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={TAILWIND} alt="TAILWIND" />
            <p className="my-4 text-lg text-[#FBB623]">TAILWIND</p>
          </div>

          <div className="rounded-lg pt-6 shadow-lg shadow-black duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={GITHUB} alt="GITHUB" />
            <p className="my-4 text-lg text-[#FBB623]">GITHUB</p>
          </div>

          <div className="rounded-lg pt-6 shadow-lg shadow-black duration-500 hover:scale-110">
            <img className=" mx-auto w-20" src={MYSQL} alt="MySQL" />
            <p className="my-4 text-lg text-[#FBB623] ">MYSQL</p>
          </div>

          <div className="rounded-lg pt-6 shadow-lg shadow-black duration-500 hover:scale-110">
            <img className=" mx-auto w-20" src={PYTHON} alt="PYTHON" />
            <p className="my-4 text-lg text-[#FBB623] ">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
