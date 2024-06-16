import { useEffect, useState } from "react";
import HomeProducts from "../Products/HomeProducts";

const LimitedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://click2buy-backend.sifatniloy.top/limitedProduct`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-12 p-4">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-12">
        New Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <HomeProducts product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default LimitedProducts;
