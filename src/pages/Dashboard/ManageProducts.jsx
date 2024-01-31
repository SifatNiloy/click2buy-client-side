import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const {
    data: productsData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data.products);
    },
  });

  const handleDelete = (product) => {
    console.log(product._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${product._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-green-800">
        Total Products: {products.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product image</th>
              <th>Product Name</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.img} alt="photo" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.seller}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <th>
                  <button
                    onClick={() => handleUpdate(product)}
                    className="btn btn-ghost btn-lg text-green-600"
                  >
                    <GrUpdate />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(product)}
                    className="btn btn-ghost btn-lg text-red-500"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
