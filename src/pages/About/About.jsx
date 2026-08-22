import { Helmet } from "react-helmet";
import { HiArrowRight, HiCheck, HiOutlineSearch, HiOutlineShoppingBag, HiSupport } from "react-icons/hi";
import { Link } from "react-router-dom";
import homeImage from "../../assets/banner/home.jpg";
import techImage from "../../assets/banner/tech.jpg";

const About = () => {
  return (
    <main className="overflow-hidden bg-[#f7f6f1] text-[#254b46]">
      <Helmet><title>Click2buy | About us</title></Helmet>
      <section className="bg-[#e3efeb] text-[#254b46]">
        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-[1fr_0.85fr]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-8 md:py-28"><p className="eyebrow">A better way to browse</p><h1 className="max-w-2xl text-5xl font-bold leading-[0.98] md:text-7xl">Shopping should feel <em className="font-normal text-[#0d7b72]">simple.</em></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#52716b]">Click2buy brings useful products, familiar brands, and an easier way to discover what belongs in your everyday life.</p><Link to="/shop" className="mt-8 inline-flex w-fit items-center gap-3 bg-[#ef765f] px-6 py-4 text-sm font-bold text-[#254b46] transition hover:gap-5 hover:bg-[#d85e4b]">Explore the shop <HiArrowRight className="text-lg" /></Link></div>
          <div className="min-h-[360px] bg-cover bg-center md:min-h-0" style={{ backgroundImage: `linear-gradient(135deg, rgba(13,123,114,.15), rgba(23,33,31,.1)), url(${homeImage})` }} aria-label="A selection of home products" role="img" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24 md:px-8 md:py-24">
        <div><p className="eyebrow">Why Click2buy</p><h2 className="text-4xl font-bold leading-tight md:text-5xl">Less hunting.<br /><span className="text-[#0d7b72]">More finding.</span></h2></div>
        <div><p className="text-xl leading-8 text-[#17211f]">Online shopping is at its best when the choice feels useful, not overwhelming. Click2buy is built around that idea.</p><p className="mt-6 leading-7 text-[#66726d]">From smartphones and watches to sneakers, beauty, travel, toys, and home essentials, the store brings different parts of everyday shopping into one place. You can browse by what you need, compare familiar names, and keep track of your orders from your account.</p><p className="mt-6 leading-7 text-[#66726d]">We are still growing, which means the experience should keep getting clearer as the catalog grows with it.</p></div>
      </section>

      <section className="border-y border-[#dedfd8] bg-[#eeede6]"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"><div className="mb-10 max-w-2xl"><p className="eyebrow">How we think about the experience</p><h2 className="text-4xl font-bold md:text-5xl">A store that respects your time.</h2></div><div className="grid gap-px bg-[#c8ccc5] md:grid-cols-3"><div className="bg-[#eeede6] p-7"><HiOutlineSearch className="mb-8 text-3xl text-[#0d7b72]" /><h3 className="text-2xl font-bold">Easy to explore</h3><p className="mt-3 leading-7 text-[#66726d]">Clear categories and straightforward product information help you get to the right choice faster.</p></div><div className="bg-[#eeede6] p-7"><HiOutlineShoppingBag className="mb-8 text-3xl text-[#0d7b72]" /><h3 className="text-2xl font-bold">Made for real orders</h3><p className="mt-3 leading-7 text-[#66726d]">Save products to your cart, place an order, and keep your shopping activity connected to your profile.</p></div><div className="bg-[#eeede6] p-7"><HiSupport className="mb-8 text-3xl text-[#0d7b72]" /><h3 className="text-2xl font-bold">Help when it matters</h3><p className="mt-3 leading-7 text-[#66726d]">Questions are part of shopping. Our support and FAQ pages are here when you need a clearer answer.</p></div></div></div></section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24"><div className="order-2 md:order-1"><p className="eyebrow">What you will find here</p><h2 className="text-4xl font-bold leading-tight md:text-5xl">A little bit of everything that makes a day easier.</h2><ul className="mt-8 space-y-4">{["Everyday tech from phones to smart accessories", "Style, sneakers, watches, and beauty essentials", "Home, travel, and toys for the people around you", "A growing selection from brands you already know"].map((item) => <li key={item} className="flex items-start gap-3 text-[#66726d]"><HiCheck className="mt-1 shrink-0 text-xl text-[#ef765f]" />{item}</li>)}</ul><Link to="/shop" className="section-link mt-9">Browse the collection <span>→</span></Link></div><div className="order-1 overflow-hidden md:order-2"><img src={techImage} alt="Technology products available on Click2buy" className="h-[420px] w-full object-cover transition duration-700 hover:scale-105" /></div></section>

      <section className="bg-[#0d7b72] text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:px-8"><div><p className="eyebrow text-[#f6b59f]">Come take a look</p><h2 className="text-4xl font-bold md:text-5xl">Your next find might be closer than you think.</h2></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-3 border border-white/50 px-6 py-4 text-sm font-bold transition hover:bg-white hover:text-[#0d7b72]">Get in touch <HiArrowRight /></Link></div></section>
    </main>
  );
};

export default About;