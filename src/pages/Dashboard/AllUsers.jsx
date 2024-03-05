import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleDelete = (user) => {
    console.log(user._id);
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
        fetch(`https://click2buy-backend.sifatniloy.top/users/${user._id}`, {
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

  // creating admin
  const createAdmin = async (user) => {
    try {
      const response = await fetch(
        `https://click2buy-backend.sifatniloy.top/users/admin/${user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        // Handle the case where the update was not successful
        console.error("Failed to update user role to Admin");
        return;
      }
      // Assuming the update was successful
      refetch();
      console.log("User role updated to Admin");
      Swal.fire({
        title: "Done",
        text: `${user.name} is an admin now`,
        icon: "success",
      });
    } catch (error) {
      // Handle any network or other errors
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>All Users</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-green-800">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>photo</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="photo" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "Admin" ? (
                    <>
                      <h2>Admin</h2>
                    </>
                  ) : (
                    <>
                      <h2>User</h2>
                    </>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg text-red-500"
                  >
                    <MdDelete />
                  </button>
                </th>
                <th>
                  {user.role === "Admin" ? (
                    <></>
                  ) : (
                    <>
                      <button
                        onClick={() => createAdmin(user)}
                        className="btn btn-ghost btn-lg text-red-500"
                      >
                        Make Admin
                      </button>
                    </>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
