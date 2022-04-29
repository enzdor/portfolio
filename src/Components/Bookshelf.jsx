/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Digitalis Reality (https://sketchfab.com/digitalisreality)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-style-bookshelf-6d3e4ffc8e71427fb8ec52c5be8b576d
title: Low Poly Style Bookshelf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {animated} from "@react-spring/three"

export default function Bookshelf({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/low_poly_style_bookshelf/scene.gltf')
  return (
    <animated.group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube_wood_0.geometry} material={materials.wood} />
          </group>
          <group position={[-122.24, -63, 5.18]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Circle003_b001_0.geometry} material={materials['b.001']} />
            <mesh geometry={nodes.Circle003_paper_0.geometry} material={materials.paper} />
          </group>
          <group position={[212.55, -17.71, 5.18]} rotation={[-Math.PI / 2, 1.56, 0]} scale={[70, 48.96, 70]}>
            <mesh geometry={nodes.Circle009_o_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Circle009_paper_0.geometry} material={materials.paper} />
          </group>
          <group position={[186.76, 174.42, 32.18]} rotation={[-Math.PI / 2, -0.87, 0]} scale={100}>
            <mesh geometry={nodes.Circle005_r_0.geometry} material={materials.material_4} />
            <mesh geometry={nodes.Circle005_paper_0.geometry} material={materials.paper} />
          </group>
          <group position={[-45.43, 416.36, -8.72]} rotation={[-Math.PI / 2, 0, 0]} scale={73.49}>
            <mesh geometry={nodes.Circle014_y_0.geometry} material={materials.material_5} />
            <mesh geometry={nodes.Circle014_paper_0.geometry} material={materials.paper} />
          </group>
          <group position={[-91.96, 685.34, 26.16]} rotation={[-Math.PI / 2, 0, 0]} scale={[51.48, 51.48, 97.06]}>
            <mesh geometry={nodes.Circle013_br_0.geometry} material={materials.material_6} />
            <mesh geometry={nodes.Circle013_paper_0.geometry} material={materials.paper} />
          </group>
          <group position={[201.56, 630.04, 26.16]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100}>
            <mesh geometry={nodes.Circle015_g_0.geometry} material={materials.material_7} />
            <mesh geometry={nodes.Circle015_paper_0.geometry} material={materials.paper} />
          </group>
          <group position={[236.56, 937, 29.93]} rotation={[-Math.PI / 2, 0, 0]} scale={[146.25, 100, 100]}>
            <mesh geometry={nodes.Circle011_pu_0.geometry} material={materials.material_8} />
            <mesh geometry={nodes.Circle011_paper_0.geometry} material={materials.paper} />
          </group>
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/models/low_poly_style_bookshelf/scene.gltf')
