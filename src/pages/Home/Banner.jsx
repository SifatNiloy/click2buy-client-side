import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import home from "../../assets/banner/home.jpg";
import travel from "../../assets/banner/travel.jpg";
import beauty from "../../assets/banner/beauty.jpg";
import tech from "../../assets/banner/tech.jpg";
import toy from "../../assets/banner/toy.jpg";
import { useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: home,
      title: "Home Products",
      description: "Explore a wide range of home products that elevate your living space. Discover everything from stylish furniture to essential home appliances, designed to enhance comfort and functionality in your home.",
      link: "/shop"
    },
    {
      image: travel,
      title: "Travel Accessories",
      description: "Embark on your next adventure with our collection of travel accessories. From durable luggage to handy travel gadgets, equip yourself with the essentials for a seamless travel experience.",
      link: "/shop"
    },
    {
      image: tech,
      title: "Discover Tech",
      description: "Stay ahead with the latest in technology. Explore cutting-edge gadgets, innovative electronics, and smart devices that enhance productivity, entertainment, and everyday life.",
      link: "/shop"
    },
    {
      image: toy,
      title: "Discover Toys",
      description: "Bring smiles to your kids' faces with our delightful range of toys. From educational games to fun-filled toys, find the perfect playtime companions that spark creativity and joy.",
      link: "/shop"
    },
    {
      image: beauty,
      title: "Discover Beauty",
      description: "Indulge in our exquisite collection of beauty products. Discover skincare essentials, luxurious cosmetics, and grooming tools that pamper your skin and enhance your natural beauty.",
      link: "/shop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Set interval to 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true} // Enable autoplay
        cancelOnInteraction={false}
        interval={3000} // Set interval to 3 seconds
      >
        {slides.map((slide, index) => (
          <div key={index} className={`banner-slide ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
              <div className="mx-auto max-w-2xl px-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-[#80C4E9]">{slide.title}</h1>
                <p className="text-lg lg:text-xl mb-8 text-gray-200">{slide.description}</p>
                <Link to={slide.link} className="btn btn-accent text-lg lg:text-xl">Shop Now</Link>
              </div>
            </div>
          </div>
        ))}
      </AutoplaySlider>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white shadow-md hover:bg-opacity-70" onClick={prevSlide}>
        <HiOutlineChevronLeft className="text-3xl lg:text-4xl" />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white shadow-md hover:bg-opacity-70" onClick={nextSlide}>
        <HiOutlineChevronRight className="text-3xl lg:text-4xl" />
      </button>
    </div>
  );
};

export default Banner;
