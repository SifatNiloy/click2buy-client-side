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
      return res.data;
    },
  });
  const customStyle = {
    marginTop: "-300px"
  };
  return (
    <div style={customStyle}>
      <h2 className="font-bold text-3xl mb-6">Admin Home</h2>
      <div className="stats bg-primary text-primary-content ">
        <div className="stat">
          <div className="stat-title text-white text-2xl font-bold">
            Total users
          </div>
          <div className="stat-value text-white text-2xl font-bold">
            {stats?.users}
          </div>
        </div>
        <div className="border-l border-white h-100 "></div>
        <div className="stat">
          <div className="stat-title  text-white text-2xl font-bold">
            Total Products
          </div>
          <div className="stat-value  text-white text-2xl font-bold">
            {stats.products}
          </div>
        </div>
        <div className="border-l border-white h-100 "></div>
        <div className="stat">
          <div className="stat-title  text-white text-2xl font-bold">
            Total Orders
          </div>
          <div className="stat-value  text-white text-2xl font-bold">
            {stats.orders}
          </div>
        </div>
        <div className="border-l border-white h-100 "></div>
        <div className="stat">
          <div className="stat-title  text-white text-2xl font-bold">
            Total Ordered price
          </div>
          <div className="stat-value  text-white text-2xl font-bold">
            {stats.totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
