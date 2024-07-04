import React from 'react'
import {motion} from 'framer-motion'

import avatar from '../../../Images/avatar.png'
import linkedin from '../../../Images/linkedin.png'
import gmail from '../../../Images/gmail.png'
import github from '../../../Images/github.png'

export default function Contact() {
  return (
    <div className='md:mt-20 md:mx-32 '>
      <motion.div 
      viewport ={{margin:'-40px'}}
      animate={{rotate : 360}}
      transition ={{
        repeat : Infinity,
        repeatDelay: 2,
        duration : 10,
      }}
      className="maincircle w-[23rem] h-[23rem] rounded-[100%] bg-white  z-50 mx-auto ">
        <span 
        animate={{rotate : -360}}
        transition ={{
          repeat : Infinity,
          repeatDelay: 2,
          duration : 10,
        }}
        className="sec_circle  relative -top-[1rem] left-[16rem]">
          <div className="w-[105px] h-[105px] rounded-full bg-yellow-300 flex items-center justify-center">
            <div className="w-[6rem] h-[6rem] rounded-full bg-white flex items-center justify-center">
            <a href="https://www.linkedin.com/in/satyam-anand-951b5621b" className='rounded-full' target='_blank'>
              <img 
              animate={{rotate : 0}}
      transition ={{
        // repeat : Infinity,
        // repeatDelay: 1,
        duration :5,
      }}
      src={linkedin} alt="" className="w-[90px] h-[90px] rounded-full bg-black" />

              </a>
            </div>
          </div>
        </span>

        <span className="sec_circle  relative  top-[2rem] -left-[4rem]">
          <div className="w-[105px] h-[105px] rounded-full bg-yellow-300 flex items-center justify-center">
            <div className="w-[6rem] h-[6rem] rounded-full bg-white flex items-center justify-center">
            <a href="https://t.me/mesatyam" className='rounded-full' target='_blank'>
              <img src={gmail} alt="" className="w-[90px] h-[90px] rounded-full bg-black" />

              </a>
            </div>
          </div>
        </span>
        <span className="sec_circle  relative top-[5rem] left-[16rem]">
          <div className="w-[105px] h-[105px] rounded-full bg-yellow-300 flex items-center justify-center">
            <div className="w-[6rem] h-[6rem] rounded-full bg-white flex items-center justify-center">
            <a href="https://github.com/godspeed-03" className='rounded-full' target='_blank'>
              <img src={github} alt="" className="w-[90px] h-[90px] rounded-full bg-black" />

              </a>
            </div>
          </div>
        </span>

        


      </motion.div>
      <span className="sec_circle  relative -top-[15rem] ">
          <img src={avatar} alt="" className='h-[7rem] bg-black border-4 border-solid border-yellow-500 mx-auto rounded-[100%]' />
        </span>

    </div>



  )
}
