import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  
  useEffect(() => {
    // Load captcha only if it's not already loaded
    if (!captchaRef.current || !captchaRef.current.loaded) {
      loadCaptchaEnginge(6);
      captchaRef.current.loaded = true; // Mark as loaded
    }
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    try {
      const result = await signIn(email, password);
      const user = result.user;

      // Display success message
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User logged in successfully",
        showConfirmButton: false,
        timer: 1000,
      });

      // Store token in localStorage
      localStorage.setItem("access-token", result.token);

      // Redirect to previous or home page
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);

      // Display error message
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: error.message,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="Type the text"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-3"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                  disabled={disabled}
                />
              </div>
              <p>
                New to click2buy?{" "}
                <Link className="text-warning" to="/signup">
                  Please sign up
                </Link>{" "}
              </p>
              <div className="divider">OR</div>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
