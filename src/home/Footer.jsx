import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <footer className='bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-5 lg:px-0 text-white py-16'>
      <div className='container mx-auto italic flex flex-col lg:flex-row gap-10 lg:justify-between'>
        {/* Company Info */}
        <div className='lg:w-[30%]'>
          <h2 className='text-3xl font-bold mb-4'>TaskMatrix</h2>
          <p className='text-gray-300 text-lg'>
            The ultimate solution for managing your tasks effortlessly.
            Organize, prioritize, and stay productive — anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div className='lg:w-[30%] flex flex-col lg:items-center'>
          <h3 className='text-2xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-6 text-gray-300 text-lg'>
            <Link to='/'>
              <li className='hover:text-red-600 transition duration-300 cursor-pointer mb-2'>
                Home
              </li>
            </Link>
            <Link to='/about'>
              <li className='hover:text-red-600 transition duration-300 cursor-pointer mb-2'>
                About Us
              </li>
            </Link>
            <Link to='/contact'>
              <li className='hover:text-red-600 transition duration-300 cursor-pointer'>
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        {/* Social Links */}
        <div className='lg:w-[30%] flex flex-col lg:items-center'>
          <h3 className='mb-4 text-2xl font-semibold'>Social Links</h3>
          <div className='flex flex-col justify-center md:justify-start gap-5 text-2xl'>
            <div className='flex items-center gap-2'>
              <FaFacebookF className='hover:text-red-600 cursor-pointer text-2xl font-semibold transition duration-300' />
              <h3 className='text-lg'>Facebook</h3>
            </div>
            <div className='flex items-center gap-2'>
              <FaTwitter className='hover:text-red-600 cursor-pointer text-2xl font-semibold transition duration-300' />
              <h3 className='text-lg'>Twitter</h3>
            </div>
            <div className='flex items-center gap-2'>
              <FaLinkedinIn className='hover:text-red-600 cursor-pointer text-2xl font-semibold transition duration-300' />
              <h3 className='text-lg'>LinkedIn</h3>
            </div>
            <div className='flex items-center gap-2'>
              <FaGithub className='hover:text-red-600 cursor-pointer text-2xl font-semibold transition duration-300' />
              <h3 className='text-lg'>Github</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 mt-12 pt-6 text-center text-gray-400'>
        © {new Date().getFullYear()} TaskMaster Pro. All rights reserved.
      </div>
    </footer>
  )
}
