import { HTMLAttributes, useEffect, useState } from "react";
import Sphere from "./sphere";

interface FancyTextBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  spheres: number;
}

function Background(props: FancyTextBackgroundProps) {
  return (
    <>
      <div className="bg-gradient-radial from-orange-900 to-black w-screen h-screen absolute top-0 left-0 -z-20">
        {Array.from(Array(props.spheres).keys()).map((_, i) => (
          <Sphere key={i} />
        ))}
      </div>
      <div className="backdrop-blur-xl w-screen h-screen absolute top-0 left-0 -z-10"></div>
    </>
  );
}

export default Background;
