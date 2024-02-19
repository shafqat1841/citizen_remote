import React from "react";
import Image from "next/image";
import minusButton from "public/assets/svgs/minusButton.svg";
import plusButton from "public/assets/svgs/plusButton.svg";

interface IMemberCounter {
  title: string;
  description: string;
  number: string;
}

const MemberCounter: React.FC<IMemberCounter> = ({
  title,
  description,
  number,
}) => {
  return (
    <div className="py-4 flex flex-col items-center xs:flex-row sm:justify-between">
      <div className="flex flex-col w-2/3">
        <p className="text-sm text-center xs:text-left font-medium text-[#1C2024]">{title}</p>
        <p className="text-[#60646C] text-center xs:text-left text-xs font-normal">{description}</p>
      </div>
      <div className="flex mt-5 sm:mt-0 gap-2 items-center justify-center">
        <Image
          width={32}
          height={32}
          src={minusButton}
          alt="minusButton"
        />
        <h1 className="text-center w-8 text-base font-semibold">
          {number}
        </h1>
        <Image
          width={32}
          height={32}
          src={plusButton}
          alt="plusButton"
        />
      </div>
    </div>
  );
};

export default MemberCounter;
