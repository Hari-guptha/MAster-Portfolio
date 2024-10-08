import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Environment, Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from 'three';
import { ImageImports } from "../constants/Constants";
import ScrReSizeHandler from "./Helper/ScrReSizeHandler";

const HeroSection = () => {
    const bloom = new THREE.Color("white");
    bloom.multiplyScalar(1.5);

    const [video] = useState(() => Object.assign(document.createElement('video'), {
        src: '/font.mp4',
        crossOrigin: 'Anonymous',
        loop: true,
        muted: true,
        generateMipmaps: false,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBFormat
    }));

    useEffect(() => {
        void video.play();
    }, [video]);

    const { width, height } = ScrReSizeHandler()


    return (
        <div style={{ position: "relative" }}>
            <Canvas dpr={Math.min(window.devicePixelRatio, 2)}
                id="HeroSection"
                style={{ width: width, height: height }}
                shadows
                camera={{ position: [3, 0, 2], fov: 130 }}
            >
                <color attach="background" args={["black"]} />
                <mesh position={[0, 2, 0]} rotation={[0, 1, 0]}>
                    <Text fontSize={window.innerWidth <= 600 ? 1 : window.innerWidth / 400} letterSpacing={-0.06} font="fonts/Poppins-Bold.ttf">
                        Hari Guptha
                        <meshBasicMaterial color={bloom} toneMapped={false}>
                            <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                        </meshBasicMaterial>
                    </Text>
                    <Text position={window.innerWidth <= 600 ? [0, -1, 0] : [0, -3, 0]} fontSize={window.innerWidth <= 600 ? 0.3 : 0.4} letterSpacing={-0.06} font="fonts/Poppins-Light.ttf">
                        Full-Stack Developer and Creative Designer
                        <meshBasicMaterial color={"#727272"} toneMapped={false}>
                        </meshBasicMaterial>
                    </Text>
                </mesh>
                {width > 600 ? (
                    <EffectComposer>
                        <Bloom mipmapBlur intensity={1.5} />
                    </EffectComposer>) : null}
            </Canvas>
        </div>
    );
};

export default HeroSection;
