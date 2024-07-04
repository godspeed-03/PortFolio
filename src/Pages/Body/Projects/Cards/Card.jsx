import React from 'react'


export default function  Card  ({image, title, info, link}) {
  return (
    <span className="card flex flex-col h-[21rem] w-[18rem] gap-2 text-center  backg border-backg border-solid border-[5px] shadow-white shadow-lg rounded-lg">
        <img className='m-2 bg-transparent rounded-xl' src={image} alt="" />
        <span className='text-black font-normal bg-transparent'>{title}</span>
        <span className='text-white text-sm mx-2 bg-transparent '>{info}</span>
        <a href={link} target='_blank' className='mx-auto  bg-transparent'>
            <button className=" bg-mycol px-4 py-2 rounded-2xl shadow-md shadow-white">View More</button>
        </a>

    </span>

    )
}


