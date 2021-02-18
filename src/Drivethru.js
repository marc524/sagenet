import React, { Suspense} from 'react'
import TextUI from './TextUI'
import graph from './sagelabel/Graph_icon.png'
import video from './sagelabel/Video-icon.png'
import ha from './sagelabel/download_buttonA.png'
import tech from './sagelabel/Tech_icon.png'
import loyal from './sagelabel/Loyalty_icon.png'
import screen from './sagelabel/Screen_icon.png'
import pc from './sagelabel/PCI_icon.png'
import network from './sagelabel/Network_icon.png'
import location from './sagelabel/Location_icon.png'
import conn from './sagelabel/Connectivity_icon.png'
import sec from './sagelabel/Security_icon.png'
import ecob from './sagelabel/economics_button.jpg'
import scanb from './sagelabel/scanning_button.jpg'
import serviceb from './sagelabel/services_button.jpg'

function Sageview(props){
  return(
        <>
            <TextUI
             index={props.index}
             text={"PROMOTIONS."}
             para={"TBD."}
             position={[0, 2.3, 0]}
             skew={0}
             wx={0.9}
             icon={video}
             icolor={"#8AD2D2"}
              />
              <TextUI
               index={props.index}
             text={"LOYALTY."}

             para={"Using loyalty-integration, captive-portals, and even license plate recognition, menu offerings can include recommendations based on customer profiles and order history. Has your customer been in the drive-thru and ordered the same chicken nugget meal their past 5 visits? Your signage can remind them that nothing goes better with nuggets than some fries."}
             position={[0.7, 1.5, 0]}
             skew={0}
             wx={0.9}
             icon={loyal}
             icolor={"#8AD2D2"}
              />
               <TextUI
                index={props.index}
             
             text={"ECONOMICS."}
             linka = {ha}
             linki = {ecob}
             url={"https://sagenetvirtual.com/SageNet_Drive-thruTechnology_WP_NEW022019.pdf"}
           
             para={"Drive-thru sales count for as much as 70% of a QSR’s revenue. With a number that high, you want to make sure you’re tapped in. The use of digital signage can upsell high margin items like beverages. On average, 20% of drive thru customers buy a drink with their food. With signage, that can increase to 40%, causing an overall increase in sales up to 7%."}
             position={[4, 2.3, 0]}
             skew={0}
             wx={1}
             icon={graph}
             icolor={"#8AD2D2"}
              />
                <TextUI
                 index={props.index}
             text={"WATCH OUR VIDEO."}
             position={[3.4, 1.2, 0]}
             skew={0}
             wx={1.3}
             vidurl={"https://player.vimeo.com/video/501964130?autoplay=1&title=0&byline=0&portrait=0"}
             icon={video}
             icolor={"#8AD2D2"}
              />
        </>
    )
}
function Sagesec(props){
  return(
        <>
            <TextUI
             index={props.index}
             text={"CYBER FOR SIGNAGE."}
            
             para={"Any time you connect a device to your network, you’re introducing new security risks. Make sure your signage remains secure, and your screens only show the content you intended by securing the network and its connected devices. The only thing worse than no content, is a hacker highlighting the great deals at your competitor’s locations."}
             position={[0.5, 2.3, 0]}
             skew={0}
             wx={1.3}
             icon={screen}
             icolor={"#72337F"}
              />
              <TextUI
               index={props.index}
               vidurl={"https://player.vimeo.com/video/501963814?autoplay=1&title=0&byline=0&portrait=0"}
             text={"SECURITY AND CUSTOMER LOYALTY."}
             position={[1, 1.4, 0]}
             skew={0}
             wx={2}
             icon={video}
             icolor={"#72337F"}
              />
               <TextUI
                index={props.index}
             text={"SECURITY OPERATIONS CENTER."}
             para={"TBD"}
             position={[3.8, 2.4, 0]}
             skew={0}
             wx={1.7}
             icon={sec}
             icolor={"#72337F"}
              />
                <TextUI
                 index={props.index}
             text={"VULN SCANNING."}
             position={[3.5, 1.5, 0]}
             skew={0}
             wx={1.1}
             linka={ha}
             linki={scanb}
             url={"https://sagenetvirtual.com/SageNet_MngdVulnerabilityScanningDS_New092120.pdf"}
             para={"Minimize the risk of a security breach with continuous scans of your network. Vulnerability Scans provide insights and guidance to properly secure your network. Your PCI compliance depends on not only getting ASV scans completed, but by maintaining a healthy security posture based on scan results. Stay secure so you can continue accepting card payments."}
             icon={pc}
             icolor={"#72337F"}
              />
        </>
    )
}

