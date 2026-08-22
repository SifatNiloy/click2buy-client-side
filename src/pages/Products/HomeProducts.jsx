import { Link } from "react-router-dom";

const HomeProducts = ({ product }) => {
  const { name, price, images, img, description } = product;
  const image = images?.[0] || img;

  return (
    <article className="group overflow-hidden border border-[#dedfd8] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <figure className="relative w-full h-48 sm:h-56 md:h-64">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </figure>
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-[#17211f]">{name}</h2>
        <p className="mb-5 line-clamp-2 text-sm leading-6 text-[#66726d]">{description}</p>
        <div className="flex items-center justify-between"><p className="text-xl font-bold text-[#0d7b72]">${price}</p>
          <Link to="/shop">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#17211f] transition group-hover:text-[#ef765f]">Shop <span>→</span></span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HomeProducts;
