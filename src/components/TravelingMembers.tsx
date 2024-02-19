import Image from "next/image";
import React from "react";
import members from "public/assets/svgs/members.svg";
import BorderButton from "src/components/BorderButton";
import MemberCounter from "./MemberCounter";
import BGButton from "./BGButton";
import leftArrow from "public/assets/svgs/leftArrow.svg";
import GrayLine from "./GrayLine";
import BackOrContinue from "./BackOrContinue";

const TravelingMembers = () => {
  return (
    <div className="w-full xs:w-[360px] flex flex-col items-center lg:items-start xl:w-full xl:items-end">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-bold track-[-0.1px]">Traveling Members</h1>
        <p className="text-[#60646C] text-base font-normal">
          Are you traveling alone or with someone else?
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 mt-8 mb-6">
        <BorderButton className="border-[#01012e22] w-[280px] xs:w-[360px]">
          Alone
        </BorderButton>
        <BorderButton className="w-[280px] xs:w-[360px]">
          With others
        </BorderButton>
      </div>
      <div className="flex w-full xs:w-[360px] flex-col px-3 xs:px-4 rounded-2xl border border-[#00003019]">
        <div className="flex justify-center xs:justify-start gap-2 py-4">
          <Image width={20} height={20} src={members} alt="members" />
          <h1 className="text-sm font-semibold">Travelling members</h1>
        </div>
        <GrayLine />
        <MemberCounter
          title="Legal Spouse"
          description="Must have marrige certificate"
          number="1"
        />
        <GrayLine />
        <MemberCounter
          title="Children under 18"
          description="Must have birth certificate"
          number="2"
        />
        <GrayLine />
        <MemberCounter
          title="Pets"
          description="Must have documents"
          number="5"
        />
      </div>
      <BackOrContinue className="hidden lg:flex w-full max-w-[360px]" />
    </div>
  );
};

export default TravelingMembers;
