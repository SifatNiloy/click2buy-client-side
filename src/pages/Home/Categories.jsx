import { Link } from "react-router-dom";
import smartphone from "../../assets/categories/smartphone.jpg";
import sneakers from "../../assets/categories/sneakers.jpg";
import watch from "../../assets/categories/watch.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      image: smartphone,
      name: "Smartphones",
      description:
        "Discover the latest smartphones with cutting-edge technology.",
    },
    {
      id: 2,
      image: sneakers,
      name: "Sneakers",
      description: "Step up your game with the newest sneakers and sportswear.",
    },
    {
      id: 3,
      image: watch,
      name: "Watches",
      description: "Find premium watches that combine style and functionality.",
    },
    {
      id: 4,
      image: smartphone,
      name: "Smartphones",
      description: "Explore a wide range of smartphones from top brands.",
    },
    {
      id: 5,
      image: sneakers,
      name: "Sneakers",
      description: "Stay trendy with our latest collection of sneakers.",
    },
  ];

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Popular Categories
        </h2>
        <p className="text-xl text-gray-600">
          <Link
            to="/shop"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            See All
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-48 sm:h-64 rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {category.name}
              </p>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
