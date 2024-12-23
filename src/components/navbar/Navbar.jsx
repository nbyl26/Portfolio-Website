import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'Experience', link: '#experience' },
    { id: 4, name: 'My Projects', link: '#projects' },
    { id: 5, name: 'Contact', link: '#contact' },
  ];

  return (
    <header
      data-aos="fade-up"
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-3xl font-bold tracking-wide">Portfolio</span>
        </a>
        {/* Navbar Links */}
        <nav className="flex flex-wrap items-center text-base text-gray-300 space-x-7">
          {NavbarLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className="hover:text-white transition duration-300"
            >
              {e.name}
            </a>
          ))}
        </nav>
        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full text-sm px-5 py-2.5 transition duration-300"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
