import SectionTitle from "../../components/SectionTitle";

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
    <div>
      <SectionTitle
        heading="Testimonials"
        subheading="What Our Clients Say"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="m-24 flex flex-col items-center">
              <Rating
                className="text-center"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.description}</p>
              <h2 className="text-lg">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
