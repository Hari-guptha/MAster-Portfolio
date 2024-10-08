import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Monitor } from './Models/Monitor'
import { Constants, ImageImports } from '../constants/Constants'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { LeftMonitor } from './Models/MonitorLeft'
import { RightMonitor } from './Models/MonitorRight'
import { div } from 'three/webgpu'
import ScrReSizeHandler from './Helper/ScrReSizeHandler'
import { Box } from '@mui/material'
// import { EffectComposer, HueSaturation, BrightnessContrast } from '@react-three/postprocessing';


const Projects = () => {
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);
    const scrollAmount = 100;
    const [currectimg, setcurrentimg] = useState()
    const [images, setImages] = useState(Constants.Projets.map(project => project.Thumbnail))
    const { width, height } = ScrReSizeHandler()

    useEffect(() => {
        { console.log(sliderRef) }
    }, [sliderRef])


    return (
        <div id='SectionSpacing'>
            <div id='AboutTitle'>
                <div>
                    <h3 id='SectionTitle'>Works</h3>
                    <h4 id='SubTitle'>Flow of innovative undertakings</h4>
                </div>
                <img id='TopIcon' src={ImageImports.ProjectIcon} alt="work" />
            </div>
            <div id='Projects'>
                <Box sx={{ display: { sm: "none", xs: "block" } }}>
                    <div id="ProjectSlider">
                        <div className="ProjectSliderContiner">
                            {/* Left Navigation Button */}
                            <button
                                className="nav-btn"
                                onClick={() => {
                                    const container = sliderRef2.current;
                                    container.scrollLeft -= scrollAmount;
                                    console.log(container) // Scroll horizontally to the right
                                    // Scroll horizontally to the left
                                }}
                            >
                                <ArrowCircleUpIcon />
                            </button>

                            {/* Images Container */}
                            <div className="images-container" ref={sliderRef2}>
                                {images.map((image, index) => (
                                    <img
                                        onClick={() => setcurrentimg(index)}
                                        className="image"
                                        alt="sliderImage"
                                        key={index}
                                        src={image}
                                    />
                                ))}
                            </div>

                            {/* Right Navigation Button */}
                            <button
                                className="nav-btn"
                                onClick={() => {
                                    const container = sliderRef2.current;
                                    container.scrollLeft += scrollAmount;
                                    console.log(container) // Scroll horizontally to the right
                                }}
                            >
                                <ArrowCircleDownIcon />
                            </button>
                        </div>
                    </div>
                </Box>
                <div style={{ flex: "0 0 70% " }}>
                    <Canvas dpr={Math.min(window.devicePixelRatio, 2)} style={{ widows: width, height: (height - 400), borderRadius: "10px" }} shadows camera={{ position: [5, 0, 5], fov: width > 600 ? 65 : 50 }}>
                        <color attach="background" args={["black"]} />
                        <ambientLight color={"white"} intensity={3} />
                        <directionalLight position={[10, 10, 10]} intensity={3} />
                        <Monitor image={currectimg} />
                        {width > 600 ? (
                            <>
                                <LeftMonitor image={currectimg} />
                                <RightMonitor />
                            </>
                        ) : null}
                        <OrbitControls enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 4} />
                    </Canvas>
                    {currectimg >= 0 ? <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div id='skillsicons'>
                                {Constants.Projets[currectimg].Tech.map((icon, index) => {
                                    return <img id="skillicon" key={index} src={icon} alt="icons" />
                                })}
                            </div>
                            <div>
                                {
                                    Constants.Projets[currectimg].Live ? <a target='_blank' href={Constants.Projets[currectimg].Live}><h4 id='LivBtn'>LIVE - click to see</h4></a> : <></>
                                }
                            </div>
                        </div>
                        <h3 id="ProjectContent">{Constants.Projets[currectimg].content}</h3>
                    </div> : null}
                </div>
                <Box sx={{ display: { sm: "block", xs: "none" } }} id='ProjectSlider'>
                    <div className="ProjectSliderContiner">
                        <button
                            className="nav-btn"
                            onClick={() => {
                                const container = sliderRef.current;
                                container.scrollTop -= scrollAmount;
                            }}
                        >
                            <ArrowCircleUpIcon />
                        </button>
                        <div className="images-container" ref={sliderRef}>
                            {images.map((image, index) => (
                                <img
                                    onClick={() => setcurrentimg(index)}
                                    className="image"
                                    alt="sliderImage"
                                    key={index}
                                    src={image}
                                />
                            ))}
                        </div>
                        <button
                            className="nav-btn"
                            onClick={() => {
                                const container = sliderRef.current;
                                container.scrollTop += scrollAmount;
                            }}
                        >
                            <ArrowCircleDownIcon />
                        </button>
                    </div>
                </Box>
            </div>
        </div >
    )
}

export default Projects
