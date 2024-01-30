import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="w-full px-24 my-12">
      <SectionTitle heading="Add product"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full my-2">
        <select
          {...register("firstName", { required: true })}
          className="select select-bordered w-full "
        >
          <option disabled selected>
            Select Catagory
          </option>
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
