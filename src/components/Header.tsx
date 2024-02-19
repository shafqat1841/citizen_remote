import Image from "next/image";
import React from "react";
import logo from "public/assets/svgs/logo.svg";

const NotCurrentStep = () => {
  return <div className="w-2 h-2 bg-[#EBEBEF] rounded mx-[6px]" />;
};

const CurrentStep = () => {
  return <div className="w-[18px] h-[10px] bg-[#1F2327] rounded-md mx-[6px]" />;
};

const Header = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 px-5 py-[14px] container mx-auto">
      <div className="flex items-center">
        <Image width={28} height={28} src={logo} alt="logo" />
        <h1 className="font-semibold ml-[6px]">citizen remote</h1>
      </div>
      <div className="flex mt-5 sm:mt-0 sm:col-span-2 justify-center items-center">
        <NotCurrentStep />
        <NotCurrentStep />
        <CurrentStep />
        <NotCurrentStep />
      </div>
    </div>
  );
};

export default Header;
