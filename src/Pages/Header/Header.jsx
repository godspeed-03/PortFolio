import { useState } from "react";
import React from "react";
import { Link } from "react-scroll";
import "./../../../src/index.css";
export default function Header() {
  const [mobile, setMobile] = useState(false);
  const openmobile = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <div
        className={`wrapper flex h-[10vh] justify-between items-center mt-3 mx-24 text-white 
    ${mobile ? "" : ""}`}
      >
        <div className="logo text-mycol text-3xl flex flex-1 items-center gap-8">
          Satyam
        </div>
        <nav className="font-medium cursor-pointer ">
          <ul
            className={`flex gap-8 m-2 mx-24  ${
              mobile
                ? " visible flex-col top-[15vh] z-50  absolute left-0 w-full animate"
                : "max-lg:hidden flex flex-1"
            } `}
          >
            <Link
              spy={true}
              to="Intro"
              smooth={true}
              onClick={() => setMobile(false)}
            >
              <li className="hover:text-[#FF4500] hover:scale-125 ">About</li>
            </Link>
            <Link
              spy={true}
              to="Projects"
              smooth={true}
              onClick={() => setMobile(false)}
            >
              <li className="hover:text-[#FF4500] hover:scale-125 ">
                Projects
              </li>
            </Link>
            <Link
              spy={true}
              to="Skills"
              smooth={true}
              onClick={() => setMobile(false)}
            >
              <li className="hover:text-[#FF4500] hover:scale-125 ">Akills</li>
            </Link>
            <Link
              spy={true}
              to="Contact"
              smooth={true}
              onClick={() => setMobile(false)}
            >
              <button className="bg-mycol hover:shaw rounded-2xl text-black px-[13px] py-[5px]  lg:px-[26px] lg:py-[11px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                Contact me
              </button>
            </Link>
          </ul>
          <div className="lg:hidden">
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
        </nav>
      </div>
    </>
  );
}
