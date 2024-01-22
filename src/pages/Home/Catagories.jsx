import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import smartphone from "../../../assets/catagories/smartphone.jpg";
import sneckers from "../../../assets/catagories/sneckers.jpg";
import watch from "../../../assets/catagories/watch.jpg";
import "./Catagories.css";
const Catagories = () => {
  return (
    <div className="my-12 mx-12">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex my-6"
      >
        <h2 className="text-3xl font-bold">Explore Popular Catagories |</h2>
        <p className="text-3xl ml-6">
          {" "}
          See All <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </p>
      </div>
      <div data-aos="fade-up" className="grid md:grid-cols-5 gap-10">
        <div>
          <div className="rounded-products">
            <img src={sneckers} alt="" />
            <p>Sneckers</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={watch} alt="" />
            <p>Watches</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={smartphone} alt="" />
            <p>Smartphones</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={sneckers} alt="" />
            <p>Sneckers</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={watch} alt="" />
            <p>Watches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
