import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
const Header = () => {
  return <div className='  py-8'>
    <div className="container mx-auto ">
      <div className="flex justify-between items-center">
        <a href="">
          <h1 className='font-bold text-2xl '> <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Amin</span> Gangsar</h1>
        </a>

        <ReactWhatsapp className='btn btn-sm' number="62-81804838974" message="Hello ">
           Work with me
        </ReactWhatsapp>
       
        </div>
    </div>
    </div>;
};

export default Header;
