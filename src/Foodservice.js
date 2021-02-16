import React, { Suspense } from 'react'
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
import hs from './sagelabel/download_button.png'
import ha from './sagelabel/download_buttonA.png'
import demv from './sagelabel/download_emv.png'
import dlocation from './sagelabel/download_location.png'
import signage from './sagelabel/signage.jpg'

function Sageview(props) {

  const daypart = "Want to push coffee in the morning? Sandwiches at lunch? Pretzels in the afternoon? With dayparting, these content switches are not only possible, but made simple. Automatically swap out content, depending on time of day, with a simple click in your Content Management System.";
  const health = "So much has changed and continues to shift by the week/day/hour and even minute. Your c-store needs to keep your employees and customers safe. With digital signage, you can send messages about what’s in stock, the need to wear a mask, reminders to frequently wash hands, and even notices to social distance. All with the click of a button.";
  const pump = "At the pump digital signage can offer info on curbside ordering and delivery for high-margin purchases such as food and beverages. With pump-side ordering, you can increase convenience, minimize in-store queuing for increased safety, and ultimately increase basket sizes for shoppers who might not have otherwise gone inside. ";
  return (
    <>
      <TextUI
        index={props.index}
        text={"DAY-PARTING."}
        para={daypart}
        position={[0, 2.1, 0]}
        skew={0}
        linki={signage}
        linka={ha}
        url={"https://sagenetvirtual.com/SageNet_DigitalSignage_Value_WP_101014FINAL-2%20(1).pdf"}
        wx={0.9}
        icon={graph}
        icolor={"#8AD2D2"}
      />
      <TextUI
        index={props.index}
        text={"KIOSKS."}
        para={pump}
        position={[0.8, 1.5, 0]}
        skew={0}
        wx={0.7}
        icon={location}
        icolor={"#8AD2D2"}
      />
      <TextUI
        index={props.index}
        linki={hs}
        linka={ha}
        text={"VIDEO."}
        url={"https://sagenetvirtual.com/SageNet_6Paradigms6Tools_WP_NEW101620%20(5).pdf"}
        para={health}
        position={[3.2, 2.2, 0]}
        skew={0}
        wx={0.7}
        icon={heart}
        icolor={"#8AD2D2"}
      />
      <TextUI
        index={props.index}
        text={"HOW SIGNAGE WORKS."}
        position={[2.7, 1.3, 0]}
        skew={0}
        wx={1.4}
        para={"Integrate promotions into menus with animations, graphics and video footage - help sell new menu items and specials that build loyalty."}
        icon={video}
        icolor={"#8AD2D2"}
      />
    </>
  )
}
function Sagesec(props) {
  const pci = "Your store’s profits rely on the ability to accept credit card payments. Mandated by card issuers, PCI DSS requires all merchants with internal systems that store, process or transmit cardholder data to comply with key data protection measures and submit to annual security audits. Stay secure so your consumers can be comfortable shopping with you.";
  const ass = "Assessments should be based on industry best-practices to ensure the best security posture for your store. Utilizing compliance frameworks like ISO 27001/27002, NIST 800-53, and PCI, you cyber partner can identify existing/potential gaps in your physical or online security. Those gaps are then triaged so any necessary remediation efforts can begin.";
  const stext = "Protect your guests and business from theft. Skimming occurs when fake card readers, cameras, or pin pads are used over your equipment, like an ATM or at the pump, and card numbers and pins are stolen for later, malicious use. Your customer loyalty is built on a positive relationship with your brand. Keep their money safe and your customer-base secure";
  const etext = "The deadlines are quickly approaching to make your gas pumps EMV-compliant. With the new liability shift, starting April 17th, should fraudulent transactions take place at your pump, the financial burden becomes your own. These new mandates keep your customers’ data protected and you safe from extra charges. Sleep easier with a security plan in place.";
  return (
    <>
      <TextUI
        index={props.index}
        text={"CYBER SECURITY."}
        para={"Your store’s profits rely on the ability to accept credit card payments. Mandated by card issuers, PCI DSS requires all merchants with internal systems that store, process or transmit cardholder data to comply with key data protection measures and submit to annual security audits. Stay secure so your consumers can be comfortable shopping with you."}
        position={[-0.5, 2, 0]}
        skew={0}
        wx={1}
        icon={video}
        icolor={"#72337F"}
      />
      <TextUI
        index={props.index}
        para={"Assessments should be based on industry best-practices to ensure the best security posture for your store. Utilizing compliance frameworks like ISO 27001/27002, NIST 800-53, and PCI, you cyber partner can identify existing/potential gaps in your physical or online security. Those gaps are then triaged so any necessary remediation efforts can begin."}
        text={"ASSESSMENTS."}
        position={[1.3, 2, 0]}
        skew={0}
        wx={1}
        icon={skim}
        icolor={"#72337F"}
      />
      <TextUI
        index={props.index}
        linki={demv}
        linka={ha}
        url={"https://sagenetvirtual.com/SageNet_EMV_WP_NEW110520.pdf"}
        text={"PCI-COMPLIANCE."}
        para={pci}
        position={[3.2, 2, 0]}
        skew={0}
        wx={1.2}
        icon={emv}
        icolor={"#72337F"}
      />
      <TextUI
        index={props.index}
        text={"CYBER FOR KIOSKS."}
        position={[2.7, 1.3, 0]}
        skew={0}
        para={"Any time a new device is connected to your network, you introduce new security risks. Make sure that your kiosks remain secure, that their screens only show the content you intend, and customers are protected from skimming or other methods of identity theft. Keep your customers’ info secure, and they’ll keep their brand loyalty."}
        wx={1.3}
        icon={video}
        icolor={"#72337F"}
      />
    </>
  )
}

