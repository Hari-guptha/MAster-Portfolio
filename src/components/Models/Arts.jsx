import Reactx from 'react'
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'

export function Arts(props) {
  const { nodes, materials } = useGLTF('Models/circle.glb')
  const texture = useLoader(TextureLoader, '/Models/painting.png');
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.y = -1;
  texture.offset.y = 1;

  return (
    <group {...props} dispose={null} position={[0, -2, 0]} scale={0.5}>
      <group position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]}>
        <mesh geometry={nodes.Cube008.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.014']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.015']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.016']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.019']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['MAIN IMAGE.001']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Material.008']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.009']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Material.011']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Material.012']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['Material.004']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.005']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.006']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]} />
      <mesh geometry={nodes.Cube024.geometry} material={materials['Material.017']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh geometry={nodes.Cube025.geometry} material={materials['Material.018']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 4.25, 0.137]} />
      <mesh geometry={nodes.Cube030.geometry} material={materials['Material.010']} position={[0, 4.427, 0.215]} rotation={[0, 0.003, 0]} scale={[4.045, 2.608, 0.137]} />
    </group>
  )
}

useGLTF.preload('Models/circle.glb')
