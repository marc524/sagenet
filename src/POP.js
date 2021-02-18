import React, { Suspense} from 'react'
import TextUI from './TextUI'
import graph from './sagelabel/Graph_icon.png'
import heart from './sagelabel/heart.png'
import video from './sagelabel/Video-icon.png'
import wifi from './sagelabel/Secure Wi-Fi_Icon.png'
import hs from './sagelabel/download_button.png'
import ha from './sagelabel/download_buttonA.png'
import demv from './sagelabel/download_emv.png'
import dlocation from './sagelabel/download_location.png'
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

  const fuel="Fuel consumers spend an average of 4 minutes and 26 seconds pumping gas. And 31% of them make the decision to enter the store during that time. With loyalty integrations, you can serve-up custom promotions. And with the right content, you can drastically increase fuel-customer conversion whether drawing customers inside or with pump-side ordering.";
  const health="So much has changed and continues to shift by the week/day/hour and even minute. Your c-store needs to keep your employees and customers safe. With digital signage, you can send messages about what’s in stock, the need to wear a mask, reminders to frequently wash hands, and even notices to social distance. All with the click of a button.";  
  const pump="At the pump digital signage can offer info on curbside ordering and delivery for high-margin purchases such as food and beverages. With pump-side ordering, you can increase convenience, minimize in-store queuing for increased safety, and ultimately increase basket sizes for shoppers who might not have otherwise gone inside. ";
  return(
        <>
            <TextUI
             index={props.index}
             text={"PROMOTIONS."}
             para={"Stock will be flying off the shelves quicker than it can be replenished. (At least that’s the hope.) With digital signage, make updates to promotions with just a click. Interested in an LTO on coffee from 6-8 am? Schedule your BOGO bagels at the same time! Quickly switch between promotional offers on any goods at any time."}
             position={[0.5, 2.5, 0]}
             skew={0}
             wx={0.9}
             icon={graph}
             icolor={"#8AD2D2"}
              />
              <TextUI
               index={props.index}
             text={"LOYALTY."}
             linka = {ha}
             linki = {cstoreb}
             para={"It’s about brand affinity. With so many options for purchasing gas & snacks, it’s critical to attract/retain the right customers. With digital signage, you can welcome customers to the store, showcase your brand voice, and highlight the deals and LTOs that keep them coming back. Loyal customers will drive & spend a bit more to buy from a brand they love."}
             position={[0, 1.7, 0]}
             skew={0}
             wx={0.9}
             icon={loyal}
             icolor={"#8AD2D2"}
              />
               <TextUI
                index={props.index}
             
             text={"HEALTH & SAFETY."}
           
             para={"Your c-store is only as strong as your people - keep them safe. With digital signage, you can send messages to staff. Send reminders to wash hands, do temp checks, wear a mask, and maintain social distancing. If your state of business changes the mandates, so can you."}
             position={[3.2, 1.5, 0]}
             skew={0}
             wx={1.5}
             icon={heart}
             icolor={"#8AD2D2"}
              />
                <TextUI
                 index={props.index}
             text={"VIDEO."}
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
  const wtext= "SageSecure protects C-Store operators and its customers. Guest Wi-Fi at the forecourt empowers your loyalty customers to take advantage of pump-side ordering, special offers and more. It also opens you up to numerous risks. Without proper restrictions, guests could access inappropriate questionable sites. Malware could be accidentally or purposely installed on your network. SageSecure protects C-Store operators and its customers and your network.";
  const stext = "Protect your guests and business from theft. Skimming occurs when fake card readers, cameras, or pin pads are used over your equipment, like an ATM or at the pump, and card numbers and pins are stolen for later, malicious use. Your customer loyalty is built on a positive relationship with your brand. Keep their money safe and your customer-base secure";
  const etext = "The deadlines are quickly approaching to make your gas pumps EMV-compliant. With the new liability shift, starting April 17th, should fraudulent transactions take place at your pump, the financial burden becomes your own. These new mandates keep your customers’ data protected and you safe from extra charges. Sleep easier with a security plan in place.";
  return(
        <>
            <TextUI
             index={props.index}
             text={"PENETRATION TESTS."}
             linka = {ha}
             linki = {peneb}
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
             text={"MANAGED FIREWALL."}
             position={[0, 1.7, 0]}
             skew={0}
             wx={1.3}
             icon={firewall}
             icolor={"#72337F"}
              />
               <TextUI
                index={props.index}
             text={"SECURE WI-FI."}
             para={"Guest wi-fi provides another avenue for promotions and building customer satisfaction. It also opens you up to numerous risks. Without proper restrictions, guests can access questionable sites, accidentally or purposely inject malware into your network, or even access proprietary info on your corporate network. Build trust with your customers by keeping their data safe."}
             position={[2, 2.4, 0]}
             skew={0}
             wx={0.9}
             icon={wifi}
             icolor={"#72337F"}
              />
                <TextUI
                 index={props.index}
             text={"THREAT DETECTION."}
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
  const etext = "April 17, 2021 is the deadline to deploy chip card readers at all automated fuel dispensers. After that, C-store operators may be liable for fraudulent transactions. The services of a certified-MNSP partner are key. For C-store operators using Verifone, Gilbarco, or NCR ’s Point-of-Sale (PoS) systems, the certifications ensure PCI-compliant remote zone access from the PoS providers as well as remote upgrades/patches. ";
  const ctext = "Cash only makes up 15% of payments at the pump. So if you can’t process debit/credit cards, you may as well be out of gas. With the shift to digital signage and pump-side ordering, fast, reliable, secure connectivity is a c-store’s lifeline. High-speed broadband with automatic failover and 24/7 monitoring and field service ensures always-on connectivity. ";  
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
             text={"SEAMLESS EXPERIENCE."}
             linka = {ha}
             linki = {seamb}
             para={"The best connections are the ones that customers and staff never notice. SageCONNECT ensures every transaction is flawless and frictionless, inventory and back office systems are up to date, your digital signage is up-to-date, and your guest Wi-Fi is fast and reliable. All this with the assurance that connections are secure, and costs are competitive."}
             position={[0, 1.7, 0]}
             skew={0}
             wx={1.4}
             icon={seamless}
             icolor={"#76787B"}
              />
               <TextUI
                index={props.index}
             text={"LAN DIAGRAM."}
             position={[3, 2.4, 0]}
             skew={0}
             wx={1}
            para={"TBD"}
             icon={tech}
             icolor={"#76787B"}
              />
                <TextUI
                 index={props.index}
             text={"MULTI-SITE CONNECTIONS."}
             para={ctext}
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
  const ctext = "Captive portals present Wi-Fi users with a web page that requires some action before network access is granted. At the pump, it’s a powerful marketing tool as well as a network access mechanism, presenting the user with messaging based on location, time of day, or loyalty info while capturing valuable data to help personalize the customer experience.";
  const ltext = "The Wi-Fi location analytics market is growing 15% annually. Here’s why. Wi-Fi location analytics uses multiple wireless access points and advanced algorithms to provide insights into customer behavior based the user’s movement: From pump to store? Which aisle first? How many aisles, in what order? Time spent in location? In check-out?";
  return(
        <>
            <TextUI
             index={props.index}
             text={"ACCESS POINT MANAGEMENT."}
             para={ctext}
             position={[0.3, 2.4, 0]}
             skew={0}
             wx={1.6}
             icon={monitor}
             icolor={"#E79F37"}
              />
              <TextUI
               index={props.index}
               linki={wifib}
               linka={ha}
               url={"https://sagenetvirtual.com/SageNet_CaptivePortal_WP_NEW091919.pdf"}
             text={"GUEST WI-FI."}
             para={"Guest Wi-Fi has moved from nice to have, to must have for C-stores. Loyalty apps offer coupons and personalize the guest experience and keep customers coming back for more. 40% of customers want to hear from “my C-store” monthly. Data collection through captive portals improves the customer experience and helps c-stores better improve operational efficiency."}
             position={[0, 1.5, 0]}
             skew={0}
             wx={1}
             icon={wifi2}
             icolor={"#E79F37"}
              />
                <TextUI
                 index={props.index}
             text={"WI-FI DEPLOYMENT."}
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