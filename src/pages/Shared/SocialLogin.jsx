import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("Redirecting from:", from);

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      const loggedInUser = result.user;
      console.log('Logged in user:', loggedInUser);

      // Check if email is present before saving
      if (!loggedInUser.email) {
        throw new Error("Email is not available");
      }

      // Save user data
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL,
      };

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      });

      if (response.ok) {
        navigate(from, { replace: true });
      } else if (response.status === 400) {
        console.error("User already exists");
        // Handle user already exists case, maybe notify the user
      } else {
        console.error("Failed to save user:", response.statusText);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full"
      >
        <FaGoogle /> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
