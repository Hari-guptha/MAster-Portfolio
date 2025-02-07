import React from 'react'
import { motion, useInView } from 'framer-motion'
import { ImageImports } from '../constants/Constants'
import ScrReSizeHandler from './Helper/ScrReSizeHandler'

const AboutSection = () => {
    const { width } = ScrReSizeHandler()
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    const renderImage = (src, alt) => (
        <motion.img 
            id='AboutImg' 
            src={src} 
            alt={alt} 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }} // Added hover effect for zoom
            style={{ padding: width >= 600 ? '20px' : '0' }} // Added padding for desktop image
        />
    )

    return (
        <div id="About" ref={ref}>
            <div id='SectionSpacing'>
                <div id='AboutTitle' style={{ marginBottom: width >= 600 ? '5px' : '20px' }}>
                    <div style={{overflow: 'hidden'}}>
                        <motion.h3 
                            id='SectionTitle' 
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            About me
                        </motion.h3>
                        <motion.h4 
                            id='SubTitle'
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Blending Code and Creativity
                        </motion.h4>
                    </div>
                    <motion.img 
                        id='TopIcon' 
                        src={ImageImports.voiceIcon} 
                        alt="voice" 
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }} // Added hover effect for zoom
                    />
                </div>
                <div id='AboutContainer' style={{overflow: 'hidden'}}>

                    {width < 600 && renderImage(ImageImports.aboutphoneImg, "About")}
                    <div style={{overflow: 'hidden'}}>
                        <motion.h4 
                            id='SubTitle' 
                            style={{ marginTop: "var(--spacing-xm)" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            Expert MERN Stack Developer
                        </motion.h4>
                        <motion.h5 
                            id='content' 
                            style={{ marginTop: "var(--spacing-xs)" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            With extensive expertise in the MERN stack—comprising MongoDB, Express, React, and Node.js—I specialize in crafting robust, dynamic web applications. My deep understanding of these technologies allows me to build scalable and efficient solutions tailored to meet your specific needs. Whether you need a complex web application or a simple website, I leverage my technical skills to deliver high-quality, functional products that stand out in today's competitive digital landscape.
                        </motion.h5>
                        <motion.h4 
                            id='SubTitle' 
                            style={{ marginTop: "var(--spacing-sm)" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            Creative UX/UI Designer and Digital Artist
                        </motion.h4>
                        <motion.h5 
                            id='content' 
                            style={{ marginTop: "var(--spacing-xs)" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Beyond my technical prowess, I am also a passionate UX/UI designer with a keen eye for aesthetics. I strive to create intuitive and visually appealing interfaces for both web and mobile applications, ensuring a seamless user experience. My background as a digital artist enriches my design work, allowing me to blend technology with art to produce stunning graphics and animations. I am committed to not just meeting, but exceeding, your expectations by providing designs that are as beautiful as they are functional.
                        </motion.h5>
                        <motion.h5 
                            id='content' 
                            style={{ marginTop: "var(--spacing-sm)" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Overall, I am a self-motivated and driven individual who believes in the power of combining technology and creativity to achieve exceptional results. If you are looking for a skilled and imaginative professional to transform your ideas into reality, I am here to help!
                        </motion.h5>
                    </div>
                    {width >= 600 && renderImage(ImageImports.aboutImg, "About")}
                </div>
            </div>
        </div>
    )
}

export default AboutSection
