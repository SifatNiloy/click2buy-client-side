import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// react rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// import required modules

import { Navigation } from "swiper/modules";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <section className="bg-[#eeede6]">
      <div className="store-section">
      <div className="mb-10"><p className="eyebrow">Kind words</p><h2 className="section-heading">Real people, real favorites.</h2></div>
      <Swiper navigation={true} modules={[Navigation]} className="reviews-slider">
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="mx-auto flex max-w-3xl flex-col items-center px-10 py-8 text-center md:py-12">
              <Rating
                className="text-center"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="mt-6 text-2xl font-semibold leading-relaxed text-[#17211f] md:text-4xl">“{review.description}”</p>
              <h2 className="mt-7 text-lg font-bold text-[#0d7b72]">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
