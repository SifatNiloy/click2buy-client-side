import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const {
    data: orders = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return []; // Return an empty array if user.email is not available
      }
      const res = await fetch(
        `http://localhost:5000/orders?email=${user?.email}`,
        { headers: { authorization: `bearer ${token}` } }
      );
      return res.json();
    },
  });

  return [orders, refetch];
};

export default useCart;
