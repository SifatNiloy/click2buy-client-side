import React from "react";
import { MdDelete } from "react-icons/md";
import useCart from "../../hooks/useCart";

const MyOrders = () => {
  const [orders] = useCart();
  const total = orders.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <h2>My Orders</h2>
      <h2>Total items: {orders.length}</h2>
      <h2>total price: ${total} </h2>
      <button className="btn btn-sm btn-primary">Pay</button>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product image</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{order.name}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">${order.price}</div>
                  </div>
                </td>

                <th>
                  <button className="btn btn-ghost btn-lg">
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
