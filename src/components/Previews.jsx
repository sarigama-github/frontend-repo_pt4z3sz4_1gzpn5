export default function Previews({ coverHTML, contentHTML, pdfUrl }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-white/10 text-slate-200 font-medium">Cover Preview</div>
        <iframe title="cover" className="w-full h-[480px] bg-white" srcDoc={coverHTML || '<div class=\'p-6 text-slate-500\'>No cover yet</div>'}></iframe>
      </div>
      <div className="bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-white/10 text-slate-200 font-medium">E‑Book HTML Preview</div>
        <iframe title="content" className="w-full h-[480px] bg-white" srcDoc={contentHTML || '<div class=\'p-6 text-slate-500\'>No content yet</div>'}></iframe>
      </div>
      <div className="lg:col-span-2 flex items-center justify-between bg-slate-900/40 border border-white/10 rounded-2xl p-4">
        <div className="text-slate-300 text-sm">Download the generated PDF once ready.</div>
        <a href={pdfUrl || '#'} download className={`px-4 py-2 rounded-lg ${pdfUrl ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-slate-700 cursor-not-allowed'} text-white`}>
          {pdfUrl ? 'Download PDF' : 'PDF not ready'}
        </a>
      </div>
    </div>
  );
}
