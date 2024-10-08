import React, { useEffect, useState } from 'react';
import { MeshReflectorMaterial, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export function RightMonitor(props) {
  const { nodes, materials } = useGLTF('Models/monitor.glb');
  const rightscreen = React.useMemo(() => {
    const video = document.createElement('video');
    video.src = 'three.mp4';
    video.crossOrigin = 'Anonymous';
    video.loop = true;
    video.muted = true;
    video.generateMipmaps = false; 
    video.minFilter = THREE.LinearFilter;
    video.magFilter = THREE.LinearFilter;
    video.format = THREE.RGBFormat;
    return video;
  }, []);

  useEffect(() => {
    rightscreen.play();
  }, [rightscreen]);

  const createVideoTexture = (videoElement) => {
    const videoTexture = new THREE.VideoTexture(videoElement);
    videoTexture.flipY = false;
    return videoTexture;
  };

  return (
    <group {...props} dispose={null} rotation={[0, 0.8, 0]} position-y={-3} scale={15}>
      <mesh geometry={nodes.Computer_Stand.geometry} material={materials.Computer} position={[0.7, 0.008, -0.126]} rotation={[0.007, 0, 0]}>
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh geometry={nodes.Screen.geometry} material={materials.Computer} position={[0.7, 0.293, -0.182]} rotation={[-0.057, 0, 0]}>
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh geometry={nodes.Screen001.geometry} material={materials['Material.001']} position={[0.7, 0.293, -0.179]} rotation={[-0.057, 0, 0]} scale={[1, 1.066, 1]}>
          <meshBasicMaterial toneMapped={false}>
            <primitive attach="map" object={createVideoTexture(rightscreen)} />
          </meshBasicMaterial>
      </mesh>
     
    </group>
  );
}

useGLTF.preload('Models/monitor.glb');
