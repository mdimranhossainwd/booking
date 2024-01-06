import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
          <div className="card flex-shrink-0 w-1/2 py-6 border border-[#D0D0D0]">
            <h2 className="text-4xl font-bold text-center">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
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
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center font-medium text-lg">
              Have an Account ?{" "}
              <Link to="/signup" className="text-[#FF3364]">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
