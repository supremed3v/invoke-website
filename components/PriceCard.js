import { pricingData, tabs } from "@/assets/data/dummydata";
import React, { useState } from "react";

const PriceCard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={"pricingPage"}>
      <div className={"tabs"}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "activeLink" : "none"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="pricingCardsContainer">
        <div className={"pricingCards"}>
          {pricingData[activeTab]?.map((pricing, index) => (
            <div key={index} className={"pricingCard"}>
              <div className={"plan"}>{pricing.plan}</div>
              <div className={"price"}>{pricing.price}</div>
              <div className={"description scrollableDescription"}>
                {pricing.description}
              </div>
              <button className={"buyButton"}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
