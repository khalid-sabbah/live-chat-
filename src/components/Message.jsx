import React from "react";

export default function Message({ text, time, align, bgColor, imgurl }) {
  const textColor = align === "items-start" ? "text-black" : "text-white";
  const alignment = align === "items-start" ? "self-start" : "self-end";

  return (
    <>
      {text && (
        <div
          className={`flex flex-col w-full ${align} ${textColor} ${alignment}`}
        >
          <p
            className={` font-md  text-sm sm:text-base bloc ${bgColor}  py-2 px-4  sm:px-6 rounded-2xl max-w-full break-words overflow-wrap  
              w-auto 
              inline-block 
              animate__animated 
              animate__heartBeat
            `}
          >
            {text}
          </p>
          <span
            className={`
            text-xs 
            font-thin 
            text-gray-700 
            mb-2 
            ${alignment} 
            block
          `}
          >
            {time}
          </span>
        </div>
      )}
      {imgurl && (
        <img
          src={imgurl}
          alt="pic"
          width={300}
          
          className={`
            ${alignment} 
            mb-2 
            max-w-full 
            h-auto 
            object-cover 
            rounded-lg
          `}
        />
      )}
    </>
  );
}
