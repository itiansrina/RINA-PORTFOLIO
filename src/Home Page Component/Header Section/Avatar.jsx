import me from '../Header Section/me1.png';
import React from "react";
const AnimationReact = () => {
  return (
    <div>  
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="w-64 h-64 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
          <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
            <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full  ">
              <img
                src={me}
                alt=""
                className="w-full h-full rounded-full object-fit object-center"
              />
            </div>
            <div className="absolute w-full h-full rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-indigo-500">
              <div className="flex flex-col items-center justify-center h-full w-full gap-4">
                <h1 className="text-md font-bold text-purple-200">Front-End Developer</h1>
                <h1 className="text-xl text-white font-medium">Rina Kushawaha</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnimationReact;