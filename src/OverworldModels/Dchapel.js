/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import chapel from './dchapel.glb'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(chapel)
  return (
    <group {...props} ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.02, 0.02, 0.02]}>
        <mesh material={materials.brick} geometry={nodes.church_asset_1.geometry} />
        <mesh material={materials.wood} geometry={nodes.church_asset_2.geometry} />
        <mesh material={materials.Gold} geometry={nodes.church_asset_3.geometry} />
        <mesh material={materials.Black_shade} geometry={nodes.church_asset_4.geometry} />
        <mesh material={materials.metel} geometry={nodes.church_asset_5.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload(chapel)
