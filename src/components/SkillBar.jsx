import { motion } from 'framer-motion'

export default function SkillBar({name, percent}){
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-400">{percent}%</span>
      </div>
      <div className="skill-track">
        <motion.div initial={{width:0}} animate={{width: percent+'%'}} className="skill-fill" />
      </div>
    </div>
  )
}
