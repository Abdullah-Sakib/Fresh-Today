import React, { useEffect, useState } from "react";

const Conversation = () => {
  //   const {user} = useContext(AuthContext);

  const [conversations, setConversations] = useState([]);
  const [vendorID, setVendorID] = useState([]);
  const user = {
    name: "Nishi",
    _id: "63acc5d5ef95930c9c19b351",
    email: "nishi@gmail.com",
    img: "https://i.pinimg.com/550x/1b/30/03/1b30035e27d189ac55a495d48b888351.jpg",
  };

  useEffect(() => {
    fetch(`http://localhost:5000/conversation/${user._id}`)
      .then((res) => res.json())
      .then((data) => setConversations(data));
  }, [user._id]);

  // console.log(vendor.members[1])
  // setConversations(...conversations,vendor.members[1])

  const id = conversations?.map((c) => c.members[1]);

  // const list = []

  useEffect(() => {
    id.forEach(
      (i) => {
        fetch(`http://localhost:5000/user/${i}`)
          .then((res) => res.json())
          .then((data) => setVendorID(data));
      },
      [id]
    );
  });
  console.log(vendorID);

  return <div>{}</div>;
};

// export default Conversation;
