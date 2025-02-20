import Swal from 'sweetalert2'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import useAxiosPublic from '../hooks/useAxiosPublic'


const Login = () => {
  const { signInWithGoogle, setUser } = useAuth()
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(res => {
        setUser(res.user)
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          userId: res.user.uid
        }

        axiosPublic.post('/users', userInfo)
        .then(res => {
          console.log(res)
          if (res.data.insertedId) {
            Swal.fire({
              icon: 'success',
              title: 'User Signed In',
              text: 'User signed in successfully'
            })
          }
        })

        navigate('/tasks')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <button onClick={handleGoogleSignIn} className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
