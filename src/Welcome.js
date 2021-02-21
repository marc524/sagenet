import React, { useState } from 'react'
import { Plane, Text, Html ,useTexture } from '@react-three/drei'
import fc from './sagelabel/Futura-Condensed.otf'
import IV from './ImageAssets/IV.jpg'
import Raj from './ImageAssets/Raj.jpg'
import David from './ImageAssets/David.jpg'
import Paul from './ImageAssets/Paul.jpg'
import close from './hudicons/close.png'
import circ from './sagelabel/circle.png'
import logo from './SageNetblue.png'

function Thumbnail(props){
    const [play,setPlay] = useState(false);
    return(
    <>
        {play && <><Plane visible={false}  onClick={()=>setPlay(false)} args={[10,10]} />
            <Html center scaleFactor={2.23}>
            <div class="content">
            <iframe src={props.vidurl} width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Html></>}
        <Plane onClick={()=>setPlay(true)} args={[1.42,1]} scale={[0.6,0.6,1]} position={props.position}>
            <meshBasicMaterial map={useTexture(props.img)} />
        </Plane>
    </>
    )
}

export default function Welcome(props) {
    const [open, setOpen] = useState(true);
    const _close = useTexture(close);
    const _circ = useTexture(circ);
    const _logo = useTexture(logo);
    /*if (props.index == 0) {
      open = true;
    }*/
    return (
      <>{open &&
        <>
         
          
          <group position={[0, 3.1, 20.7]}>
          <Text anchorX="left" position={[-1.45,0.72,0.01]} font={fc} color={"#f72900"} fontSize={0.20}> {". . . . . . . . ."} </Text>
          <Text position={[0, 0.66, 0.1]} rotation={[0, 0, 0]} font={fc} fontSize={0.17} color={"#05111C"} anchorX="center" anchorY="middle" >
            Hear From Our Experts
            <Text position={[0.61,0.02,0.01]} font={fc} color={"#f72900"} fontSize={0.20}> {"."} </Text>
          </Text>
          <Plane onClick={() => setOpen(!open)} args={[0.4, 0.4]} position={[2, 0.9, 0]} >
              <meshBasicMaterial transparent={true} alphaMap={_close} map={_close}/>
            </Plane>
            <Plane  args={[0.7, 0.7]}  position={[1.4, 0.7, 0.01]} >
                <meshBasicMaterial map={_circ} transparent={true} alphaMap={_circ}/>
                <Plane  args={[0.5, 0.5]}  position={[0,0,0.01]}>
                <meshBasicMaterial map={_logo} transparent={true} alphaMap={_circ}/>
                </Plane>
            </Plane>
         
          <Thumbnail img={IV} position={[-0.5,0.16,0.1]} vidurl={"https://player.vimeo.com/video/501964130?autoplay=1&title=0&byline=0&portrait=0"}/>
          <Thumbnail img={David}  position={[-0.5,-0.49,0.1]} vidurl={"https://player.vimeo.com/video/501964034?autoplay=1&title=0&byline=0&portrait=0"}/>
          <Thumbnail img={Raj}  position={[0.5,0.16,0.1]} vidurl={"https://player.vimeo.com/video/501964557?autoplay=1&title=0&byline=0&portrait=0"}/>
          <Thumbnail img={Paul}  position={[0.5,-0.49,0.1]} vidurl={"https://player.vimeo.com/video/501964243?autoplay=1&title=0&byline=0&portrait=0"}/>
          
          <Plane args={[3, 1.78]}  >
          
             
            
            {/*open && 
            <Html center scaleFactor={2.5}>
            <div class="content">
            <iframe src={"https://player.vimeo.com/video/508894833?autoplay=1&title=0&byline=0&portrait=0"} width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Html>*/}
          </Plane>
          </group>
        </>}
      </>
    )
  }