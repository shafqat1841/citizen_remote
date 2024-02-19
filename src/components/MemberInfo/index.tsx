import React from "react";
import InfoHeader from "src/components/MemberInfo/InfoHeader";
import InfoBody from "src/components/MemberInfo/InfoBody";
import InfoFooter from "./InfoFooter";
import BackOrContinue from "../BackOrContinue";

const MemberInfo = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center lg:items-start">
      <div className="rounded-2xl mt-10 lg:mt-0 py-[3px] px-[3px] w-full xs:w-fit xs:h-[606px] bg-[#74657422]">
        <div className="bg-cardBackground bg-cover w-full xs:w-[444px] sm:h-[600px] rounded-2xl p-3 sm:p-5">
          <InfoHeader />
          <InfoBody />
          <InfoFooter />
        </div>
      </div>
      <div className="px-5 w-full xs:w-[444px] lg:hidden mb-8">
        <BackOrContinue />
      </div>
    </div>
  );
};

export default MemberInfo;
