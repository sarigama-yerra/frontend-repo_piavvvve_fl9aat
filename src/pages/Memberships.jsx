import { useEffect, useState } from 'react'

export default function Memberships(){
  const [items, setItems] = useState([])
  useEffect(()=>{(async()=>{
    try{const base=import.meta.env.VITE_BACKEND_URL||'http://localhost:8000';
      const r=await fetch(`${base}/api/memberships`); if(r.ok) setItems(await r.json())
    }catch{}}
  )()},[])

  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold text-emerald-900">Memberships & Packages</h1>
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-sm border border-emerald-900/10">
            <thead className="bg-emerald-50 text-emerald-900/70">
              <tr>
                <th className="text-left p-4">Tier</th>
                <th className="text-left p-4">Monthly</th>
                <th className="text-left p-4">Sessions</th>
                <th className="text-left p-4">Perks</th>
              </tr>
            </thead>
            <tbody>
              {items.map((m)=> (
                <tr key={m.name} className="border-t border-emerald-900/10">
                  <td className="p-4 font-medium text-emerald-900">{m.name}</td>
                  <td className="p-4 text-emerald-900">${m.price_monthly.toFixed(2)}</td>
                  <td className="p-4 text-emerald-900">{m.sessions_per_month}/mo</td>
                  <td className="p-4 text-emerald-900/80">{m.perks.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
