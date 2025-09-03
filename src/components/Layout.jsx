import Sidebar from './Sidebar'
import { motion } from 'framer-motion'

export default function Layout({children}){
  return (
    <div className="min-h-screen">
      <div className="container flex gap-8">
        <Sidebar />
        <motion.main initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="flex-1">
          {children}
        </motion.main>
      </div>
    </div>
  )
}
