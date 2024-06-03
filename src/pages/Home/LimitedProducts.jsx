import { useEffect, useState } from "react";
import HomeProducts from "../Products/HomeProducts";

const LimitedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/limitedProduct`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="my-24">
      <h2 className="text-4xl font-bold text-success text-center my-8">
        New products
      </h2>
      <div className="grid lg:grid-cols-4 place-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 ">
        {products.map((product) => (
          <HomeProducts product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default LimitedProducts;
