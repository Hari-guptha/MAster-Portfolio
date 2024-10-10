import React from 'react'
import { ImageImports } from '../constants/Constants'
import ScrReSizeHandler from './Helper/ScrReSizeHandler'


const AboutSection = () => {
    const { width, height } = ScrReSizeHandler()

    return (
        <div id="About">
            <div id='SectionSpacing'>
                <div id='AboutTitle'>
                    <div>
                        <h3 id='SectionTitle'>About me</h3>
                        <h4 id='SubTitle'>Blending Code and Creativity</h4>
                    </div>
                    <img id='TopIcon' src={ImageImports.voiceIcon} alt="voice" />
                </div>
                <div id='AboutContainer'>
                    {width >= 600 ? null : <img id='AboutImg' src={ImageImports.aboutphoneImg} alt="About" /> }
                    <div>
                        <h4 id='SubTitle' style={{ marginTop: "3%" }}>Expert MERN Stack Developer</h4>
                        <h5 id='content' style={{ marginTop: "1%" }}>With extensive expertise in the MERN stack—comprising MongoDB, Express, React, and Node.js—I specialize in crafting robust, dynamic web applications. My deep understanding of these technologies allows me to build scalable and efficient solutions tailored to meet your specific needs. Whether you need a complex web application or a simple website, I leverage my technical skills to deliver high-quality, functional products that stand out in today’s competitive digital landscape.</h5>
                        <h4 id='SubTitle' style={{ marginTop: "3%" }}>Creative UX/UI Designer and Digital Artist</h4>
                        <h5 id='content' style={{ marginTop: "1%" }}>Beyond my technical prowess, I am also a passionate UX/UI designer with a keen eye for aesthetics. I strive to create intuitive and visually appealing interfaces for both web and mobile applications, ensuring a seamless user experience. My background as a digital artist enriches my design work, allowing me to blend technology with art to produce stunning graphics and animations. I am committed to not just meeting, but exceeding, your expectations by providing designs that are as beautiful as they are functional.</h5>
                        <h5 id='content' style={{ marginTop: "3%" }}>Overall, I am a self-motivated and driven individual who believes in the power of combining technology and creativity to achieve exceptional results. If you are looking for a skilled and imaginative professional to transform your ideas into reality, I am here to help!</h5>
                    </div>
                    {width >= 600 ? <img id='AboutImg' src={ImageImports.aboutImg} alt="About" /> : null}
                </div>
            </div>
        </div>
    )
}

export default AboutSection
