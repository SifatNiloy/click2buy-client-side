import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setError("");
    setSuccessMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!editedUser.email.includes("@")) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (editedUser.password && editedUser.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://click2buy-backend.sifatniloy.top/api/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editedUser),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setUser(data);
      setIsEditing(false);
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      setError("Error updating profile. Please try again.");
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-20 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User Profile"
            aria-label="User Profile Image"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayName">
            User Name
          </label>
          {isEditing ? (
            <input
              type="text"
              name="displayName"
              id="displayName"
              value={editedUser.displayName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:border-blue-500"
              aria-label="Edit Display Name"
            />
          ) : (
            <p className="text-gray-900" id="displayName">
              {user?.displayName || "Anonymous User"}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            User Email
          </label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              id="email"
              value={editedUser.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:border-blue-500"
              aria-label="Edit Email"
            />
          ) : (
            <p className="text-gray-900" id="email">
              {user?.email || "No email provided"}
            </p>
          )}
        </div>
        {isEditing && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={editedUser.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:border-blue-500"
              aria-label="Edit Password"
            />
            <p className="text-sm text-gray-500 mt-1">Leave blank if you don't want to change the password.</p>
          </div>
        )}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
        <div className="flex justify-center mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading}
                aria-label="Save Changes"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleEditToggle}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                aria-label="Cancel Editing"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              aria-label="Edit Profile"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
