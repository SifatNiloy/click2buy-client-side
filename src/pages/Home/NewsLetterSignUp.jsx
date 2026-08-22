import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const NewsletterSignUp = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address!',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: 'Thank you for subscribing!',
    });
    setEmail("");
  };

  return (
    <section className="store-section pt-8"><div className="relative overflow-hidden bg-[#0d7b72] px-6 py-14 text-white md:px-16 md:py-20"><div className="relative z-10 max-w-2xl"><p className="eyebrow text-[#f6b59f]">A little good news</p>
      <h2 className="text-4xl font-bold leading-tight md:text-6xl">The good stuff, delivered.</h2>
      <p className="mt-5 max-w-lg text-lg leading-7 text-white/75">New drops, thoughtful edits, and offers worth opening your inbox for.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-0 bg-white px-5 py-4 text-[#17211f] outline-none placeholder:text-[#66726d] focus:ring-2 focus:ring-[#f6b59f] sm:flex-1"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#ef765f] px-7 py-4 font-bold text-white transition hover:bg-[#d85e4b]"
        >
          Subscribe
        </button>
      </div>
      </div><p className="mt-5 text-xs text-white/55">No noise. Unsubscribe whenever you like.</p></div></section>
  );
};

export default NewsletterSignUp;
