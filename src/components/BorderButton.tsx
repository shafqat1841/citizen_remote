import React from "react";
import { twMerge } from "tailwind-merge";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BorderButton: React.FC<IButton> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "outline-none text-sm font-normal border rounded-[10px] border-[#1F2327] py-4",
        className
      )}
    >
      {children}
    </button>
  );
};

export default BorderButton;
