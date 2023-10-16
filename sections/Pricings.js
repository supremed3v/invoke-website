import { blog } from "@/assets/data/dummydata";
import PriceCard from "@/components/PriceCard";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Pricings = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Pricing Table" /> <br />
            <br />
            <Title title="Detailed Pricing Table for the services we offer" />
          </div>
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Pricings;
