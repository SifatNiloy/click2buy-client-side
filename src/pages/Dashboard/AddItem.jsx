import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_upload_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddItem = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_upload_token}`;
  // console.log(img_hosting_url);
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    console.log(formData);
    formData.append("image", data.file[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          //getting the image url
          const imgURL = imgData.data.display_url;
          // getting all product related data
          const { catagory, name, seller, price, stock } = data;
          // merging product data with image url into a single object named productItem
          const productItem = {
            catagory,
            name,
            seller,
            price: parseFloat(price),
            stock,
            image: imgURL,
          };
          console.log(productItem);
          axiosSecure.post("/products", productItem).then((data) => {
            console.log("after posting new product data", data.data);
            if (data.data.insertedId){
              reset();
              Swal.fire({
                title: "Added Successfully",
                text: "Your product has been added.",
                icon: "success",
              });
            }
          });
        }
      });
  };

  // console.log(img_upload_token);

  return (
    <div className="w-full px-24 my-12">
      <SectionTitle heading="Add product"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full my-2">
        <select
          defaultValue="Select Catagory"
          {...register("catagory", { required: true })}
          className="select select-bordered w-full "
        >
          <option disabled>Select Catagory</option>
          <option>Men's Sneaker</option>
          <option>Women's Sneaker</option>
          <option>Men's Pants</option>
          <option>Bag</option>
          <option>Excel Backpack</option>
          <option>Cap</option>
          <option>Bottle</option>
          <option>Electronics</option>
        </select>
        <div className="flex">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Product Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Seller</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("seller", { required: true, maxLength: 80 })}
            />
          </label>
        </div>
        <div className="flex">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("price", { required: true, maxLength: 80 })}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Stock</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("stock", { required: true, maxLength: 80 })}
            />
          </label>
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select your file</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            {...register("file", { required: true })}
          />
        </label>
        <input
          className="btn btn-primary my-2"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
