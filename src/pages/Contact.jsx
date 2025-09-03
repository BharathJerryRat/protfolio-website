import { useState } from 'react'
import { openMailto } from '../utils/mailTo'

export default function Contact(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    openMailto({name,email,message})
  }

  return (
    <section className="min-h-screen p-6">
      <div className="card max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-muted mb-4">Want to work together or have a question? Send me a message.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 bg-surface rounded text-text border border-white/6" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <input className="w-full p-3 bg-surface rounded text-text border border-white/6" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" />
          <textarea className="w-full p-3 bg-surface rounded text-text border border-white/6" placeholder="Your message" value={message} onChange={(e)=>setMessage(e.target.value)} required rows="6" />
          <div className="flex gap-3">
            <button type="submit" className="btn-gradient">Send Message</button>
            <a className="btn-gradient bg-white text-primary" href="mailto:bharathsenthil567@gmail.com">Email Direct</a>
          </div>
        </form>
      </div>
    </section>
  )
}
