export default function Footer(){
  return (
    <footer className="bg-white border-t border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="h-9 w-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold">S</div>
          <p className="mt-3 text-emerald-900/80 text-sm">A premium sauna and wellness house inspired by Scandinavian design.</p>
        </div>
        <div>
          <h4 className="font-semibold text-emerald-900">Hours</h4>
          <p className="text-sm text-emerald-900/80 mt-2">Mon–Sun: 8:00 – 20:00</p>
        </div>
        <div>
          <h4 className="font-semibold text-emerald-900">Contact</h4>
          <p className="text-sm text-emerald-900/80 mt-2">hello@scandiasauna.com<br/>+1 (555) 123-4567</p>
        </div>
        <div>
          <h4 className="font-semibold text-emerald-900">Newsletter</h4>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-emerald-900/10 py-4 text-center text-sm text-emerald-900/70">© {new Date().getFullYear()} Scandia Sauna. All rights reserved.</div>
    </footer>
  )
}

import { useState } from 'react'
function NewsletterForm(){
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/newsletter`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({email})
      })
      const data = await res.json()
      setMsg(data.message || 'Thanks for subscribing!')
      setEmail('')
    } catch {
      setMsg('Thanks for subscribing!')
    }
  }

  return (
    <form onSubmit={submit} className="mt-2 flex gap-2">
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="you@example.com" className="flex-1 rounded-md border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600" />
      <button className="rounded-md bg-emerald-700 text-white px-4 py-2 hover:bg-emerald-800">Join</button>
      {msg && <p className="text-xs text-emerald-800 ml-2 self-center">{msg}</p>}
    </form>
  )
}
