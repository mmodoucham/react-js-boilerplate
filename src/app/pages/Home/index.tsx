import React from 'react'
import { SuperBalls } from '@uiball/loaders'

const Home: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <div>
        <SuperBalls size={100} speed={1} color='black' />
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center'>Home</h1>
      </div>
    </div>
  )
}

export default Home
