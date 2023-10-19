import React, { useState } from "react";
import { Title, TitleLogo } from "./common/Title";
import ModalComponent from "./ModalComponent";

const Banner = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are looking forward to start a new project" />{" "}
            <br />
            <TitleLogo title="Lets take your business to the next level!" />
          </div>
          <div>
            <button onClick={openModal} className="button-primary">
              Request a call-back
            </button>
          </div>
          {<ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} />}
        </div>
      </section>
    </>
  );
};

export default Banner;
