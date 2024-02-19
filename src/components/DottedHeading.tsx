import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import dottedLine from "public/assets/svgs/dottedLine.svg";

interface IDottedHeading extends HTMLAttributes<HTMLParagraphElement> {}

const DottedHeading: React.FC<IDottedHeading> = ({ children, className }) => {
  return (
    <div className="flex flex-col w-fit bg-transparent">
      <p
        className={twMerge(
          // "text-xs font-medium w-fit border-b border-dashed border-[#D3D4DB]",
          "text-xs font-medium",
          className
        )}
      >
        {children}
      </p>
      <div className="relative w-[104%] h-[1px] mt-1">
        <Image
          src={dottedLine}
          alt="dottedLine"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default DottedHeading;
