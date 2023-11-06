import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo/job_haven_1.png";
import google from "../../assets/image/google1.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
    .then((result) => {
        
        if (result.user) {
          return (
            Swal.fire(
              "Log In successful",
              "Thank you to login our website",
              "success"
            ) && navigate(location?.state ? location.state : "/")
          );
        }
      })
      .catch(() => {
        setErrorMsg("Invalid email or password");
      });
    e.target.reset();
  };

  const handleGoogleLogin = () => {
      googleSignIn().then(() => {
        Swal.fire(
          "Log In successful",
          "Thank you to login our website",
          "success"
        ) && navigate(location?.state ? location.state : "/")
      })
  }

  return (
    <div className="flex flex-row-reverse justify-center items-center min-h-[80vh] gap-6">
      <Helmet><title>Job Heaven | Login</title></Helmet>
      <div
        className="w-1/2 bg-orange-400 h-[90vh] flex pt-16 justify-center rounded-l-full"
        //   style={{backgroundImage: `url(${background})`}}
      >
        <div>
          <div>
            <img src={logo} alt="" className="w-2/4 mx-auto" />
          </div>
          <div className="text-center space-y-7">
            <h2 className="text-5xl uppercase  font-bold text-blue-950 mt-10">
              Hello !
            </h2>
            <h2 className="text-lg font-semibold">
              If you are new in this Community please
            </h2>
            <Link
              to="/registration"
              className="btn btn-outline rounded-full text-lg font-semibold w-48"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl uppercase text-center font-bold text-blue-950 mb-10 dark:text-orange-500">
            Sign In
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          
          <p className="text-red-700 text-sm font-semibold font-mono py-2">
            {errorMsg}
          </p>
          <button
            type="submit"
            className="btn bg-orange-500 text-base-100 w-full hover:bg-orange-900"
          >
            Submit
          </button>
        </form>
        <div className="mt-5 text-center text-xl">
          <h1>or</h1>
          <p className="font-semibold">Login from</p>
          <div onClick={handleGoogleLogin} className="btn btn-outline mt-2 w-full">
            <img src={google} alt="" className="w-20"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
