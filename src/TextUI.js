import { useTexture, Text } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import fc from './sagelabel/Futura-Condensed.otf'
import circ from './sagelabel/circle.png'



export default function Button(props) {
  const group = useRef()
  const [active, setActive] = useState(false)
  const circtex = useTexture(circ);
  const icon = useTexture(props.icon);

  return (
    <>
      <group ref={group} position={props.position}>
        <Text
          font={fc}
          color={"black"}
          fontSize={0.15}
        >
          {props.text}
    </Text>
        <mesh
          onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}
          visible={true} position={[0, 0, -0.001]} scale={[props.wx, 0.3, 1]}> 
          <planeBufferGeometry />
          <meshBasicMaterial transparent={true} opacity={0.9} attach="material" color={active ? "orange" : "white"} />
        </mesh>
        <group scale={[0.5, 0.5, 0.5]} position={[props.wx*0.5+0.15, 0, 0.01]} >
          <mesh >
            <planeBufferGeometry />
            <meshBasicMaterial transparent={true} alphaMap={circtex} map={circtex} attach="material" color={"white"} />
          </mesh>
          <mesh position={[0,0,0.01]} scale={[0.5, 0.5, 0.5]}>
            <planeBufferGeometry />
            <meshBasicMaterial transparent={true} alphaMap={icon} map={icon} attach="material" color={props.icolor} />
          </mesh>
        </group>
      </group>
    </>
  )
}