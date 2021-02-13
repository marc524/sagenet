import styled from 'styled-components'
import App from './App'
import Overworld from './Overworld'
import { useState } from 'react'
import logo from './SageNetwhite.png'
import icon3 from './hudicons/sset3.png'
import icon1 from './hudicons/sset4.png'
import icon2 from './hudicons/sset5.png'


const Flex = styled.div`
position: fixed;
width: 100%;
background-color: #133A5F;
display: flex;
z-index: 1;
`

const Item =styled.div`
font-family: "Arial";
padding: 1.5%;
font-size: 1.7rem;
color: white;
&:hover {
background-color: #ff9a00;
}
`
const Bar = styled.div`
width: 0.1%;
background-color: white;
`

const Flexb = styled.div`
position: fixed;
bottom: 0;
right:0;
//height:100%;
width: 100%;
background-color: #133A5F;
z-index: 1;
`

const Simg = styled.img`
margin-left: 2%;
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



export default function Hud(){
    const [zoom, set] = useState(true);
    const [cam, setCam] = useState(false);
    const [scene, setScene] = useState(true);

    return(
        <>
        <Flex>
        <Item onClick={() => set(true)}>C-Store</Item>
        <Bar/>
        <Item onClick={() => set(false)}>Forecourt</Item>
        <Bar/>
        <Item style={!cam?{backgroundColor:"#ff9a00"}:{backgroundColor:"#133A5F"}} onClick={() => setCam(false)}>Dolly Camera</Item>
        <Bar/>
        <Bar/>
        <Item style={cam?{backgroundColor:"#ff9a00"}:{backgroundColor:"#133A5F"}} onClick={() => setCam(true)}>Free Camera</Item>
        <Bar/>
        <Item onClick={() => setScene(!scene)}>Switch</Item>
        <Bar/>
        </Flex>
        <Flexb>
           <Simg src={logo}/>
           <Br>
           <Sicon src={icon1}/>
           <Sicon src={icon2}/>
           <Sicon src={icon3}/>
           </Br>
        </Flexb>
       {scene?
        <Overworld zoom={zoom} cam={cam}/>:
        <App zoom={zoom} cam={cam}/> 
       }
       
        </>
    )
}
//<App zoom={zoom} cam={cam}/> <Overworld/>