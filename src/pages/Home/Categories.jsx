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
  ];

  return (
    <section className="store-section">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="eyebrow">Start browsing</p><h2 className="section-heading">Find your next favorite.</h2></div>
        <Link to="/shop" className="section-link">View all categories <span>→</span></Link>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group overflow-hidden border border-[#dedfd8] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
            />
            <div className="p-5">
              <p className="mb-2 text-lg font-bold text-[#17211f]">
                {category.name}
              </p>
              <p className="text-sm leading-6 text-[#66726d]">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
