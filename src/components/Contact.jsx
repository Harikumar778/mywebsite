import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message,setMessage]=useState("")
    
    const notify = (e) => {
    e.preventDefault();
      toast("Message Sent..!");
    };




    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm("service_r89wftr", "template_himw7tu" , form.current, "-I_kaEP0_15OpFMdu")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    };
  return (
    <div className='' id='contact-form'>
        <h2 className='project__heading text-bold' >REACH ME</h2>
      <div className=" container mx-auto contact__form__view">
        <form ref={form} onSubmit={sendEmail} className="form-label" onsubmit="window.location.reload()">
          <label>Name</label>
          <input
            className="form-control form-input w-75 "
            type="text"
            name="user_name"
            required="required" 
            onChange={(e)=>setName(e.target.value)}
          />
          <label>Email</label>
          <input
            className="form-control form-input w-75"
            type="email"
            required="required" 
            name="user_email"
            onChange={(e)=> setMail(e.target.value)}
          />
          <label>Message</label>
          <textarea className="form-control form-input w-75" name="message"  required="required" onChange={(e)=> setMessage(e.target.value)} />
          <br />
        <input type="submit" onClick={notify} className="btn btn-primary" value="Send"  />
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
}

export default Contact