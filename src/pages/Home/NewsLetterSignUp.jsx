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
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-6 lg:px-32 rounded-lg shadow-lg text-white my-16 mx-auto w-full max-w-3xl">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Subscribe to our Newsletter</h2>
      <p className="text-center mb-10 text-lg">Stay updated with our latest news and special offers.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-auto lg:flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button
          onClick={handleSubscribe}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300"
        >
          Subscribe
        </button>
      </div>
      <p className="text-center mt-8 text-sm lg:text-base">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignUp;
