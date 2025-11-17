import { useState } from 'react'

export default function Contact(){
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [phone,setPhone]=useState(''); const [message,setMessage]=useState(''); const [msg,setMsg]=useState('')
  const submit=async(e)=>{e.preventDefault(); try{const r=await fetch(`${base}/api/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,phone,message})}); const d=await r.json(); setMsg(d.message||'Thanks!'); setName('');setEmail('');setPhone('');setMessage('')}catch{setMsg('Thanks!')}}
  return (
    <main className="pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-semibold text-emerald-900">Contact</h1>
          <p className="mt-2 text-emerald-900/80">We'd love to hear from you. Reach us by form, phone, or email.</p>
          <div className="mt-6 text-emerald-900/80 text-sm">
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: hello@scandiasauna.com</p>
            <p>Hours: Mon–Sun 8:00 – 20:00</p>
          </div>
          <div className="mt-6">
            <iframe title="map" className="w-full h-60 rounded-2xl border border-emerald-900/10" src="https://maps.google.com/maps?q=Helsinki&t=&z=11&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white p-6 rounded-2xl border border-emerald-900/10 grid gap-4">
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
            <label className="block text-sm text-emerald-900/80">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows="5" className="mt-1 w-full rounded-md border border-emerald-900/20 px-3 py-2" />
          </div>
          <button className="rounded-full bg-emerald-700 text-white px-5 py-3 hover:bg-emerald-800">Send</button>
          {msg && <p className="text-emerald-800 text-sm">{msg}</p>}
        </form>
      </div>
    </main>
  )
}
