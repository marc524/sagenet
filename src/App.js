import ReactDOM from 'react-dom'
import React, { useRef, Suspense, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { CubeTextureLoader, SphereBufferGeometr } from "three"
import ARoom from './ARoom'
import Model from './Wash'
import Pump from './Npump'
import Store from './Ncstore2'
import Base from './Floor'
import './App.css'
import * as THREE from 'three'
import { softShadows, Sky, PerspectiveCamera } from '@react-three/drei'


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
  camera.fov = 40;
  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      position={[10,10,10]}
      //autoRotate={true}
      enableZoom={true}
    />
  );
};

const start = new THREE.Vector3(0,4,25);
const end = new THREE.Vector3(3,2,10);
const camvec = start;
const dummy = new THREE.Vector3();
const ldummy = new THREE.Vector3();
const target = new THREE.Vector3(0,0,0);


function Dolly(props){
  
  useFrame(state => {
   // state.camera.position.z =  Math.sin(state.clock.getElapsedTime()) * 10
  // state.camera.position.z = 25 - (state.clock.getElapsedTime()*5) % 15;
  //  state.camera.lookAt(4,1,5)

  state.camera.position.lerp(dummy.set(props.gate? 0:3, props.gate? 4:2, props.gate? 25:10), 0.1);
  target.lerp(ldummy.set(props.gate? 0:4, props.gate? 4:2, props.gate? -25:5), 0.1);
  state.camera.lookAt(target);
  
  //console.log(start);
    state.camera.updateProjectionMatrix()
  })
  return null;
}


function App() {
  const [zoom, set] = useState(true);
  return (
    <Canvas gl={{ antialias: true }} shadowMap={true} camera={{fov: 40, position: [0, 0, 0] }} className="canvas">
      <fog attach="fog" args={["#c1d6e6", 0, 80]} />
      {/*<CameraControls />*/}
      {/*<PerspectiveCamera makeDefault fov={40} position={[0,3,25]}/>*/}
      <directionalLight castShadow shadowMap={true} shadowBias={-0.0001} shadow-mapSize-height={1024}
        shadow-mapSize-width={1024} intensity={0.7} position={[0, 7, 20]} />
      <hemisphereLight color={"lightblue"} groundColor={"grey"} intensity={0.3} />
      <mesh castShadow receiveShadow visible={false} rotation={[-3.14 / 2, 0, 0]} position={[0, 0, 0]} scale={[100, 100, 1]} >
        <planeBufferGeometry />
        <meshStandardMaterial color="grey" />
      </mesh>
      <mesh visible={true}  onClick={() => set(!zoom)} castShadow receiveShadow scale={[0.2,0.2,0.2]} position={[4,2,5]}>
        <sphereBufferGeometry />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <Suspense fallback={null}>
        <Model />
        <Pump />
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
      <Dolly gate={zoom} />
    </Canvas>
  );
}

export default App;
