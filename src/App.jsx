import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="w-[100vw] scroll-remove">
        <ToastContainer/>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

        <Routes>
          <Route path="/Crave-Food-Delivery-App/" element={<Home setShowLogin={setShowLogin} />} />
          <Route path="/Crave-Food-Delivery-App/cart" element={<Cart setShowLogin={setShowLogin} />} />
          <Route path="/Crave-Food-Delivery-App/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
