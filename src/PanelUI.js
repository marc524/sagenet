import TextUI from './TextUI'
import graph from './sagelabel/Graph_icon.png'
import location from './sagelabel/Location_icon.png'
import heart from './sagelabel/heart.png'
import video from './sagelabel/Video-icon.png'

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

export default function Panel(props){

    switch(props.index) {
        case 1:
          return <Sageview/>;
        default:
          return null;
      }
    



}