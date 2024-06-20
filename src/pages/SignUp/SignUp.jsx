import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
          };
          fetch(`https://click2buy-api.sifatniloy.top/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
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
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
    // reset();
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
              Join us today and unlock exclusive deals, personalized
              recommendations, and a seamless shopping experience! Sign up now
              to stay updated with the latest trends, enjoy faster checkouts,
              and track your orders effortlessly. Your next best purchase is
              just a click away!
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
                  placeholder="name"
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
                  <span className="text-red-600">{errors.name?.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo url</span>
                </label>
                <input
                  type="text"
                  placeholder="upload your photo"
                  className="input input-bordered"
                  {...register("photoURL", {
                    // required: "photourl is required",
                  })}
                />
                {errors.photoURL && (
                  <span className="text-red-600">photourl is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email?.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
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
                  <span className="text-red-600">
                    {errors.password?.message}
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                Already have an account?
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
