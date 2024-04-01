import React, { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [cartItems , setCartItems] = useState({});
  
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({ ...prev, [itemId]:1}))
            console.log("New Added" + itemId)
        }else{
            setCartItems((prev) => ({...prev , [itemId] : prev[itemId]+1}))
            console.log("Added")
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev , [itemId] : prev[itemId]-1}))
        console.log("Removed")
    }
    
    const getTotalCartAmount = () => {
        let totalAmt = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = food_list.find((product) => product.id === itemId);
                totalAmt += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmt;
    };


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
