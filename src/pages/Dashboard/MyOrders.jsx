import React from "react";
import useCart from "../../hooks/useCart";

const MyOrders = () => {
  const [orders] = useCart();
  return (
    <div>
      <h2>My Orders</h2>
      <h2>Total items: {orders.length}</h2>
    </div>
  );
};

export default MyOrders;
