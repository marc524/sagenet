import styled from 'styled-components'
import App from './App'
import Overworld from './Overworld'
import { useRef, useState } from 'react'
import logo from './SageNetwhite.png'
import icon3 from './hudicons/sset3.png'
import icon1 from './hudicons/sset4.png'
import icon2 from './hudicons/sset5.png'
import { Circle, Text } from '@react-three/drei'
import * as THREE from 'three'
import futura from './futura.ttc'
import { useFrame, useThree } from "react-three-fiber"

const Flex = styled.div`
position: fixed;
width: 100%;
background-color: #133A5F;
display: flex;
z-index: 1;
padding-top: 1%;
padding-bottom: 1%;
`

const Item = styled.div`
font-family: "Arial";
padding-top: 0.5%;
padding-bottom: 0.5%;
padding-left: 1%;
padding-right: 1%;
font-size: 1.3rem;
color: white;
//background-color: red;
margin-top: auto;
margin-bottom: auto;
//width: 50%;

&:hover {
background-color: #ff9a00;
}
`
const Bar = styled.a`
width: 0.2%;
height: 2rem;
margin-top: auto;
margin-bottom: auto;
background-color: white;
`
const Empty = styled.div`
flex-grow: 1;
background-color: "red";

`
const Flexb = styled.div`
position: fixed;
display: flex;
bottom: 0;
right:0;
//align-items: center;
//height:100%;
width: 100%;
background-color: #133A5F;
z-index: 1;
`

const Simg = styled.img`
margin-left: 2%;
margin-right: 3%;
height: 8rem;
`
const Sicon = styled.img`
right:0;
height: 8rem;
`

const Br = styled.div`
position: fixed;
right:0;
bottom:0;
z-index:0;
`


export default function Hud() {
    const [zoom, set] = useState(true);
    const [cam, setCam] = useState(false);
    const [scene, setScene] = useState(true);
    const mat = new THREE.MeshBasicMaterial({ color: "#f71d00", transparent: true, opacity: 0.8 });


    function Circ(props) {


        const [active, setActive] = useState(false);
        let i = 0;

        useFrame(({ clock }) => {
            if (active) {
                i += clock.getDelta();
                if (i > 0.005) {
                    //setActive(false);
                    setScene(false);
                }
            }
        })
        function Dolly(props) {
            const dummy = new THREE.Vector3();
            const ldummy = new THREE.Vector3();
            const target = new THREE.Vector3(0, 0, 0);
            //[12.7,5.21,-12.3]

            useFrame(state => {
                if (active) {
                    
                    //state.camera.position.lerp(dummy.set(props.gate ?  props.position[0] : state.camera.position.x, props.gate ?  props.position[1]-1 : state.camera.position.y, props.gate ?  props.position[2] : state.camera.position.z), 0.003);
                    target.lerp(ldummy.set(props.gate ? props.position[0] : 0, props.gate ? props.position[1] - 2 : 0, props.gate ? props.position[2] : 0), 0.01);

                    state.camera.lookAt(target);
                    state.camera.fov -= 0.2;
                   
                    state.camera.updateProjectionMatrix()
                   // state.camera.position.lerp(dummy.set(props.position),0.001);
                    state.camera.position.lerp(dummy.set(props.gate ? props.position[0]: 12.7, props.gate ?props.position[1] : 5.21, props.gate ? props.position[2] : -12.3), 0.001);
                    console.log(state.camera.position);
                }
            })
            return null;
        }

        return (
            <>
                <Dolly gate={active} position={props.position} />
                <group position={props.position} rotation={[0, Math.PI * 0.7, 0]} >
                    <Circle material={mat} onClick={() => setActive(true)} args={[0.7, 20]}>
                        <Text font={futura} position={[0, 0, 0.1]} fontSize={0.25}>{props.text}</Text>
                    </Circle>
                    <Circle material={mat} position={[0, -1.1, 0]} args={[0.15, 20]} />
                    <Circle material={mat} position={[0, -1.6, 0]} args={[0.15, 20]} />
                    <Circle material={mat} position={[0, -2.1, 0]} args={[0.15, 20]} />
                </group>
            </>
        )
    }


    return (
        <>
            <Flex>
                <Item onClick={() => set(true)}>C-Store</Item>
                <Bar />
                <Item onClick={() => set(false)}>Forecourt</Item>
                <Bar />
                <Item >Food Service</Item>
                <Bar />
                <Item>POP</Item>
                <Bar />
                <Item>Drive Thru</Item>
                <Bar />

                {!scene &&
                <>
                <Item style={!cam ? { backgroundColor: "#ff9a00" } : { backgroundColor: "#133A5F" }} onClick={() => setCam(false)}>Fixed Camera</Item>
                <Bar />
                <Item style={cam ? { backgroundColor: "#ff9a00" } : { backgroundColor: "#133A5F" }} onClick={() => setCam(true)}>Free Camera</Item>
                <Bar />
                </>}

                <Empty />
                <Item onClick={() => setScene(false)}>C-Store</Item>
                <Bar />
                <Item>QSR</Item>
                <Bar />
                <Item>Financial</Item>
                <Bar />
                <Item>Retail</Item>


            </Flex>
            <Flexb>
                <Simg src={logo} />


                <Item onClick={() => setScene(true)}>Home</Item><Bar />
                <Item>About Us</Item><Bar />
                <Item>Our Solutions</Item><Bar />


                <Br>
                    <Sicon src={icon1} />
                    <Sicon src={icon2} />
                    <Sicon src={icon3} />
                </Br>
            </Flexb>

            {scene ?
                <Overworld obj={<group>
                    <Circ position={[3, 4, 2]} text={"FINANCE"} />
                    <Circ position={[0, 4, 2]} text={"RETAIL"} />
                    <Circ position={[0, 4, -1.5]} text={"QSR"} />
                    <Circ position={[0, 3.8, -5]} text={"C-STORE"} />
                </group>} zoom={zoom} cam={cam} /> :
                <App zoom={zoom} cam={cam} />
            }

        </>
    )
}
//<App zoom={zoom} cam={cam}/> <Overworld/>