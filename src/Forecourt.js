import React, { Suspense} from 'react'
import TextUI from './TextUI'
import SkimUI from './SkimUI'
import graph from './sagelabel/Graph_icon.png'
import location from './sagelabel/Location_icon.png'
import heart from './sagelabel/heart.png'
import video from './sagelabel/Video-icon.png'
import wifi from './sagelabel/Secure Wi-Fi_Icon.png'
import skim from './sagelabel/Skimming_icon.png'
import emv from './sagelabel/EMV_icon.png'
import network from './sagelabel/Network_icon.png'
import screen from './sagelabel/Screen_icon.png'
import hs from './sagelabel/download_button.png'
import ha from './sagelabel/download_buttonA.png'
import demv from './sagelabel/download_emv.png'
import dlocation from './sagelabel/download_location.png'
import countdown from './ImageAssets/Count_down.png'
import portal from './ImageAssets/Captive Portal.png'
import _skimming from './sagelabel/skimming_button.jpg'
import { useTexture } from '@react-three/drei'

function Sageview(props){

  const fuel="Fuel consumers spend an average of 4 minutes and 26 seconds pumping gas. And 31% of them make the decision to enter the store during that time. With loyalty integrations, you can serve-up custom promotions. And with the right content, you can drastically increase fuel-customer conversion whether drawing customers inside or with pump-side ordering.";
  const health="So much has changed and continues to shift by the week/day/hour and even minute. Your c-store needs to keep your employees and customers safe. With digital signage, you can send messages about what’s in stock, the need to wear a mask, reminders to frequently wash hands, and even notices to social distance. All with the click of a button.";  
  const pump="At the pump digital signage can offer info on curbside ordering and delivery for high-margin purchases such as food and beverages. With pump-side ordering, you can increase convenience, minimize in-store queuing for increased safety, and ultimately increase basket sizes for shoppers who might not have otherwise gone inside. ";
  return(
        <>
            <TextUI
             index={props.index}
             offs={-0.1}
             text={"Loyalty Intergration/Promotion."}
             para={fuel}
             position={[-0.7, 2.3, 0]}
             skew={0}
             wx={2.3}
             icon={graph}
             icolor={"#8AD2D2"}
             image={useTexture(countdown)}
              />
              <TextUI
               index={props.index}
             text={"Pump-Side Ordering."}
             offs={-0.03}
             para={pump}
             position={[0, 1.5, 0]}
             skew={0}
             wx={1.5}
             icon={location}
             icolor={"#8AD2D2"}
              />
               <TextUI
                index={props.index}
                linki={hs}
                linka={ha}
             text={"Health & Safety."}
             offs={-0.05}
             url={"https://sagenetvirtual.com/SageNet_6Paradigms6Tools_WP_NEW101620%20(5).pdf"}
             para={health}
             position={[3.2, 2, 0]}
             skew={0}
             wx={1.5}
             icon={heart}
             icolor={"#8AD2D2"}
              />
                <TextUI
                 index={props.index}
             text={"Watch our Video."}
             position={[2.7, 1.3, 0]}
             skew={0}
             wx={1.4}
             vidurl={"https://player.vimeo.com/video/288265859?autoplay=1&title=0&byline=0&portrait=0"}
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
             text={"Secure Wi-Fi."}
             offs={-0.05}
             para={wtext}
             position={[0, 2.5, 0]}
             skew={0}
             wx={1.3}
             icon={wifi}
             icolor={"#72337F"}
              />
              <SkimUI
               index={props.index}
               para={stext}
             text={"Skimming."}
             position={[0.2, 1.5, 0]}
             skew={0}
             wx={1}
             icon={skim}
             icolor={"#72337F"}
             linki={_skimming}
             linka={ha}
             vidurl={"https://player.vimeo.com/video/502220475?autoplay=1&title=0&byline=0&portrait=0"}
              />
               <TextUI
                index={props.index}
                linki={demv}
                linka={ha}
                url={"https://sagenetvirtual.com/SageNet_EMV_WP_NEW110520.pdf"}
             text={"Outdoor-EMV."}
             para={etext}
             position={[3.2, 2, 0]}
             skew={0}
             wx={1.2}
             icon={emv}
             icolor={"#72337F"}
              />
                <TextUI
                 index={props.index}
             text={"PCI-Compliance."}
             position={[2.7, 1.3, 0]}
             skew={0}
             wx={1.3}
             vidurl={"https://player.vimeo.com/video/501964324?autoplay=1&title=0&byline=0&portrait=0"}
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
             text={"EMV/MNSP."}
             para={etext}
             position={[0.5, 1.5, 0]}
             skew={0}
             wx={1}
             icon={emv}
             icolor={"#76787B"}
              />
               <TextUI
                index={props.index}
             text={"Multi-Site Management"}
             position={[3.2, 2.5, 0]}
             skew={0}
             wx={1.7}
             vidurl={"https://player.vimeo.com/video/501964524?autoplay=1&title=0&byline=0&portrait=0"}
             icon={video}
             icolor={"#76787B"}
              />
                <TextUI
                 index={props.index}
                 offs={-0.1}
             text={"Connectivity Certainty."}
             para={ctext}
             position={[3.5, 1.6, 0]}
             skew={0}
             wx={1.7}
             icon={network}
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
             text={"Captive Portal."}
             offs={-0.05}
             para={ctext}
             position={[0.3, 2.4, 0]}
             skew={0}
             wx={1.3}
             icon={screen}
             icolor={"#E79F37"}
             image={useTexture(portal)}
              />
              <TextUI
               index={props.index}
               linki={dlocation}
               offs={-0.1}
               linka={ha}
               url={"https://sagenetvirtual.com/SageNet_CaptivePortal_WP_NEW091919.pdf"}
             text={"Location Analytics."}
             para={ltext}
             position={[0.4, 1.5, 0]}
             skew={0}
             wx={1.4}
             icon={location}
             icolor={"#E79F37"}
              />
               <TextUI
                index={props.index}
             text={"The Value Of Data @ Your Locations"}
             position={[3.5, 2.5, 0]}
             skew={0}
             wx={2.2}
             vidurl={"https://player.vimeo.com/video/501963728?autoplay=1&title=0&byline=0&portrait=0"}
             icon={video}
             icolor={"#E79F37"}
              />
                <TextUI
                 index={props.index}
             text={"The 3 Pillars Of IoT"}
             position={[2.8, 1.6, 0]}
             skew={0}
             wx={1.3}
             vidurl={"https://player.vimeo.com/video/501963975?autoplay=1&title=0&byline=0&portrait=0"}
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

export default function Forecourt(props){
   

    return(
        <Suspense fallback={null}>
        <GetComponent sel={props.index} />
        </Suspense>
    )
      
}