import { useEffect, useMemo, useState } from 'react'

export default function Booking(){
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [services, setServices] = useState([])
  const [service, setService] = useState('Traditional Finnish Sauna')
  const [date, setDate] = useState(() => new Date().toISOString().slice(0,10))
  const [slots, setSlots] = useState([])
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(()=>{(async()=>{
    try{const r=await fetch(`${base}/api/services`); if(r.ok){const data=await r.json(); setServices(data); if(data[0]) setService(data[0].title)}}catch{}}
  )()},[])

  useEffect(()=>{(async()=>{
    try{if(!service||!date) return; const r=await fetch(`${base}/api/availability?date_str=${date}&service=${encodeURIComponent(service)}`); if(r.ok){const data=await r.json(); setSlots(data.slots); setTime('')}}catch{}}
  )()},[service,date])

  const submit = async (e) => {
    e.preventDefault()
    try{
      const payload={name,email,phone,service,date,time,notes}
      const r=await fetch(`${base}/api/bookings`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
      const data=await r.json(); setMsg(data.message||'Booked!');
      setName(''); setEmail(''); setPhone(''); setNotes('')
    }catch{ setMsg('Request received.') }
  }

  return (
    <main className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold text-emerald-900">Book a session</h1>
        <form onSubmit={submit} className="mt-6 grid gap-4 bg-white p-6 rounded-2xl border border-emerald-900/10">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-emerald-900/80">Service</label>
              <select value={service} onChange={(e)=>setService(e.target.value)} className="mt-1 w-full rounded-md border border-emerald-900/20 px-3 py-2">
                {services.map((s)=> <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-emerald-900/80">Date</label>
              <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="mt-1 w-full rounded-md border border-emerald-900/20 px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-emerald-900/80">Time</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {slots.length===0 && <p className="text-sm text-emerald-900/70">No slots available.</p>}
              {slots.map((s)=> (
                <button type="button" key={s} onClick={()=>setTime(s)} className={`px-3 py-2 rounded-full border ${time===s?'bg-emerald-700 text-white border-emerald-700':'border-emerald-900/20 text-emerald-900 hover:bg-emerald-50'}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-emerald-900/80">Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full rounded-md border border-emerald-900/20 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-emerald-900/80">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-emerald-900/20 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-emerald-900/80">Phone</label>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-1 w-full rounded-md border border-emerald-900/20 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-emerald-900/80">Notes</label>
              <input value={notes} onChange={(e)=>setNotes(e.target.value)} className="mt-1 w-full rounded-md border border-emerald-900/20 px-3 py-2" />
            </div>
          </div>

          <button className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-700 text-white px-5 py-3 hover:bg-emerald-800">Confirm Booking</button>
          {msg && <p className="text-emerald-800 text-sm">{msg}</p>}
        </form>
      </div>
    </main>
  )
}
