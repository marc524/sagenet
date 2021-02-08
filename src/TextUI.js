import { useTexture, Text, Billboard } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import fc from './sagelabel/Futura-Condensed.otf'
import circ from './sagelabel/circle.png'
import Sv from './sagelabel/sv.jpg'
import Ss from './sagelabel/ss.jpg'
import Sc from './sagelabel/sc.jpg'
import Siw from './sagelabel/siw.jpg'



function select(index) {
  switch (index) {
    case 1:
      return Ss;
    case 2:
      return Sc;
    case 3:
      return Siw;
    default:
      return Sv;
  }
}

  export default function Button(props) {
    
    const group = useRef()
    const [active, setActive] = useState(false)
    const [clicked, setClick] = useState(false)
    const circtex = useTexture(circ);
    const icon = useTexture(props.icon);
    const label = useTexture(select(props.index));
    const linkimg = useTexture(props.linki || props.icon);
    const linkimgA = useTexture(props.linkA || props.icon);


    return (
      <>
        <group ref={group} position={props.position}>
          <Text
            font={fc}
            color={"#05111C"}
            fontSize={0.15}
          >
            {props.text}
          </Text>
          <mesh
            onClick={() => setClick(true)}
            onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}
            visible={true} position={[0, 0, -0.001]} scale={[props.wx, 0.3, 1]}>
            <planeBufferGeometry />
            <meshBasicMaterial transparent={true} opacity={0.9} attach="material" color={active ? "orange" : "white"} />
          </mesh>
          <group scale={[0.5, 0.5, 0.5]} position={[props.wx * 0.5 + 0.15, 0, 0.01]} >
            <mesh >
              <planeBufferGeometry />
              <meshBasicMaterial transparent={true} alphaMap={circtex} map={circtex} attach="material" color={"white"} />
            </mesh>
            <mesh position={[0, 0, 0.01]} scale={[0.5, 0.5, 0.5]}>
              <planeBufferGeometry />
              <meshBasicMaterial transparent={true} alphaMap={icon} map={icon} attach="material" color={props.icolor} />
            </mesh>
          </group>
        </group>
        {clicked &&
          <group position={[3.8, 2.1, 6]}>
            <Billboard args={[3, 1.75]} />
            <Billboard onClick={() => setClick(false)} position={[0, 0, -0.01]} args={[50, 50]}>
              <meshBasicMaterial transparent={true} opacity={0.5} attach="material" color="white" />
            </Billboard>
            <group scale={[0.5, 0.5, 0.5]} rotation={[0, -0.1, 0]} position={[1.5, 0.7, 0.4]} >
              <mesh  >
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
            <Text position={[0, 0.1, 0.1]}
              rotation={[0, -0.2, 0]}
              font={"Arial"}
              fontSize={0.07}
              textAlign={"center"}
              maxWidth={2}
              color={"#05111C"}
              anchorX="center" // default
              anchorY="middle" // default
            >
              {props.para}
            </Text>
           {props.link &&
            <mesh onClick={() => window.open(props.url)} visible={true} scale={[1.7 , 0.35 * 0.6, 1]} rotation={[0, -0.2, 0]} position={[0, -0.4, 0]}>
              <planeBufferGeometry />
              <meshBasicMaterial map={linkimg} transparent={true} alphaMap={linkimgA} attach="material" color="white" />
            </mesh>
            }
            <mesh visible={true} scale={[1.2 * 0.7, 0.35 * 0.7, 1]} rotation={[0, -0.2, 0]} position={[0, -0.7, 0]}>
              <planeBufferGeometry />
              <meshBasicMaterial map={label} attach="material" color="white" />
            </mesh>
          </group>

        }

      </>
    )
  }
  