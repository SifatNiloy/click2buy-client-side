import { useEffect, useState } from "react";
import HomeProducts from "../Products/HomeProducts";

const LimitedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://click2buy-backend.onrender.com/api/products/featuredProducts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data?.products || []);
      });
  }, []);

  return (
    <section className="store-section">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Fresh arrivals</p><h2 className="section-heading">New to the shelf.</h2></div><a href="/shop" className="section-link">See the full edit <span>→</span></a></div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <HomeProducts product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};

export default LimitedProducts;
