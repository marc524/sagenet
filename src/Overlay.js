import styled from 'styled-components'

const Win= styled.div`
position: fixed;
bottom: 0;
right:0;
opacity: 0.5;
height:100%;
width: 100%;
background-color: white;
z-index: 1;
`
export default function Overlay(){

    return(
        <Win/>

    )
}