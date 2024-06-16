import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Brands from "./Brands";
import Categories from "./Categories";
import LimitedProducts from "./LimitedProducts";
import Reviews from "./Reviews";
import NewsletterSignUp from "./NewsLetterSignUp";

const Home = () => {
  return (
    <div className="mx-auto ">
      <Helmet>
        <title>Click2buy | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <Brands />
      <LimitedProducts />
      <Reviews />
      <NewsletterSignUp/>
    </div>
  );
};

export default Home;
