import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center font-bold text-xs'>
        <div className='flex gap-4 text-gray-500'>
            <a href="https://ganeshprofolio.vercel.app/">Portfolio</a>
            <a href="https://x.com/ganesh_kondaka">X</a>
            <a href="https://github.com/ganeshkondaka">Github</a>
        </div>
        <div>@ 2025 Ganesh</div>
    </div>
  )
}
