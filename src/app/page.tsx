import BackOrContinue from "src/components/BackOrContinue";
import MemberInfo from "src/components/MemberInfo";
import TravelingMembers from "src/components/TravelingMembers";

export default function Home() {
  return (
    <main>
      <div className="px-5 sm:px-9 mt-10 lg:mt-[74px] flex flex-col items-center lg:flex-row lg:gap-[10%] lg2:gap-[18.5%] xl:container xl:justify-center xl:mx-auto">
          <TravelingMembers />
          <MemberInfo />
      </div>
    </main>
  );
}
