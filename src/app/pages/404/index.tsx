import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold text-center mb-4'>404</h1>
      <div className='flex space-x-4'>
        <Link to='/' className='bg-blue-500 text-white px-4 py-2 rounded'>
          Home
        </Link>
        <Link
          to='/login'
          className='bg-white text-blue-500 px-4 py-2 rounded border border-blue-500'
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default NotFound
