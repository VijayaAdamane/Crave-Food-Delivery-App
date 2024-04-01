import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="bg-slate-800 p-10 text-teal-50 " id="contact-us">
      <div className="flex flex-col justify-evenly p-5  md:flex-row">
        <div className="pb-4 border-b-1">
          <img src={assets.logo} className="w-30 h-20"></img>
          <p className="text-xl font-semibold">
            Your Cravings Answered, Delivered to Your Door
          </p>
          <div className="flex flex-row gap-3 mt-5">
            <img className="w-10" src={assets.facebook_icon}></img>
            <img className="w-10" src={assets.linkedin_icon}></img>
            <img className="w-10" src={assets.twitter_icon}></img>
          </div>
        </div>
        <div className="pt-5 pb-4 border-b-1">
          <h2 className="font-bold text-2xl mb-5">AVIAT COMPANY</h2>
          <ul className="text-lg ">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="pb-4 pt-5">
          <h2 className="font-bold text-2xl mb-5">Get In Touch</h2>
          <ul>
            <li>+91 8956296372</li>
            <li>adamanevijaya75@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-[80vw] mx-auto"></hr>
      <p className="text-center mt-5">Copyright @2024 - All rights Reserved</p>
    </div>
  );
}
