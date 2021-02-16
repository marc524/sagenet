import { Canvas, extend, useThree, useFrame } from "react-three-fiber"

import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useTexture , Text} from '@react-three/drei'
import Sv from './sagelabel/sv.jpg'
import Ss from './sagelabel/ss.jpg'
import Sc from './sagelabel/sc.jpg'
import Siw from './sagelabel/siw.jpg'
import { Vector2 } from "three"
import PanelUI from './PanelUI'



export default function Labelgroup(props){
    const group = useRef()
    const [active, setActive] = useState(0);
    

    function Label(props){

        const tex = useTexture(props.file);
        tex.center = new Vector2(0.5,0.5);
        tex.repeat =  new Vector2(1.5,1.5);
    
        return(
            <mesh visible={true} onClick={()=>setActive(props.index) }  scale={props.scale} position={props.position}>
            <planeBufferGeometry />
            <meshBasicMaterial map={tex}  attach="material" color="white" />
          </mesh>
    
        )
    }
    
    return(
    <group position={props.position} rotation={props.rotation} visible={props.seen} ref={group}>
        <group position={[0,-1*props.position[1],0]}>
    <PanelUI index={active}/>
    </group>
        <Label index={0}  file={Sv} scale={[1.2,0.35,1]} position={[2,0,5.01]} />
        <Label index={1}  file={Ss} scale={[1.5,0.35,1]} position={[3.1,0,5]} />
        <Label index={3}  file={Siw} scale={[2.3,0.35,1]} position={[5.9,0,5]} />
        <Label index={2}  file={Sc} scale={[1.5,0.35,1]} position={[4.4,0,5.01]} />
 
    </group>
    )
}