import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../hooks/useCart";

const Products = ({ product }) => {
  const { name, seller, price, stock, ratings, img, _id } = product;
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (product) => {
    console.log(product);
    if (user && user.email) {
      const orderItem = {
        productId: _id,
        name,
        seller,
        price,
        stock,
        ratings,
        img,
        email: user.email,
      };
      console.log("Order Item:", orderItem);
      fetch("https://click2buy-backend.sifatniloy.top/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "middle",
              icon: "success",
              title: "added to cart",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Plese login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
