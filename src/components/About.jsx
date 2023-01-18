import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#40484F] text-[#FFFEFB]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-6'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FBB623]'>
                    About
                    </p>
                </div>
                <div>
                {/* EMPTY GRID DIV */}
                </div>
            </div>
            
            <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-6'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p className='text-[#0A0909] text-4xl'> A PHOTO OF ME WILL GO HERE WHEN I FIND ONE!</p>
                </div>
                <div>
                <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About