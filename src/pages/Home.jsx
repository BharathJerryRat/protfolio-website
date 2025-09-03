import { motion } from 'framer-motion'

export default function Home(){
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">


        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Bharath S</span>
          </h1>
          <p className="mt-4 text-muted max-w-xl">
            Enthusiastic and detail-oriented Computer Science graduate with a strong foundation in Python, 
            HTML, CSS, JavaScript, and Data Science. Passionate about full-stack development and building data-driven solutions.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/projects" className="btn-gradient">View Projects</a>
            <a href="/contact" className="btn-gradient bg-white text-primary" style={{boxShadow:'none'}}>Contact Me</a>
          </div>
        </div>

        {/* Big circle image (only once, not twice!) */}
        <motion.div 
          initial={{scale:0}} 
          animate={{scale:1}} 
          transition={{delay:0.2}} 
          className="flex justify-center"
        >
          <img 
            src="/images/profile.JPG"   // ✅ ensure case matches file name exactly
            className="w-72 h-72 rounded-full shadow-2xl border-8 border-white/10 object-cover object-[center_10%]" 
            alt="profile" 
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
