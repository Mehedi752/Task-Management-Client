import React from 'react'
import useAuth from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import useAxiosPublic from '../hooks/useAxiosPublic'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const UpdateTask = () => {
    const { user, loading } = useAuth()

    if(loading) return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg text-info min-h-screen"></span></div>;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { id } = useParams()

    const { data: currentUserTasks = [], refetch } = useQuery({
        queryKey: ['currentUserTasks', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks/${user?.email}`)
            return res.data
        }
    })
    console.log(currentUserTasks)
    
    const updateTask = currentUserTasks.filter(task => task._id === id)
    console.log(updateTask)

    const onSubmit = data => {
        const taskData = {
            ...data,
            timestamp: new Date(),
        }

        //Save product data to the database
        axiosPublic
            .put(`/tasks/${id}`, taskData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task Updated',
                        text: 'Task updated successfully'
                    })
                }
                navigate('/tasks/task-management')
            })
            .catch(error => console.error(error))
     }

    return (
        <div className='w-full bg-gray-100 h-screen px-6 lg:px-[150px] py-[50px] text-black'>
            <h1 className='text-3xl font-bold pt-12'>Update Task</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white shadow-md p-6 rounded-lg max-w-xl mt-6'
            >
                {/* Product Name */}
                <div className='mb-6'>
                    <label htmlFor='name' className='block font-medium mb-1'>
                        Task Title
                    </label>
                    <input
                        type='text'
                        id='title'
                        defaultValue={updateTask[0].title}
                        {...register('title', { required: 'Task title is required' })}
                        className={`input bg-white border-black input-bordered w-full ${errors.title ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.title && (
                        <p className='text-red-500 text-sm'>{errors.title.message}</p>
                    )}
                </div>

                {/* Task Category */}
                <div className='mb-6'>
                    <label htmlFor='category' className='block font-medium mb-1'>
                        Task Category
                    </label>
                    <select
                        id='category'
                        defaultValue={updateTask[0].category}
                        {...register('category', { required: 'Category is required' })}
                        className={`select bg-white border-black select-bordered w-full ${errors.category ? 'border-red-500' : ''
                            }`}
                    >
                        <option value=''>Select Category</option>
                        <option value='To-Do'>To-Do</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Done'>Done</option>
                    </select>
                    {errors.category && (
                        <p className='text-red-500 text-sm'>{errors.category.message}</p>
                    )}
                </div>

                {/* Description */}
                <div className='mb-6'>
                    <label htmlFor='description' className='block font-medium mb-1'>
                        Description
                    </label>
                    <textarea
                        id='description'
                        {...register('description', {
                            required: 'Description is required'
                        })}
                        defaultValue={updateTask[0].description}
                        className={`textarea bg-white border-black textarea-bordered w-full ${errors.description ? 'border-red-500' : ''
                            }`}
                        rows='4'
                    ></textarea>
                    {errors.description && (
                        <p className='text-red-500 text-sm'>{errors.description.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    className='btn btn-primary bg-indigo-600 w-full text-white'
                >
                    Update Task
                </button>
            </form>
        </div>
    )
}

export default UpdateTask
