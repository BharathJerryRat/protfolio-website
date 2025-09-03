import { motion } from 'framer-motion'

export default function ProjectCard({title, image, description, dates, tags}){
  return (
    <motion.div whileHover={{scale:1.03, y:-6}} className="bg-surface rounded-2xl overflow-hidden w-full md:w-80">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-primary">{title}</h4>
        <p className="text-sm text-muted mt-2">{description}</p>
        <p className="text-xs text-gray-400 mt-3">{dates}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags && tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded">{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}
