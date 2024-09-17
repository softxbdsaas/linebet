import React from "react";
import CollapseButton from "../leftSiteSidebar/CollapseButton";
import YourBet from "./YourBet";
import BonusAccount from "./BonusAccount";
import DownloadSystems from "./DownloadSystems";

const RightSiteSidebar = () => {
  return (
    <div className={`w-[280px] mt-4 pr-2`}>
       <CollapseButton />
       <YourBet />
       <BonusAccount  />
       <DownloadSystems/>
    </div>
  );
};

export default RightSiteSidebar;