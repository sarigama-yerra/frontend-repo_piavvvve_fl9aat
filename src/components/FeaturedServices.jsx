import { Sauna, SunMedium, Cloud, HeartPulse } from 'lucide-react'

const items = [
  {
    title: 'Traditional Finnish Sauna',
    icon: Sauna,
    desc: 'Dry heat in a cedar-lined space for deep relaxation and improved circulation.',
  },
  {
    title: 'Infrared Therapy',
    icon: SunMedium,
    desc: 'Gentle infrared heat to detoxify, ease joint pain, and support recovery.',
  },
  {
    title: 'Steam Room',
    icon: Cloud,
    desc: 'Humid heat with eucalyptus aromatherapy to open airways and hydrate skin.',
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({title, icon:Icon, desc}) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-900/10">
              <div className="h-12 w-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-emerald-900 text-lg">{title}</h3>
              <p className="mt-2 text-emerald-900/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
