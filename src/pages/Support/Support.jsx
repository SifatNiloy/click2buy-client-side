import { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Example: Logging form data
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Main Street, City, Country</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">support@click2buy.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
