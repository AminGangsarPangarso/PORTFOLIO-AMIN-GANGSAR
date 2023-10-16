import React from 'react';
import {  BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData,BsBriefcase,BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'
const Nav = () => {


  return (
    <nav className='fixed bottom-0 lg:bottom-8 w-full overflow-hidden z-50 '>

      <div className='container mx-auto'>
        <div className="w-full bg-black/20 h-[96px] flex justify-between px-5 text-2xl text-white/50 items-center rounded-full backdrop-blur-2xl max-w-[460px] mx-auto">
          <Link className='flex cursor-pointer w-[60px] h-[60px] items-center '>
            < BiHomeAlt  />
          </Link>
          <Link className='flex cursor-pointer w-[60px] h-[60px] items-center'>
            < BiUser />
          </Link>
          <Link className='flex cursor-pointer w-[60px] h-[60px] items-center'>
            < BsClipboardData />
          </Link>
          <Link className='flex cursor-pointer w-[60px] h-[60px] items-center'>
            < BsBriefcase />
          </Link>
          <Link className='flex cursor-pointer w-[60px] h-[60px] items-center'>
            < BsChatSquare />
          </Link>
        </div>


      </div>;

    </nav>

  )
}


export default Nav;
