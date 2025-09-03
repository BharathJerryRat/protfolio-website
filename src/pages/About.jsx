import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.section 
      initial={{opacity:0, y:8}} 
      animate={{opacity:1, y:0}} 
      className="min-h-screen p-6"
    >
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>

        <p className="text-muted mb-4">
          I am an enthusiastic Computer Science graduate passionate about technology and problem-solving. 
          My interests lie in web development, Python programming, and data structures. I enjoy building creative 
          solutions that combine functionality with elegant design.
        </p>

        <p className="text-muted mb-4">
          Beyond coding, I am curious about how systems work at their core. I love exploring algorithms, OOP principles, 
          and problem-solving challenges. My ultimate goal is to grow into a full-stack developer capable of delivering 
          impactful digital experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card p-4">
            <h3 className="text-primary font-semibold mb-2">Hobbies</h3>
            <ul className="list-disc ml-5 text-muted">
              <li>Coding & Exploring New Tech</li>
              <li>Photography & Designing</li>
              <li>Reading Tech Blogs</li>
              <li>Playing Chess & Strategy Games</li>
            </ul>
          </div>

          <div className="card p-4">
            <h3 className="text-primary font-semibold mb-2">Strengths</h3>
            <ul className="list-disc ml-5 text-muted">
              <li>Quick Learner</li>
              <li>Problem-Solving Attitude</li>
              <li>Good Team Player</li>
              <li>Creative & Analytical Thinking</li>
            </ul>
          </div>

          <div className="card p-4">
            <h3 className="text-primary font-semibold mb-2">Weaknesses</h3>
            <ul className="list-disc ml-5 text-muted">
              <li>Sometimes Overthinks Problems</li>
              <li>Perfectionist - Spend Extra Time on Small Details</li>
              <li>Still Gaining Confidence in Public Speaking</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
