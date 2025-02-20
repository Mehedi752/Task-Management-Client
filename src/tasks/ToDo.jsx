import useAuth from '../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../hooks/useAxiosPublic'

const ToDo = () => {
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

    const toDoTasks = currentUserTasks.filter(task => task.category === 'To-Do')
    console.log(toDoTasks)

    return (
        <div className='pt-6'>
            <div className='flex flex-col gap-6'>
                {toDoTasks.map(task => (
                    <div key={task._id} className='bg-white text-black p-8 rounded-md shadow-md'>
                        <h1 className='text-xl font-semibold'>{task.title}</h1>
                        <p className='text-sm'>
                            {new Date(task.timestamp).toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </p>
                        <p className='text-sm mt-4'>{task.description}</p>

                        <div className='flex gap-4 mt-4'>
                            <button className='bg-green-600 text-white px-4 py-2 rounded'>
                                Edit
                            </button>
                            <button className='bg-red-600 text-white px-4 py-2 rounded'>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToDo
