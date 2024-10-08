import React, { useEffect, useState } from 'react';
import { MeshReflectorMaterial, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Constants } from '../../constants/Constants';
import { useLoader } from '@react-three/fiber';

export function Monitor(props) {
  const { image: ImageIndex } = props;
  const { nodes, materials } = useGLTF('Models/monitor.glb');
  const mainscreen = React.useMemo(() => {
    const video = document.createElement('video');
    video.src = 'background.mkv';
    video.crossOrigin = 'Anonymous';
    video.loop = true;
    video.muted = true;
    video.generateMipmaps = false; 
    video.minFilter = THREE.LinearFilter;
    video.magFilter = THREE.LinearFilter;
    video.format = THREE.RGBFormat;
    return video;
  }, []);

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load texture when ImageIndex changes
  const texture = ImageIndex >= 0 ? useLoader(THREE.TextureLoader, Constants.Projets[ImageIndex].Thumbnail) : null;
  useEffect(() => {
    if (texture) {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.flipY = false
      setImage(texture);
      setLoading(false);
    } else {
      setImage(null);
      setLoading(false);
    }
  }, [texture]);


  useEffect(() => {
    mainscreen.play();
  }, [mainscreen]);

  const createVideoTexture = (videoElement) => {
    const videoTexture = new THREE.VideoTexture(videoElement);
    videoTexture.flipY = false;
    return videoTexture;
  };

  return (
    <group {...props} dispose={null} rotation={[0, 0.8, 0]} position-y={-3} scale={15}>
      <mesh position-y={0.01} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial blur={[100, 100]} resolution={[2048]} mixBlur={1} mixStrength={10} roughness={1} depthScale={1} opacity={0.5} transparent minDepthThreshold={0.4} maxDepthThreshold={1.4} color="#333" metalness={0.5} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Keyboard.geometry} material={materials.Computer} position={[0, 0.004, -0.006]} rotation={[0.004, 0, 0]}>
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Mouse.geometry} material={materials.Computer} position={[0.343, 0.013, 0.092]} rotation={[0.009, 0, 0]} scale={[1.479, 1, 1]}>
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh geometry={nodes.Computer_Stand.geometry} material={materials.Computer} position={[0, 0.008, -0.126]} rotation={[0.007, 0, 0]}>
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh geometry={nodes.Screen.geometry} material={materials.Computer} position={[0, 0.293, -0.182]} rotation={[-0.057, 0, 0]}>
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh geometry={nodes.Screen001.geometry} material={materials['Material.001']} position={[0, 0.293, -0.179]} rotation={[-0.057, 0, 0]} scale={[1, 1.066, 1]}>
        {loading ? (
          <meshBasicMaterial color="gray" />
        ) : image ? (
          <meshBasicMaterial map={image} />
        ) : (
          <meshBasicMaterial toneMapped={false}>
            <primitive attach="map" object={createVideoTexture(mainscreen)} />
          </meshBasicMaterial>
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload('Models/monitor.glb');
