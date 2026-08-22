import apple from "../../assets/brands/apple.jpg";
import samsung from "../../assets/brands/samsung.jpg";
import sony from "../../assets/brands/sony.jpg";
import xiaomi from "../../assets/brands/xiaomi.jpg";
import nike from "../../assets/brands/nike.jpg";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <section className="bg-[#17211f] text-white">
      <div className="store-section">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="eyebrow">Good company</p><h2 className="section-heading text-white">The names you trust.</h2></div>
        <Link to="/shop" className="section-link border-[#f6b59f] text-[#f6b59f]">Browse every brand <span>→</span></Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-5">
        {[{ image: apple, name: "Apple" }, { image: samsung, name: "Samsung" }, { image: sony, name: "Sony" }, { image: xiaomi, name: "Xiaomi" }, { image: nike, name: "Nike" }].map((brand) => <div key={brand.name} className="group relative overflow-hidden border border-white/10">
          <img
            src={brand.image}
            alt={brand.name}
            className="h-52 w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-100 md:h-64"
          />
          <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12 text-lg font-bold">{brand.name}</p>
        </div>)}
      </div>
      </div>
    </section>
  );
};

export default Brands;
