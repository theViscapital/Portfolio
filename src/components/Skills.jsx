import React from 'react'
import HTML from '../assets/html.png'
import REACT from '../assets/react.png'
import NODE from '../assets/node.png'
import TAILWIND from '../assets/tailwind.png'
import GITHUB from '../assets/github.png'
import JAVASCRIPT from '../assets/javascript.png'
import MYSQL from '../assets/mysql.png'
import PYTHON from '../assets/python.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#40484F] text-[#FFFEFB] w-full h-screen'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FBB623]'>Skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>

                <div className=' pt-6 shadow-lg shadow-black hover:scale-110 duration-500  rounded-lg hover:border-[.01px]'>
                    <img className='w-20 mx-auto' src= {HTML} alt='HTML'/>
                    <p className='my-4 text-[#FBB623] text-lg'>HTML 5</p>
                </div>

                <div className='pt-6 shadow-lg shadow-black hover:scale-110 duration-500 rounded-lg hover:border-[.01px]'>
                    <img className='w-20 mx-auto' src= {JAVASCRIPT} alt='JAVASCRIPT'/>
                    <p className='my-4 text-[#FBB623] text-lg'>JAVASCRIPT</p>
                </div>

                <div className='pt-6 shadow-lg shadow-black hover:scale-110 duration-500 rounded-lg hover:border-[.01px]'>
                    <img className='w-20 mx-auto' src= {REACT} alt='REACT'/>
                    <p className='my-4 text-[#FBB623] text-lg'>REACT</p>
                </div>

                <div className='pt-6 shadow-lg shadow-black hover:scale-110 duration-500 rounded-lg hover:border-[.01px]'>
                    <img className='w-20 mx-auto' src= {NODE} alt='NODE'/>
                    <p className='my-4 text-[#FBB623] text-lg'>NODE.JS</p>
                </div>

                <div className='pt-6 shadow-lg shadow-black hover:scale-110 duration-500 rounded-lg hover:border-[.01px]'>
                    <img className='w-20 mx-auto' src= {TAILWIND} alt='TAILWIND'/>
                    <p className='my-4 text-[#FBB623] text-lg'>TAILWIND</p>
                </div>

                <div className='pt-6 shadow-lg shadow-black hover:scale-110 duration-500 rounded-lg hover:border-[.01px]'>
                    <img className='w-20 mx-auto' src= {GITHUB} alt='GITHUB'/>
                    <p className='my-4 text-[#FBB623] text-lg'>GITHUB</p>
                </div>

                <div className='pt-6 shadow-lg shadow-black hover:scale-110 duration-500 rounded-lg hover:border-[.01px]'>
                    <img className=' w-20 mx-auto' src= {MYSQL} alt='MySQL'/>
                    <p className='my-4 text-[#FBB623] text-lg '>MYSQL</p>
                </div>

                <div className='pt-6 shadow-lg shadow-black hover:scale-110 duration-500 rounded-lg hover:border-[.01px]'>
                    <img className=' w-20 mx-auto' src= {PYTHON} alt='PYTHON'/>
                    <p className='my-4 text-[#FBB623] text-lg '>PYTHON</p>
                </div>

        </div>


        </div>
    </div>
  )
}

export default Skills