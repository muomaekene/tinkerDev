'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-18">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl"
      >
        I build fast, scalable{' '}
        <span className="text-indigo-500">web apps</span> for startups.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-400 text-lg max-w-xl"
      >
        I help businesses design and implement digital solutions that scale — from dashboards and payment systems to automation tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 flex gap-4"
      >
        <button className="bg-indigo-500 hover:bg-indigo-600 transition px-8 py-4 rounded-xl font-medium glow">
          View Work
        </button>
        <button className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-xl">
          Contact Me
        </button>
      </motion.div>
    </section>
  )
}