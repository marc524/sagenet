import React, { useRef, Suspense, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import './App.css'
import * as THREE from 'three'
import {  Sky  } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Test from './Dscf'



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




const dummy = new THREE.Vector3();
const ldummy = new THREE.Vector3();
const target = new THREE.Vector3(0, 0, 0);


function Dolly(props) {

  useFrame(state => {
   // state.camera.position.lerp(dummy.set(props.gate ? 0 : 3, props.gate ? 3 : 2, props.gate ? 25 : 10), 0.1);
    target.lerp(ldummy.set(props.gate ? 0 : 4, props.gate ? 3 : 2, props.gate ? -25 : 5), 0.1);
    state.camera.lookAt(target);
    state.camera.updateProjectionMatrix()
  })
  return null;
}


function Overworld(props) {
  //Scene();
  return (
    <>
    <Canvas gl={{ antialias: true }} shadowMap={true} camera={{ fov: 40, position: [12.7,5.21,-12.3] }} className="canvas">
      <fog attach="fog" args={["#dde9f0", 0, 40]} />
     
    
      <CameraControls cam={props.cam} />
     
     
      <directionalLight castShadow shadowMap={true} shadowBias={-0.00005} shadow-mapSize-height={1024}
        shadow-mapSize-width={1024} intensity={2} position={[2, 1, 10]} />
      <hemisphereLight color={"white"} groundColor={"#008eff"} intensity={0.2} />
      <mesh castShadow receiveShadow visible={false} rotation={[-3.14 / 2, 0, 0]} position={[0, 0, 0]} scale={[100, 100, 1]} >
        <planeBufferGeometry />
        <meshStandardMaterial color="grey" />
      </mesh>
     
     
      <Suspense fallback={null}>
      
      
        <Test church2={false} church3={true}  position={[0,0,0]} />
        
        <Test gas={false} church3={false} rotation={[0,Math.PI*0.5,0]} position={[1.77,0,12]} />
        <Test gas={false} church3={false} church={false} church2={false} rotation={[0,Math.PI*0.5,0]} position={[-9,0,11]} />
        <Test gas={false} church3={false} church={false} rotation={[0,-Math.PI*0.5,0]}  position={[12,0,-1.5]}  />
        <Test gas={false} church3={false}   position={[11.5,0,10]}  />
        <Test gas={false} church3={false} rotation={[0,-Math.PI*0.5,0]}  position={[-10,0,-1.8]}  />
        <Test gas={false} church3={false} church={false} rotation={[0,Math.PI*0.5,0]}  position={[-2.6,0,-11]}  />
        <Test gas={false} church3={false} church={false} rotation={[0,-Math.PI*0.5,0]}  position={[-13.5,0,-13.3]}  />
        <Test gas={false} church3={false} church2={false} church={false} rotation={[0,Math.PI,0]}  position={[9.5,0,-12.5]}  />
 
        <Sky
        sunPosition={[0, 1, 0]}
        turbidity={7.1}
        rayleigh={0.15}
        mieCoefficient={0.006}
        mieDirectionalG={0.941}
        exposure={0.18}
      />
      
      {props.obj}
      </Suspense>
     
    </Canvas>
    </>
  );
}
//  <Loader containerStyles={{backgroundColor: "rgba(0,0,0,0)"}}/>
export default Overworld;
