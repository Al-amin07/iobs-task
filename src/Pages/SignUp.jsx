import { Link, useNavigate } from "react-router-dom";
import hero from "../assets/chair.png";
import icon from "../assets/icon.png";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import GetImage from "../components/GetImage";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      toast.success("Login Successfull!!!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const firstName = e.target.fname.value || "";
    const lastName = e.target.lname.value || "";
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];
    const terms = e.target.terms.checked;

    if (!terms) {
      toast.error("Please accept terms and condition");
      setLoading(false);
      return;
    }
    // console.log(email, password, firstName, lastName);
    try {
      const image = await GetImage(photo);
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(firstName + " " + lastName, image);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" flex items-center ">
      <div className="flex  w-[1024px] mx-auto  ">
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
          <div className="w-full  bg-[#F5F5F5] p-8">
            <h2 className="text-2xl font-bold text-center mb-2">Welcome To</h2>
            <h2 className="text-4xl font-bold text-center">
              {" "}
              Furni<span className="text-blue-600">Flex</span>
            </h2>
            <p className="text-center text-sm  text-gray-700 mb-6 mt-2">
              Signup for purchase your desire products
            </p>

            <form onSubmit={handleSignUp}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="fname"
                  placeholder="First name (optional)"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last name (optional)"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="file"
                  name="photo"
                  required
                  placeholder=""
                  className="w-full p-2 border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4 relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {show ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <input
                  name="terms"
                  type="checkbox"
                  id="terms"
                  className="mr-2"
                />
                <label className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600">
                    Terms & Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded mb-4 hover:bg-gray-800 disabled:bg-gray-800 transition"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin m-auto" size={24} />
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
            <div className="flex justify-between items-center mb-4 gap-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn flex-1 bg-white w-full "
              >
                <FcGoogle size={24} />
                Sign in with Google
              </button>
              <button className="btn flex-1 bg-white  w-full">
                <GrApple size={24} />
                Sign in with Apple
              </button>
            </div>

            <p className="text-center text-sm">
              Have an account?{" "}
              <Link to={"/login"} className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div
          className="w-1/2 bg-cover bg-center flex items-center justify-center relative min-h-screen bg-opacity-100 object-cover"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <img src={icon} alt="icon" className="h-20 w-20 mx-auto mb-3" />
            <h1 className="text-4xl font-bold">
              Furni<span className="text-blue-600">Flex</span>
            </h1>
            <p className="mt-4 text-[#C8C4C4] px-20">
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
