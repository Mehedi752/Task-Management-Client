import React from 'react'
import useAuth from '../hooks/useAuth'
import useAxiosPublic from '../hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SharedTasks from './SharedTasks'

const TaskManagement = () => {
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()

  const { data: currentUserTasks = [], refetch } = useQuery({
    queryKey: ['currentUserTasks', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user?.email}`)
      return res.data
    }
  })
  console.log(currentUserTasks)

  const toDoTasks = currentUserTasks.filter(task => task.category === 'to-do')
  const inProgressTasks = currentUserTasks.filter(task => task.category === 'in-progress')
  const doneTasks = currentUserTasks.filter(task => task.category === 'done')

  refetch();

  

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`bg-gray-300 w-full lg:px-[150px] py-[50px] lg:h-screen px-6`}
      >
        {/* Task Categories */}
        <div className='flex flex-col lg:flex-row gap-10 lg:justify-between  p-4 text-white'>
          <div className='lg:w-[30%]'>
            <h1 className='text-2xl bg-red-600 py-3 px-12 rounded-md'>
              To-Do({toDoTasks.length})
            </h1>
            <SharedTasks
              tasks={toDoTasks}
              taskCategory='to-do'
              refetch={refetch}
            ></SharedTasks>
          </div>
          <div className='lg:w-[30%]'>
            <h1 className=' text-2xl bg-[#1e3a8a] py-3 px-12 rounded-md'>
              In Progress({inProgressTasks.length})
            </h1>
            <SharedTasks
              tasks={inProgressTasks}
              taskCategory='in-progress'
              refetch={refetch}
            ></SharedTasks>
          </div>
          <div className='lg:w-[30%]'>
            <h1 className='text-2xl bg-green-600 py-3 px-12 rounded-m'>
              Done({doneTasks.length})
            </h1>
            <SharedTasks
              tasks={doneTasks}
              taskCategory='done'
              refetch={refetch}
            ></SharedTasks>
          </div>
        </div>
      </div>
   </DndProvider>
  )
}

export default TaskManagement
