import hero from "../assets/chair1.png";
import PropTypes from 'prop-types';
import { ImSpinner9 } from "react-icons/im";
const CartCard = ({ item, handleDelete, handleCartQuantity, isLoading }) => {
  return (
    <div className=" hover:shadow-lg rounded-md py-3 bg-white px-4 relative">
     
     <div className="flex gap-10 items-center ">
        <div className="flex items-center gap-1 h-12 border rounded-md py-1 ">
          <button disabled={item?.quentity === 1} onClick={() => handleCartQuantity(item?.itemId, false)}  className="text-3xl px-3 hover:bg-base-300 rounded-lg cursor-pointer ">-</button>
          <h2 className=" text-3xl font-medium disabled:cursor-not-allowed">{item?.quentity}</h2>
          <h2 onClick={() => handleCartQuantity(item?.itemId, true)} className="text-3xl px-3 hover:bg-base-300 rounded-lg cursor-pointer ">+</h2>
        </div>
        <div className="flex gap-2">
          <img src={hero} className="h-28 w-28 bg-base-200 p-4 rounded-xl" alt="" />
        <h2 className="text-lg font-bold mt-3">{item?.name}</h2>
        </div>
      </div>
      <h2 onClick={() => handleDelete(item?.itemId)} className="text-4xl absolute btn btn-ghost right-0 top-0 font-light text-slate-600">X</h2>
      <h2 className="text-xl text-end font-semibold ">€ {Number(item?.price * item?.quentity).toFixed(2)}</h2>
   
    </div>
  );
};

CartCard.propTypes = {
    item: PropTypes.object,
    handleDelete: PropTypes.func,
    handleCartQuantity: PropTypes.func,
    isLoading: PropTypes.bool,
}

export default CartCard;
