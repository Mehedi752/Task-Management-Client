import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="bg-gray-300 py-24 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-800 drop-shadow-md"
        >
          Why <span className="text-red-600">TaskMatrix?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-black font-base text-lg md:text-xl mb-12 leading-relaxed"
        >
          Boost your productivity with <span className="text-red-600 font-semibold">TaskMatrix</span>, the ultimate solution for seamless task management.
          Tailored for developers, students, freelancers, and professionals, our platform revolutionizes how you work, plan, and achieve success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
        >
          <div className="space-y-6">
            <div className="h-[130px] flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-lg">
                <strong>Smart Task Prioritization :</strong> Streamline your tasks with intuitive workflows designed for efficiency.
              </p>
            </div>
            <div className="h-[130px] flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-lg">
                <strong>Real-time Collaboration :</strong> Stay connected with instant updates and notifications for teams.
              </p>
            </div>
          </div>
          <div className=" space-y-6">
            <div className="h-[130px] flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-lg">
                <strong>Seamless Scheduling :</strong> Sync calendars effortlessly and stay ahead of your plans.
              </p>
            </div>
            <div className="h-[130px] flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-lg">
                <strong>Productivity Insights :</strong> Maximize output with smart reminders and insightful analytics.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-14 flex justify-center gap-6"
        >
          <Link to={'/tasks/task-management'}>
          <button className="bg-red-600 hover:bg-red-500 transition duration-300 rounded-2xl px-10 py-4 text-lg text-white font-semibold shadow-lg hover:shadow-xl">
            Let’s Explore 🚀
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
