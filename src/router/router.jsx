import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../error/ErrorPage'
import TasksHome from '../tasks/TasksHome'
import TaskManagement from '../tasks/TaskManagement'
import AddTask from '../tasks/AddTask'
import UpdateTask from '../tasks/UpdateTask'
import PrivateRoute from '../provider/PrivateRoute'
import Contact from '../contact/Contact'
import About from '../about/About'
import Home from '../home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '/tasks',
        element: <PrivateRoute><TasksHome></TasksHome></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/tasks/task-management',
                element: <PrivateRoute><TaskManagement></TaskManagement></PrivateRoute>
            },
            {
                path: '/tasks/add-task',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/tasks/update-task/:id',
                element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>
            }

        ]
    }
])

export default router
