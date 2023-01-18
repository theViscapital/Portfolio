import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#40484F] text-white flex justify-center items-center'>
        <form method='POST' action='https://getform.io/f/66cbbfcb-0fae-4b9e-9a3b-6f026d1c58c1' className='flex flex-col max-w-[600px] w-full px-4'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FBB623]'>
                Contact
                </p>
                <p className='py-4 text-[#0B0A0A] text-xl font-bold'>Submit the form below to shoot me an email </p>
            </div>
            <input className='p-2 text-black' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 text-black' type="email" placeholder='Email' name='email'/>
            <textarea name='message' placeholder='Message' rows="10" className='p-2 text-black'></textarea>
            <button className='text-[#FFFEFB] border-4 border-[#FFFEFB] px-6 py-3 my-2 flex items-center hover:bg-[#FBB623] hover:border-[#0A0909] hover:text-[#0A0909] font-bold mx-auto'>
            Let's Connect
            </button>


        </form>
    </div>
  )
}

export default Contact