import React from "react";

interface IInfoCard {
  text: string;
  number: string;
}

const InfoCard: React.FC<IInfoCard> = ({text,number}) => {
  return (
    <div className="flex justify-between items-center p-3 w-full bg-[#F9F9FB] rounded-xl">
      <p className="text-[#60646C] text-xs font-medium">{text}</p>
      <p className="font-medium text-sm">{number}</p>
    </div>
  );
};

export default InfoCard;
