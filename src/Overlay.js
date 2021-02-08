import { useTexture, Text, Billboard } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import fc from './sagelabel/Futura-Condensed.otf'
import circ from './sagelabel/circle.png'
import Sv from './sagelabel/sv.jpg'
import Ss from './sagelabel/ss.jpg'
import Sc from './sagelabel/sc.jpg'
import Siw from './sagelabel/siw.jpg'


export default function Overlay(props) {
    const [clicked, setClick] = useState(false)
    const circtex = useTexture(circ);
    const icon = useTexture(props.icon);
    const label = useTexture(Sv);

    return (
        <> 
            <group position={[3.8, 2.1, 6]}>
                <Billboard args={[3, 1.75]} />
                <Billboard onClick={() => setClick(false)} position={[0, 0, -0.01]} args={[50, 50]}>
                <meshBasicMaterial transparent={true} opacity={0.5} attach="material" color="white" />
                </Billboard>
                <group scale={[0.5, 0.5, 0.5]} rotation={[0, -0.1, 0]} position={[1.5, 0.7, 0.4]} >
                    <mesh onClick={() => window.open("https://objectandthing.xyz/")} >
                        <planeBufferGeometry />
                        <meshBasicMaterial transparent={true} alphaMap={circtex} map={circtex} attach="material" color={"white"} />
                    </mesh>
                    <mesh position={[0, 0, 0.01]} scale={[0.5, 0.5, 0.5]}>
                        <planeBufferGeometry />
                        <meshBasicMaterial transparent={true} alphaMap={icon} map={icon} attach="material" color={props.icolor} />
                    </mesh>
                </group>
                <Text position={[0, 0.6, 0.1]}
                    rotation={[0, -0.2, 0]}
                    font={fc}
                    fontSize={0.17}
                    color={"#05111C"}
                    anchorX="center" // default
                    anchorY="middle" // default
                >
                    {props.text}
                </Text>
                <mesh visible={true} scale={[1.2 * 0.7, 0.35 * 0.7, 1]} rotation={[0, -0.2, 0]} position={[0, -0.7, 0]}>
                    <planeBufferGeometry />
                    <meshBasicMaterial map={label} attach="material" color="white" />
                </mesh>
            </group>

        
        </>

    )
}