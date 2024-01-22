import React from "react";

const Products = ({ product }) => {
  const { name, seller, price, stock, ratings, img } = product;
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl mt-12">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="grid grid-cols-2">
          <p className="font-bold text-blue-500">Price : {price}</p>
          <p>Stock : {stock}</p>
          <p>Seller : {seller}</p>
          <p>ratings:{ratings} </p>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
