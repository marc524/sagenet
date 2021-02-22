import React, { Suspense} from 'react'
import TextUI from './TextUI'
import graph from './sagelabel/Graph_icon.png'
import heart from './sagelabel/heart.png'
import video from './sagelabel/Video-icon.png'
import wifi from './sagelabel/Secure Wi-Fi_Icon.png'
import ha from './sagelabel/download_buttonA.png'
import tech from './sagelabel/Tech_icon.png'
import firewall from './sagelabel/Firewall_icon.png'
import seamless from './sagelabel/Seamless_icon.png'
import wifi2 from './sagelabel/Wi-FI_icon.png'
import pene from './sagelabel/Penetration-Tests_icon.png'
import monitor from './sagelabel/Monitoring_icon.png'
import loyal from './sagelabel/Loyalty_icon.png'
import cstoreb from './sagelabel/cstore_button.jpg'
import peneb from './sagelabel/pene-button.jpg'
import seamb from './sagelabel/seam_button.jpg'
import wifib from './sagelabel/wifi_button.jpg'

function Sageview(props){
  return(
        <>
            <TextUI
             index={props.index}
             offs={-0.05}
             text={"Promotions."}
             para={"Stock will be flying off the shelves quicker than it can be replenished. (At least that’s the hope.) With digital signage, make updates to promotions with just a click. Interested in an LTO on coffee from 6-8 am? Schedule your BOGO bagels at the same time! Quickly switch between promotional offers on any goods at any time."}
             position={[0.5, 2.5, 0]}
             skew={0}
             wx={0.9}
             icon={graph}
             icolor={"#8AD2D2"}
              />
              <TextUI
               index={props.index}
               offs={-0.04}
             text={"Loyalty."}
             linka = {ha}
             linki = {cstoreb}
             url={"https://sagenetvirtual.com/SageNet_Wi-FiDS_090918-3.pdf"}
             para={"It’s about brand affinity. With so many options for purchasing gas & snacks, it’s critical to attract/retain the right customers. With digital signage, you can welcome customers to the store, showcase your brand voice, and highlight the deals and LTOs that keep them coming back. Loyal customers will drive & spend a bit more to buy from a brand they love."}
             position={[0, 1.7, 0]}
             skew={0}
             wx={0.9}
             icon={loyal}
             icolor={"#8AD2D2"}
              />
               <TextUI
                index={props.index}
             
             text={"Health & Safety."}
           
             para={"Your c-store is only as strong as your people - keep them safe. With digital signage, you can send messages to staff. Send reminders to wash hands, do temp checks, wear a mask, and maintain social distancing. If your state of business changes the mandates, so can you."}
             position={[3.2, 1.5, 0]}
             skew={0}
             wx={1.5}
             offs={-0.04}
             icon={heart}
             icolor={"#8AD2D2"}
              />
                <TextUI
                 index={props.index}
             text={"Video."}
             position={[2.7, 2.4, 0]}
             skew={0}
             wx={0.7}
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
             text={"Penetration Tests."}
             linka = {ha}
             linki = {peneb}
             url={"https://sagenetvirtual.com/SageNet_CyberPenTesting_2pgr_New070319.pdf"}
             para={"Cyber threats are ongoing, so your security practice should be too. Penetration tests mimic real-world attacks to better understand security vulnerabilities. With a thorough and systematic test against your environment, defenses can be hardened and made more secure. 84% of shoppers say they’ll change buying habits if their favorite store faces a breach – protect your customers."}
             position={[0, 2.5, 0]}
             skew={0}
             wx={1.3}
             icon={pene}
             icolor={"#72337F"}
              />
              <TextUI
               index={props.index}
               para={"TBD"}
             text={"Managed Firewall."}
             position={[0, 1.7, 0]}
             skew={0}
             wx={1.3}
             icon={firewall}
             icolor={"#72337F"}
              />
               <TextUI
                index={props.index}
             text={"Secure Wi-Fi."}
             para={"Guest wi-fi provides another avenue for promotions and building customer satisfaction. It also opens you up to numerous risks. Without proper restrictions, guests can access questionable sites, accidentally or purposely inject malware into your network, or even access proprietary info on your corporate network. Build trust with your customers by keeping their data safe."}
             position={[2, 2.4, 0]}
             skew={0}
             wx={0.9}
             icon={wifi}
             icolor={"#72337F"}
              />
                <TextUI
                 index={props.index}
             text={"Threat Detection."}
             position={[2.7, 1.6, 0]}
             skew={0}
             wx={1.2}
             vidurl={"https://player.vimeo.com/video/501964427?autoplay=1&title=0&byline=0&portrait=0"}
             icon={video}
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
             text={"VoIP/UCaaS."}
             para={"VoIP uses your network to eliminate monthly phone bills. What’s more, Unified Communications as a Service (UCaaS) turns your phone into a productivity tool with features like unified messaging, chat, voice & video conferencing and much more. SageNet’s “as a service” model takes the trial and error out of integrated, enterprise-wide communications."}
             position={[0.5, 2.4, 0]}
             skew={0}
             wx={1}
             icon={tech}
             icolor={"#76787B"}
              />
              <TextUI
              index={props.index}
             text={"Seamless Experience."}
             linka = {ha}
             offs={-0.04}
             linki = {seamb}
             url={"https://sagenetvirtual.com/SageNet_ManagedNetworkServices_WP_NEW041020.pdf"}
             para={"The best connections are the ones that customers and staff never notice. SageCONNECT ensures every transaction is flawless and frictionless, inventory and back office systems are up to date, your digital signage is up-to-date, and your guest Wi-Fi is fast and reliable. All this with the assurance that connections are secure, and costs are competitive."}
             position={[0, 1.7, 0]}
             skew={0}
             wx={1.4}
             icon={seamless}
             icolor={"#76787B"}
              />
               <TextUI
                index={props.index}
             text={"LAN Diagram."}
             position={[3, 2.4, 0]}
             skew={0}
             wx={1}
            para={"TBD"}
             icon={tech}
             icolor={"#76787B"}
              />
                <TextUI
                 index={props.index}
             text={"Multi-Site Connections."}
             vidurl={"https://player.vimeo.com/video/501963890?autoplay=1&title=0&byline=0&portrait=0"}
             position={[2.5, 1.6, 0]}
             skew={0}
             wx={1.5}
             icon={video}
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
             offs={-0.04}
             text={"Access Point Management."}
             para={"Reliance on, and expectations for, Wi-Fi, whether for employees, in-store devices or guests, inside or out, is high. Access Point placement, quality and security will determine availability and reliability. Interference has many culprits. Refrigerators, security cameras, microwaves, TVs, walls, windows, even weather can impact wireless performance."}
             position={[0.3, 2.4, 0]}
             skew={0}
             wx={1.6}
             icon={monitor}
             icolor={"#E79F37"}
              />
              <TextUI
               offs={-0.04}
               index={props.index}
               linki={wifib}
               linka={ha}
               url={"https://sagenetvirtual.com/SageNet_Wi-FiDS_071619.pdf"}
             text={"Guest Wi-Fi."}
             para={"Guest Wi-Fi has moved from nice to have, to must have for C-stores. Loyalty apps offer coupons and personalize the guest experience and keep customers coming back for more. 40% of customers want to hear from “my C-store” monthly. Data collection through captive portals improves the customer experience and helps c-stores better improve operational efficiency."}
             position={[0, 1.5, 0]}
             skew={0}
             wx={1}
             icon={wifi2}
             icolor={"#E79F37"}
              />
                <TextUI
                 index={props.index}
             text={"Wi-Fi Deployment."}
             position={[2.8, 1.6, 0]}
             skew={0}
             wx={1.3}
             vidurl={"https://player.vimeo.com/video/501963763?autoplay=1&title=0&byline=0&portrait=0"}
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

export default function POP(props){
   

    return(
        <Suspense fallback={null}>
        <GetComponent sel={props.index} />
        </Suspense>
    )
      
}