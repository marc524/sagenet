import React, { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import Model from './Wash'
import Pump from './Npump'
import Store from './Ncstore2'
import Base from './Floor'
import Dcigs from './GasModels/Dcigs'
import Worker from './GasModels/Dworker'
import './App.css'
import * as THREE from 'three'
import { Sky, Plane, Text, Html } from '@react-three/drei'
import Cata from './Cata'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import styled, { css } from 'styled-components'
import logo from './SageNetblue.png'
import Welcome from './Welcome'





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

  //useFrame(() => console.log(controls.current));
  return (
    <orbitControls

      ref={controls}
      args={[camera, domElement]}
      //autoRotate={true}
      enableZoom={true}
      maxPolarAngle={Math.PI * 0.45}
      maxDistance={50}
      screenSpacePanning={false}
    />
  );
};




const dummy = new THREE.Vector3();
const ldummy = new THREE.Vector3();
const target = new THREE.Vector3(0, 0, 0);


function Dolly(props) {
  //props.gate ? 0 : 3, props.gate ? 3 : 2, props.gate ? 25 : 10
  //target.lerp(ldummy.set(props.gate ? 0 : 4, props.gate ? 3 : 2, props.gate ? -25 : 5), 0.1);
  let Pos = [0, 3, 25];
  let Look = [0, 3, -25];
  //console.log("Dolly: " + props.index)

  useFrame(state => {
    switch (props.index) {
      case 1:
        Pos = [3, 2, 10];
        Look = [4, 2, 5];
        break;
      case 2:
        Pos = [-1, 1.5, -10.8];
        Look = [-10, 2, -10.8];
        break;
      case 3:
        Pos = [-2.5, 1.8, -11.07];
        Look = [10, 1.8, -11.07];
        break;
      case 4:
        Pos = [12, 1.5, -10];
        Look = [-10, 1.5, -17];
        break;
      default:
        Pos = [0, 3, 25];
        Look = [0, 3, -25];

        break;
    }


    //console.log(Pos);
    state.camera.position.lerp(dummy.set(Pos[0], Pos[1], Pos[2]), 0.05);
    target.lerp(ldummy.set(Look[0], Look[1], Look[2]), 0.05);
    state.camera.lookAt(target);
    state.camera.updateProjectionMatrix()
  })
  return null;
}

const Screen = styled.div`
position: fixed;
width: 100%;
height: 100%;
background-color: #ffffff;
background-image: url(${logo});
background-position: center;
background-repeat: no-repeat;
background-size: 10%;
z-index: 2;

`
const Bbar = styled.div`
position: fixed;
top:70%;
width: 100%;
z-index: 1;
height: 20%;
//background-color: red;
display: flex;
padding-left: 20%;
padding-right: 20%;
`

const Bimg = styled.img`
margin-top: auto;
margin-bottom: auto;
width: 5rem;
${props => props.right && css`
transform: rotate(45deg);
`}

`
const Empty = styled.div`
flex-grow: 1;
background-color: "red";

`




function App(props) {
  //Scene();
  const [cam, setCam] = useState(false);
  const [visible, setVisible] = useState(true);


  setTimeout(() => { setVisible(false) }, 1000);


  return (
    <>
      {visible &&
        <Screen />}

      <Canvas colorManagement={true} gl={{ antialias: true }} shadowMap={true} camera={{ fov: 40, position: [0, 3, 25] }} className="canvas">
        <fog attach="fog" args={["#dde9f0", 0, 80]} />

        {props.cam ?
          <CameraControls cam={props.cam} /> :
          <Dolly index={props.index} gate={cam} />}

        <directionalLight castShadow shadowMap={true} shadowBias={-0.00005} shadow-mapSize-height={1024}
          shadow-mapSize-width={1024} intensity={0.8} position={[0, 7, 20]} />
        <hemisphereLight color={"lightblue"} groundColor={"grey"} intensity={0.8} />
        <pointLight position={[0, 3.5, -10]} intensity={1} distance={17} decay={2} />
        <mesh castShadow receiveShadow visible={false} rotation={[-3.14 / 2, 0, 0]} position={[0, 0, 0]} scale={[100, 100, 1]} >
          <planeBufferGeometry />
          <meshStandardMaterial color="grey" />
        </mesh>
        <Suspense fallback={null}>
          <Model />
          <Pump />
          <Store />
          <Base />
          <Dcigs />
          <Worker rotation={[0, Math.PI * 0.5, 0]} position={[-7, 0.1, -10.5]} scale={[1.2, 1.2, 1.2]} />
          <Worker rotation={[0, -Math.PI * 0.5, 0]} position={[3.8, 0.1, -11.8]} scale={[1.2, 1.2, 1.2]} />
          <Cata index={props.index} position={[2, 3, 5]} rotation={[0, 0, 0]} seen={props.index == 1} />
          <Cata index={props.index} position={[-6, 2.7, -9]} rotation={[0, Math.PI * 0.5, 0]} seen={props.index == 2} />
          <Cata index={props.index} position={[2.4, 2.8, -12.9]} rotation={[0, -Math.PI * 0.5, 0]} seen={props.index == 3} />
          <Cata index={props.index} position={[6.6, 2.5, -9.8]} rotation={[0, Math.PI * 0.4, 0]} seen={props.index == 4} />
          <Sky
            sunPosition={[0, 1, 0]}
            turbidity={2.1}
            rayleigh={0.209}
            mieCoefficient={0.006}
            mieDirectionalG={0.941}
            exposure={0.18}
          />

        </Suspense>
        {props.index == 0 &&
         <Suspense fallback={null}>
          <Welcome index={props.index} />
          </Suspense>
        }
      </Canvas>


    </>
  );
}

export default App;
