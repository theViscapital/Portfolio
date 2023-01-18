import React from 'react'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import REACT from '../assets/react.png'
import NODE from '../assets/node.png'
import TAILWIND from '../assets/tailwind.png'
import GITHUB from '../assets/github.png'
import JAVASCRIPT from '../assets/javascript.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#40484F] text-[#FFFEFB] w-full h-screen'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FBB623]'>Skills</p>
                <p className='py-4 text-[#0B0A0A] text-xl font-bold'>Technologies I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>

                <div className=' pt-6 shadow-lg shadow-[#181818] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {HTML} alt='HTML icon'/>
                    <p className='my-4 text-[#FBB623] text-lg'>HTML 5</p>
                </div>

                <div className='pt-6 shadow-lg shadow-[#181818] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {CSS} alt='CSSL icon'/>
                    <p className='my-4 text-[#FBB623] text-lg'>CSS 3</p>
                </div>

                <div className='pt-6 shadow-lg shadow-[#181818] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {JAVASCRIPT} alt='JAVASCRIPT icon'/>
                    <p className='my-4 text-[#FBB623] text-lg'>JAVASCRIPT</p>
                </div>

                <div className='pt-6 shadow-lg shadow-[#181818] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {REACT} alt='REACT icon'/>
                    <p className='my-4 text-[#FBB623] text-lg'>REACT</p>
                </div>

                <div className='pt-6 shadow-lg shadow-[#181818] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {NODE} alt='NODE icon'/>
                    <p className='my-4 text-[#FBB623] text-lg'>NODE.JS</p>
                </div>

                <div className='pt-6 shadow-lg shadow-[#181818] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {TAILWIND} alt='TAILWIND icon'/>
                    <p className='my-4 text-[#FBB623] text-lg'>TAILWIND</p>
                </div>

                <div className='pt-6 shadow-lg shadow-[#181818] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {GITHUB} alt='GITHUB icon'/>
                    <p className='my-4 text-[#FBB623] text-lg'>GITHUB</p>
                </div>
        </div>


        </div>
    </div>
  )
}

export default Skills