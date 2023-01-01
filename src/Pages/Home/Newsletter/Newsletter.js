import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Newsletter = () => {
  const [disabled, setDisabled] = useState(true);

  const handleInput = (e) => {
    if (e.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wbnn8k",
        "template_e88ae1k",
        form.current,
        "O0mKdcMXfdXA1G-W7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <div className="relative bg-[url(https://img.freepik.com/free-photo/green-leaves-grass-bokeh-lights-background_1048-2818.jpg?w=996&t=st=1672610675~exp=1672611275~hmac=99063e0c72b992a1dabe663de940059677357fbdb489c281fd12246dbc703fa7)] bg-cover bg-center bg-no-repeat py-20 my-16 md:my-28 lg:my-64  grid justify-center font-family shadow">
      <h2 className="text-3xl font-bold text-center mb-8">
        SUBSCRIBE TO OUR NEWSLETTER!
      </h2>
      <p className="pl-14 mb-6 font-bold">
        Get notified about our latest products and offers
      </p>
      <form ref={form} onSubmit={sendEmail} className="pl-8">
        <input
          type="email"
          onChange={handleInput}
          name="userEmail"
          placeholder="Put your email here"
          className="input w-full max-w-xs mr-2 rounded-none"
          required
        />
        <input
          type="submit"
          className="btn bg-blue-900 rounded-none text-base-100 border-0"
          value="Submit"
          disabled={disabled}
        />
      </form>
    </div>
  );
};

export default Newsletter;
