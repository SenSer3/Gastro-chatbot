"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleSubmitHome = (event) => {
    event.preventDefault();
    router.push('/home');
  };

  const handleSubmitChat = (event) => {
    event.preventDefault();
    router.push('/chat');
  };

  const handleSubmitSym = (event) => {
    event.preventDefault();
    router.push('/symptoms');
  };

  const handleSubmitMed = (event) => {
    event.preventDefault();
    router.push('/medicine');
  };

  return (
    <>
        <div className='bg-[#ffffff] py-3 px-3 border-b-gray-300 shadow-md mb-1'>
            <div className='flex items-center justify-between '>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleSubmitHome}>
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </div>
                      <span onClick={handleSubmitHome}  id="site-title" className="text-xl font-semibold bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Gastro Care</span>
                    </div>
                    <div className=' flex gap-2'>
                        <button onClick={handleSubmitHome} className='text-gray-700 hover:bg-teal-100 hover:text-teal-500 px-2 rounded-lg'>Home</button>
                        <button onClick={handleSubmitChat} className='text-gray-700 hover:bg-teal-100 hover:text-teal-500 px-2 rounded-lg'>Chat</button>
                        {/* <button onClick={handleSubmitSym} className='text-gray-700 hover:bg-teal-100 hover:text-teal-500 px-2 rounded-lg'>Symptoms</button>
                        <button onClick={handleSubmitMed} className='text-gray-700 hover:bg-teal-100 hover:text-teal-500 px-2 rounded-lg'>Medicine</button> */}
                    </div>
            </div>
        </div>
    </>
  )
}

export default Navbar