import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logoImg from '../assets/taskLogo.png';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser, signInWithGoogle, setUser } = useAuth();
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

                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Theme Toggler.
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    })

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    const handleLogout = () => {
        signOutUser()
    }



    return (
        <div className='bg-gradient-to-r from-[#0f172a] to-[#1e293b]'>
            <div className="navbar container mx-auto flex items-center justify-between py-4">
                <div className='flex items-center gap-2'>
                    <img src={logoImg} alt='Logo' className='w-10 h-10 mr-2' />
                    <h3 className='text-white text-2xl hidden lg:block'>TaskMatrix</h3>
                </div>

                <div className='flex items-center gap-2 '>
                    <ul className='menu menu-horizontal px-1 text-base text-white'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='hidden lg:block'>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li className='hidden lg:block'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        {user && <li className='hidden lg:block'>
                            <Link to='/tasks/task-management'>Dashboard</Link>
                        </li>}
                    </ul>
                </div>

                <div className='text-white'>
                    <label className='flex cursor-pointer gap-2'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <circle cx='12' cy='12' r='5' />
                            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                        </svg>
                        <input
                            type='checkbox'
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                            className='toggle theme-controller text-white'
                        />
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                        </svg>
                    </label>
                </div>

                <div className='flex items-center'>
                    {!user ? (
                        <li className='list-none'>
                            <button onClick={handleGoogleSignIn}
                                className='btn bg-blue-600 border-none px-4 py-2 text-white rounded-md hover:bg-primary-focus'
                            >
                                Login
                            </button>
                        </li>
                    ) : (
                        <div className='dropdown dropdown-end'>
                            {/* Avatar Button */}
                            <label
                                tabIndex={0}
                                className='btn btn-ghost btn-circle avatar hover:opacity-90'
                            >
                                <div className='w-10 h-10 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2'>
                                    <img
                                        src={user.photoURL || '/default-avatar.png'}
                                        alt='User Avatar'
                                        className='object-cover'
                                    />
                                </div>
                            </label>

                            {/* Dropdown Menu */}
                            <ul
                                tabIndex={0}
                                className='mt-3 p-4 shadow-lg menu menu-compact dropdown-content bg-white rounded-box w-60 space-y-2'
                            >
                                {/* User Name */}
                                <li className='text-sm font-semibold text-gray-100'>
                                    <span className='block px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800'>
                                        {user.displayName || 'User'}
                                    </span>
                                </li>

                                {/* Dashboard Link */}
                                {
                                    user && <li className='lg:hidden'>
                                        <Link
                                            to='/tasks/task-management'
                                            className='block px-4 py-2 text-gray-600 rounded-md hover:bg-primary hover:text-white transition'
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                }

                                {/* Products Route */}
                                <li className='lg:hidden'>
                                    <Link
                                        to='/about'
                                        className='block px-4 py-2 text-gray-600 rounded-md hover:bg-primary hover:text-white transition'
                                    >
                                        About
                                    </Link>
                                </li>

                                {/* About Us Route */}
                                <li className='lg:hidden'>
                                    <Link
                                        to='/contact'
                                        className='block px-4 py-2 text-gray-600 rounded-md hover:bg-primary hover:text-white transition'
                                    >
                                        Contact
                                    </Link>
                                </li>


                                {/* Logout Button */}
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className='block w-full px-4 py-2 text-left text-gray-600 rounded-md hover:bg-red-500 hover:text-white transition'
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Navbar;