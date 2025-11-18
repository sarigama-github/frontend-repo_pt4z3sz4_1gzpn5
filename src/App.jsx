import { useState } from 'react'
import Hero from './components/Hero'
import GeneratorForm from './components/GeneratorForm'
import Previews from './components/Previews'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [loading, setLoading] = useState(false)
  const [coverHTML, setCoverHTML] = useState('')
  const [contentHTML, setContentHTML] = useState('')
  const [fullHTML, setFullHTML] = useState('')
  const [pdfUrl, setPdfUrl] = useState('')

  const generate = async (payload) => {
    try {
      setLoading(true)
      setPdfUrl('')
      const res = await fetch(`${BACKEND_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Generation failed')
      const data = await res.json()
      setCoverHTML(data.cover_html)
      setContentHTML(data.content_html)
      setFullHTML(data.full_html)

      // Request PDF creation
      const pdfRes = await fetch(`${BACKEND_URL}/render-pdf`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: data.full_html })
      })
      if (pdfRes.ok) {
        const blob = await pdfRes.blob()
        const url = URL.createObjectURL(blob)
        setPdfUrl(url)
      }
    } catch (e) {
      console.error(e)
      alert('Something went wrong while generating the e‑book.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Hero />
      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
          <h2 className="text-xl font-semibold mb-4">Enter your details</h2>
          <GeneratorForm onGenerate={generate} loading={loading} />
        </div>

        <div className="h-6" />

        <Previews coverHTML={coverHTML} contentHTML={contentHTML} pdfUrl={pdfUrl} />
      </main>
      <footer className="text-center text-slate-400 text-sm py-10">Built with Flames • End‑to‑end automated PDF generation</footer>
    </div>
  )
}

export default App
