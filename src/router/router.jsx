import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../error/ErrorPage'
import TasksHome from '../tasks/TasksHome'
import TaskManagement from '../tasks/TaskManagement'
import AddTask from '../tasks/AddTask'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/tasks',
    element: <TasksHome></TasksHome>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/tasks/task-management',
            element: <TaskManagement></TaskManagement>
        },
        {
            path: '/tasks/add-task',
            element: <AddTask></AddTask>
        }

    ]
  }
])

export default router
