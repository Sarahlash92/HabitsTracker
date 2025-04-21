import React from "react";
import { Ducky3D } from "../duck3D/ducky3D";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const UserProfileCard = ({ cameraPosition }) => {

  return (
    <div className="flex shadow-2xs rounded-2xl h-1/2 justify-center align-middle">
      <div className="p-4 text-left flex flex-col w-1/2">
        <div className="text-4xl">Hello there!</div>
        <div className="text-2xl text-gray-600">
          ready to conquer your <span className="text-4xl">DAY</span>
        </div>
      </div>
      <div className="w-1/2">
        <Canvas
          key={cameraPosition.join("-")} 
          camera={{ position: cameraPosition, fov: 45 }}
        >
          <ambientLight intensity={3} />
          <Ducky3D />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};
