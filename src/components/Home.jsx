import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#40484F]">
      {/* container */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8 text-[#FFFEFB]">
        <p className=" pb-2 text-3xl text-[#0A0909] sm:text-4xl md:text-5xl ">Hi, my name is</p>
        <h1 className="pb-8 text-5xl font-bold md:text-7xl lg:text-8xl">DeVaughn Stephens</h1>
        <h2 className=" text-4xl font-bold text-[#FBB623] underline decoration-[#0A0909] decoration-[8px] underline-offset-[14px] sm:decoration-[12px] sm:underline-offset-[18px] md:text-6xl lg:text-7xl">
          I'm a Full-Stack Developer
        </h2>

        <div>
          <button className="mb-12 mt-14 flex items-center rounded-[4px] border-4 border-[#FFFEFB] bg-black px-12 py-6 font-bold text-[#FFFEFB] hover:translate-x-1.5 hover:translate-y-1.5 hover:border-[#0A0909] hover:bg-[#FBB623] hover:text-[#0A0909] hover:shadow-md hover:shadow-[#FBB623]">
            <Link to="work" smooth={true} duration={500}>
              View My Work &gt;
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
