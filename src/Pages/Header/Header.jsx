import { useState } from 'react'
import React  from 'react'
import {Link} from 'react-scroll'

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const openmobile = () => {
    setMobile(true);
  };
  return (
    <>
      <div
        className={`header mx-32 text-white flex items-center justify-between py-5  mt-10 
    ${mobile ? "" : ""}`}
      >
        <div className="logo text-mycol text-3xl">Satyam</div>
        <nav>
          <ul
            className={`flex gap-5 text-lg md:flex   ${
              mobile
                ? " visible flex-col top-[100px]  absolute left-0 w-full "
                : "max-md:hidden"
            } `}
          >
            <li onClick={() => setMobile(false)}>lis1</li>
            <li onClick={() => setMobile(false)}>book</li>
            <li onClick={() => setMobile(false)}>cool</li>
            <li onClick={() => setMobile(false)}>job</li>
            <li onClick={() => setMobile(false)}>gog</li>
          </ul>
        </nav>
        <div className="md:hidden">
          {mobile ? (
            <span className="font-bold p-2" onClick={() => setMobile(false)}>
              C
            </span>
          ) : (
            <span className="font-bold p-2" onClick={() => openmobile()}>
              O
            </span>
          )}
        </div>
      </div>
    </>



    
    // <>
    // <div className="wrapper flex h-[10vh] justify-between items-center mt-3 mx-24 text-white">
    //   <div className="left  flex flex-1 items-center gap-8">
    //     <div className="name m-2 p-1 text-mycol text-3xl font-bold">Satyam</div>
    //   </div>
    //   <div className="right flex  items-center justify-center font-medium mr-16 cursor-pointer  ">
    //     <div className="list">
    //     <ul className='  flex gap-8 m-2 p-5  items-center'>

    //       <Link spy={true} to='Intro' smooth={true}  >
            
    //       <li className='hover:text-[#FF4500] hover:text-lg p-5'>Home</li>
    //       </Link>
    //       <Link spy={true} to='Projects' smooth={true}  >
    //       <li className='hover:text-[#FF4500] hover:text-lg p-5'>Projects</li>

    //       </Link>
    //       <Link spy={true} to='Skills' smooth={true}  >
    //       <li className='hover:text-[#FF4500] hover:text-lg p-5'>Skills</li>

    //       </Link>
    //       <Link spy={true} to='Contact' smooth={true} >

    //       <li className='hover:text-[#FF4500] hover:text-lg p-5'>Contact</li>
    //     {/* <button className='bg-mycol hover:shaw rounded-2xl text-black m-3  px-[26px] py-[11px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '> */}
    //       {/* Contact me</button> */}
    //     </Link>
    //     </ul>
    //     </div>
        
    //   </div>
    // </div>
    // </>
  )
}
