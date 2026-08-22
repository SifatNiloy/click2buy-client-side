import { useState } from "react";
import { Helmet } from "react-helmet";
import { HiChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const faqItems = [
  ["How do I find a product?", "Use the search field on the Shop page, or browse the available product collection. Product cards show the brand, price, rating, and stock status."],
  ["How do I add something to my cart?", "Sign in to your account, open the Shop page, and select Add to cart on an available product. Your cart count appears in the navigation."],
  ["Where can I see my orders?", "Once you are signed in, open Dashboard from the navigation. Your account area is where order activity is managed."],
  ["Why do I need an account to add to cart?", "An account connects your cart and order activity to you, so the store can keep those items associated with your profile."],
  ["What if I cannot find the product I want?", "Try a shorter search term or browse the full collection. The catalog includes technology, fashion, beauty, home, travel, and toys, and it continues to grow."],
  ["How do I get help with an order?", "Visit Support for guidance, or email support@click2buy.com with the product name and a short description of the issue. Do not include passwords or payment details."],
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return <main className="min-h-screen bg-[#f7f6f1] text-[#254b46]"><Helmet><title>Click2buy | FAQ</title></Helmet><section className="bg-[#e3efeb]"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><p className="eyebrow">Helpful answers</p><h1 className="max-w-3xl text-5xl font-bold leading-none md:text-7xl">Questions, made simpler.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#52716b]">A practical guide to browsing, carts, accounts, and getting help from Click2Buy.</p></div></section><section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[0.45fr_1fr] md:px-8 md:py-24"><div><HiOutlineQuestionMarkCircle className="text-5xl text-[#0d7b72]" /><h2 className="mt-6 text-3xl font-bold">Still unsure?</h2><p className="mt-4 leading-7 text-[#66726d]">If your question is about a specific order or product, our support page is the best next stop.</p><Link to="/support" className="mt-6 inline-flex text-sm font-bold text-[#d85e4b]">Visit support →</Link></div><div className="space-y-3">{faqItems.map(([question, answer], index) => <div key={question} className="border-b border-[#c9e2dc] bg-white"><button type="button" aria-expanded={activeIndex === index} onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-base font-bold transition hover:text-[#0d7b72]"><span>{question}</span><HiChevronDown className={`shrink-0 text-xl transition ${activeIndex === index ? "rotate-180 text-[#ef765f]" : ""}`} /></button>{activeIndex === index && <p className="px-5 pb-5 text-sm leading-7 text-[#66726d]">{answer}</p>}</div>)}</div></section></main>;
};

export default FAQ;