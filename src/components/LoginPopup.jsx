import { useState } from "react";
import { assets } from "../assets/assets";

export default function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign-up");

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">

      <form className="login-popup-container bg-gray-200 rounded-lg w-80 md:w-[50vw] lg:w-[40vw] ">
        <div className="login-popup-title mx-5 flex justify-between my-5 ">
          <h2 className="text-4xl font-bold ">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-30 h-30 p-3"
          />
        </div>
        <div className="login-popup-inputs p-3 ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required className="w-[90%] p-3 bg-gray-200 border border-gray-800 mb-3 " />
          )}
          <input type="email" placeholder="Your email" required 
          className="w-[90%] p-3 bg-gray-200 border border-gray-800 mb-3  " />
          <input type="password" placeholder="Password" required 
          className="w-[90%] p-3 bg-gray-200 border border-gray-800  "  />
        </div>

        <button className="w-[80%] p-3 mx-5 text-white bg-[#EA3A36] mb-3 ">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition w-4/5 mx-auto md:flex gap-x-5 ">
          <input type="checkbox" required 
          />
          <p className="leading-tight">By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p className="w-4/5 mx-auto my-5">
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>{" "}
          </p>
        ) : (
          <p
            className="w-4/5 mx-auto my-5" >
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
}
