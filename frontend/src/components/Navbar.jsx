import React from 'react'
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { Store } from '../hooks/useStore';
export const Navbar = () => {
  const {theme,changeTheme} = Store();
  return (
    <div className='flex justify-between w-full sticky top-0 '>
      <div>
        <h1 className='text-3xl font-bold font-mono'>PychatsMan</h1>
      </div>
      <button onClick={changeTheme}>
        <WiMoonAltFirstQuarter className='text-2xl'/>
      </button>
    </div>
  )
}
