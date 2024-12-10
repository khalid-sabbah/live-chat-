import React from 'react'
import { PiChatsCircleFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";



export default function ChatNavBar() {
  return (
    <>
    <div className='flex justify-between p-3 bg-chatBlue fixed bottom-0 left-0 w-full '>
        <span>< IoIosSettings className="w-8 h-8"/></span>
        <span><PiChatsCircleFill className="w-8 h-8" /></span>
        <span>< CgProfile className="w-8 h-8"/></span>
    </div>
    
    </>
  )
}
