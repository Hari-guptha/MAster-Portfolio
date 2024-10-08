import React from 'react'
import { Constants, ImageImports } from '../constants/Constants'
import { Canvas } from '@react-three/fiber'

const Contact = () => {
    return (
        <div>
            <div id='SectionSpacing'>
                <div id='AboutTitle'>
                    <div>
                        <h3 id='SectionTitle'>Stay Connected With Me</h3>
                        <h4 id='SubTitle'>Let's talk. Collaborate. Share. Innovate. Build.</h4>
                    </div>
                    <img id='TopIcon' src={ImageImports.ContactIcon} alt="voice" />
                </div>
                <div id="ContactWrapper">
                    <form id='ContactForm'>
                        <h5>Name</h5>
                        <input name="user_name" type="text" placeholder='Enter your name' />
                        <h5 style={{ marginTop: "20px" }}>Email</h5>
                        <input name="user_email" type="text" placeholder='Enter your Email' />
                        <h5 style={{ marginTop: "20px" }}>Comment</h5>
                        <input name="message" type="text" placeholder='Enter your Comment' />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input onClick={() => setemailpop(true)} type="submit" value="Send" style={{ width: '200px' }} id='contactbtn' />
                        </div>
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
