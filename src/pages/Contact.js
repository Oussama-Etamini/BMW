import React, { useState } from 'react';
import "../styles/Contact.css";
import Back from "../assets/back3.png"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



function Contact() {

  const [subject , setSubject] = useState();
  const [email , setEmail] = useState();
  const [message , setMessage] = useState();

  const schema = yup.object().shape({
    fullName: yup.string().required(""),
    email: yup.string().email().required(),
    message: yup.string().required(""),

  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const backgroundStyle = {
    background: `url(${Back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const onSubmit = (data) => {
    const mailTo = `mailto:etaminioussama1@gmail.com?subject=${subject}&body=${message}`;
    window.location.href = mailTo;
    console.log(data);	
  };

  return (
    <div className='contact'>
      <div className='leftSide' style={backgroundStyle}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text"{...register('fullName')} value={subject}  onChange={(e)=> setSubject(e.target.value)}/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email"{...register('email')} value={email}  onChange={(e)=> setEmail(e.target.value)}/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            {...register('message')}
            value={message}  onChange={(e)=> setMessage(e.target.value)}
          ></textarea>
            <button type="submit" onClick={(e) => { e.preventDefault(); handleSubmit(onSubmit)(); }}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
