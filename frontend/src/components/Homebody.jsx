import React from 'react'
import { FaMicrophone } from "react-icons/fa6";

export const Homebody = () => {
  return (
    <div className='space-y-5 flex flex-col justify-center items-center w-full h-full px-28 '>
        <div className='text-pink-300 font-bold text-2xl'>Hello, Welcome</div>
        <div className='flex flex-col w-full border border-gray-400 h-32 rounded-2xl p-5 '>
            <div>
                <input type="text" />
            </div>
            <div className='flex justify-between w-full px-2'>
                <div><select name="" id=""></select></div>
                <div><FaMicrophone /></div>
            </div>
        </div>
        <div></div>
    </div>
  )
}
