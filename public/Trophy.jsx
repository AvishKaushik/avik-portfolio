/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 trophy.gltf 
Author: JeremyW (https://sketchfab.com/JeremyW)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/trophy-2e32184ea51d4b50968beaf48aef0d2a
Title: Trophy
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Trophy(props) {
  const { nodes, materials } = useGLTF('/trophy.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, -0.097, 0]} scale={5.791}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.gold} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/trophy.gltf')
