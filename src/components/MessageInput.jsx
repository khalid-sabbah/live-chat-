// import React, { useState } from "react";
// import { IoMdSend, IoMdAttach } from "react-icons/io";
// import { BsEmojiSmile } from "react-icons/bs";
// import { MdOutlinePhotoCamera } from "react-icons/md";

// export default function MessageInput({ onSendMessage }) {

//   const [inputValue, setInputValue] = useState("");

//   const handelOnChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleClick = () => {
//     if (inputValue.trim() !== "") {
//       onSendMessage(inputValue);
//       setInputValue("");
//     }

//   };

//   return (
//     <>
//       <div className="flex items-center rounded p-2 ">
//         <IoMdAttach className="text-gray-500 w-6 h-6 ml-2" />
//         <input
//           type="text"
//           className="flex-grow p-2 bg-chatBlue rounded-lg focus:outline-none"
//           placeholder="Type your message..."
//           value={inputValue}
//           onChange={handelOnChange}
//         />

//         <IoMdSend
//           onClick={handleClick}
//           className="text-gray-500 w-6 h-6 ml-2 cursor-pointer"
//         />
//       </div>
//     </>
//   );
// }

import React, { useState, useRef } from "react";
import { IoMdSend, IoMdAttach } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Record from "./Record";

export default function MessageInput({ onSendMessage }) {
  const [inputValue, setInputValue] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const inputRef = useRef(null);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== "" && previewImage) {
      onSendMessage(inputValue, previewImage);
      setInputValue(""); //
      setPreviewImage("")
    }
    if (inputValue.trim() !== "" && !previewImage) {
      onSendMessage(inputValue, "");
      setInputValue("");
      setPreviewImage("")
    } else if (previewImage && inputValue.trim() === "") {
      onSendMessage("", previewImage);
      setInputValue("");
      setPreviewImage("")
    }
    inputRef.current.focus;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      //   onSendMessage(URL.createObjectURL(file));
      //   console.log(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result); // Set the preview image URL(base64)
      };
      reader.readAsDataURL(file);
      console.log("Selected file:", file);
    }
  };

  const handleSendAudio = (audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    onSendMessage(audioUrl);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="flex w-full items-center rounded p-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex w-full items-center bg-chatBlue mr-2  rounded-lg">
          <IoMdAttach
            className="text-gray-500 w-6 h-6 ml-2 cursor-pointer"
            onClick={triggerFileInput}
          />
          <input
            type="text"
            ref={inputRef}
            className="w-full p-2 bg-chatBlue rounded-lg focus:outline-none"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
          <IoMdSend
            onClick={handleClick}
            className="text-gray-500 w-6 h-6 cursor-pointer"
          />
        </div>

        <Record onSendAudio={handleSendAudio} />

        {/* Image Preview Section */}
        {/* {  previewImage && (
        <div className="mt-2">
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full h-auto rounded"
          />
        </div>
      )} */}
      </div>
    </>
  );
}
