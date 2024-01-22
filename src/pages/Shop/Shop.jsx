import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import NotFound from "../Shared/NotFound";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <div className="my-12">
      <div className="flex align-items-center justify-center">
        <form className="form-control  ">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-96"
              id="myInput"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="grid grid-cols-4 justify-center gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Products product={product} key={product._id} />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
