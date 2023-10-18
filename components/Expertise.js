import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              Unlocking Digital Potential: Our expertise lies in harnessing
              cutting-edge technologies and creative strategies to propel your
              business into the digital age. We craft solutions that drive
              growth, enhance user experiences, and ensure your online success.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
