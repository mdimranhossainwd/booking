import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, googleLogin, handleUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        handleUpdate(name);
        const user = result.user;
        console.log("created user", user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto">
      <div className="mt-8 mb-24">
        <div className="flex items-center justify-around flex-col lg:flex-row">
          <div className="mr-12">
            <img
              src="https://i.pinimg.com/564x/f5/83/a0/f583a0cd534d5bf48c1f67308e438179.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 md:w-1/2 py-6 border border-[#D0D0D0]">
            <h2 className="text-4xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="t py-4 rounded-md text-white bg-[#FF3363]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>

            <button
              onClick={googleLogin}
              className="py-4 mx-8 block mb-8 -mt-5 rounded-md text-white bg-[#FF3363]"
            >
              Google
            </button>
            <p className="text-center font-medium text-lg">
              Already Have an Account ?{" "}
              <Link to="/login" className="text-[#FF3363]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
