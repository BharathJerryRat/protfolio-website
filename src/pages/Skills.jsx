import SkillBar from '../components/SkillBar'

export default function Skills(){
  return (
    <section className="min-h-screen p-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-primary font-semibold mb-2">Python</h3>
            <ul className="list-disc ml-5 text-muted mb-4">
              <li>Object-Oriented Programming (OOP)</li>
              <li>Data Structures & Algorithms</li>
              <li>File I/O, Modules, Libraries</li>
              <li>Pandas & NumPy (Data Science basics)</li>
            </ul>
            <h3 className="text-primary font-semibold mb-2">Web Development</h3>
            <ul className="list-disc ml-5 text-muted mb-4">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js & Tailwind CSS</li>
              <li>Responsive Design & Accessibility</li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-semibold mb-2">Other Technical</h3>
            <ul className="list-disc ml-5 text-muted mb-4">
              <li>Git & Version Control</li>
              <li>Basic SQL</li>
              <li>IoT basics (sensors, microcontrollers)</li>
            </ul>

            <h3 className="text-primary font-semibold mb-2">Skill Levels</h3>
            <SkillBar name="Python" percent={85} />
            <SkillBar name="HTML & CSS" percent={90} />
            <SkillBar name="JavaScript" percent={75} />
            <SkillBar name="Data Science Basics" percent={65} />
          </div>
        </div>
      </div>
    </section>
  )
}
