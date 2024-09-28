import React from "react";
import HomeSportsItems from "./HomeSportsItems";

const HomeSportsSection = () => {
  return (
    <div className="py-3">
      <div>
        <HomeSportsItems title={"Live (250)"} />
        <div className="py-2">
          <HomeSportsItems title={"Sports (750)"} />
        </div>
      </div>
    </div>
  );
};

export default HomeSportsSection;
