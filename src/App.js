import ReactDOM from 'react-dom'
import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { CubeTextureLoader, SphereBufferGeometr } from "three"
import ARoom from './ARoom'
import Model from './Wash'
import Pump from './Npump'
import Store from './Ncstore2'
import './App.css';

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

function SkyBox(){
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const t = "1.png";
  const texture = loader.load([
    "SkyBox_Front.png","SkyBox_Back.png","SkyBox_Up.png","SkyBox_Down.png","SkyBox_Right.png","SkyBox_Left.png"
  ])
  scene.background = texture;
  return null;
}

function App() {
  return (
    <Canvas  gl={{ antialias: true}} shadowMap={true} className="canvas">
      <fog attach="fog" args={["white", 0, 60]} />
      <CameraControls position={[0, 0, 0]}/>
      <directionalLight castShadow shadowMap={true} shadowBias={-0.0001} shadow-mapSize-height={1024}
  shadow-mapSize-width={1024} intensity={1}  position={[0, 7 ,20]}  />
  <hemisphereLight color={"lightblue"} groundColor={"grey"} intensity={0.6} />
      <mesh castShadow receiveShadow rotation={[-3.14/2, 0, 0]} position={[0, 0, 0]} scale={[100,100,1]} >
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
      </Suspense>
      
     
    </Canvas>
  );
}

export default App;
