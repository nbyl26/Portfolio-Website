import React from 'react'
import Frontend from '../../assets/frontend.png'
import Frontend_1 from '../../assets/frontend_1.png'
import Frontend_2 from '../../assets/frontend_2.png'

const ProjectCard = ({ image, title }) => (
    <div className='p-4 md:w-1/3 mb-6'>
        <div className='rounded-lg h-52 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl'>
            <img src={image} alt="content" className='object-cover object-center h-full w-full' />
        </div>
        <h2 className='text-xl font-semibold title-font text-white mt-5 hover:text-blue-400 transition duration-300'>{title}</h2>
        {/* <a className='text-blue-300 hover:text-blue-100 inline-flex items-center mt-3 transform transition duration-300 hover:scale-110'>
            Fullscreen
            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                <path d='M12 5l7 7-7 7M5 12l7-7-7-7'></path>
            </svg>
        </a> */}
    </div>
);

export default function Projects() {
    const projects = [
        { title: 'Layo-Hotel', image: Frontend_1 },
        { title: 'BarKas-Layo', image: Frontend_2 },
    ];
    return (
        <section id='projects' className='text-gray-400 bg-blue-950 body-font'>
            <div className='container px-3 py-11 mx-auto'>
                <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
                    <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                        <h1 className='sm:w-2/5 text-white font-semibold title-font text-3xl mb-2 sm:mb-0'>My Projects</h1>
                        <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                            Explore some of my proudest works, where creativity meets functionality. Each project reflects my passion for front-end development and my commitment to delivering solutions that prioritize both aesthetics and user experience. Dive into the details of these creations to see how I bring ideas to life through modern web technologies.
                        </p>
                        <button type='button' data-aos='fade-up' data-aos-delay='300' className='text-gray-900 bg-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center'>
                            View All
                        </button>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                    {
                        projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
