import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const captchaRef = useRef(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Load the captcha when component mounts
    loadCaptchaEnginge(6);
  }, []);

  const handlePhotoUpload = async (fileList) => {
    const img_upload_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_upload_token}`;

    if (fileList.length > 0) {
      const formData = new FormData();
      formData.append("image", fileList[0]);

      const response = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgData = await response.json();
      if (imgData.success) {
        return imgData.data.display_url;
      }
    }
    return "";
  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  const onSubmit = async (data) => {
    if (!captchaValid) {
      Swal.fire({
        icon: "error",
        title: "Captcha Error",
        text: "Please complete the captcha correctly.",
      });
      return;
    }

    if (data.password !== data.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Passwords do not match.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const imgURL = data.photo[0] ? await handlePhotoUpload(data.photo) : "";
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;

      await updateUserProfile(data.name, imgURL);

      const saveUser = {
        name: data.name,
        email: data.email,
        photo: imgURL,
      };

      const response = await axiosSecure.post("/users", saveUser);

      if (response.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Sign Up Error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Name cannot exceed 15 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/i,
                      message: "Invalid characters in name",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo (optional)</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("photo")}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password cannot exceed 20 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message:
                        "Password needs lowercase, uppercase, digit, and special character.",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-600">{errors.password.message}</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
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
                  className={`btn btn-primary ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  value="Sign Up"
                  disabled={isLoading || !captchaValid}
                />
              </div>
              <p>
                Already have an account?{" "}
                <Link className="text-warning" to="/login">
                  Please Login
                </Link>
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

export default SignUp;
