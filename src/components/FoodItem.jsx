import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

export default function FoodItem({ id, name, price, description, image }) {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="w-[90%] bg-white flex flex-col border-gray-200 border-5  rounded-2xl pb-5 hover:border-gray-200 transform hover:scale-105 transition duration-300 ease-in-out md:w-[300px] ">
      <div className="relative">
        <img src={image} className="w-full"></img>
        <div className="absolute bottom-3 right-2 flex flex-col">
          {!cartItems[id] ? (
            <img 
              src={assets.add_icon_white}
              className="w-15 h-15 cursor-pointer"
              onClick={() => addToCart(id)
              }
            ></img>
          ) : (
            <div className="flex flex-row gap-1 bg-white rounded-3xl p-1">
              <img
              className=" w-15 h-15 cursor-pointer"
                src={assets.remove_icon_red}
                onClick={() => 
                  removeFromCart(id)
                }
              ></img>
                <p className="text-center my-auto font-bold" >{cartItems[id]}</p>
              <img
              className="w-15 h-15  cursor-pointer"
                src={assets.add_icon_green}
                onClick={() => 
                  addToCart(id)
                }
              ></img>
            </div>
          )}
        </div>
      </div>
      <div className="pt-2 pl-4 flex flex-row justify-between">
        <p className="font-bold text-2xl  text-gray-800">{name}</p>
        <img src={assets.rating_starts} className=" h-3 content-center"/>
      </div>
      <div className="text-lg text-gray-700 pl-4 pt-4 fkex">
        <p className="leading-tight pb-11">{description}</p>
        <p className="text-4xl  font-bold text-[#EA3A36] overflow-y-hidden">₹{price} </p>
      </div>
    </div>
  );
}
