import React, { useRef, Suspense, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import './App.css'
import * as THREE from 'three'
import {  Plane , useTexture  } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Test from './Dscf'
import Bank from './OverworldModels/Dbank'
import Chapel from './OverworldModels/Dchapel'
import Kfc from './OverworldModels/Dkfc2'
import Qbuilding from './OverworldModels/Dqsr'
import ocean from './ImageAssets/ocean.jpg'



//softShadows();

extend({ OrbitControls });
const CameraControls = (props) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  //controls.current.update();
  //console.log(camera);
  
  useFrame(() => controls.current.update());
  var x = 2.3;
  return ( 
    <orbitControls
 
      ref={controls}
      args={[camera, domElement]}
      //autoRotate={true}
      enableZoom={true}
      maxPolarAngle={Math.PI*0.45}
      minPolarAngle={Math.PI*0.3}
      maxAzimuthAngle={Math.PI *0.1+x}
      minAzimuthAngle={-Math.PI *0.1+x}
      maxDistance = {22}
      minDistance = {15}
      enablePan = {false}
    />
  );
};






function Overworld(props) {
  //Scene();
  let _ocean = useTexture(ocean);
  _ocean.wrapT = THREE.RepeatWrapping;
  _ocean.repeat.y = -1;
  return (
    <>
    <Canvas gl={{ antialias: true }} shadowMap={true} camera={{ fov: 40, position: [12.7,7.21,-12.3]}} className="canvas">
      <fog attach="fog" args={["#dde9f0", 0, 190]} />
      <CameraControls cam={props.cam} />
      <directionalLight castShadow shadowMap={true} shadowBias={-0.00005} shadow-mapSize-height={1024}
        shadow-mapSize-width={1024} intensity={2} position={[2, 1, 10]} />
      <hemisphereLight color={"white"} groundColor={"#008eff"} intensity={0.4} />
      <mesh castShadow receiveShadow visible={false} rotation={[-3.14 / 2, 0, 0]} position={[0, 0, 0]} scale={[100, 100, 1]} >
        <planeBufferGeometry />
        <meshStandardMaterial color="grey" />
      </mesh>
     
     
      <Suspense fallback={null}>
      
      <Plane args={[120,30]} rotation={[Math.PI,Math.PI*0.25,0]} position={[-20,3,20]}>
      <meshBasicMaterial map={_ocean}/>
      </Plane>
        <Test church2={false} church3={true}  position={[0,0,0]} />
        
        <Test gas={false} church3={false} rotation={[0,Math.PI*0.5,0]} position={[1.77,0,12]} />
        <Test gas={false} church3={false} church={false} church2={false} rotation={[0,Math.PI*0.5,0]} position={[-9,0,11]} />
        <Test gas={false} church3={false} church={false} rotation={[0,-Math.PI*0.5,0]}  position={[12,0,-1.5]}  />
        <Test gas={false} church3={false}   position={[11.5,0,10]}  />
        <Test gas={false} church3={false} rotation={[0,-Math.PI*0.5,0]}  position={[-10,0,-1.8]}  />
        <Test gas={false} church3={false} church={false} rotation={[0,Math.PI*0.5,0]}  position={[-2.6,0,-11]}  />
        <Test gas={false} church3={false} church={false} rotation={[0,-Math.PI*0.5,0]}  position={[-13.5,0,-13.3]}  />
        <Test gas={false} church3={false} church2={false} church={false} rotation={[0,Math.PI,0]}  position={[9.5,0,-12.5]}  />
        <Bank scale={[0.06,0.06,0.06]} position={[3,0.5,1]} rotation={[0,Math.PI*0.5,0]}/>
        <Chapel scale={[0.17,0.17,0.17]} position={[-2.9,0.5,-4.5]}/>
        <Kfc scale={[0.011,0.011,0.011]} position={[-0.3,0.5,-1.5]}  />
        <Qbuilding position={[0,0.5,2.1]} rotation={[0,Math.PI*0.5,0]}  scale={[0.05,0.05,0.05]} />
        {/*<Sky
        sunPosition={[0, 1, 0]}
        turbidity={7.1}
        rayleigh={0.15}
        mieCoefficient={0.006}
        mieDirectionalG={0.941}
        exposure={0.18}
        />*/}
      
      {props.obj}
      </Suspense>
     
    </Canvas>
    </>
  );
}
//  <Loader containerStyles={{backgroundColor: "rgba(0,0,0,0)"}}/>
export default Overworld;
