import React from "react";
import { useFBX } from "@react-three/drei";

export function Ducky3D() {
  const fbx_duck = useFBX("/Duck.FBX");

  return (
    <>
      <primitive
        object={fbx_duck}
        scale={[1, 1, 1]}
        position={[0, -150, 0]}
      />
    </>
  );
}
