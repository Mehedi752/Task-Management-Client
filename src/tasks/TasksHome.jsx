import React, { use } from 'react'
import useAuth from '../hooks/useAuth'
import { Link, Outlet } from 'react-router-dom'
import { FaTasks } from 'react-icons/fa'
import { MdAddTask } from 'react-icons/md'

const TasksHome = () => {
  const { user } = useAuth()
  console.log(user)

  return (
    <div className='flex flex-col lg:flex-row justify-between'>
      <div className='bg-indigo-600 lg:w-1/4 lg:pl-[100px]'>
        {/* <h1 className='text-white text-4xl p-4 text-center'>Tasks Manager</h1> */}
        <div className='flex justify-center items-center pt-12'>
          <label tabIndex={0} className='avatar hover:opacity-90'>
            <div className='w-full h-full rounded-full  ring ring-neutral ring-offset-base-100 ring-offset-2'>
              <img
                src={user?.photoURL || '/default-avatar.png'}
                alt='User Avatar'
                className=''
              />
            </div>
          </label>
        </div>
        <h3 className='text-2xl text-white text-center'>{user?.displayName}</h3>

        {/* Tasks Dashboard Links */}
        <div className='pt-18 pl-12 pb-12'>
          <Link
            to={'/tasks/task-management'}
            className='flex items-center  gap-1 text-white'
          >
            <FaTasks /> Task Management
          </Link>

          <Link to={'/tasks/add-task'} className='flex items-center gap-1 mt-2 text-white'>
            <MdAddTask /> Add Task
          </Link>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  )
}

export default TasksHome
