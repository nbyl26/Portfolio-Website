import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    <footer className='text-gray-200 bg-blue-950 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
            <p className='text-2xl font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center sm:text-left'>
                Portfolio
            </p>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                {/* Instagram Icon */}
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-pink-500 transition duration-300 mx-3'>
                    <FaInstagram size={24} />
                </a>

                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-blue-500 transition duration-300 mx-3'>
                    <FaLinkedin size={24} />
                </a>

                {/* GitHub Icon */}
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-gray-400 transition duration-300 mx-3'>
                    <FaGithub size={24} />
                </a>
            </span>
        </div>
    </footer>
    </>
  )
}