function Sageconnect(props){
  return(
        <>
            <TextUI
              index={props.index}
             text={"THE RIGHT BROADBAND."}
             vidurl={"https://player.vimeo.com/video/501963949?autoplay=1&title=0&byline=0&portrait=0"}
             position={[0.5, 2.3, 0]}
             skew={0}
             wx={1.5}
             icon={video}
             icolor={"#76787B"}
              />
              <TextUI
              index={props.index}
             text={"NETWORK OPERATIONS CENTER."}
          
             para={"Someone to watch over me. Whether in the store, at the pump or drive-thru, for PoS, digital signage or guest Wi-Fi, the network is the backbone of your business. The support of a 24/7 NOC is more than a luxury, it’s necessity. Our engineers utilize advanced tools and systems to analyze, troubleshoot, remediate and optimize network performance."}
             position={[0, 1.5, 0]}
             skew={0}
             wx={1.8}
             icon={network}
             icolor={"#76787B"}
              />
            
                <TextUI
                 index={props.index}
             text={"CONNECTIVITY SANITY."}
             para={"With multiple carriers, vendors and compliance demands, managing a multi-site network can be a challenge. An MNSP provides a single point of contact for circuit provisioning, consolidated billing, help desk support, routine maintenance and emergency services. Advanced services include 24/7 network monitoring, PCI-compliance and SIEM and SOC services."}
             linka={ha}
             linki={serviceb}
             url={"https://sagenetvirtual.com/SageNet_MNS_WP_NEW060319-1.pdf"}
             position={[3.5, 1.5, 0]}
             skew={0}
             wx={1.5}
             icon={conn}
             icolor={"#76787B"}
              />
        </>
    )
}

function Sageiw(props){
  return(
        <>
            <TextUI
             index={props.index}
             text={"HOW LOCATION ANALYTICS WORK."}
             para={"TBD"}
             position={[0.3, 2.2, 0]}
             skew={0}
             wx={2}
             icon={tech}
             icolor={"#E79F37"}
              />
              <TextUI
               index={props.index}
              
              
             text={"TAKE IT OUTSIDE."}
             para={"The pandemic transformed C-store food service. To-go, curbside and drive-thru means untethering workers and customers with robust, secure Wi-Fi. Empower employees with wireless headsets, tablets, and printers. Outdoor access points allow customers to place orders from the drive-thru, parking lot or the pump. In-car convenience increases basket-size as well."}
             position={[1, 1.4, 0]}
             skew={0}
             wx={1.1}
             icon={location}
             icolor={"#E79F37"}
              />
                <TextUI
                 index={props.index}
             text={"WPA ENCRYPTION."}
             position={[3.8, 1.8, 0]}
             skew={0}
             wx={1.1}
             vidurl={"https://player.vimeo.com/video/501963786?autoplay=1&title=0&byline=0&portrait=0"}
             icon={video}
             icolor={"#E79F37"}
              />
        </>
    )
}

function GetComponent(props){
    switch(props.sel){
      case 1: 
        return <Sagesec index={props.sel}/>;
      case 2: 
        return <Sageconnect index={props.sel}/>; 
        case 3:
            return <Sageiw index={props.sel}/>;
        default:
          return <Sageview index={props.sel}/>;
    }
  }

export default function Drivethru(props){
   

    return(
        <Suspense fallback={null}>
        <GetComponent sel={props.index} />
        </Suspense>
    )
      
}