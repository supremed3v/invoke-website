import React, { useRef, useState } from "react";
import Modal from "react-modal";

import emailjs from "@emailjs/browser";
import { customStyles } from "@/assets/data/dummydata";
import { Title, TitleSm } from "./common/Title";

Modal.defaultStyles.overlay.backgroundColor = "rgba(000, 000, 000, 0.8)";
const ModalComponent = ({ modalIsOpen, closeModal }) => {
  const formRef = useRef();

  const services = [
    { value: "web", label: "WordPress Development" },
    { value: "mobile", label: "Mobile Development" },
    { value: "customweb", label: "Custom Web Development" },
    { value: "smm", label: "Social Media Marketing" },
    { value: "seo", label: "Search Engine Optimization" },
    { value: "branding", label: "Brand Identity Design" },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    services: services[0].value,
    phoneNum: "",
    termsAgreed: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value, type, checked } = target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Invoke Solutions",
          from_email: form.email,
          message: form.message,
          to_email: "saaadahmedsiddiqui1999@gmail.com",
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

          closeModal();
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
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Title title="Let's work together!" />
        </div>
        <div className="modalContent">
          <form ref={formRef} onSubmit={handleSubmit} className="contactForm ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                placeholder: {
                  color: "white",
                },
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              name="services"
              value={form.services}
              onChange={handleChange}
              required
            >
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>

            <input
              type="tel"
              name="phoneNum"
              placeholder="+1 123 456 7890 (Enter your phone number with country code)"
              value={form.phoneNum}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            {/* Checkbox */}
            <input
              type="checkbox"
              id="checkbox"
              name="termsAgreed"
              value={form.termsAgreed}
              onChange={handleChange}
              required
            />
            <label htmlFor="checkbox">
              By clicking 'Submit' I agree by electronic signature to be
              contacted by Invoke Solutions through a live agent, automated SMS
              or prerecorded voice at my residential or cellular number I
              provided, dialed manually or by autodialer, or by email.
            </label>
            {form.termsAgreed ? (
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            ) : (
              <></>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
