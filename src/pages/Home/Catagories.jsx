import smartphone from "../../assets/categories/smartphone.jpg";
import sneckers from "../../assets/categories/sneckers.jpg";
import watch from "../../assets/categories/watch.jpg";
import "./Categories.css";
import { useState } from "react";

const Categories = () => {
  const [categories] = useState([
    { id: 1, image: sneckers, name: "Sneakers" },
    { id: 2, image: watch, name: "Watches" },
    { id: 3, image: smartphone, name: "Smartphones" },
    { id: 4, image: sneckers, name: "Sneakers" },
    { id: 5, image: watch, name: "Watches" },
  ]);

  return (
    <div className="container mx-auto px-4 my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Explore Popular Categories</h2>
        <p className="text-xl text-gray-600 cursor-pointer hover:text-indigo-600 transition duration-300">
          See All
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-products overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-auto rounded-full"
            />
            <p className="text-lg font-medium text-center py-2 text-gray-800">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
