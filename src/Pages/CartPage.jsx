import CartCard from "../components/CartCard";
import useAuth from "../hooks/useAuth";
import useAxiosCommon from "../hooks/useAxiosCommon ";
import useCart from "../hooks/useCart";
import toast from "react-hot-toast";

const CartPage = () => {
  const [carts, isLoading, refetch] = useCart();
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const handleDelete = async (itemId) => {
    try {
      const { data } = await axiosCommon.delete(
        `cart/${user?.email}/${itemId}`
      );
      console.log(data);
      if (data.modifiedCount) {
        toast.success("Item deleted from Cart");
        refetch();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCartQuantity = async (itemId, isIncrement) => {
    console.log(itemId, isIncrement);
    try {
      const { data } = await axiosCommon.patch(
        `/cart/${user?.email}/${itemId}`,
        { isIncrement }
      );
      console.log(data);
      if (data.modifiedCount) {
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

//   const totalPrice = carts.items.reduce((sum, item) => (sum + (item?.price * item?.quentity).toFixed(2)),0)

const totalPrice = carts?.items?.reduce((sum, item) => sum + (item.quentity * item?.price),0)
  return (
    <div className="flex gap-16 ">
      <div className="flex-1">
        <h2 className="text-3xl font-medium mb-6">An overview of your order</h2>
        <div className="space-y-5 p-5 bg-base-200  ">
          {
            carts?.items?.length === 0 && <h2 className="text-xl  font-mono">You Dont Add Any Item </h2>
          }
          {carts?.items?.map((item, ind) => (
            <CartCard
              handleDelete={handleDelete}
              handleCartQuantity={handleCartQuantity}
              key={ind + 10}
              item={item}
            />
          ))}
        </div>
      </div>
      <div className=" w-[380px]">
      <h2 className="text-3xl font-medium mb-6">Order details</h2>
      <div className="p-6 bg-base-200 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-slate-600">Subtotal</h2>
            <h2 className="text-xl text-slate-600">€ {totalPrice?.toFixed(2)}</h2>
          </div>
          <div className="flex justify-between items-center my-4">
            <h2 className="text-xl text-slate-600">Shipping</h2>
            <h2 className="text-xl text-slate-600">Free</h2>
          </div>
          <div className="flex justify-between items-center pb-5 border-b-2 ">
            <h2 className="text-xl text-slate-600">Estimated Tax</h2>
            <h2 className="text-xl text-slate-600">€ -</h2>
          </div>

          <div className="flex justify-between items-center my-4">
            <h2 className="text-2xl text-slate-800">Total</h2>
            <h2 className="text-2xl font-bold">€ {totalPrice?.toFixed(2)}</h2>
          </div>
          
      </div>
      <div className="mt-6">
        <button className="btn uppercase w-full bg-black text-white hover:bg-slate-700">Go To Checkout</button>
      </div>
      </div>
    </div>
  );
};

export default CartPage;
