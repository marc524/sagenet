import React, { useRef, Suspense, useState } from 'react'
import TextUI from './TextUI'
import graph from './sagelabel/Graph_icon.png'
import location from './sagelabel/Location_icon.png'
import heart from './sagelabel/heart.png'
import video from './sagelabel/Video-icon.png'
import wifi from './sagelabel/Secure Wi-Fi_Icon.png'
import skim from './sagelabel/Skimming_icon.png'
import emv from './sagelabel/EMV_icon.png'
import network from './sagelabel/Network_icon.png'
import screen from './sagelabel/Screen_icon.png'

function Sageview(){
    return(
        <>
            <TextUI
             text={"LOYALTY INTERGRATION/PROMOTION."}
             position={[2, 2.1, 5.01]}
             wx={2.3}
             icon={graph}
             icolor={"#8AD2D2"}
              />
              <TextUI
             text={"PUMP-SIDE ORDERING."}
             position={[2, 1.5, 5.01]}
             wx={1.5}
             icon={location}
             icolor={"#8AD2D2"}
              />
               <TextUI
             text={"HEALTH & SAFETY."}
             position={[5.2, 2, 5.01]}
             wx={1.5}
             icon={heart}
             icolor={"#8AD2D2"}
              />
                <TextUI
             text={"WATCH OUR VIDEO."}
             position={[4.7, 1.3, 5.01]}
             wx={1.4}
             icon={video}
             icolor={"#8AD2D2"}
              />
        </>
    )
}
function Sagesec(){
    return(
        <>
            <TextUI
             text={"SECURE WI-FI."}
             position={[2.5, 2.5, 5.01]}
             wx={1.3}
             icon={wifi}
             icolor={"#72337F"}
              />
              <TextUI
             text={"SKIMMING."}
             position={[2.8, 1.5, 5.01]}
             wx={1}
             icon={skim}
             icolor={"#72337F"}
              />
               <TextUI
             text={"OUTDOOR-EMV."}
             position={[5.2, 2, 5.01]}
             wx={1.2}
             icon={emv}
             icolor={"#72337F"}
              />
                <TextUI
             text={"PCI-COMPLIANCE."}
             position={[4.7, 1.3, 5.01]}
             wx={1.3}
             icon={video}
             icolor={"#72337F"}
              />
        </>
    )
}

function Sageconnect(){
    return(
        <>
           
              <TextUI
             text={"EMV/MNSP."}
             position={[2.5, 1.5, 5.01]}
             wx={1}
             icon={emv}
             icolor={"#76787B"}
              />
               <TextUI
             text={"MULTI-SITE MANAGEMENT"}
             position={[6.2, 2.5, 5.01]}
             wx={1.7}
             icon={video}
             icolor={"#76787B"}
              />
                <TextUI
             text={"CONNECTIVITY CERTAINTY."}
             position={[5.5, 1.6, 5.01]}
             wx={1.7}
             icon={network}
             icolor={"#76787B"}
              />
        </>
    )
}

function Sageiw(){
    return(
        <>
            <TextUI
             text={"CAPTIVE PORTAL."}
             position={[2.3, 2.4, 5.01]}
             wx={1.3}
             icon={screen}
             icolor={"#E79F37"}
              />
              <TextUI
             text={"LOCATION ANALYTICS."}
             position={[2.4, 1.5, 5.01]}
             wx={1.4}
             icon={location}
             icolor={"#E79F37"}
              />
               <TextUI
             text={"THE VALUE OF DATA @ YOUR LOCATIONS"}
             position={[5.7, 2.5, 5.01]}
             wx={2.5}
             icon={video}
             icolor={"#E79F37"}
              />
                <TextUI
             text={"THE 3 PILLARS OF IoT"}
             position={[4.8, 1.6, 5.01]}
             wx={1.3}
             icon={video}
             icolor={"#E79F37"}
              />
        </>
    )
}

function GetComponent(props){
    switch(props.sel){
      case 1: 
        return <Sagesec/>;
      case 2: 
        return <Sageconnect/>; 
        case 3:
            return <Sageiw/>;
        default:
          return <Sageview/>;
    }
  }

export default function Panel(props){
   

    return(
        <Suspense fallback={null}>
        <GetComponent sel={props.index} />
        </Suspense>
    )
      
}