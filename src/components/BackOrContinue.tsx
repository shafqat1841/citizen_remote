import Image from "next/image";
import React from "react";
import BGButton from "./BGButton";
import leftArrow from "public/assets/svgs/leftArrow.svg";
import { twMerge } from "tailwind-merge";

interface IBackOrContinue {
  className?: string;
}

const BackOrContinue: React.FC<IBackOrContinue> = ({ className }) => {
  return (
    <div className={twMerge("mt-8 flex justify-between", className)}>
      <div className="flex gap-1 items-center">
        <Image src={leftArrow} alt="leftArrow" />
        <p className="text-sm font-semibold text-[#000509E6]">Back</p>
      </div>
      <BGButton>Continue</BGButton>
    </div>
  );
};

export default BackOrContinue;
