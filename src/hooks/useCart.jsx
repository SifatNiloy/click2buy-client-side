import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const {
    data: orders = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/orders?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [orders, refetch];
};

export default useCart;
