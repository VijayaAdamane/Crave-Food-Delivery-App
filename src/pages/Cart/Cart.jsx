import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Navbar from "../../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

export default function Cart({ setShowLogin }) {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const Navigate = useNavigate();
  return (
    <div>
      <div className="bg-gray-900">
        <Navbar setShowLogin={setShowLogin} />
      </div>

      <div className="container mx-auto px-3 py-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-1">
            <h2 className="text-gray-900 font-bold ">Item</h2>
          </div>
          <div className="col-span-3">
            <h2 className="text-gray-900 font-bold ">Title</h2>
          </div>
          <div className="col-span-1">
            <h2 className="text-gray-900 font-bold ">Price</h2>
          </div>
          <div className="col-span-1">
            <h2 className="text-gray-900 font-bold ">Quantity</h2>
          </div>
          <div className="col-span-1">
            <h2 className="text-gray-900 font-bold ">Total</h2>
          </div>
          <div className="col-span-1">
            <h2 className="text-gray-900 font-bold ">Remove</h2>
          </div>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div
                key={index}
                className="grid grid-cols-8 gap-4 items-center my-4 border-b-3  "
              >
                <div className="col-span-1">
                  <img
                    src={item.image}
                    className="w-16 h-16 object-cover rounded-md"
                    alt={item.name}
                  />
                </div>
                <div className="col-span-3">
                  <p className="text-gray-900">{item.name}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-900">{item.price}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-900">{cartItems[item.id]}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-900">
                    ₹{item.price * cartItems[item.id]}
                  </p>
                </div>
                <div className="col-span-1">
                  <button
                    className="text-2xl text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="w-[90vw] md:w-[95vw] bg-blue-200 flex flex-col-reverse m-3 p-3 md:p-10 md:flex-row md:gap-20 rounded-3xl">
        <div className="Order -details flex-1">
          <h4 className="font-bold text-2xl mb-4 ">Cart Totals</h4>
          <div className="flex flex-row justify-between p-2">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr className=" bg-slate-900" />
          <div className="flex flex-row justify-between p-2">
            <p>Delivery </p>
            <p>{ getTotalCartAmount() > 0 ? 40 : 0}</p>

          </div>
          <hr className=" bg-slate-900" />

          <div className="flex flex-row justify-between p-2">
            <p>Total</p>
            <p>{getTotalCartAmount() > 0 ? getTotalCartAmount() + 40 : getTotalCartAmount()}</p>
          </div>
          <hr className=" bg-slate-900" />

          <button
            className="w-30 p-3 mx-5 text-white bg-[#EA3A36] my-3  justify-between"
            onClick={() => Navigate("/Crave-Food-Delivery-App/order")}
          >
            Proceed to checkout
          </button>
        </div>
        <div className="flex flex-col space-x-2 my-10 flex-1 ">
          <p className="text-gray-700">Have a promo code? Enter it here</p>
          <div>
            <input
              type="text"
              placeholder="PROMO CODE"
              className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></input>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
