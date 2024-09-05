import chair from "../assets/chair1.png";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosCommon from "../hooks/useAxiosCommon ";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
const Card = ({ data }) => {
  const { user } = useAuth();
  const [, , refetch] = useCart();
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCart = async () => {
    console.log(data.name);
    if (!user) {
      Swal.fire({
        title: "You are not Logged in!!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
    const cartDetails = {
      items: 
        {
          name: data?.name,
          image: data?.image,
          itemId: data?._id,
          quentity: 1,
          price: data?.current_price,
        },
      

      email: user?.email,
    };
    console.table(cartDetails);
    try {
      const { data } = await axiosCommon.post("/add-to-cart", cartDetails);
      console.log(data);
      if (data.insertedId || data.modifiedCount) {
        toast.success("Item Added to Cart!!!");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="p-3  border rounded-xl group hover:shadow-lg">
      <div className="bg-base-200 flex justify-center items-center">
        <img
          src={chair}
          alt=""
          className="object-cover group-hover:scale-110"
        />
      </div>
      <h2 className="text-xl font-medium mt-4 mb-2">{data?.name}</h2>

      <div className=" flex  gap-4">
        <h2 className=" text-lg font-bold">€{data?.current_price}</h2>
        <h2 className=" text-lg font-bold line-through text-slate-400">
          €{data?.prev_price}
        </h2>
        <h2 className=" text-lg font-bold text-red-600">
          {data?.discount}% OFF
        </h2>
      </div>
      <p className="text-slate-700  mb-3 line-clamp-2">{data?.description}</p>
      <button
        onClick={handleCart}
        className="btn w-full bg-black  hover:bg-slate-800 text-white"
      >
        Add to cart{" "}
      </button>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
