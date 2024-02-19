import React from "react";
import { twMerge } from "tailwind-merge";

interface IGrayLine extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const GrayLine: React.FC<IGrayLine> = ({ className }) => (
  <div className={twMerge("w-full h-[1px] bg-[#02023414]", className)} />
);

export default GrayLine;
