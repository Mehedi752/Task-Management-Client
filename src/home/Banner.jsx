import { motion } from 'framer-motion'
import bannerImg from '../assets/taskBanner.jpg'
import { Link } from 'react-router-dom'

export default function Banner () {
  return (
    <section className='bg-[#1e3a8a] py-20 px-6 text-white'>
      <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'>
        {/* Text Section */}
        <div className='lg:w-1/2 text-center md:text-left lg:pr-[50px] space-y-6'>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-5xl font-bold italic leading-tight'
          >
            Organize, Prioritize, and{' '}
            <span className='text-white-600'>Achieve</span> Your Goals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='text-lg md:text-xl leading-relaxed italic'
          >
            Stay ahead with a powerful, flexible, and intuitive task management
            tool. Built for developers, students, freelancers, entrepreneurs and
            corporate professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='flex justify-center md:justify-start gap-4'
          >
            <Link to='/tasks/task-management'>
              <button className='border italic border-white text-white rounded-full px-8 py-3 text-lg hover:bg-red-600  hover:border-none transition-all duration-300'>
                Get Started
              </button>
            </Link>
            <Link to='/about'>
              <button className='border italic border-white text-white rounded-full px-8 py-3 text-lg hover:bg-red-600  hover:border-none transition-all duration-300'>
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <img
            src={bannerImg}
            alt='Task Management Banner'
            className='w-full rounded-3xl shadow-2xl'
          />
        </motion.div>
      </div>
    </section>
  )
}
