import React from 'react'
import { Constants, ImageImports } from '../constants/Constants'
import { Tilt } from 'react-tilt'
import ScrReSizeHandler from './Helper/ScrReSizeHandler'
import { motion, useInView } from 'framer-motion'

const LineOfWork = () => {
    const { width, height } = ScrReSizeHandler()
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    return (
        <div id='Experience' ref={ref}>
            <div id='SectionSpacing'>
                <div id='AboutTitle'>
                    <div style={{overflow: 'hidden'}}>
                        <motion.h3 
                            id='SectionTitle'
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            Line of work
                        </motion.h3>
                        <motion.h4 
                            id='SubTitle'
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Stream of professional dedication
                        </motion.h4>
                    </div>
                    <motion.img 
                        id='TopIcon' 
                        src={ImageImports.workIcon} 
                        alt="work"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
                <div id='WorkCards' style={{overflow: 'hidden',padding: '15px'}}>
                    {Constants.LineOfWork.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Tilt 
                                options={{ max: 10, speed: 200, perspective: 1000, scale: 1 }}
                            >
                                <div id='WorkCard' className='glow-on-hover' style={{ height: width > 600 ? '240px' : 'fit-content' }}>
                                    <div id='WorkCardTop'>
                                        <img 
                                            style={{ 
                                                width: width > 600 ? card.width : card.Phonewidth,
                                                height: width > 600 ? card.height : card.Phoneheight,
                                            }} 
                                            src={card.CompanyIcon} 
                                            alt={card.Position} 
                                        />
                                        <h5>{card.Date}</h5>
                                    </div>
                                    <div id='WorkCardBottom'>
                                        <h4>{card.Position}</h4>
                                        <h6>{card.Info}</h6>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LineOfWork
