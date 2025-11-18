import React from 'react'
import { Navbar } from '../components/Navbar'
import { Homebody } from '../components/Homebody'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='flex flex-col justify-between items-center py-2 w-full h-full'>
      <Navbar />
      <Homebody />
      <Footer />
    </div>
  )
}
