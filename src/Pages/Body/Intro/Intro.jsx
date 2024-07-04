import React from 'react'
import logo from '../../../Images/bg.png'

export default function Intro() {
  return (
    <div id='Intro' className="wrapper md:mx-32 flex md:flex-row flex-col md:h-[77vh] md:mt-10 ">
      <div className="left flex-1 m-auto ">
        <div className="name-intro flex flex-col ml-10 ">
          <span className="hey text-white text-3xl p-2">
            Hey! I Am
          </span>
          <span className="main-name text-mycol text-5xl mx-10  p-2 font-semibold font-mono ">
            Satyam Anand
          </span>
        </div>
        <div className=" about text-white p-3 mt-8 ml-10 ">

          <span >
          I'm Satyam Anand, a Mechanical Engineering student at UIET, Panjab University, Chandigarh. With a strong passion for Front-End Web Development, I specialize in building engaging user interfaces using React. Let's create amazing experiences together
          </span>
        </div>

      </div>
      <div className="right flex-1 m-auto relative z-20 ">

        <img src={logo} alt="" className="m-auto w-[600px] h-full backg rounded-[100px] hover:border-4 transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300" />
        

      </div>
    </div>
    
  )
}
