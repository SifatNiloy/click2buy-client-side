import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data();
    },
  });
  return (
    <div>
      <h2>Admin Home</h2>
    </div>
  );
};

export default AdminHome;
