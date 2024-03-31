import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
function Sidebar() {
  return (
    <div className='w-52 text-gray-700  h-full '>
      <div className='bg-[#f8f9fa] h-20 '>

        <img src="https://cdn.animaapp.com/projects/6255ae06d078078d3e9c7650/releases/629f3c4744dea69859d62478/img/frame@2x.png" alt="Your logo" className='invert-[50%] m-auto py-4' />
      </div>
        <ul className='p-3  divide-y-2 '>
            <li className='flex gap-3 items-center py-2 hover:bg-slate-300/50'><VscGraph />Dashboard</li>
            <li className='flex gap-3 items-center py-2 hover:bg-slate-300/50'><MdOutlineShoppingCart />Orders</li>
            <li className='flex gap-3 items-center py-2 hover:bg-slate-300/50'><GoPerson />Account</li>
            <li className='flex gap-3 items-center py-2 hover:bg-slate-300/50 '><IoSettingsOutline />Setting</li>
        </ul>
        <div className='p-3 border-y-2'>
        <span >Support</span>
        <ul className='p-3 flex justify-center flex-col space-y-4 '>
        <li className='flex gap-3 items-center hover:bg-slate-300/50'><IoIosChatbubbles />Chat</li>
        <li className='flex gap-3 items-center hover:bg-slate-300/50'><FaQuestionCircle />FAQ</li>
            </ul>
        </div>
       
    </div>
  )
}

export default Sidebar