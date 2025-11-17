export default function About(){
  return (
    <main className="pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60" alt="Sauna wood and stones" className="rounded-2xl shadow-sm" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-emerald-900">Our Story</h1>
          <p className="mt-4 text-emerald-900/80">Founded with a love for Scandinavian design and restorative rituals, our space blends natural materials, soft light, and quiet to create a sanctuary in the city.</p>
          <h2 className="mt-8 text-xl font-semibold text-emerald-900">Mission</h2>
          <p className="mt-2 text-emerald-900/80">To help people feel calm, clear, and well—one session at a time.</p>
          <h2 className="mt-8 text-xl font-semibold text-emerald-900">The Team</h2>
          <TeamGrid />
        </div>
      </div>
    </main>
  )
}

import { useEffect, useState } from 'react'
function TeamGrid(){
  const [team, setTeam] = useState([])
  useEffect(()=>{(async()=>{try{const base=import.meta.env.VITE_BACKEND_URL||'http://localhost:8000'; const r=await fetch(`${base}/api/team`); if(r.ok) setTeam(await r.json())}catch{}})()},[])
  return (
    <div className="mt-3 grid sm:grid-cols-2 gap-4">
      {team.map((t)=> (
        <div key={t.name} className="rounded-xl bg-white p-4 border border-emerald-900/10">
          <div className="font-medium text-emerald-900">{t.name}</div>
          <div className="text-sm text-emerald-700">{t.role}</div>
          <p className="text-sm text-emerald-900/80 mt-2">{t.bio}</p>
        </div>
      ))}
    </div>
  )
}
