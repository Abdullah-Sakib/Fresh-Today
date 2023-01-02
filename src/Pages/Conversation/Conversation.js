import React from "react";
import { format } from "timeago.js";

const Conversation = ({ conversation }) => {
  //   const {user} = useContext(AuthContext);
  let owntext = true;
  const userId = "63abe5c93ae7aaa83199cb0a";

  if (conversation.senderId !== userId) {
    owntext = false;
  }



  return (
    <div>
      {owntext ? (
        <div
          className={`message flex flex-col my-2 p-2 "items-start"
              }`}
        >
          <div className="message-top flex flex-row-reverse">
            <img
              src="https://avatars.githubusercontent.com/u/106773180?v=4"
              className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
              alt=""
            />
            <p
              className="messageText p-1 rounded-lg bg-lime-100"
              style={{ maxWidth: "250px" }}
            >
              {conversation.message}
            </p>
            
          </div>
          <p>{format(conversation.Date)}</p>
        </div>
      ) : (
        <div className="message flex flex-col mt-9 p-2">
          <div className="message-top flex">
            <img
              src="https://avatars.githubusercontent.com/u/106773180?v=4"
              className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
              alt=""
            />
            <p
              className="messageText p-1 rounded-lg bg-lime-100"
              style={{ maxWidth: "250px" }}
            >
              Hi this is tasfi..
            </p>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversation;
