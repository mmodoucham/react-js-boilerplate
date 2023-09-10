import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'
import { Link } from 'react-router-dom'
import { PencilIcon, UserIcon } from '@heroicons/react/24/solid'

const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username)
  console.log(username)

  return (
    <header className='bg-blue-500 p-4 text-white flex justify-between items-center'>
      <div>
        <Link to='/' className='text-lg hover:underline'>
          Welcome, {username}
        </Link>
      </div>
      <div>
        <Link to='/login' className='bg-white text-blue-500 px-4 py-2 rounded mr-2'>
          <UserIcon className='w-5 h-5 mr-1 inline-block' />
          Login
        </Link>
        <Link to='/register' className='bg-white text-blue-500 px-4 py-2 rounded'>
          <PencilIcon className='w-5 h-5 mr-1 inline-block' />
          Register
        </Link>
      </div>
    </header>
  )
}

export default Header
