
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiImage, FiShield, FiTag } from "react-icons/fi";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const initialForm = { name: "", category: "", condition: "", price: "", image: "", description: "" };

const Sell = () => {
  const axiosSecure = useAxiosSecure();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });
    try {
      await axiosSecure.post("/listings", { ...form, price: Number(form.price) });
      setForm(initialForm);
      setStatus({ type: "success", message: "Your listing is in the review queue. We will take a look before it goes live." });
    } catch (error) {
      setStatus({ type: "error", message: error.response?.data?.message || "We could not submit that listing. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#254b46]">
      <section className="overflow-hidden bg-[#e3efeb]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-end md:px-8 md:py-28">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Give it another life</p>
            <h1 className="text-5xl font-bold leading-[0.98] text-[#254b46] md:text-7xl">Turn your old favorite into someone else&apos;s find.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#52716b]">List the things you no longer use, share the details that matter, and let our team review it before it reaches the Click2Buy community.</p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm font-bold text-[#254b46]"><span className="inline-flex items-center gap-2 rounded-full bg-[#f7f6f1] px-4 py-2"><FiShield /> Reviewed before publishing</span><span className="inline-flex items-center gap-2 rounded-full bg-[#f7f6f1] px-4 py-2"><FiTag /> No listing fee</span></div>
          </div>
          <div className="reveal rounded-[2rem] bg-[#254b46] p-8 text-[#f7f6f1] shadow-xl md:p-10" style={{ animationDelay: "120ms" }}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef765f]">How it works</p>
            <div className="mt-8 space-y-7">{["Tell us what you are selling", "Add a clear photo and honest details", "We review it, then share it with buyers"].map((step, index) => <div className="flex gap-4" key={step}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ef765f] font-bold text-[#254b46]">{index + 1}</span><p className="pt-1 text-base leading-6 text-[#e3efeb]">{step}</p></div>)}</div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.72fr_1.28fr] md:px-8 md:py-24">
        <div><p className="eyebrow">Your listing</p><h2 className="section-heading">Make the good stuff easy to spot.</h2><p className="mt-5 leading-7 text-[#66726d]">A little context helps buyers decide. Use a specific title, show the real condition, and price it for the next owner.</p><div className="mt-8 space-y-4 border-t border-[#c9e2dc] pt-6 text-sm text-[#52716b]"><p className="flex gap-3"><FiImage className="mt-1 shrink-0 text-[#0d7b72]" /> Use a direct, publicly accessible image URL so buyers can see the item.</p><p className="flex gap-3"><FiCheckCircle className="mt-1 shrink-0 text-[#0d7b72]" /> Every submission starts as pending and is reviewed before publishing.</p></div><Link to="/faq" className="section-link mt-8">Questions about selling <FiArrowRight /></Link></div>
        <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-[#c9e2dc] bg-white p-6 shadow-sm md:p-10"><div className="grid gap-6 md:grid-cols-2">
          <label className="md:col-span-2"><span className="mb-2 block text-sm font-bold">Product name</span><input name="name" value={form.name} onChange={updateField} required minLength="2" maxLength="100" placeholder="e.g. Sony headphones" className="w-full rounded-xl border border-[#c9e2dc] bg-[#f7f6f1] px-4 py-3 outline-none focus:border-[#0d7b72]" /></label>
          <label><span className="mb-2 block text-sm font-bold">Category</span><select name="category" value={form.category} onChange={updateField} required className="w-full rounded-xl border border-[#c9e2dc] bg-[#f7f6f1] px-4 py-3 outline-none focus:border-[#0d7b72]"><option value="">Choose one</option><option>Electronics</option><option>Fashion</option><option>Home</option><option>Beauty</option><option>Sports</option><option>Other</option></select></label>
          <label><span className="mb-2 block text-sm font-bold">Condition</span><select name="condition" value={form.condition} onChange={updateField} required className="w-full rounded-xl border border-[#c9e2dc] bg-[#f7f6f1] px-4 py-3 outline-none focus:border-[#0d7b72]"><option value="">Choose one</option><option>Like new</option><option>Gently used</option><option>Used</option><option>Needs some care</option></select></label>
          <label><span className="mb-2 block text-sm font-bold">Asking price</span><div className="flex items-center rounded-xl border border-[#c9e2dc] bg-[#f7f6f1] px-4"><span className="text-[#66726d]">$</span><input name="price" value={form.price} onChange={updateField} required type="number" min="0" step="0.01" placeholder="0.00" className="w-full bg-transparent px-2 py-3 outline-none" /></div></label>
          <label><span className="mb-2 block text-sm font-bold">Product image URL</span><input name="image" value={form.image} onChange={updateField} required type="url" placeholder="https://..." className="w-full rounded-xl border border-[#c9e2dc] bg-[#f7f6f1] px-4 py-3 outline-none focus:border-[#0d7b72]" /></label>
          <label className="md:col-span-2"><span className="mb-2 block text-sm font-bold">Description</span><textarea name="description" value={form.description} onChange={updateField} required minLength="10" maxLength="2000" rows="5" placeholder="Tell buyers about age, wear, accessories, and anything they should know." className="w-full resize-y rounded-xl border border-[#c9e2dc] bg-[#f7f6f1] px-4 py-3 outline-none focus:border-[#0d7b72]" /></label>
        </div>{status.type !== "idle" && <p role="status" className={`mt-6 rounded-xl px-4 py-3 text-sm font-semibold ${status.type === "success" ? "bg-[#e3efeb] text-[#0d7b72]" : "bg-[#fff0ec] text-[#b94d3d]"}`}>{status.message}</p>}<button type="submit" disabled={isSubmitting} className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0d7b72] px-6 py-3 font-bold text-white transition hover:bg-[#095f58] disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Submitting..." : "Submit my listing"} <FiArrowRight /></button></form>
      </section>
    </main>
  );
};

export default Sell;
