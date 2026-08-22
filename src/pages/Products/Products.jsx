import { useContext } from "react";
import { HiOutlineShoppingBag, HiStar } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../hooks/useCart";

const Products = ({ product }) => {
  const { name, brand, price, stock, rating, images, img, _id } = product;
  const image = images?.[0] || img;
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (product) => {
    if (user && user.email) {
      const orderItem = {
        productId: _id,
        name,
        seller: brand,
        price,
        stock,
        ratings: rating,
        img: image,
        email: user.email,
      };
      fetch("https://click2buy-backend.onrender.com/api/orders", {
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
    <article className="group flex h-full flex-col overflow-hidden border border-[#dedfd8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <figure className="relative h-64 overflow-hidden bg-[#eeede6]">
        <img src={image} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0d7b72]">{stock > 0 ? "In stock" : "Sold out"}</span>
      </figure>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-[#66726d]">{brand}</p>
        <h2 className="mt-2 text-xl font-bold text-[#17211f]">{name}</h2>
        <div className="mt-4 flex items-center justify-between border-t border-[#eeede6] pt-4"><p className="text-xl font-bold text-[#0d7b72]">${price}</p><p className="flex items-center gap-1 text-sm font-bold text-[#17211f]"><HiStar className="text-[#ef765f]" /> {rating || "New"}</p></div>
        <button onClick={() => handleAddToCart(product)} disabled={!stock} className="mt-5 flex w-full items-center justify-center gap-2 bg-[#17211f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0d7b72] disabled:cursor-not-allowed disabled:bg-[#c8ccc5]"><HiOutlineShoppingBag className="text-lg" /> {stock ? "Add to cart" : "Out of stock"}</button>
      </div>
    </article>
  );
};

export default Products;
