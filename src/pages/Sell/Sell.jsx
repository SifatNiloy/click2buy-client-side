
import { useState } from "react";

const Sell = () => {
  // State for form inputs
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit product data to backend or perform validation
    // Reset form fields after submission
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImage(null);
  };

  // Function to handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // here I have to add Logic to handle file upload, maybe preview image before upload
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-10 pb-16">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center my-12">Sell Your Products</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-lg font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productDescription" className="block text-lg font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              id="productDescription"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="productPrice" className="block text-lg font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="number"
              id="productPrice"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productImage" className="block text-lg font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleImageChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
