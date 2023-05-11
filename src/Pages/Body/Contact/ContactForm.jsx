import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';

const serviceID = import.meta.env.VITE_APP_SERVICE_ID;
const templateID = import.meta.env.VITE_APP_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;



export default function ContactForm() {
 


  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setName('');
        setEmail('');
        setMessage('');

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='Contact' className="contact_form flex md:mx-[18rem] md:mt-32 md:flex-row flex-col bg-none shadow-md shadow-white ">
      <div className="left flex flex-1 z-10">
        <div className="awesome text-white mx-auto my-auto flex flex-col">
          <span className='text-mycol text-3xl font-semibold font-mono mt-10 '>Get in Touch</span>
          
        </div>
      </div>

      <div className="right flex flex-1 z-10 ">
        <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 items-center mx-auto mt-20 p-3'>
          <input 
           type="name"
           name='user_name' 
           placeholder='Name' 
           value={name}
           onChange={(e) => setName(e.target.value)}
           className='text-white font-mono w-[20rem] h-[2rem] m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300' />
          <input 
          type="email" 
          name='user_email' 
          placeholder='Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='text-white font-mono w-[20rem] h-[2rem] m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300' />
          <textarea 
          name="message" 
          id="message"   
          placeholder='Message' 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='text-white font-mono h-[5rem]  m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300'></textarea>
          <input 
          type="submit" 
          value='Send' 
          className='button bg-mycol px-8 py-2 rounded-tl-full rounded-br-full font-mono' />
        </form>
      </div>
    </div>
  )
}
