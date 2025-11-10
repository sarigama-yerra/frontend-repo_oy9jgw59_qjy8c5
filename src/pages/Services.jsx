import Navbar from '../Navbar'
import { useState } from 'react'

export default function Services(){
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">Services / Engagement</h1>
        <p className="text-gray-400 mt-2">Authorized testing only. Legal terms and scope control required.</p>
        <div className="mt-8 grid gap-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold">Terms (Staged)</h2>
            <ul className="list-disc list-inside text-gray-300 text-sm mt-3 space-y-1">
              <li>Written authorization signed prior to any activity.</li>
              <li>Testing within approved scope and hours only.</li>
              <li>No data exfiltration; synthetic test data used.</li>
              <li>Findings reported responsibly and redacted for public use.</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold">Request Engagement</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Input label="Contact Name" required/>
              <Input label="Work Email" type="email" required/>
              <Input label="Company"/>
              <Input label="Authorized Scope Summary"/>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-300">Message</label>
                <textarea className="mt-1 w-full bg-black/30 border border-white/10 rounded p-3" rows="5" placeholder="Describe your authorized testing goals..."/>
              </div>
            </div>
            <button className="mt-4 px-5 py-3 rounded-md bg-amber-500/20 text-amber-200 border border-amber-400/30 hover:bg-amber-500/30 transition">{sent ? 'Request Sent' : 'Request Brief'}</button>
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
