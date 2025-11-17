import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="h-[70vh] w-full bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[70vh] flex flex-col items-start justify-center text-white">
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Scandia Sauna
          </motion.h1>
          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.1}} className="mt-4 text-lg md:text-xl max-w-2xl">
            Relax. Rejuvenate. Restore.
          </motion.p>
          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.15}} className="mt-5 max-w-2xl text-white/90">
            Experience the timeless ritual of heat and cold with modern comfort. Clean lines, natural materials, and a calming atmosphere designed for deep rest.
          </motion.p>
          <div className="mt-8 flex items-center gap-3">
            <Link to="/booking" className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-medium">Book Now</Link>
            <Link to="/memberships" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium">View Memberships</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
