import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/achievements' element={<Achievements/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Layout>
  )
}
