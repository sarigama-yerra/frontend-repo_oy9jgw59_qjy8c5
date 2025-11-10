import Navbar from '../Navbar'

export default function Legal(){
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">Legal Disclaimer</h1>
        <p className="mt-4 text-gray-300">This site is a fictional portfolio intended for design and storytelling. It does not include or endorse real intrusion methods, exploits, or operational guidance.</p>
        <ul className="mt-4 list-disc list-inside text-gray-400 text-sm space-y-1">
          <li>No exploit code, attack tooling, or instructions are provided.</li>
          <li>Any case studies are fabricated or redacted and provide no actionable details.</li>
          <li>Contact is for lawful, authorized testing only with written consent.</li>
        </ul>
      </main>
    </div>
  )
}
