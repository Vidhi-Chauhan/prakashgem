import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./main.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";

import Whatsapp from "./components/Whatsapp.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProductListing from "./pages/ProductListing.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import MobileHeader from "./components/MobileHeader.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header></Header> */}
      <Router>
        <MainHeader />
        <MobileHeader />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listing" element={<ProductListing />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
