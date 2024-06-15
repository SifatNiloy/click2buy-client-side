import apple from "../../assets/brands/apple.jpg";
import samsung from "../../assets/brands/samsung.jpg";
import sony from "../../assets/brands/sony.jpg";
import xiaomi from "../../assets/brands/xiaomi.jpg";
import nike from "../../assets/brands/nike.jpg";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Explore Popular Brands</h2>
        <p className="text-xl text-gray-600">
          <Link
            to="/shop"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            See All
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <img
            src={apple}
            alt="Apple"
            className="object-cover w-full h-48 sm:h-56 md:h-64 rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-lg font-semibold text-gray-800">Apple</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <img
            src={samsung}
            alt="Samsung"
            className="object-cover w-full h-48 sm:h-56 md:h-64 rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-lg font-semibold text-gray-800">Samsung</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <img
            src={sony}
            alt="Sony"
            className="object-cover w-full h-48 sm:h-56 md:h-64 rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-lg font-semibold text-gray-800">Sony</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <img
            src={xiaomi}
            alt="Xiaomi"
            className="object-cover w-full h-48 sm:h-56 md:h-64 rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-lg font-semibold text-gray-800">Xiaomi</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <img
            src={nike}
            alt="Nike"
            className="object-cover w-full h-48 sm:h-56 md:h-64 rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-lg font-semibold text-gray-800">Nike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
