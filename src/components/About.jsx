import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full p-6 bg-[#F3A20D]">
        <p className="text-white text-center font-medium text-[20px]">About</p>
        </div>
        <div className="grid grid-cols-2 mx-36">
          <div className="flex flex-col justify-center">
            <h1 className="text-[#183661] font-medium text-[25px] mb-7">The Standdard Lorem ipsum</h1>
            <p className="text-normal text-[15px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <img src="/images/black-red.png" />
          </div>
        </div>
      </div>
    
  );
};

export default About;
