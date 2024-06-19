import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
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
    // Reseting editedUser state when toggling edit mode
    setEditedUser({
      displayName: user?.displayName || "",
      email: user?.email || "",
      password: "",
    });
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
      const token = localStorage.getItem("access-token");
      if (!token) {
        setError("Authentication token is missing.");
        return;
      }

      const updatedUserData = {};
      
      // Update display name if changed
      if (editedUser.displayName !== user.displayName) {
        await updateUserProfile(editedUser.displayName, user.photoURL);
        updatedUserData.displayName = editedUser.displayName;
      }

      // Update email if changed (Note: Firebase requires reauthentication for email updates)
      if (editedUser.email !== user.email) {
        setError("To update email, please use the Firebase Authentication API.");
        setIsLoading(false);
        return;
      }

      // Update password if provided
      if (editedUser.password) {
        // will implement my logic to update password if needed that involves using Firebase Auth API, handle reauthentication and update
        setError("To update password, please use the Firebase Authentication API.");
        setIsLoading(false);
        return;
      }

      setSuccessMessage("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      setError(`Error updating profile: ${error.message}`);
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

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
              placeholder="Leave blank if not changing"
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
