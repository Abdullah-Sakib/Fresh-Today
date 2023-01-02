/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Form } from "react-router-dom";
import Conversation from "../Conversation/Conversation";
// import ProductInfo from "../ProductInfo/ProductInfo";
import "./Chat.css";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [messageSent, setMessageSent] = useState(false);
  const scrollRef = useRef();

  const [showChatbar, setshowChatbar] = useState(false);
  const conversationId = "63ae01d31068510422115243";

  useEffect(() => {
    fetch(`http://localhost:5000/chats/${conversationId}`)
      .then((res) => res.json())
      .then((data) => setConversations(data));
  }, [messageSent]);
  console.log("conversations", conversations);

  const user = {
    name: "Nishi",
    _id: "63abe5c93ae7aaa83199cb0a",
    email: "nishi@gmail.com",
    img: "https://i.pinimg.com/550x/1b/30/03/1b30035e27d189ac55a495d48b888351.jpg",
  };

  const handleChat = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = user.name;
    // const email = user.email;
    const message = form.message.value;
    // const photo = user.img;

    const chat = {
      conversationId,
      senderId: user._id,
      name: user.name,
      message: message,
      email: user.email,
      photo: user.img,
    };

    fetch("http://localhost:5000/chats", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chat),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        setMessageSent(!messageSent);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations]);

  return (
    <div>
      <>
        <button
          onClick={() => setshowChatbar(!showChatbar)}
          className="flex items-center just text-center font-family backdrop-blur text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          fill="#2563EB"
          viewBox="0 0 100 80"
          height="40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          Chat
        </button>

        <div
          className={`w-96  bottom-20 right-0 bg-lime-50 text-black fixed h-3/4 z-40   ease-in-out duration-300 ${
            showChatbar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-1 ml-3 overflow-y-scroll h-full overflow-x-hidden">
            <div className="flex items-start justify-between mt-4">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Need help?
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => {
                    setshowChatbar(false);
                  }}
                >
                  <span className="sr-only">Close panel</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {conversations.map((conversation) => (
              <div ref={scrollRef}>
                <Conversation
                  key={conversation._id}
                  conversation={conversation}
                ></Conversation>
              </div>
            ))}
          </div>
          <Form
            className="flex w-full mx-auto p-4 bg-lime-50 "
            onSubmit={handleChat}
          >
            <div>
              <input
                type="text"
                className="textarea textarea-bordered w-60 mr-1"
                placeholder="Your message"
                name="message"
              />
            </div>
            <button className="btn gap-2 w-20 flex">Send</button>
          </Form>
        </div>
      </>
    </div>
  );
};

export default Chat;
