import { useEffect, useState } from 'react'

export default function Services(){
  const [services, setServices] = useState([])
  useEffect(()=>{(async()=>{
    try{const base=import.meta.env.VITE_BACKEND_URL||'http://localhost:8000';
      const r=await fetch(`${base}/api/services`); if(r.ok) setServices(await r.json())
    }catch{}}
  )()},[])

  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold text-emerald-900">Services</h1>
        <p className="mt-2 text-emerald-900/80 max-w-2xl">Explore our heat therapies, thoughtfully designed for restoration and recovery.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s)=> (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-900/10">
              <h3 className="font-semibold text-emerald-900">{s.title}</h3>
              <p className="mt-2 text-emerald-900/80">{s.description}</p>
              <p className="mt-4 text-emerald-900">Duration: {s.duration_minutes} min</p>
              <p className="text-emerald-900">From ${s.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
