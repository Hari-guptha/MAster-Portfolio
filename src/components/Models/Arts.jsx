import React, { useEffect } from 'react'
import { MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import * as THREE from 'three';


export function Arts(props) {
  const { nodes, materials } = useGLTF('Models/circle.glb')
  const mainscreen = React.useMemo(() => {
    const video = document.createElement('video');
    video.src = 'art.mp4';
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
    mainscreen.play();
  }, [mainscreen]);

  const createVideoTexture = (videoElement) => {
    const videoTexture = new THREE.VideoTexture(videoElement);
    videoTexture.flipY = false;
    return videoTexture;
  };

  return (
    <group {...props} dispose={null} position={[0, -2, 0]} scale={0.5}>
      {/* <mesh position-y={0.01} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
        <MeshReflectorMaterial blur={[100, 100]} resolution={[2048]} mixBlur={1} mixStrength={10} roughness={1} depthScale={1} opacity={0.5} transparent minDepthThreshold={0.4} maxDepthThreshold={1.4} color="#333" metalness={0.5} />
      </mesh> */}
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.013']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]}>
        <mesh geometry={nodes.Cube009_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials['Material.014']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube010_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube010_2.geometry} material={materials['Material.015']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube011_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube011_2.geometry} material={materials['Material.016']} />
      </group>
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.003']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]}>
        <mesh geometry={nodes.Cube015_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube015_2.geometry} material={materials['Material.019']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube019_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube019_2.geometry} material={materials['MAIN IMAGE.001']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube020.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube020_1.geometry} material={materials['Material.008']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube021.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube021_1.geometry} material={materials['Material.009']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]}>
        <mesh geometry={nodes.Cube023.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube023_1.geometry} material={materials['Material.011']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube024_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube024_2.geometry} material={materials['Material.012']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube025_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube025_2.geometry} material={materials['Material.003']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube026.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube026_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]}>
        <mesh geometry={nodes.Cube027.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cube027_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube033.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Cube033_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]}>
        <mesh geometry={nodes.Cube034.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Cube034_1.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.videoboard.geometry} material={materials['Material.020']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} >
        <meshBasicMaterial toneMapped={false}>
          <primitive attach="map" object={createVideoTexture(mainscreen)} />
        </meshBasicMaterial>
      </mesh>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube039.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Cube039_1.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('Models/circle.glb')
