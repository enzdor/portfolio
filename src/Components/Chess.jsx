/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: VioletBoom (https://sketchfab.com/violetboom)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/chess-set-lp-b5d2b1a6b97046e496bf469feb838354
title: Chess Set LP
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {animated} from "@react-spring/three"

export default function Chess({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/chess_set_lp/scene.gltf')
  return (
    <animated.group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[7.02, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[0.97, 7.05, 1.55]} scale={0.4}>
          <mesh geometry={nodes.Chess_Queen_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[-0.97, 6.96, 1.6]} rotation={[0, 0, -Math.PI / 8]} scale={0.37}>
          <mesh geometry={nodes.Cylinder_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[2.93, 7.07, 1.4]} scale={0.38}>
          <mesh geometry={nodes.Chess_Bishop_0.geometry} material={materials['Material.011']} />
        </group>
        <group position={[4.96, 7.13, 1.21]} scale={0.37}>
          <mesh geometry={nodes.Chess_Knight_0.geometry} material={materials['Material.008']} />
        </group>
        <group position={[-7.03, 7.02, 1.24]} scale={0.35}>
          <mesh geometry={nodes.Chess_Rook_0.geometry} material={materials['Material.004']} />
        </group>
        <group position={[-1.02, -7, 0.27]}>
          <mesh geometry={nodes.Plane001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.003']} />
        </group>
        <group position={[6.98, 7.02, 1.24]} scale={0.35}>
          <mesh geometry={nodes.Chess_Rook001_0.geometry} material={materials['Material.005']} />
        </group>
        <group position={[6.98, -6.98, 1.24]} scale={0.35}>
          <mesh geometry={nodes.Chess_Rook002_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-7.03, -7, 1.24]} scale={0.35}>
          <mesh geometry={nodes.Chess_Rook003_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-5.03, 7.13, 1.21]} scale={0.37}>
          <mesh geometry={nodes.Chess_Knight001_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[-5.03, -6.91, 1.21]} rotation={[0, 0, -Math.PI]} scale={0.37}>
          <mesh geometry={nodes.Chess_Knight002_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[4.96, -6.94, 1.21]} rotation={[0, 0, -Math.PI]} scale={0.37}>
          <mesh geometry={nodes.Chess_Knight003_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-3.04, 7.08, 1.4]} scale={0.38}>
          <mesh geometry={nodes.Chess_Bishop001_0.geometry} material={materials['Material.012']} />
        </group>
        <group position={[2.93, -6.98, 1.4]} scale={0.38}>
          <mesh geometry={nodes.Chess_Bishop002_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-3.04, -6.98, 1.4]} scale={0.38}>
          <mesh geometry={nodes.Chess_Bishop003_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-0.97, -6.98, 1.6]} rotation={[0, 0, -Math.PI / 8]} scale={0.37}>
          <mesh geometry={nodes.Cylinder001_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[0.99, -7.02, 1.55]} scale={0.4}>
          <mesh geometry={nodes.Chess_Queen001_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[7.02, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn001_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[5.02, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn002_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[3, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn003_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[0.91, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn004_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[-1.02, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn005_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[-3.01, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn006_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[-5.03, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn007_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[-7.11, 5.14, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn008_0.geometry} material={materials['Material.009']} />
        </group>
        <group position={[5.08, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn009_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[2.96, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn010_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[0.97, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn011_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-0.99, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn012_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-2.99, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn013_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-5.14, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn014_0.geometry} material={materials['Material.006']} />
        </group>
        <group position={[-6.99, -5.02, 1.05]} scale={0.43}>
          <mesh geometry={nodes.Chess_Pawn015_0.geometry} material={materials['Material.006']} />
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/models/chess_set_lp/scene.gltf')
