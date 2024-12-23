import React from 'react';
import Navbar from '../navbar/Navbar';
import me from '../../assets/me.png';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
      {/* Background */}
      <div className="md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform rotate-6 -top-40 z-0"></div>
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt-32 pt-24 md:pb-24 mt-24 md:mt-0 z-10"
      >
        {/* Left Content */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex-1 md:text-left mt-10 md:mt-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nabil Pasha
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-6 leading-relaxed"
          >
            Third-semester Informatics Engineering student at Sriwijaya University
            with active involvement in student organizations. Equipped with technical
            skills in web development, UI/UX design, and databases. Strong teamwork,
            time management, and problem-solving abilities.
          </p>
          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="text-white bg-blue-600 hover:bg-blue-800 font-semibold rounded-full text-sm px-6 py-3 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="text-blue-600 bg-white hover:bg-gray-100 font-semibold rounded-full text-sm px-6 py-3 transition-all duration-300 transform hover:scale-105"
            >
              My Projects
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <img
            src={me}
            alt="Hero Image"
            className="h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-110"
          />
        </div>
      </section>
    </div>
  );
}
