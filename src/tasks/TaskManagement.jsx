import React from 'react'
import ToDo from './ToDo'
import Progress from './Progress'
import Done from './Done'

const TaskManagement = () => {
  
  return (
    <div className='bg-gray-100 w-full lg:px-[150px] py-[50px]'>
      {/* Task Categories */}
      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between  p-4 text-white'>
        <div className=''>
          <h1 className='text-2xl bg-red-600 py-3 px-12 rounded-md'>To-Do</h1>
          <ToDo></ToDo>
        </div>
        <div className=''>
          <h1 className=' text-2xl bg-blue-600 py-3 px-12 rounded-md'>In Progress</h1>
          <Progress></Progress>
        </div>
        <div className='d'>
          <h1 className='text-2xl bg-green-600 py-3 px-12 rounded-m'>Done</h1>
          <Done></Done>
        </div>
      </div>
    </div>
  )
}

export default TaskManagement
