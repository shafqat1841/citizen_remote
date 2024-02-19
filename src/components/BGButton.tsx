import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IBGButton extends React.HTMLAttributes<HTMLButtonElement> {}

const BGButton: React.FC<IBGButton> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "text-[#FCFCFD] bg-[#1F2327] rounded-[10px] text-sm font-medium py-[14px] px-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default BGButton;
