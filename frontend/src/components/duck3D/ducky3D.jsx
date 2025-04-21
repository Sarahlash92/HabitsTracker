import React from "react";
import { useFBX } from "@react-three/drei";

export function Ducky3D() {
  const fbx_duck = useFBX("/Duck.FBX");

  return (
    <>
      <primitive
        object={fbx_duck}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, 0]}
      />
    </>
  );
}
