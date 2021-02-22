import { useTexture, Text,  Plane, meshBounds, Html  } from '@react-three/drei'
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
  const [skim,setSkim] = useState(false);
  const circtex = useTexture(circ);
  const icon = useTexture(props.icon);
  const label = useTexture(select(props.index));
  const linkimg = useTexture(props.linki || props.icon);
  const linkimgA = useTexture(props.linkA || props.icon);


  var bannersize;
  switch (props.index) {
    case 1:
      bannersize = [1.5*0.7,0.35*0.7,1];
      break;
    case 2:
      bannersize = [1.5*0.7,0.35*0.7,1];
      break;
    case 3:
      bannersize = [2.3*0.7,0.35*0.7,1];
      break;
    default:
      bannersize = [1.2*0.7,0.35*0.7,1];
      break;
  }


  return (
    <>
      <group ref={group} position={props.position}>
        <Text font={fc} color={"#1D3A5C"} fontSize={0.15}> {props.text.toUpperCase()} </Text>
        
        <mesh onClick={() => setClick(true)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)} visible={true} position={[0, 0, -0.001]} scale={[props.wx, 0.3, 1]}>
          <planeBufferGeometry />
          <meshBasicMaterial transparent={true} opacity={0.8} attach="material" color={active ? "orange" : "white"} />
        </mesh>
        <group scale={[0.5, 0.5, 0.5]} position={[props.wx * 0.5 + 0.15, 0, 0.01]} >
          <mesh>
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
        <group position={[1.8, 2.1, 1]}>
          <Plane args={[3, 1.75]} position={[0, 0, -0.1]} rotation={[0, props.skew, 0]} >
            <meshBasicMaterial color={"white"}/>
            </Plane>
          <Plane  onClick={() => {setSkim(false);setClick(false)}} rotation={[0, props.skew, 0]} position={[0, 1, -0.01]} args={[10, 0.5]}>
            <meshBasicMaterial transparent={true} opacity={0.5} attach="material" color="white" />
          </Plane>
          <Plane  onClick={() => {setSkim(false);setClick(false)}} rotation={[0, props.skew, 0]} position={[0, -1, -0.01]} args={[10, 0.5]}>
            <meshBasicMaterial transparent={true} opacity={0.5} attach="material" color="white" />
          </Plane>
          <Plane  onClick={() => {setSkim(false);setClick(false)}} rotation={[0, props.skew, 0]} position={[2.9, 0, -0.01]} args={[3, 1.5]}>
            <meshBasicMaterial transparent={true} opacity={0.5} attach="material" color="white" />
          </Plane>
          <Plane  onClick={() => {setSkim(false);setClick(false)}} rotation={[0, props.skew, 0]} position={[-2.9, 0, -0.01]} args={[3, 1.5]}>
            <meshBasicMaterial transparent={true} opacity={0.5} attach="material" color="white" />
          </Plane>
        
          <>
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
         
          <Text position={[0, 0.6, 0.1]} rotation={[0, props.skew, 0]} font={fc} fontSize={0.17} color={"#003C64"} anchorX="center" anchorY="middle" >
            {props.text.substring(0,props.text.length-1)}
            <Text anchorX="left" position={[-1.4,0.05,0.01]} font={fc} color={"#f0861d"} fontSize={0.20}> {". . . . . . . . . . . . ".substring(0,36-(props.text.length>22?props.text.length-4:props.text.length))} </Text>
            <Text position={[props.text.length*0.032,0.02,0.01]} font={fc} color={"#f0861d"} fontSize={0.2}> {"."} </Text>
          </Text>
          

          
          <Text position={[props.image? -0.4:0, props.image? 0:0.1, 0.1]} rotation={[0, props.skew, 0]} font={"Arial"} fontSize={0.07} textAlign={"center"} maxWidth={props.image? 1.6:2} color={"#003C64"} anchorX="center" anchorY="middle" >
            {props.para}
          </Text>
          <Plane position={[0.9,0,0]} args={[0.8,0.8]} >
            <meshBasicMaterial map={props.image} />
          </Plane>
          <mesh visible={true} scale={bannersize} rotation={[0, props.skew, 0]} position={[0, -0.7, 0]}>
            <planeBufferGeometry />
            <meshBasicMaterial map={label} attach="material" color="white" />
          </mesh>
          </>
            
          {props.linki &&
            <mesh onClick={() => setSkim(true)} visible={true} scale={[1.7, 0.35 * 0.6, 1]} rotation={[0, props.skew, 0]} position={[0, -0.4, 0.1]}>
              <planeBufferGeometry />
              <meshBasicMaterial map={linkimg} transparent={true} alphaMap={linkimgA} attach="material" color="white" />
            </mesh>}
           
                    {skim && 
          <Html center scaleFactor={2.5}>
          <div class="content">
          <iframe src={props.vidurl} width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
          </Html>}
         
          
         
        </group>
                    
      }

    </>
  )
}
