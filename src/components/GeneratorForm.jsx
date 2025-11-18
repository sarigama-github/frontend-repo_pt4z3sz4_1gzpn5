import { useState } from 'react';

const WRITING_STYLES = ["Professional", "Educational", "Casual", "Storytelling"];
const IMAGE_STYLES = ["Illustration", "3D Render", "Flat Vector", "Photorealistic"];
const LENGTHS = ["Short (5 pages)", "Medium (10 pages)", "Long (20 pages)"];

export default function GeneratorForm({ onGenerate, loading }) {
  const [form, setForm] = useState({
    book_title: "The Future of Interfaces",
    subtitle: "Designing for Ambient and Multimodal Experiences",
    author_name: "Alex Rivers",
    theme_color: "#0ea5e9",
    page_background_color: "#f8fafc",
    writing_style: WRITING_STYLES[0],
    image_style: IMAGE_STYLES[0],
    length: LENGTHS[0],
    topic_description: "How next‑gen user interfaces blend spatial computing, AI assistance, and invisible interactions to create humane, empowering experiences.",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <label className="block text-sm text-slate-200 mb-1">Book Title</label>
        <input name="book_title" value={form.book_title} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 text-white px-3 py-2 border border-white/10" />
      </div>
      <div>
        <label className="block text-sm text-slate-200 mb-1">Subtitle</label>
        <input name="subtitle" value={form.subtitle} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 text-white px-3 py-2 border border-white/10" />
      </div>
      <div>
        <label className="block text-sm text-slate-200 mb-1">Author</label>
        <input name="author_name" value={form.author_name} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 text-white px-3 py-2 border border-white/10" />
      </div>
      <div>
        <label className="block text-sm text-slate-200 mb-1">Theme Color</label>
        <input type="color" name="theme_color" value={form.theme_color} onChange={onChange} className="w-full h-10 rounded-lg" />
      </div>
      <div>
        <label className="block text-sm text-slate-200 mb-1">Page Background</label>
        <input type="color" name="page_background_color" value={form.page_background_color} onChange={onChange} className="w-full h-10 rounded-lg" />
      </div>
      <div>
        <label className="block text-sm text-slate-200 mb-1">Writing Style</label>
        <select name="writing_style" value={form.writing_style} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 text-white px-3 py-2 border border-white/10">
          {WRITING_STYLES.map((s) => (<option key={s}>{s}</option>))}
        </select>
      </div>
      <div>
        <label className="block text-sm text-slate-200 mb-1">Image Style</label>
        <select name="image_style" value={form.image_style} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 text-white px-3 py-2 border border-white/10">
          {IMAGE_STYLES.map((s) => (<option key={s}>{s}</option>))}
        </select>
      </div>
      <div>
        <label className="block text-sm text-slate-200 mb-1">Length</label>
        <select name="length" value={form.length} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 text-white px-3 py-2 border border-white/10">
          {LENGTHS.map((s) => (<option key={s}>{s}</option>))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm text-slate-200 mb-1">Topic Description</label>
        <textarea name="topic_description" rows={5} value={form.topic_description} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 text-white px-3 py-2 border border-white/10" />
      </div>
      <div className="md:col-span-2 flex gap-3">
        <button disabled={loading} className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white disabled:opacity-60">{loading ? 'Generating…' : 'Generate E‑Book'}</button>
      </div>
    </form>
  );
}
