import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access-token");
  const {
    data: orders = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
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