function Sageconnect(props) {
  const etext = "April 17, 2021 is the deadline to deploy chip card readers at all automated fuel dispensers. After that, C-store operators may be liable for fraudulent transactions. The services of a certified-MNSP partner are key. For C-store operators using Verifone, Gilbarco, or NCR ’s Point-of-Sale (PoS) systems, the certifications ensure PCI-compliant remote zone access from the PoS providers as well as remote upgrades/patches. ";
  const ctext = "Cash only makes up 15% of payments at the pump. So if you can’t process debit/credit cards, you may as well be out of gas. With the shift to digital signage and pump-side ordering, fast, reliable, secure connectivity is a c-store’s lifeline. High-speed broadband with automatic failover and 24/7 monitoring and field service ensures always-on connectivity. ";
  return (
    <>
      <TextUI
        index={props.index}
        text={"EMPOWERING CONNECTIVITY."}
        para={etext}
        position={[-0.3, 2.2, 0]}
        skew={0}
        wx={1.8}
        icon={emv}
        icolor={"#76787B"}
      />
      <TextUI
        index={props.index}
        text={"V-SAT CONNECTIVITY."}
        para={etext}
        position={[0.5, 1.5, 0]}
        skew={0}
        wx={1.3}
        icon={emv}
        icolor={"#76787B"}
      />
      <TextUI
        index={props.index}
        text={"BACK-UP CONNECTIVITY"}
        position={[2.7, 2, 0]}
        skew={0}
        wx={1.5}
        vidurl={"https://player.vimeo.com/video/501964524?autoplay=1&title=0&byline=0&portrait=0"}
        icon={video}
        icolor={"#76787B"}
      />
      <TextUI
        index={props.index}
        text={"V-SAT."}
        para={ctext}
        position={[2.5, 1.5, 0]}
        skew={0}
        wx={0.6}
        icon={network}
        icolor={"#76787B"}
      />
    </>
  )
}

function Sageiw(props) {
  const ctext = "Captive portals present Wi-Fi users with a web page that requires some action before network access is granted. At the pump, it’s a powerful marketing tool as well as a network access mechanism, presenting the user with messaging based on location, time of day, or loyalty info while capturing valuable data to help personalize the customer experience.";
  const ltext = "The Wi-Fi location analytics market is growing 15% annually. Here’s why. Wi-Fi location analytics uses multiple wireless access points and advanced algorithms to provide insights into customer behavior based the user’s movement: From pump to store? Which aisle first? How many aisles, in what order? Time spent in location? In check-out?";
  return (
    <>
      <TextUI
        index={props.index}
        text={"CUSTOMER EXPERIENCE."}
        para={ctext}
        position={[-0.2, 2.1, 0]}
        skew={0}
        wx={1.3}
        icon={screen}
        icolor={"#E79F37"}
      />
      <TextUI
        index={props.index}
        linki={dlocation}
        linka={ha}
        url={"https://sagenetvirtual.com/SageNet_CaptivePortal_WP_NEW091919.pdf"}
        text={"TOUCHLESS KIOSK INTERACTION."}
        para={ltext}
        position={[0.4, 1.6, 0]}
        skew={0}
        wx={1.8}
        icon={location}
        icolor={"#E79F37"}
      />
      <TextUI
        index={props.index}
        text={"WI-FI SECURITY."}
        position={[2.7, 2, 0]}
        skew={0}
        wx={1}
        vidurl={"https://player.vimeo.com/video/501963728?autoplay=1&title=0&byline=0&portrait=0"}
        icon={video}
        icolor={"#E79F37"}
      />
    </>
  )
}

function GetComponent(props) {
  switch (props.sel) {
    case 1:
      return <Sagesec index={props.sel} />;
    case 2:
      return <Sageconnect index={props.sel} />;
    case 3:
      return <Sageiw index={props.sel} />;
    default:
      return <Sageview index={props.sel} />;
  }
}

export default function Foodservice(props) {


  return (
    <Suspense fallback={null}>
      <GetComponent sel={props.index} />
    </Suspense>
  )

}