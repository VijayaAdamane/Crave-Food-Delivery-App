import Navbar from "./Navbar";
import { useState } from "react";
import LoginPopup from './LoginPopup'
import { assets } from "../assets/assets";


export default function Header({setShowLogin}) {

  // const [showLogin , setShowLogin] = useState(false);

  return (
    <div className="relative w-[100vw] h-full font-IBMSans md:h-full lg:h-[100vh]">

      <img
        src={assets.header_img}
        className="absolute inset-0 w-full h-[100%] object-cover lg:w-full lg:h-[100vh]  lg:max-h-full lg:max-w-none lg:object-right z-0"
        alt="Background Image"
        />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className=" w-[90vw] mx-auto pt-10 px-4 sm:px-6  lg:px-3 relative z-20 ">
        <Navbar setShowLogin={setShowLogin}  />
        {/* { showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></> } */}
        <div className="mx-auto my-auto pt-10 pb-20 flex flex-col items-center  md:w-[100%] lg:mt-[20vh]">
          <h2 className=" w-90  text-white font-semibold text-4xl md:w-[100%] md:text-5xl text-center  uppercase   leading-relaxed md:leading-relaxed ">
            Your Cravings Answered, Delivered to Your Door
          </h2>
          <p
            className="text-white text-2xl text-center font-light md:text-2xl 
          px-3 md:leading-relaxed tracking-wide"
          >
            Experience culinary delight like never before with Crave. From
            classic favorites to exciting new discoveries, we deliver it all,
            straight to you.
          </p>
          <div className="mt-10 w-100 flex flex-col gap-3 justify-center text-2xl lg:flex-row">
            <button className="mr-4 border-white border-2 text-white rounded-full p-4 ">
              Today's Menu
            </button>
            <button className="border-white border-2 text-white rounded-full p-4">
              Special for you
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
