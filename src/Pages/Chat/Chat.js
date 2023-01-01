// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/style-prop-object */
// import React, { useContext, useEffect } from "react";
// import { useState } from "react";
// import { useStore } from "react-redux";
// import { Form, useLoaderData } from "react-router-dom";
// import Conversation from "../Conversation/Conversation";
// import ProductInfo from "../ProductInfo/ProductInfo";
// import "./Chat.css";

// const Chat = ({c}) => {
  
//   console.log(c);
// //   const {user} = useContext(AuthContext);
//   const [showChatbar, setshowChatbar] = useState(false);
//   const [owntext, setowntext] = useState(true);
//   const [currentChat, setCurrentChat] = useState(null);
//   const [messages, setMessages] = useState([]);


  

// //    const{  _id , vendorName} = item ;








 

 

//   // useEffect(() => {
//   //   vendorId = 
//   //   .then((res) => res.json())
//   //   .then((data) => setConversations(data));                          
//   // },[user._id])
 

  
//     const handleChat  = event => {
//             event.preventDefault();
//             const form = event.target;
//             // const name = user.name;
//             // const email = user.email;
//             const message = form.message.value;
//             // const photo = user.img;

//             const chat = {  message}
//             console.log(chat)

//             fetch('http://localhost:5000/chats',{
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(chat)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     if(data.acknowledged){
//                         form.reset();
//                     }
//                 })
//                 .catch(error => console.error(error));
//             }

    
        

//   return (
//     <div>
//       <>
//         <button
//           onClick={() => setshowChatbar(!showChatbar)}
//           className="flex text-center font-family backdrop-blur text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//           type="button"
//           data-drawer-target="drawer-example"
//           data-drawer-show="drawer-example"
//           aria-controls="drawer-example"
//           fill="#2563EB"
//           viewBox="0 0 100 80"
//           width="40"
//           height="40"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 mx-1"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
//             />
//           </svg>
//           {
//             conversations.map(
              
//             )
//           }
//           Chat
//           <rect width="100" height="10"></rect>
//           <rect y="30" width="100" height="10"></rect>
//           <rect y="60" width="100" height="10"></rect>
//         </button>
//         {showChatbar ? (
//           <button
//             className="text-sm text-gray-900 cursor-pointer fixed right-full top-3 mr-12 z-50 "
//             onClick={() => setshowChatbar(!showChatbar)}
//           >
//             x
//           </button>
//         ) : (
//           <></>
//         )}

//         <div
//           className={`w-96 bottom-0 bg-white  antialiased text-gray-800 fixed h-full z-40 ease-in-out duration-300 ${
//             showChatbar ? "translate-x-0 right-full mx-2" : "translate-x-full"
//           }`}
//         >
//           <div className="p-1 m-3 overflow-y-scroll h-full overflow-x-hidden">


//             {/* <div className="message flex flex-col mt-9 p-2">
//               <div className="message-top flex">
//                 <img
//                   src="https://avatars.githubusercontent.com/u/106773180?v=4"
//                   className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
//                   alt=""
//                 />
//                 <p
//                   className="messageText p-1 rounded-lg bg-lime-100"
//                   style={{ maxWidth: "250px" }}
//                 >
//                   Hi this is tasfi..
//                 </p>
//               </div>
//               <div>
//                 <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
//               </div>
//             </div> */}
//             {
//               currentChat?
//               <>
//                <div
//               className={`message flex flex-col my-2 p-2 ${
//                 owntext ? "items-end" : "text-start"
//               }`}
//             >
//               <div className="message-top flex flex-row-reverse">
//                 <img
//                   src="https://avatars.githubusercontent.com/u/106773180?v=4"
//                   className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
//                   alt=""
//                 />
//                 <p
//                   className="messageText p-1 rounded-lg bg-lime-100"
//                   style={{ maxWidth: "250px" }} 
//                 >
//                   Hi this is tasfi..
//                 </p>
//               </div>
//               <div>
//                 <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
//               </div>
//             </div>
 
//             <Conversation></Conversation>
//             <div className="message flex flex-col my-2 p-2">
//               <div className="message-top flex">
//                 <img
//                   src="https://avatars.githubusercontent.com/u/106773180?v=4"
//                   className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
//                   alt=""
//                 />
//                 <p
//                   className="messageText p-1 rounded-lg bg-lime-100"
//                   style={{ maxWidth: "250px" }}
//                 >
//                   Hi this is tasfi..
//                 </p>
//               </div>
//               <div>
//                 <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
//               </div>
//             </div>
//             <div
//               className={`message flex flex-col my-2 p-2 ${
//                 owntext ? "items-end" : "text-start"
//               }`}
//             >
//               <div className="message-top flex flex-row-reverse">
//                 <img
//                   src="https://avatars.githubusercontent.com/u/106773180?v=4"
//                   className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
//                   alt=""
//                 />
//                 <p
//                   className="messageText p-1 rounded-lg bg-lime-100"
//                   style={{ maxWidth: "250px" }}
//                 >
//                   Hi this is tasfi..
//                 </p>
//               </div>
//               <div>
//                 <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
//               </div>
//             </div>

//             <div className="message flex flex-col my-2 p-2">
//               <div className="message-top flex">
//                 <img
//                   src="https://avatars.githubusercontent.com/u/106773180?v=4"
//                   className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
//                   alt=""
//                 />
//                 <p
//                   className="messageText p-1 rounded-lg bg-lime-100"
//                   style={{ maxWidth: "250px" }}
//                 >
//                   Hi this is tasfi..
//                 </p>
//               </div>
//               <div>
//                 <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
//               </div>
//             </div>


//             <div
//               className={`message flex flex-col my-2 p-2 ${
//                 owntext ? "items-end" : "text-start"
//               }`}
//             >
//               <div className="message-top flex flex-row-reverse">
//                 <img
//                   src="https://avatars.githubusercontent.com/u/106773180?v=4"
//                   className="flex-shrink-0 object-cover w-9 h-9 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-10 message-img"
//                   alt=""
//                 />
//                 <p
//                   className="messageText p-1 rounded-lg bg-lime-100"
//                   style={{ maxWidth: "250px" }}
//                 >
//                   Hi this is tasfi..
//                 </p>
//               </div>
//               <div>
//                 <p className="messageBottom text-sm px-4 py-2">1 hour ago</p>
//               </div>
//             </div>
//               </>
//               :
//               <>
//                <div className="flex justify-center my-44 text-slate-400 text-2xl p-2">
//                <p>Start Conversation</p>
//             </div>
//               <Form className="flex w-full mx-auto my-4" onSubmit={handleChat}>
//               <div>
//               <textarea className="textarea textarea-bordered w-60" placeholder="Your message"  name="message" ></textarea>
//               </div>
//               <button className="btn gap-2 w-20 flex" >
             
//                      Send
//               </button>
//             </Form>
//               </>
//             }
           

           
            
//           </div>
//         </div>
//       </>
      
      
//     </div>
//   );
// };

// export default Chat;
