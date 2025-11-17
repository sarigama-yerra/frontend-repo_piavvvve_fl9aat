export default function FAQ(){
  const items = [
    {q:'What should I bring?', a:'Bring a water bottle and swimsuit if preferred. We provide towels.'},
    {q:'How long is a session?', a:'Most sessions are 30–60 minutes depending on service.'},
    {q:'Who should avoid heat exposure?', a:'If you are pregnant, have cardiovascular conditions, or are on specific medications, consult your clinician.'},
  ]
  return (
    <main className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold text-emerald-900">FAQ</h1>
        <div className="mt-6 divide-y divide-emerald-900/10 bg-white rounded-2xl border border-emerald-900/10">
          {items.map((it)=> (
            <div key={it.q} className="p-6">
              <h3 className="font-medium text-emerald-900">{it.q}</h3>
              <p className="mt-2 text-emerald-900/80">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
