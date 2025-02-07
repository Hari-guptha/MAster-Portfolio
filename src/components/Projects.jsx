import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, lazy, useRef, useState, useEffect } from 'react'
import { Constants, ImageImports } from '../constants/Constants'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ScrReSizeHandler from './Helper/ScrReSizeHandler'
import { Box } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const LeftMonitor = lazy(() =>
    import('./Models/MonitorLeft').then(module => ({ default: module.LeftMonitor }))
)

const RightMonitor = lazy(() =>
    import('./Models/MonitorRight').then(module => ({ default: module.RightMonitor }))
)

const Monitor = lazy(() =>
    import('./Models/Monitor').then(module => ({ default: module.Monitor }))
)

const Projects = () => {
    const sliderRef = useRef(null)
    const sliderRef2 = useRef(null)
    const { width } = ScrReSizeHandler()
    const [currectimg, setcurrentimg] = useState(width >= 768 ? undefined : 0)
    const [images] = useState(Constants.Projets.map(project => project.Thumbnail))
    const scrollAmount = width >= 768 ? 100 : 240
    
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    })

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
            })
        } else {
            controls.start({
                x: -100,
                opacity: 0
            })
        }
    }, [controls, inView])

    return (
        <div id='SectionSpacing' ref={ref}>
            <motion.div 
                id='AboutTitle'
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
            >
                <div>
                    <h3 id='SectionTitle'>Works</h3>
                    <h4 id='SubTitle'>Flow of innovative undertakings</h4>
                </div>
                <img id='TopIcon' src={ImageImports.ProjectIcon} alt="work" />
            </motion.div>
            <div id='Projects'>
                {/* Mobile Slider */}
                <Box sx={{ display: { md: "none", xs: "block" }, width: '100%' }}>
                    <div id="ProjectSlider">
                        <div className="ProjectSliderContiner">
                            <button 
                                className="nav-btn mobile-nav"
                                onClick={() => {
                                    const container = sliderRef2.current
                                    container.scrollLeft -= scrollAmount
                                }}
                            >
                                <KeyboardArrowLeftIcon />
                            </button>

                            <div className="images-container" ref={sliderRef2}>
                                {images.map((image, index) => (
                                    <img
                                        onClick={() => setcurrentimg(index)}
                                        className={`image ${currectimg === index ? 'active' : ''}`}
                                        alt={`Project ${index + 1}`}
                                        key={index}
                                        src={image}
                                    />
                                ))}
                            </div>

                            <button 
                                className="nav-btn mobile-nav"
                                onClick={() => {
                                    const container = sliderRef2.current
                                    container.scrollLeft += scrollAmount
                                }}
                            >
                                <KeyboardArrowRightIcon />
                            </button>
                        </div>
                    </div>
                </Box>

                {/* Project Content */}
                <div className="project-content">
                    {width > 768 && (
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={controls}
                        >
                            <Canvas 
                                dpr={Math.min(window.devicePixelRatio, 2)} 
                                style={{ 
                                    width: '100%', 
                                    height: 'calc(100vh - 400px)',
                                    minHeight: '300px',
                                    borderRadius: "10px" 
                                }} 
                                shadows 
                                camera={{ 
                                    position: [5, 0, 5], 
                                    fov: width > 768 ? 65 : 50 
                                }}
                            >
                                <color attach="background" args={["black"]} />
                                <ambientLight color={"white"} intensity={3} />
                                <directionalLight position={[10, 10, 10]} intensity={3} />
                                <Suspense fallback={null}>
                                    <Monitor image={currectimg} />
                                    <LeftMonitor image={currectimg} />
                                    <RightMonitor />
                                </Suspense>
                                <OrbitControls 
                                    enableZoom={false}
                                    maxPolarAngle={Math.PI / 2}
                                    minPolarAngle={Math.PI / 4} 
                                />
                            </Canvas>
                        </motion.div>
                    )}

                    {currectimg >= 0 && (
                        <div className="project-details">
                            <div className="project-header">
                                <div id='skillsicons'>
                                    {Constants.Projets[currectimg].Tech.map((icon, index) => (
                                        <img id="skillicon" key={index} src={icon} alt={`Tech ${index + 1}`} />
                                    ))}
                                </div>
                                {Constants.Projets[currectimg].Live && (
                                    <a 
                                        target='_blank' 
                                        rel="noopener noreferrer" 
                                        href={Constants.Projets[currectimg].Live}
                                    >
                                        <h4 id='LivBtn'>LIVE - click to see</h4>
                                    </a>
                                )}
                            </div>
                            <h3 id="ProjectContent">{Constants.Projets[currectimg].content}</h3>
                        </div>
                    )}
                </div>

                {/* Desktop Slider */}
                <Box sx={{ display: { md: "block", xs: "none" } }} id='ProjectSlider'>
                    <motion.div 
                        className="ProjectSliderContiner"
                        initial={{ y: 100, opacity: 0 }}
                        animate={controls}
                    >
                        <button
                            className="nav-btn"
                            onClick={() => {
                                const container = sliderRef.current
                                container.scrollTop -= scrollAmount
                            }}
                        >
                            <ArrowCircleUpIcon />
                        </button>
                        <div className="images-container" ref={sliderRef}>
                            {images.map((image, index) => (
                                <img
                                    onClick={() => setcurrentimg(index)}
                                    className={`image ${currectimg === index ? 'active' : ''}`}
                                    alt={`Project ${index + 1}`}
                                    key={index}
                                    src={image}
                                />
                            ))}
                        </div>
                        <button
                            className="nav-btn"
                            onClick={() => {
                                const container = sliderRef.current
                                container.scrollTop += scrollAmount
                            }}
                        >
                            <ArrowCircleDownIcon />
                        </button>
                    </motion.div>
                </Box>
            </div>
        </div>
    )
}

export default Projects
