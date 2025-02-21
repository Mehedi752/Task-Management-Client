import { motion } from 'framer-motion';
import { form } from 'framer-motion/client';
import Swal from 'sweetalert2';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'We will get back to you shortly.',
            confirmButtonText: 'Close',
            confirmButtonColor: '#f87171',
        });
        form.reset();
    };
  return (
    <section className="bg-gray-300 py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 drop-shadow-md"
        >
          Get in <span className="text-red-600">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 mb-12 text-center"
        >
          Have questions, feedback, something want to say or just want to say hello? Drop a message and we’ll get back to you shortly.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4  bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-500 transition duration-300 rounded-lg px-10 py-4 text-lg text-white font-semibold shadow-lg hover:shadow-xl"
          >
            Send Message ✉️
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
