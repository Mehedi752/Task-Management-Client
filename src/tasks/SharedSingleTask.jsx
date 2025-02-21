import React from 'react'
import { useDrag } from 'react-dnd';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SharedSingleTask = ({ task, refetch }) => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/tasks/update-task/${id}`);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
                            refetch();
                        }
                    })
            }
        });
    };

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: task,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))


    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}
            className='bg-white text-black p-8 rounded-md shadow-md'>
            <h1 className='text-xl font-semibold'>{task.title}</h1>
            <p className='text-sm'>
                {new Date(task.timestamp).toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}
            </p>
            <p className='text-sm mt-4'>{task.description}</p>
            <div className='flex gap-4 mt-4'>
                <button
                    onClick={() => handleUpdate(task._id)}
                    className='bg-green-600 text-white px-4 py-2 rounded'
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(task._id)}
                    className='bg-red-600 text-white px-4 py-2 rounded'
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default SharedSingleTask
