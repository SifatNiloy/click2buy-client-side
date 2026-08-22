import { Link } from "react-router-dom";

const HomeProducts = ({ product }) => {
  const { name, price, images, img, description } = product;
  const image = images?.[0] || img;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full">
      <figure className="relative w-full h-48 sm:h-56 md:h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold text-gray-800">Price: ${price}</p>
        <div className="mt-4">
          <Link to="/shop">
            <button className="btn btn-primary">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
