import React, { useRef, useState, useEffect } from 'react';
import { Constants, ImageImports } from '../constants/Constants';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                }
            });
        } else {
            controls.start({
                x: -100,
                opacity: 0
            });
        }
    }, [controls, inView]);

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMP_ID,
                form.current,
                { publicKey: import.meta.env.VITE_PUBLIC_KEY }
            );
            setEmailSent(true);
            console.log('SUCCESS!');
            setTimeout(() => setEmailSent(false), 5000);
        } catch (error) {
            console.log('FAILED...', error.text);
        }
    };

    return (
        <div id='Contact' ref={ref}>
            <div id='SectionSpacing'>
                <motion.div 
                    id='AboutTitle'
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                >
                    <div>
                        <h3 id='SectionTitle'>Stay Connected With Me</h3>
                        <h4 id='SubTitle'>Let's talk. Collaborate. Share. Innovate. Build.</h4>
                    </div>
                    <img id='TopIcon' src={ImageImports.ContactIcon} alt="voice" />
                </motion.div>
                <div id="ContactWrapper">
                    <motion.form 
                        ref={form} 
                        onSubmit={sendEmail} 
                        id='ContactForm'
                        initial={{ y: 100, opacity: 0 }}
                        animate={controls}
                        transition={{ delay: 0.2 }}
                    >
                        <h5>Name</h5>
                        <input name="from_name" required type="text" placeholder='Enter your name' />
                        <h5 style={{ marginTop: "20px" }}>Email</h5>
                        <input name="from_Email" required type="email" placeholder='Enter your Email' />
                        <h5 style={{ marginTop: "20px" }}>Comment</h5>
                        <input name="message" required type="text" placeholder='Enter your Comment' />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input type="submit" value="Send" style={{ width: '200px' }} id='contactbtn' />
                        </div>
                        {emailSent && <h5 id='mailsentnote'>Email Successfully Sent!</h5>}
                    </motion.form>
                    <motion.div 
                        id='SocialMedia' 
                        className='centerDiv'
                        initial={{ x: 100, opacity: 0 }}
                        animate={controls}
                        transition={{ delay: 0.4 }}
                    >
                        {Constants.SocialMedias.map((social, index) => (
                            <a target='_blank' key={index} href={social.Link}>
                                <div id='SocialCard'>
                                    <img src={social.Icon} alt="icon" />
                                    <h4>{social.Name}</h4>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                    <style>
                        {`
                            @media only screen and (max-width: 600px) {
                                #SocialMedia {
                                    flex-direction: row;
                                    flex-wrap: wrap;
                                }
                                #SocialCard {
                                    margin: 10px;
                                }
                            }
                        `}
                    </style>
                </div>
            </div>
        </div>
    );
};

export default Contact;
