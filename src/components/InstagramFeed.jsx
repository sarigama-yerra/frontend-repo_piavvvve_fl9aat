import { useEffect, useState } from 'react'

export default function InstagramFeed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/instagram`)
        if (res.ok) setPosts(await res.json())
      } catch (e) {}
    }
    fetchData()
  }, [])

  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-emerald-900">From Instagram</h2>
          <a href="#" className="text-emerald-700 hover:text-emerald-800">@scandiasauna</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((p, i) => (
            <a key={i} href={p.link || '#'} target="_blank" rel="noreferrer" className="block rounded-lg overflow-hidden">
              <img src={p.image_url} alt={p.caption || 'Instagram post'} className="h-40 w-full object-cover" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
