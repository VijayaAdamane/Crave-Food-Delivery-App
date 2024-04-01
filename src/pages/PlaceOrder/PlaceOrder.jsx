import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";

export default function PlaceOrder() {
  const { cartItems, getTotalCartAmount } = useContext(StoreContext);

  const handleButtonClick = () => {
    toast.success("Order Placed!!");
  };

  return (
    <div>
      <div className="bg-gray-900">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Place Your Order</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required
            ></input>

            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required
            ></input>
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required
            ></input>
            <input
              type="tel"
              placeholder="Contact Number"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required
            ></input>
            <input
              type="tel"
              placeholder="Alternate Contact Number"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            ></input>
            <input
              type="text"
              placeholder="Any tip/extra addings"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            ></input>
          </div>

          <div className="w-[90vw] md:w-[95vw] \ flex flex-col-reverse m-3 p-3 md:p-10 md:flex-row md:gap-20 rounded-3xl">
            <div className="Order -details flex-1">
              <h4 className="font-bold text-2xl mb-4 ">Cart Totals</h4>
              <div className="flex flex-row justify-between p-2">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr className=" bg-slate-900" />
              <div className="flex flex-row justify-between p-2">
                <p>Delivery </p>
                <p>{getTotalCartAmount() >0 ? 40 : 0}</p>
              </div>
              <hr className=" bg-slate-900" />

              <div className="flex flex-row justify-between p-2">
                <p>Total</p>
                <p>{getTotalCartAmount()>0 ? getTotalCartAmount() + 40 : 0}</p>
              </div>
              <hr className=" bg-slate-900" />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"  onClick={handleButtonClick}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
