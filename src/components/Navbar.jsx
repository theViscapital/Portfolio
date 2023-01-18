import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaListAlt} from 'react-icons/fa'
import {Link} from 'react-scroll'


export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FBB623] text-white border-b-2 border-black group'>
{/* LOGO */}
      <div className='group-hover:hidden'>
        <h1 className='text-5xl font-extrabold'>&lt;
        <span className='text-black'>DEV</span>
        &#47;&#62;
        </h1>
      </div>

      <div className='invisible group-hover:visible'>
      <h1 className='text-5xl font-extrabold'>&lt;
      <span className='text-black'>DEVAUGHN</span>
      &#47;&#62;
      </h1>
      </div>


{/* MENU */}
        <ul className='hidden md:flex'>
          <li className='text-xl hover:text-[#0A0909] hover:underline hover:underline-offset-8 hover:scale-150'>
          <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
          </li>

          <li className='text-xl hover:text-[#0A0909] hover:underline hover:underline-offset-8 hover:scale-150'>
          <Link to="about" smooth={true} duration={500}>
          About
        </Link>
          </li>

          <li className='text-xl hover:text-[#0A0909] hover:underline hover:underline-offset-8 hover:scale-150'>
          <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
          </li>

          <li className='text-xl hover:text-[#0A0909] hover:underline hover:underline-offset-8 hover:scale-150'>
          <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
          </li>

          <li className='text-xl hover:text-[#0A0909] hover:underline hover:underline-offset-8 hover:scale-150'>
          <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
          </li>
        </ul>

{/* HAMBURGER */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

{/* MOBILE MENU */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#FBB623] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl font-bold text-[#40484F]'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
          </li>

          <li className='py-6 text-4xl font-bold text-[#40484F]'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
          </li>

          <li className='py-6 text-4xl font-bold text-[#40484F]'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
          </li>

          <li className='py-6 text-4xl font-bold text-[#40484F]'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
          </li>

          <li className='py-6 text-4xl font-bold text-[#40484F]'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
          </li>

        </ul>

{/* SOCIAL ICONS */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0E76A8]'>
            <a className='flex justify-between items-center w-full text-[white]'
            href='https://www.linkedin.com/in/devaughn-stephens-8b8852146/'>
            LinkedIn
            <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6e5494]'>
            <a className='flex justify-between items-center w-full text-[white]'
            href='https://github.com/DeVaughntheDev'>
            GitHub
            <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-[white]'
            href='/'>
            
            Resumè
            <FaListAlt size={30}/>
            </a>
          </li>

        </ul>
      </div>


    </div>
  )
}
