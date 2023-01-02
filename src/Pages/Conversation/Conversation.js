import React, { useEffect, useState } from "react";

const Conversation = ({ conversation }) => {
  //   const {user} = useContext(AuthContext);
  let owntext = true;
  const userId = "63abe5c93ae7aaa83199cb0a";

  if (conversation.senderId !== userId) {
    owntext = false;
  }

  // const [vendorID, setVendorID] = useState([]);
  // const user ={
  //     name: "Nishi",
  //     _id:"63acc5d5ef95930c9c19b351",
  //     email:"nishi@gmail.com",
  //     img:"https://i.pinimg.com/550x/1b/30/03/1b30035e27d189ac55a495d48b888351.jpg"
  //   }

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/conversation/${user._id}`)
  //     .then((res) => res.json())
  //     .then((data) => setConversations(data))},[user._id])

  //     // console.log(vendor.members[1])
  //     // setConversations(...conversations,vendor.members[1])

  //         const id = conversations?.map(c => c.members[1] )

  //             const list = []

  //                 useEffect(() => {
  //                     id.forEach((i) => {
  //                     fetch(`http://localhost:5000/user/${i}`)
  //                     .then((res) => res.json())
  //                     .then((data) =>
  //                         setVendorID(data)
  //                     )},[id])
  //             })
  //             console.log(vendorID)

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
          <div>
            <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
          </div>
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
          <div>
            <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversation;
