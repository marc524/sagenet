import React, { useRef, useState } from "react";
import { useFrame, useLoader  } from 'react-three-fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function Asset({ url }) {
    const fbx = useLoader(FBXLoader, url)
    return <primitive object={fbx} dispose={null} />
}

export default function ARoom(props){
    return (
        <group dispose={null}>
            <Asset url={"GAS.fbx"}></Asset>
        </group>
    );
}
