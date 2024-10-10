import React, { useRef } from 'react'
import { Constants, ImageImports } from '../constants/Constants'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMP_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    const element = document.getElementById("mailsentnote");
                    element.style.display = "block";
                    console.log('SUCCESS!');
    
                    setTimeout(() => {
                        element.style.display = "none";
                    }, 5000); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    



    return (
        <div id='Contact'>
            <div id='SectionSpacing'>
                <div id='AboutTitle'>
                    <div>
                        <h3 id='SectionTitle'>Stay Connected With Me</h3>
                        <h4 id='SubTitle'>Let's talk. Collaborate. Share. Innovate. Build.</h4>
                    </div>
                    <img id='TopIcon' src={ImageImports.ContactIcon} alt="voice" />
                </div>
                <div id="ContactWrapper">
                    <form ref={form} onSubmit={sendEmail} id='ContactForm'>
                        <h5>Name</h5>
                        <input name="from_name" required type="text" placeholder='Enter your name' />
                        <h5 style={{ marginTop: "20px" }}>Email</h5>
                        <input name="from_Email" required type="email" placeholder='Enter your Email' />
                        <h5 style={{ marginTop: "20px" }}>Comment</h5>
                        <input name="message" required type="text" placeholder='Enter your Comment' />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input type="submit" value="Send" style={{ width: '200px' }} id='contactbtn' />
                        </div>
                        <h5 id='mailsentnote'>Email Successfully Sent!</h5>
                    </form>
                    <div id='SocialMedia' className='centerDiv'>
                        {Constants.SocialMedias.map((social, index) => {
                            return (
                                <a target='_blank' key={index} href={social.Link}>
                                    <div id='SocialCard'>
                                        <img src={social.Icon} alt="icon" />
                                        <h4>{social.Name}</h4>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
