import ReactDOM from 'react-dom'
import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { CubeTextureLoader, SphereBufferGeometr } from "three"
import ARoom from './ARoom'
import Model from './Wash'
import Pump from './Npump'
import Store from './Ncstore2'
import Base from './Floor'
import './App.css'
import { softShadows, Sky } from '@react-three/drei'


//softShadows();

extend({ OrbitControls });
const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      //autoRotate={true}
      enableZoom={true}
    />
  );
};


function App() {
  return (
    <Canvas  gl={{ antialias: true}} shadowMap={true} className="canvas">
      <fog attach="fog" args={["#c1d6e6", 0, 60]} />
      <CameraControls position={[0, 0, 0]}/>
      <directionalLight castShadow shadowMap={true} shadowBias={-0.0001} shadow-mapSize-height={1024}
  shadow-mapSize-width={1024} intensity={0.7}  position={[0, 7 ,20]}  />
  <hemisphereLight color={"lightblue"} groundColor={"grey"} intensity={0.3} />
      <mesh castShadow receiveShadow visible={false} rotation={[-3.14/2, 0, 0]} position={[0, 0, 0]} scale={[100,100,1]} >
        <planeBufferGeometry/>
        <meshStandardMaterial color="grey" />
      </mesh>
      <mesh visible={false}  castShadow receiveShadow position={[-5, 10 ,20]}>
        <sphereBufferGeometry/>
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <Suspense fallback={null}>
      <Model castShadow/>
      <Pump castShadow/>
      <Store />
      <Base />
      </Suspense>
      
     <Sky 
     sunPosition={[0, 1, 0]}
     turbidity={2.1}
     rayleigh={0.109}
     mieCoefficient={0.006}
     mieDirectionalG={0.941}
     //inclination={0.4749}
     //azimuth={0.2147}
     exposure={0.18}
     />
    </Canvas>
  );
}

export default App;
