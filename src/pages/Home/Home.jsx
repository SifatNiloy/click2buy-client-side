import Banner from "./Banner";
import Brands from "./Brands";
import Catagories from "./Catagories";

const Home = () => {
  return (
    <div className="mx-auto container">
      <Banner />
      <Catagories />
      <Brands />

    </div>
  );
};

export default Home;
