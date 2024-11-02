import React from "react";
import Img from "./img";
import NavList from "./NavList";
import MbSmallScreen from "./MbSmallScreen";
import { useMediaQuery } from "react-responsive";

const MemberBenefitSection = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <div className="flex justify-center h-fit my-28">
      <div className="mb-wrapper-content w-[96%]">
        <h1 className="text-neutral-900 text-3xl">Member Benefit</h1>
        <div className="flex overflow-x-scroll mt-7">
          <div className="flex gap-5">
            <Img />
          </div>
        </div>
        <div className="mb-wrapper-navlist flex justify-center gap-32 mt-5">
          {isSmallScreen ? <MbSmallScreen /> : <NavList />}
        </div>
      </div>
    </div>
  );
};

export default MemberBenefitSection;
