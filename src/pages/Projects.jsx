import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    { 
      title: 'Portfolio Website', 
      image: `${import.meta.env.BASE_URL}images/project1-dark.png`, 
      description: 'This portfolio website built with React, Tailwind CSS and Framer Motion features a dark theme, smooth animations, and multi-page layout.', 
      dates: '2025', 
      tags: ['React','Tailwind','Framer'] 
    },
    { 
      title: 'To-Do List App', 
      image: `${import.meta.env.BASE_URL}images/project2-dark.png`, 
      description: 'A responsive To-Do app built with React that uses localStorage to persist tasks and supports add/edit/delete operations.', 
      dates: '2024', 
      tags: ['React','JavaScript'] 
    },
    { 
      title: 'Weather App', 
      image: `${import.meta.env.BASE_URL}images/project3-dark.png`, 
      description: 'Fetches weather data from OpenWeather API and displays forecasts with icons and responsive UI.', 
      dates: '2024', 
      tags: ['API','JavaScript'] 
    },
    { 
      title: 'CLI Calculator (Python)', 
      image: `${import.meta.env.BASE_URL}images/project4-dark.png`, 
      description: 'A command-line calculator written in Python supporting arithmetic operations and expression parsing.', 
      dates: '2023', 
      tags: ['Python','CLI'] 
    },
    { 
      title: 'blockChain-based File Tracking System', 
      image: `${import.meta.env.BASE_URL}images/project5-dark.png`, 
      description: 'A blockchain-inspired system to track files securely, ensuring integrity, versioning, and tamper-proof history.', 
      dates: '2024', 
      tags: ['Blockchain','File Tracking','Python'] 
    },
  ]

  return (
    <section className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
