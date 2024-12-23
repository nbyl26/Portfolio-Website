import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24 flex flex-col items-center">
        <div data-aos="fade-up" data-aos-delay="300" className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact</h1>
          <p className="mb-8 leading-relaxed">
            Stay connected! I’m always excited to collaborate on projects, share ideas, or discuss opportunities.  
            Feel free to reach out through any of the platforms below. Let’s create something extraordinary together!
          </p>
        </div>
        
        {/* Contact Details */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="500" 
          className="flex flex-col lg:flex-row justify-around items-center w-full lg:w-2/3 space-y-8 lg:space-y-0 text-lg font-bold"
        >
          <div className="flex items-center space-x-2">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <span>+62 821 8370 2573</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-500 text-2xl" />
            <span>nabilpasha230606@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-500 text-2xl" />
            <span>nabilpasha</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 w-full lg:w-2/3">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Follow Me:</h2>
          <div className="flex justify-start items-center space-x-4 text-2xl">
            <a 
              href="https://www.instagram.com/nbyl.26" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://github.com/nbyl26" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-800 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
