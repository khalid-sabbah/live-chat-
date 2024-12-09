import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";

export default function ChatCard({data}) {




  return (
    <>
      <div className="flex gap-4 px-2 border-b border-gray-200 hover: animate__animated animate__headShake hover:cursor-pointer   hover:shadow-xl">
        <div className="w-14 h-12 rounded-full place-self-center overflow-hidden">
          <img
            className="w-full h-full block object-cover"
            src={data.image}
            alt="avatar"
          />
        </div>
        <div className=" flex py-3 justify-between w-full">
          <div className="flex flex-col py-1 items-start h-full justify-between">
            <span className="font-semibold">{data.name}</span>
            <p className="overflow-hidden text-sm font-light">
             {data.subtitle}
            </p>
          </div>
          <div className="flex flex-col py-1 items-end h-full justify-between">
            <span className="font-light text-sm">{data.date}</span>
            <RiCheckDoubleFill className="text-customPurp" />
          </div>
        </div>
      </div>
    </>
  );
}
