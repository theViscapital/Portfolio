import React from 'react'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-[#40484F]'>

    {/* contianer */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#FFFEFB]'>
            <p className='text-[#FBB623] text-3xl pb-2'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold pb-8'>DeVaughn Stephens</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#0A0909]'>I'm a Full-Stack Devloper</h2>
            <p className='py-6 max-w-[500px]'>focused on designing and building immersive experiences through responsive web pages and full-stack web applications</p>

            <div>
                <button className='text-[#FFFEFB] border-4 border-[#FFFEFB] px-6 py-3 my-2 flex items-center hover:bg-[#FBB623] hover:border-[#0A0909] hover:text-[#0A0909] font-bold'>
                <Link to="work" smooth={true} duration={500}>
                  View My Work &gt;
                </Link>
                 </button>
            </div>
        </div>
    </div>
  )
}

export default Home