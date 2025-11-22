import React from 'react'
import { WiMoonAltFirstQuarter } from "react-icons/wi";

export const Navbar = () => {
  return (
    <div className='flex justify-between w-full sticky top-0 '>
      <div>
        <h1 className='text-3xl font-bold font-mono'>PychatsMan</h1>
      </div>
      <div><WiMoonAltFirstQuarter className='text-2xl'/></div>
    </div>
  )
}
