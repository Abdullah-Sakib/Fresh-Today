// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { useStore } from 'react-redux';

// const Conversation = ({item}) => {

//        const store = useStore();
//        console.log(store.getState());
//        const user = store.getState().states.user;
//        console.log(item);

//     //    const{  _id , vendorName} = item ;


     
     
//     const [conversations,setConversations] = useState([]);
//     const [vendorID, setVendorID] = useState([]);
   

//       useEffect(() => {
//         fetch(`http://localhost:5000/conversation/${user._id}`)
//         .then((res) => res.json())
//         .then((data) => setConversations(data))},[user._id])

        
//         useEffect(() => {
//            conversations.map(c => 
//             {
//                   const fid = c.members.find(m => m !== user._id)

//                   const getUser = async () => {
//                     try{
//                         const res = await axios(`http://localhost:5000/user/${fid}`);
//                         setVendorID(res.data)
//                     } catch(err){
//                         console.log(err);
//                     }
//                   };
//                   getUser()
//             }
//             )     
//            },[conversations, user._id])
    
//     //    console.log(vendorID);
      
//         // useEffect(() => {
//         //     fetch(`http://localhost:5000/chats/${item}`)
//         //     .then((res) => res.json())
//         //     .then((data) => setVendorID(data)
//         //     )},[item])
    
//         //     console.log(vendorID);
      
      


//         // console.log(vendor.members[1])
//         // setConversations(...conversations,vendor.members[1])
            
//             // const id = conversations?.map(c => c.members[1] )
            
          
                
              
//             //     const list = []
              
                
//             //         useEffect(() => {
//             //             id.forEach((i) => {
//             //             fetch(`http://localhost:5000/user/${i}`)
//             //             .then((res) => res.json())
//             //             .then((data) =>
//             //                 setVendorID(data)
//             //             )},[id])
//             //     })
//             //     console.log(vendorID)
            
               
         

           
                
                
   
         

//     return (
//         <div>
//             {
//                  vendorID.map(c => 
//                   <div>
//                     <h5>{c.username}</h5>
//                   </div>
                    
//                     )
//             }
        
            
//         </div>
//     );
// };

// export default Conversation;