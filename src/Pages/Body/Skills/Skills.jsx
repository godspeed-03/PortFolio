import React from 'react'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
 
import html from '../../../Images/html.png';
import css from '../../../Images/css.png';
import tailwind from '../../../Images/tailwind.png';
import js from '../../../Images/js.png';
import react from '../../../Images/react.png';
import cplusplus from '../../../Images/cplusplus.png';

export default function Skills() {
  return (
    <div id='Skills' className="wrapper md:mx-32  md:my-8 md:mt-14    ">
      <div className="text-center text-mycol text-5xl m-3 p-2 cursor-pointer">
        <Typewriter

          options={{
            cursor: '/>',
            loop: 'true'
          }}

          onInit={(typewriter) => {

            typewriter
              .typeString('<')
              .typeString("Language")
              .pauseFor(1000)
              .deleteAll()
              .typeString('<')
              .typeString("Library")
              .pauseFor(1000)
              .deleteAll()
              .typeString('<')
              .typeString("Framework")
              .pauseFor(1000)
              .deleteAll()
              .typeString('<')
              .typeString("Skills")
              .pauseFor(3000)
              .deleteAll()
              .typeString('')
              .start();
          }}
        />
      </div>
      <div className="  grid grid-cols-2 md:grid-cols-6 gap-4">

        <div 
        
        className=" shadow-white shadow-md mx-4">
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}
          transition={{
            duration : 2,
            type : "Spring"
          }}
          src={html} alt="" className='bg-transparent h-[100px] mx-auto rounded-full scale-[0.8] ' />
          <p className='text-white bg-transparent relative text-center  font-semibold font-mono'>HTML</p>
        </div>
        
        <div className=" shadow-white shadow-md mx-4">
          <motion.img whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}
          transition={{
            duration : 2,
            type : "Spring"
          }}
          src={css} alt="" className='bg-transparent h-[100px]  mx-auto' />
          <p className='text-white bg-transparent relative text-center  font-semibold font-mono'>CSS</p>
        </div>
        <div className="justify-center items-center shadow-white shadow-md mx-4">
          <motion.img whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}
          transition={{
            duration : 2,
            type : "Spring"
          }}
          src={tailwind} alt="" className='bg-transparent h-[100px] mx-auto ' />
          <p className='text-white bg-transparent relative text-center  font-semibold font-mono'>Tailwind CSS</p>
        </div>
        <div className="shadow-white shadow-md  mx-4">
          <motion.img whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}
          transition={{
            duration : 2,
            type : "Spring"
          }}
          src={js} alt="" className='bg-transparent h-[100px]  mx-auto' />
          <p className='text-white bg-transparent relative text-center  font-semibold font-mono'>JavaScript</p>
        </div>
        <div className=" shadow-white shadow-md mx-4">
          <motion.img
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}
          transition={{
            duration : 2,
            type : "Spring"
          }}
          src={react} alt="" className='bg-transparent h-[100px]  mx-auto' />
          <p className='text-white bg-transparent relative text-center  font-semibold font-mono'>React</p>
        </div>
        <div className=" shadow-white shadow-md mx-4">
          <motion.img whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}
          transition={{
            duration : 2,
            type : "Spring"
          }}
          src={cplusplus} alt="" className='bg-transparent h-[100px] mx-auto ' />
          <p className='text-white bg-transparent relative text-center  font-semibold font-mono'>C++</p>
        </div>
      </div>


    </div>
  )
}
