import { lazy, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { ImageImports } from "../constants/Constants";
import ScrReSizeHandler from './Helper/ScrReSizeHandler';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Lazy load Arts component
const Arts = lazy(() => import('./Models/Arts').then(module => ({ default: module.Arts })));

const ArtsSection = () => {
    const { width, height } = ScrReSizeHandler();
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
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

    // Calculate dimensions based on screen size
    const canvasWidth = width > 600 ? width - 120 : width - 40;
    const canvasHeight = width > 600 ? height - 250 : height - 350;
    const fov = width > 600 ? 40 : 70;

    // Common canvas props
    const canvasProps = {
        dpr: Math.min(window.devicePixelRatio, 2),
        style: { 
            width: canvasWidth, 
            height: canvasHeight, 
            borderRadius: "10px" 
        },
        shadows: true,
        camera: { 
            position: [19, 1, 2], 
            fov 
        }
    };

    // Common OrbitControls props
    const orbitControlsProps = {
        enablePan: false,
        autoRotate: true,
        autoRotateSpeed: 1,
        enableZoom: false,
        maxPolarAngle: Math.PI / 2,
        minPolarAngle: Math.PI / 2.2
    };

    return (
        <div id="Digital art" ref={ref}>
            <div id='SectionSpacing'>
                <motion.div 
                    id='AboutTitle'
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                >
                    <div>
                        <h3 id='SectionTitle'>The Canvas of Imagination</h3>
                        <h4 id='SubTitle'>Artistry. Imagination. Stories. Diversity. Masterpieces.</h4>
                    </div>
                    <img id='TopIcon' src={ImageImports.ArtsIcon} alt="work" />
                </motion.div>
                <motion.div 
                    style={{ position: "relative", marginTop: "5%" }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    transition={{ delay: 0.2 }}
                >
                    <Canvas {...canvasProps}>
                        <Environment preset="sunset" environmentIntensity={1} />
                        <ambientLight color="white" intensity={0.8} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls {...orbitControlsProps} />
                        <color attach="background" args={["black"]} />
                        <Suspense fallback={null}>
                            <Arts />
                        </Suspense>
                    </Canvas>
                </motion.div>
            </div>
        </div>
    );
};

export default ArtsSection;
