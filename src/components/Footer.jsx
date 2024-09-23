import React from "react";
import logo from "../assets/logo-svg.svg";
import visa from "../assets/visa.png";

const Footer = () => {
  return (
    <>
      <footer className="mt-40">
        <div className="border-y-2	py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <!-- Logo Column --> */}
            <div className="footer-column">
              <a href="/">
                <img src={logo} alt="Logo" class="w-32 h-auto logo" />
              </a>
              <p className="pt-5">
                Prakash Gems Located in the holy city of Haridwar, Uttarakhand
                India. We are focused on providing the best products to you.
                Prakash gems are Passionate about Precious and Non Precious
                Gemstones and Jewelry, Rudraksha, Yantra, Parad and Sphatik
                Idols, Rosaries and All Other kinds Spiritual Articles.
              </p>
            </div>

            {/* <!-- Our Company Column --> */}
            <div className="footer-column">
              <h3 className="text-lg font-semibold mb-8">Our Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Product Checkout</a>
                </li>
                <li>
                  <a href="#">Shop Cart</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Details Column --> */}
            <div className="footer-column">
              <h3 className="text-lg font-semibold mb-8">Contact Details</h3>
              <p className="mb-4">Feel free to contact & reach us !</p>
              <p className="mb-4">
                Address : Prakash Jawaharat Kendra, Gali Ram Prasad, Opposite
                Mansa Devi Padal Marg, Upper Road Haridwar Uttarakhand.
              </p>
              <p className="mb-4">
                Email : prakashgemsstones@gmail.com / khurana.shivak@gmail.com
                Phone : +91-875-583-0399 / +91-953-630-3999
              </p>
            </div>

            {/* <!-- Useful Links Column --> */}
            <div className="footer-column">
              <h3 className="text-lg font-semibold mb-8">Useful Links</h3>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Buyer Protection</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-icon flex items-center justify-center space-x-4">
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            >
              <i class="fab fa-tiktok"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            >
              <i class="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="container mx-auto flex pb-4 items-center justify-between my-5 footer-2">
          <div className="bottom-footer">
            <a href="">Privacy Policy</a>
            <a href="">Support</a>
            <a href="">Terms & Conditions</a>
          </div>
          <div className="bottom-footer">
            {/* <img src={visa} alt="" className="w-40" /> */}
          </div>
          <div className="bottom-footer">
            <p>Copyright © 2024 Prakash Gem Stones. Powered by BDS Infotech</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
