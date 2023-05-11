import React from 'react'
import Typewriter from "typewriter-effect";
import {motion} from 'framer-motion'
import Card from './Cards/Card'

import image1 from '../../../Images/FilmFinder.png'
import image2 from '../../../Images/Portfolio.png'
import image3 from '../../../Images/ReactTube.png'

export default function MajorProjects() {
  return (
    <div id='Projects' className="wrapper md:mt-16 md:mx-32  flex   flex-col md:flex-row    ">
      <div className="left flex-1 m-auto ">
        
          <div className="topic relative text-white text-5xl m-2 ml-10  font-semibold font-mono md:-top-[25rem]">
          
          <Typewriter

options={{
  cursor:'',
  loop:'true'
}}

onInit={(typewriter)=> {

typewriter
.typeString("My Projects")
.pauseFor(1000)
.deleteAll()
.typeString('')
.start();
}}
/>
          </div>
      </div>
      <div className="right backg2 relative   ">
      
      <motion.span 
      initial = {{left : '2rem'}}
      whileInView={{left :'-5rem'}}
      transition={{
        duration : 2,
        type : 'spring'
      }}
      className=" relative   ">
          <Card className='items-end'
        image={image1}
        title={'FilmFinder'}
        info={'React, Vite, JSX, Tailwind CSS, SCSS, Redux Toolikt, TMDB API,  '}
        link={'https://film-finder-1.netlify.app/'}
         />
        </motion.span>
      <motion.span 
      initial = {{left : '-40rem', top:'-5rem'}}
      whileInView={{left :'-25rem'}}
      transition={{
        duration : 2,
        type : 'spring'
      }}
      className=" relative  ">
          <Card className='items-end'
        image={image2}
        title={'PortFolio'}
        info={'React, Vite, JSX, Tailwind CSS, Typewriter, Email-js, Framer-motion, .env'}
        link={'#'}
         />
        </motion.span>
      <motion.span 
      initial = {{left : '2rem', top:'-9rem'}}
      whileInView={{left :'-5rem'}}
      transition={{
        duration : 2,
        type : 'spring'
      }}
      className=" relative  ">
          <Card className='items-end'
        image={image3}
        title={'ReactTube'}
        info={'React, Vite, JSX, Tailwind CSS, Context Api, Youtube API(rapid api), React Router, React Player,js-abbreviation'}
        link={'https://reacttubeio.netlify.app/'}
         />
        </motion.span>
        

      </div>
      
    </div>
  )
}


