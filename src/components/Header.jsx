import React from "react";
import logo from "../assets/logo.png";
import { IoSearch, IoPersonOutline, IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between top-header">
        <img className="w-32 h-32" src={logo} alt="Logo" />
        <form className="flex items-center w-full max-w-md submit-form">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 text-white rounded-r-md border border-blue-500 hover:bg-blue-600 submit-btn"
          >
            <IoSearch className="ml-2" />
          </button>
        </form>
        <div className="icon-container flex items-center space-x-4">
          {/* <LuRefreshCcw className="icon" />
          <FaRegHeart className="icon" />
          <IoPersonOutline className="icon" />
          <IoCartOutline className="icon" /> */}
          <a href="">
            <i class="fa-solid fa-arrows-rotate"></i>
          </a>
          <a href="">
            <i class="fa-regular fa-heart"></i>
          </a>
          <a href="">
            <i class="fa-regular fa-user"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
