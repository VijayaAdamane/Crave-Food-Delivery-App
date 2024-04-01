import { useState } from "react";
import { assets } from "../assets/assets";
import Searchbar from "./Search/Searchbar";
import { Link } from "react-router-dom";

export default function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="h-[5rem] w-full flex flex-row justify-between px-8 md:px-16 lg:px-24 xl:px-32 nav ">
      <Link to='/Crave-Food-Delivery-App/'>
        <img src={assets.logo} className="h-[4rem] self-center py-2" alt="Logo" />
        </Link>
      <ul className="hidden md:flex flex-row justify-evenly w-[400px] ">
        <Link
          className={menu =="Home" ? "text-white text-[15px] self-center border-b-2 cursor-pointer  lg:text-2xl" : "text-white text-[15px] self-center cursor-pointer lg:text-2xl" }
          onClick={() => setMenu("Home")}
        >Home</Link>
        <a
          href="#explore-menu"
          className={menu =="Menu" ? " lg:text-2xl text-white text-[15px] self-center border-b-2 cursor-pointer " : "text-white text-[15px] self-center cursor-pointer  lg:text-2xl" }
          onClick={() => setMenu("Menu")}
        >Menu</a>
        <a
          className={menu =="Services" ? " lg:text-2xl text-white text-[15px] self-center border-b-2 cursor-pointer " : " lg:text-2xl text-white text-[15px] self-center cursor-pointer" }
          onClick={() => setMenu("Services")}
        >Services</a>
        <a 
          className={menu =="Contact" ? " lg:text-2xl text-white text-[15px] self-center border-b-2 cursor-pointer " : "text-white text-[15px] self-center cursor-pointer  lg:text-2xl " }
          onClick={() => setMenu("Contact")}
          href="#contact-us"
        >Contact Us</a>
        
      </ul>
      <div className="flex flex-row items-center">
        <Searchbar className="hidden md:self-center" />
        <Link to='/Crave-Food-Delivery-App/cart'>
          <img
          src={assets.basket_icon}
          className="w-10 h-10 bg-red-100 rounded-full p-2 cursor-pointer ml-2"
          alt="Basket Icon" title="basket"
          />
          </Link>
        <img
          src={assets.fav_icon}
          className="w-10 h-10 bg-red-100 rounded-full p-2 cursor-pointer ml-2"
          alt="Favorite Icon" title="favorites"
        />
        <img
          src={assets.profile_icon}
          className="w-10 h-10 bg-red-100 rounded-full p-2 cursor-pointer ml-2"
          alt="Profile Icon" title="Sign-up" onClick={() =>  setShowLogin(true)}
        />
      </div>
    </div>
  );
}


