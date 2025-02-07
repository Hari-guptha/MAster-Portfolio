import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Text } from "@react-three/drei";
import { useEffect, useState, useMemo, Suspense } from "react";
import * as THREE from 'three';
import ScrReSizeHandler from "./Helper/ScrReSizeHandler";
import AnimatedText from './AnimatedText';


const LoadingFallback = () => (
    <div id="Loader">Loading 3D Elements...</div>
);

const HeroContent = ({ width, height }) => {
    const bloom = useMemo(() => new THREE.Color("white").multiplyScalar(1.5), []);

    const [video] = useState(() => {
        const vid = document.createElement('video');
        Object.assign(vid, {
            src: '/font.mp4',
            crossOrigin: 'Anonymous',
            loop: true,
            muted: true,
            playsInline: true,
        });
        return vid;
    });

    useEffect(() => {
        const playVideo = async () => {
            try {
                await video.play();
            } catch (error) {
                console.error("Video autoplay failed:", error);
            }
        };
        playVideo();
    }, [video]);

    const calculateFontSize = useMemo(() => {
        if (width <= 380) return 1.2;
        if (width <= 480) return 1.4;
        if (width <= 768) return 1.6;
        if (width <= 1024) return width / 500;
        return width / 400;
    }, [width]);

    const calculateSubtitlePosition = useMemo(() => {
        if (width <= 380) return [0, -1.5, 0]; // Mobile: 10px gap
        if (width <= 480) return [0, -1.5, 0]; // Mobile: 10px gap
        if (width <= 768) return [0, -1.5, 0]; // Tablet: 10px gap
        return [0, -3, 0]; // Desktop: increased to 20px gap
    }, [width]);

    const calculateSubtitleSize = useMemo(() => {
        if (width <= 380) return 0.35;
        if (width <= 480) return 0.4;
        if (width <= 768) return 0.45;
        return 0.4;
    }, [width]);

    return (
        <Canvas 
            dpr={Math.min(window.devicePixelRatio, 1.5)} // Lowered max dpr for performance
            id="HeroSection"
            style={{ width, height }}
            shadows
            camera={{ 
                position: [3, 0, 2], 
                fov: width <= 768 ? 150 : 130,
                near: 0.1,
                far: 1000
            }}
        >
            <color attach="background" args={["black"]} />
            <mesh position={[0, 2, 0]} rotation={[0, 1, 0]}>
                <AnimatedText 
                    text="Hari Guptha"
                    fontSize={calculateFontSize}
                    font="fonts/Poppins-Bold.ttf"
                    delay={0}
                >
                    <meshBasicMaterial color={bloom} toneMapped={false}>
                        <videoTexture 
                            attach="map" 
                            args={[video]} 
                            encoding={THREE.sRGBEncoding}
                            generateMipmaps={false}
                        />
                    </meshBasicMaterial>
                </AnimatedText>
                <AnimatedText 
                    text="Full-Stack Developer and Creative Designer"
                    position={calculateSubtitlePosition}
                    fontSize={calculateSubtitleSize}
                    font="fonts/Poppins-Light.ttf"
                    delay={0.3}
                >
                    <meshBasicMaterial color={"#727272"} toneMapped={false} />
                </AnimatedText>
            </mesh>
            <EffectComposer>
                <Bloom 
                    mipmapBlur 
                    intensity={width <= 768 ? 1 : 3} // Reduced intensity for performance
                    luminanceThreshold={0.8}
                    luminanceSmoothing={0.9}
                />
            </EffectComposer>
        </Canvas>
    );
};

const HeroSection = () => {
    const { width, height } = ScrReSizeHandler();

    return (
        <div id="Home" style={{ 
            width: '100%',
            maxWidth: '100vw',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <Suspense fallback={<LoadingFallback />}>
                <HeroContent width={width} height={height} />
            </Suspense>
        </div>
    );
};

export default HeroSection;
