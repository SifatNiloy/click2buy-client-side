import home from "../../assets/banner/home.jpg";
import travel from "../../assets/banner/travel.jpg";
import beauty from "../../assets/banner/beauty.jpg";
import tech from "../../assets/banner/tech.jpg";
import toy from "../../assets/banner/toy.jpg";
import { useEffect, useState } from "react";
import { HiArrowRight, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

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
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative min-h-[620px] bg-[#17211f] text-white md:min-h-[680px]">
      {slides.map((slide, index) => (
        <div key={slide.title} className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(23,33,31,.9) 0%, rgba(23,33,31,.58) 48%, rgba(23,33,31,.12) 100%), url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 md:min-h-[680px] md:px-8">
            <div className="reveal max-w-2xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#f6b59f]">Curated for your everyday</p>
              <h1 className="max-w-xl text-5xl font-bold leading-[1.02] md:text-7xl">{slide.title}</h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg">{slide.description}</p>
              <Link to={slide.link} className="mt-8 inline-flex items-center gap-3 bg-[#ef765f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#d85e4b] hover:gap-5">Shop the collection <HiArrowRight className="text-lg" /></Link>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <div className="flex gap-2">{slides.map((slide, index) => <button aria-label={`Show ${slide.title}`} key={slide.title} onClick={() => setCurrentIndex(index)} className={`h-1 transition-all ${index === currentIndex ? "w-12 bg-[#ef765f]" : "w-5 bg-white/40"}`} />)}</div>
        <div className="flex gap-2">
          <button aria-label="Previous slide" className="border border-white/40 p-3 transition hover:bg-white hover:text-[#17211f]" onClick={prevSlide}><HiOutlineChevronLeft className="text-xl" /></button>
          <button aria-label="Next slide" className="border border-white/40 p-3 transition hover:bg-white hover:text-[#17211f]" onClick={nextSlide}><HiOutlineChevronRight className="text-xl" /></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
