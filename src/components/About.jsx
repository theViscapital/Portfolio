import React from 'react'
import Vaughn from '../assets/Vaughn.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#40484F] text-[#FFFEFB]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-6'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FBB623]'>
                    About
                    </p>
                </div>
                <div>
                {/* EMPTY GRID DIV */}
                </div>
            </div>
            
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6 py-6'>
                    <img className=' w-full h-auto sm:h-full rounded-lg shadow-lg shadow-black' src={Vaughn} alt='DeVaughn'/>
                <div>
                <p className='sm:text-3xl text-xl text-justify tracking-tighter'>
                    I'm a developer based in Texas. I enjoy creating reliable and beautiful mobile and web applications. My coding journey began in 2020, and I've self taught myself a multitude of technologies since. Merging creative expression and technical expertise allow me to provide clients with a satisfying experience, and I look forward to doing the same for you!
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About