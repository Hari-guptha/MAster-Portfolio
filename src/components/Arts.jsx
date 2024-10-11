import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Environment, OrbitControls } from "@react-three/drei";
import { ImageImports } from "../constants/Constants";
const Arts = lazy(() => import('./Models/Arts').then(module => ({ default: module.Arts })));
import ScrReSizeHandler from './Helper/ScrReSizeHandler'

const ArtsSection = () => {
    const { width, height } = ScrReSizeHandler();
    return (
        <div id="Digital art">
            <div id='SectionSpacing'>
                <div id='AboutTitle'>
                    <div>
                        <h3 id='SectionTitle'>The Canvas of Imagination</h3>
                        <h4 id='SubTitle'>Artistry. Imagination. Stories. Diversity. Masterpieces.</h4>
                    </div>
                    <img id='TopIcon' src={ImageImports.ArtsIcon} alt="work" />
                </div>
                <div style={{ position: "relative", marginTop: "5%" }}>
                    <Canvas dpr={Math.min(window.devicePixelRatio, 2)}
                        style={{ width: width > 600 ? (width - 120) : (width - 40), height: width > 600 ? (height - 250) : (height - 350), borderRadius: "10px" }}
                        shadows
                        camera={{ position: [19, 1, 2], fov: width > 600 ? 40 : 70 }}
                    >
                        <Environment preset="sunset" environmentIntensity={1} />
                        <ambientLight color={"white"} intensity={0.8} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={1} enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2.2} />
                        <color attach="background" args={["black"]} />
                        <Suspense>
                            <Arts />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default ArtsSection;
