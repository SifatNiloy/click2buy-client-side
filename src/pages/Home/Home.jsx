import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Brands from "./Brands";
import Catagories from "./Catagories";
import LimitedProducts from "./LimitedProducts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="mx-auto container">
      <Helmet>
        <title>Click2buy | Home</title>
      </Helmet>
      <Banner />
      <Catagories />
      <Brands />
      <LimitedProducts />
      <Reviews />
    </div>
  );
};

export default Home;
