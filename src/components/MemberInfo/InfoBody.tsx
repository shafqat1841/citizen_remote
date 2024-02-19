import React from "react";
import InfoCard from "./InfoCard";
import GrayLine from "../GrayLine";
import DottedHeading from "../DottedHeading";
import InfoTravelingMembers from "./InfoTravelingMembers";

const CardBody = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col py-3 xs:py-5 mt-[22px]">
      <div className="px-3 xs:px-5">
        {/* <p className="text-xs font-medium w-fit bg-bottom bg-gradient-to-r from-[#D3D4DB] from-30% to-transparent to-0% bg-repeat-x bg-[length:5px_1px]">
          Finance Information
        </p> */}
        <DottedHeading>Finance Information</DottedHeading>
        <p className="text-xs font-medium text-[#60646C] mt-4">
          Full Remote Job
        </p>
        <p className="text-sm font-medium mt-1">Yes, for over 6 months.</p>
        <p className="text-xs font-medium text-[#60646C] mt-4">Self employed</p>
        <p className="text-sm font-medium mt-1">
          {"I'm self employed < 3 years business"}
        </p>
        <div className="flex flex-col items-center xs:flex-row gap-[7px] mt-5">
          <InfoCard text="Income" number="$1,000" />
          <InfoCard text="Savings" number="$10,000" />
        </div>
      </div>

      <GrayLine className="mt-5" />
      <div className="mt-5 px-3 xs:px-5">
        <DottedHeading>Traveling Members</DottedHeading>
        <div className="flex flex-col xs:flex-row gap-4 mt-4">
          <InfoTravelingMembers number="1" text="Legal Spouce" />
          <InfoTravelingMembers number="2" text="Children under 18" />
          <InfoTravelingMembers number="5" text="Pets" />
        </div>
      </div>
      <GrayLine className="mt-5" />
      <div className="px-3 xs:px-5 mt-5 mb-10">
        <DottedHeading>Additions</DottedHeading>
        <div className="mt-5 w-[165px] h-3 bg-[#00003B0A] rounded-3xl" />
      </div>
    </div>
  );
};

export default CardBody;
