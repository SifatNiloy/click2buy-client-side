import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#17211f] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8 md:py-20">
        <div><img className="w-36" src={logo} alt="Click2Buy" /><p className="mt-6 max-w-xs text-sm leading-7 text-white/60">A more considered way to find the things that make everyday life better.</p><Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f6b59f] transition hover:gap-3">Start browsing <HiArrowRight /></Link></div>
        <nav className="flex flex-col gap-3"><h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f6b59f]">Explore</h2><Link className="text-sm text-white/70 transition hover:text-white" to="/shop">All products</Link><Link className="text-sm text-white/70 transition hover:text-white" to="/shop">Categories</Link><Link className="text-sm text-white/70 transition hover:text-white" to="/shop">Special offers</Link></nav>
        <nav className="flex flex-col gap-3"><h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f6b59f]">Company</h2><Link className="text-sm text-white/70 transition hover:text-white" to="/about">About us</Link><Link className="text-sm text-white/70 transition hover:text-white" to="/contact">Contact</Link><Link className="text-sm text-white/70 transition hover:text-white" to="/support">Support</Link></nav>
        <div><h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f6b59f]">Keep in touch</h2><p className="text-sm leading-6 text-white/60">New arrivals and small discoveries, occasionally.</p><Link to="/" className="mt-5 inline-flex items-center gap-2 border-b border-white/30 pb-2 text-sm font-bold text-white"><HiOutlineMail /> Join the list</Link></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/40 md:flex-row md:items-center md:justify-between md:px-8"><span>© 2024 Click2Buy. Made for better browsing.</span><span>Thoughtful finds, delivered.</span></div></div>
    </footer>
  );
};

export default Footer;
