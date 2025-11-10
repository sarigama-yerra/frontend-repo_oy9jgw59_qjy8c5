import Navbar from '../Navbar'
import { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">Contact / Engage</h1>
        <p className="text-gray-400 mt-2">For legal engagements only. This portfolio is fictional.</p>
        <div className="mt-8 grid gap-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold">PGP-style Fingerprint</h2>
            <div className="mt-3 font-mono text-sm text-emerald-300">ABCD 1234 EF56 7890 1234 5678 90AB CDEF 1234 5678</div>
            <p className="text-xs text-gray-400 mt-2">Decorative only. Do not use for secure communications.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold">Say hello</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Input label="Name" required/>
              <Input label="Email" type="email" required/>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-300">Message</label>
                <textarea className="mt-1 w-full bg-black/30 border border-white/10 rounded p-3" rows="5" placeholder="Your authorized engagement details..."/>
              </div>
            </div>
            <button className="mt-4 px-5 py-3 rounded-md bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-500/30 transition">{sent ? 'Sent' : 'Engage Now'}</button>
          </form>
        </div>
      </main>
    </div>
  )
}

function Input({ label, type = 'text', required=false }){
  return (
    <div>
      <label className="text-sm text-gray-300">{label}{required && ' *'}</label>
      <input type={type} required={required} className="mt-1 w-full bg-black/30 border border-white/10 rounded p-3" />
    </div>
  )
}
