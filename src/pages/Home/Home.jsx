import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Brands from "./Brands";
import Categories from "./Categories";
import LimitedProducts from "./LimitedProducts";
import Reviews from "./Reviews";
import NewsletterSignUp from "./NewsLetterSignUp";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Helmet>
        <title>Click2buy | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <Brands />
      <LimitedProducts />
      <Reviews />
      <NewsletterSignUp />
    </main>
  );
};

export default Home;
