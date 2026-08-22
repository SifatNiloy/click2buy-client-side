import { useEffect, useState } from "react";
import { HiOutlineSearch, HiX } from "react-icons/hi";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const pages = Math.ceil(count / size);

  useEffect(() => {
    if (isSearching) return undefined;
    const controller = new AbortController();
    setLoading(true); setError(false);
    fetch(`https://click2buy-backend.onrender.com/api/products?page=${page}&size=${size}`, { signal: controller.signal })
      .then((res) => { if (!res.ok) throw new Error("Unable to load products"); return res.json(); })
      .then((data) => { setCount(data.data?.count || 0); setProducts(data.data?.products || []); })
      .catch((requestError) => { if (requestError.name !== "AbortError") setError(true); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [page, size, isSearching]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) { setIsSearching(false); setPage(1); return; }
    setLoading(true); setError(false); setIsSearching(true);
    try {
      const result = await fetch(`https://click2buy-backend.onrender.com/api/products/search/${encodeURIComponent(trimmedQuery)}`);
      if (!result.ok) throw new Error("Search failed");
      const data = await result.json();
      setProducts(data.data?.products || []); setCount(data.data?.count || data.data?.products?.length || 0);
    } catch { setError(true); setProducts([]); }
    finally { setLoading(false); }
  };

  const clearSearch = () => { setQuery(""); setIsSearching(false); setPage(1); };

  return (
    <main className="min-h-screen bg-[#f7f6f1]">
      <section className="border-b border-[#dedfd8] bg-[#eeede6]"><div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20"><p className="eyebrow">The complete edit</p><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><h1 className="max-w-2xl text-5xl font-bold leading-none text-[#17211f] md:text-7xl">Good things, <em className="font-normal text-[#0d7b72]">worth finding.</em></h1><p className="mt-5 max-w-xl text-base leading-7 text-[#66726d]">Browse considered picks across tech, style, travel, and everyday living.</p></div><div className="flex gap-8 border-l-2 border-[#ef765f] pl-5"><div><p className="text-2xl font-bold text-[#17211f]">{count || "-"}</p><p className="text-xs uppercase tracking-widest text-[#66726d]">Items in shop</p></div><div><p className="text-2xl font-bold text-[#17211f]">24h</p><p className="text-xs uppercase tracking-widest text-[#66726d]">Easy returns</p></div></div></div><form onSubmit={handleSearch} className="mt-10 flex max-w-3xl overflow-hidden border border-[#c8ccc5] bg-white shadow-sm focus-within:border-[#0d7b72]"><HiOutlineSearch className="m-4 shrink-0 text-2xl text-[#0d7b72]" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, brands, or categories" className="min-w-0 flex-1 bg-transparent px-1 py-4 text-sm text-[#17211f] outline-none placeholder:text-[#8b948f]" />{query && <button type="button" onClick={clearSearch} aria-label="Clear search" className="px-3 text-[#66726d] hover:text-[#17211f]"><HiX /></button>}<button type="submit" className="bg-[#17211f] px-6 text-sm font-bold text-white transition hover:bg-[#0d7b72]">Search</button></form></div></section>
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14"><div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#dedfd8] pb-5 sm:flex-row sm:items-center"><div><p className="text-sm font-bold text-[#17211f]">{isSearching ? `Results for “${query.trim()}”` : "All products"}</p><p className="mt-1 text-sm text-[#66726d]">{loading ? "Finding your next favorite..." : `${products.length} showing${!isSearching && count ? ` of ${count}` : ""}`}</p></div><label className="flex items-center gap-3 text-sm text-[#66726d]">Show <select value={size} disabled={isSearching} onChange={(event) => { setSize(Number(event.target.value)); setPage(1); }} className="border border-[#c8ccc5] bg-white px-3 py-2 font-bold text-[#17211f] outline-none"><option value="12">12 items</option><option value="20">20 items</option><option value="24">24 items</option></select></label></div>{error ? <div className="border border-[#ef765f]/40 bg-[#fff4f0] p-10 text-center"><h2 className="text-2xl font-bold text-[#17211f]">We hit a small snag.</h2><p className="mt-2 text-[#66726d]">Products could not load right now. Please try searching again.</p></div> : loading ? <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{[1, 2, 3, 4].map((item) => <div key={item} className="h-96 animate-pulse bg-[#eeede6]" />)}</div> : products.length > 0 ? <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <Products product={product} key={product._id} />)}</div> : <div className="border border-[#dedfd8] bg-white p-14 text-center"><p className="eyebrow">Nothing here yet</p><h2 className="text-3xl font-bold">Try a different search.</h2><button onClick={clearSearch} className="mt-6 bg-[#ef765f] px-6 py-3 text-sm font-bold text-white">Back to all products</button></div>}{!isSearching && !loading && !error && pages > 1 && <div className="mt-12 flex flex-wrap items-center justify-center gap-2">{[...Array(pages).keys()].map((number) => <button aria-label={`Go to page ${number + 1}`} className={`h-10 min-w-10 border px-3 text-sm font-bold transition ${page === number + 1 ? "border-[#17211f] bg-[#17211f] text-white" : "border-[#c8ccc5] bg-white text-[#17211f] hover:border-[#0d7b72]"}`} key={number} onClick={() => setPage(number + 1)}>{number + 1}</button>)}</div>}</section>
    </main>
  );
};

export default Shop;
