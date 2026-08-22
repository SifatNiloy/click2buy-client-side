import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#e3efeb] text-[#254b46]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8 md:py-20">
        <div><img className="w-36" src={logo} alt="Click2Buy" /><p className="mt-6 max-w-xs text-sm leading-7 text-[#52716b]">A more considered way to find the things that make everyday life better.</p><Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#d85e4b] transition hover:gap-3">Start browsing <HiArrowRight /></Link></div>
        <nav className="flex flex-col gap-3"><h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d85e4b]">Explore</h2><Link className="text-sm text-[#52716b] transition hover:text-[#254b46]" to="/shop">All products</Link><Link className="text-sm text-[#52716b] transition hover:text-[#254b46]" to="/shop">Categories</Link><Link className="text-sm text-[#52716b] transition hover:text-[#254b46]" to="/shop">Special offers</Link></nav>
        <nav className="flex flex-col gap-3"><h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d85e4b]">Company</h2><Link className="text-sm text-[#52716b] transition hover:text-[#254b46]" to="/about">About us</Link><Link className="text-sm text-[#52716b] transition hover:text-[#254b46]" to="/contact">Contact</Link><Link className="text-sm text-[#52716b] transition hover:text-[#254b46]" to="/support">Support</Link></nav>
        <div><h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d85e4b]">Keep in touch</h2><p className="text-sm leading-6 text-[#52716b]">New arrivals and small discoveries, occasionally.</p><Link to="/" className="mt-5 inline-flex items-center gap-2 border-b border-[#9abbb3] pb-2 text-sm font-bold text-[#254b46]"><HiOutlineMail /> Join the list</Link></div>
      </div>
      <div className="border-t border-[#c9e2dc]"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#6a8b84] md:flex-row md:items-center md:justify-between md:px-8"><span>© 2026 Click2Buy. Made for better browsing.</span><span>Thoughtful finds, delivered.</span></div></div>
    </footer>
  );
};

export default Footer;
