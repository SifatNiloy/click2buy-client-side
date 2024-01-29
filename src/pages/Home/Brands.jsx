
import apple from "../../assets/brands/apple.jpg";
import samsung from "../../assets/brands/samsung.jpg";
import sony from "../../assets/brands/sony.jpg";
import xiaomi from "../../assets/brands/xiaomi.jpg";
import nike from "../../assets/brands/nike.jpg";

const Brands = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="my-24 mx-12"
    >
      <div className="flex my-6">
        <h2 className="text-3xl font-bold">Explore Popular Brands |</h2>
        <p className="text-3xl ml-6">
          See All 
        </p>
      </div>
      <div className="grid md:grid-cols-5 gap-10">
        <div>
          <div className="rounded-products">
            <img src={apple} alt="" />
            <p>Apple</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={samsung} alt="" />
            <p>Samsung</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={sony} alt="" />
            <p>Sony</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={xiaomi} alt="" />
            <p>Xiaomi</p>
          </div>
        </div>
        <div>
          <div className="rounded-products">
            <img src={nike} alt="" />
            <p>Nike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;