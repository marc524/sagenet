import React, { useRef, Suspense, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import Model from './Wash'
import Pump from './Npump'
import Store from './Ncstore2'
import Base from './Floor'
import './App.css'
import * as THREE from 'three'
import {  Sky, Loader } from '@react-three/drei'
import Labelgroup from './PumpUI'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"




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
  
  //useFrame(() => controls.current.update());
  return ( 
    <orbitControls

      ref={controls}
      args={[camera, domElement]}
      //autoRotate={true}
      enableZoom={true}
     // maxPolarAngle={Math.PI*0.45}
     // maxDistance = {50}
     // screenSpacePanning={false}
    />
  );
};




const dummy = new THREE.Vector3();
const ldummy = new THREE.Vector3();
const target = new THREE.Vector3(0, 0, 0);


function Dolly(props) {

  useFrame(state => {
    state.camera.position.lerp(dummy.set(props.gate ? 0 : 3, props.gate ? 3 : 2, props.gate ? 25 : 10), 0.1);
    target.lerp(ldummy.set(props.gate ? 0 : 4, props.gate ? 3 : 2, props.gate ? -25 : 5), 0.1);
    state.camera.lookAt(target);
    state.camera.updateProjectionMatrix()
  })
  return null;
}


function App(props) {
  //Scene();
  return (
    <>
    <Canvas gl={{ antialias: true }} shadowMap={true} camera={{ fov: 40, position: [0, 0, 0] }} className="canvas">
      <fog attach="fog" args={["#dde9f0", 0, 80]} />
     
      {props.cam?
      <CameraControls cam={props.cam} />:
      <Dolly gate={props.zoom} />}
     
      <directionalLight castShadow shadowMap={true} shadowBias={-0.00005} shadow-mapSize-height={1024}
        shadow-mapSize-width={1024} intensity={0.8} position={[0, 7, 20]} />
      <hemisphereLight color={"lightblue"} groundColor={"grey"} intensity={0.8} />
      <mesh castShadow receiveShadow visible={false} rotation={[-3.14 / 2, 0, 0]} position={[0, 0, 0]} scale={[100, 100, 1]} >
        <planeBufferGeometry />
        <meshStandardMaterial color="grey" />
      </mesh>
      <Suspense fallback={null}>
        <Model />
        <Pump />
        <Store />
        <Base />
        <Labelgroup seen={!props.zoom} />
        <Sky
        sunPosition={[0, 1, 0]}
        turbidity={2.1}
        rayleigh={0.209}
        mieCoefficient={0.006}
        mieDirectionalG={0.941}
        exposure={0.18}
      />
      </Suspense>
      
    </Canvas>
  
    </>
  );
}
//  <Loader containerStyles={{backgroundColor: "rgba(0,0,0,0)"}}/>
export default App;
