'use client'
import React from 'react'
import styles from "../contact/contact.module.css";
import {Mulish} from "next/font/google";
import { useState } from 'react';
const mulish= Mulish({
weight:['300','400', '500', '600', '700', '800', '900'],
subsets:['latin'],
display:'swap'
})

const ContactForm = () => {
    const [user, setUser]= useState({
           username:"",
           email:"",
           phone:"",
           message:""
    });
    const [status, setStatus]=useState(null);
    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;

        setUser((prevUser)=>({
          ...prevUser, [name]:value      
        }));

    };
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
     try{
          const response = await fetch('/api/contact',{
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body:JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message

            })
          })
          if(response.status === 200)
          {
        setUser({
            username:"",
            email:"",
            phone:"",
            message:""
        });
        setStatus("success");
        }
         else{
        setStatus("Error");
        }
     }
     catch(e){
             console.log(e);
     }
     //set the status based on the respnse from the API route
     
    };
   
  return (
   <form className={styles.contact_form} onSubmit={handleSubmit}>
    <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
        Enter your name 
             <input type='text' name='username' id='username' placeholder='Enter your name' autoComplete='off' className={mulish.className} vaue={user.username} onChange={handleChange}/>
             
        </label>
    </div>
    <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
        Email 
             <input type='text' name='email' id='email' placeholder='Enter your email' autoComplete='off' className={mulish.className} vaue={user.email} onChange={handleChange}/>
             
        </label>
    </div>
    <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
        Phone Number 
             <input type='text' name='phone' id='phone' placeholder='Enter your phone' autoComplete='off' className={mulish.className} vaue={user.phone} onChange={handleChange}/>
             
        </label>
    </div>
    <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
        Messagge 
             <textarea name='message' id='message' rows={5} placeholder='Enter your Messagge' autoComplete='off' className={mulish.className} vaue={user.message}  onChange={handleChange}/>
             
        </label>
    </div>
        <div >
            {status==='success' && <p className={styles.success_msg}>Thank you for your message!</p>}
            {status==='Error' && <p className={styles.error_msg}>There was an error in submitting your message!</p>}
            <button type="submit" className={mulish.className}>Send Message</button>
        </div>
   </form>
  )
}

export default ContactForm;
