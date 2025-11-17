import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([
    { name: 'Emma L.', quote: 'The most calming space in the city. I sleep better after every session.', rating: 5 },
    { name: 'Marcus T.', quote: 'Infrared therapy helped my recovery more than I expected.', rating: 5 },
    { name: 'Sofia R.', quote: 'Beautiful, spotless, and so welcoming.', rating: 5 },
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/testimonials`)
        if (res.ok) {
          const data = await res.json()
          setItems(data)
        }
      } catch (e) {
        // keep defaults
      }
    }
    fetchData()
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-emerald-900 mb-6">What our guests say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-900/10">
              <p className="text-emerald-900/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-emerald-700 font-medium">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
