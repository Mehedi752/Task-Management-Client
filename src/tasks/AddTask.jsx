import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../hooks/useAuth'
import useAxiosPublic from '../hooks/useAxiosPublic'

const AddTask = () => {
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const onSubmit = data => {
        const taskData = {
            ...data,
            timestamp: new Date(),
            name: user.displayName,
            email: user.email,
        }

        //Save product data to the database
        axiosPublic
            .post('/tasks', taskData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task Added',
                        text: 'Task added successfully'
                    })
                }
                navigate('/tasks/task-management')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-full bg-gray-100 h-screen px-6 lg:px-[150px] py-[50px]'>
            <h1 className='text-3xl font-bold  mb-6'>Add A New Task</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white shadow-md p-6 rounded-lg max-w-xl '
            >
                {/* Product Name */}
                <div className='mb-6'>
                    <label htmlFor='name' className='block font-medium mb-1'>
                        Task Title
                    </label>
                    <input
                        type='text'
                        id='title'
                        placeholder='Task Title'
                        {...register('title', { required: 'Task title is required' })}
                        className={`input input-bordered w-full ${errors.title ? 'border-red-500' : ''
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
                        {...register('category', { required: 'Category is required' })}
                        className={`select select-bordered w-full ${errors.category ? 'border-red-500' : ''
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
                        placeholder='Task Description'
                        className={`textarea textarea-bordered w-full ${errors.description ? 'border-red-500' : ''
                            }`}
                        rows='4'
                    ></textarea>
                    {errors.description && (
                        <p className='text-red-500 text-sm'>{errors.description.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button type='submit' className='btn btn-primary bg-indigo-600 w-full text-white'>
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default AddTask
