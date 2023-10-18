import React, { useRef, useState } from "react";
import Modal from "react-modal";

import emailjs from "@emailjs/browser";
import { customStyles } from "@/assets/data/dummydata";

Modal.defaultStyles.overlay.backgroundColor = "rgba(000, 000, 000, 0.4)";
const ModalComponent = ({ modalIsOpen, closeModal }) => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;

    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Invoke Solutions",
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. We will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          console.error(err);

          alert("Sorry, something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        hasBackdrop={true}
        backdropOpacity={0}
        backdropColor={"rgba(255, 0, 0, 0.8)"}
        className={"modal"}
      >
        <h2>Hello World</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </>
  );
};

export default ModalComponent;
