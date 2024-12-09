// import React from "react";
// import { IoSearchOutline } from "react-icons/io5";

// export default function Header() {
//   return (
//     <>
//       <div className="flex flex-col p-3 ">
//         <span className="mb-2">Chats</span>
//           <IoSearchOutline />
//           <input
//             className="mb-4 p-2 w-full rounded-lg  shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)]"
//             type="search"
//             name=""
//             id=""
//             placeholder="Search..."
//           />
//         </div>
//     </>
//   );
// }

// import logo from '../assets/logo.webp';

// export default function Header() {
//   return (
//       <div className=" py-4 flex flex-col ">
//         <div className="flex items-center">
//           <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
//           <span className="text-2xl font-semibold text-gray-800">ChatSphere</span>
//         </div>
//       </div>
  
//   );
// }


import logo from '../assets/logo.webp';

export default function Header() {
  return (
    // <div className="flex flex-col items-center justify-center py-6 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg max-w-md mx-auto w-full">
    //   <img src={logo} alt="logo" className="w-24 h-24 object-cover rounded-full mb-4 shadow-md" />
    //   <span className="text-3xl font-semibold text-center leading-tight">ChatSphere</span>
    //   <p className="mt-2 text-sm text-center font-light opacity-80">
    //     Connect with the world instantly!
    //   </p>
    // </div>

    <div className="flex gap-4 px-2 w-full  items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg mb-2">
    <div className="w-14 rounded-full place-self-center overflow-hidden">
      <img
        className="w-full block object-cover"
        src={logo}
        alt=""
      />
    </div>
    <div className=" flex py-3 justify-between w-full">
      <div className="flex flex-col py-1 items-start h-full justify-between">
        <span className="font-semibold">ChatSphere</span>
        <p className="overflow-hidden text-sm font-light">
        Connect with the world instantly!
        </p>
      </div>
    </div>
  </div>
  );
}
