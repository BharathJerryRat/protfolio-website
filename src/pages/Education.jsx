import { motion } from 'framer-motion'

export default function Education(){
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="min-h-screen p-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="space-y-4 text-muted">
          <li>
            <h3 className="font-semibold">St. Peter’s Institute of Higher Education and Research</h3>
            <p>B.E. in Computer Science and Engineering — 2024 (CGPA: 8.53)</p>
          </li>
          <li>
            <h3 className="font-semibold">Priyadharshini Polytechnic College</h3>
            <p>Diploma in Mechanical Engineering — Completed 2020 (78%)</p>
          </li>
          <li>
            <h3 className="font-semibold">St. Francis Desales Matriculation Hr. Sec School</h3>
            <p>SSLC — 60.6%</p>
          </li>
        </ul>
      </div>
    </motion.section>
  )
}
