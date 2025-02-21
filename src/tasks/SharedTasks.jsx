import { Draggable, Droppable } from 'react-beautiful-dnd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import SharedSingleTask from './SharedSingleTask';
import { axiosPublic } from '../hooks/useAxiosPublic';

const SharedTasks = ({ tasks, taskCategory, refetch }) => {
    const navigate = useNavigate();


    const [{ isOver }, drop] = useDrop(() => ({
       accept: 'task',
         drop: (item) => moveTaskTocategory(item._id),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            })
    }))

    let moveTaskTocategory = (taskId) => {
        const newCategory = {
            category: taskCategory
        }
        axiosPublic.put(`/tasks/moved/${taskId}`, newCategory)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task Moved',
                        text: `task moved to ${taskCategory} category`
                    })
                }
                refetch();
            })
            .catch(error => console.error(error))

    }


    return (
        <div className="pt-6" ref={drop}>
            <div className="flex flex-col gap-6 h-[600px] overflow-y-scroll">
                   {tasks.map(task=> <SharedSingleTask 
                   key={task._id} 
                   task={task} 
                   refetch={refetch}
                   />)}
            </div>
        </div>
    )}
 
export default SharedTasks;
