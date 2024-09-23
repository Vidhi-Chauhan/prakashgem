import React, { useEffect, useState } from "react";
import { IoSearch, IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo-transparent-png.png";

import "../main.js";

const MainHeader = () => {
  const placeholders = ["Gemstone...", "Rudraksha...", "Mala..."];
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % placeholders.length;
      setPlaceholder(placeholders[currentIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="sticky top-0 main-menu desktop-menu">
        <div className="top-heading">
          Sale Offer Upto 15% Off On Sale Item !
        </div>
        <nav className="bottom-nav">
          <div className="menu-container  flex items-center justify-center py-2">
            <a href="/">
              <img src={logo} alt="" className="logo" />
            </a>
            <ul className="flex space-x-4 menu-list">
              <li>
                <a href="#" className="menu-item" id="categories">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="menu-item" id="store">
                  Store
                </a>
              </li>
              <li className="group relative">
                <Link to="/listing" className="menu-item" id="gemstones">
                  Gemstones
                </Link>
                <div className="mega-menu absolute  mt-2 hidden group-hover:block bg-white p-4 border border-gray-200">
                  <div className="sub-menu">
                    <div className="grid grid-cols-5 gap-4">
                      <div className="sub-cat">
                        <h3 className="font-bold">
                          Zodiac Stones (Rashi Ratna)
                        </h3>
                        <ul className="mt-2">
                          <li>
                            <a href="#" className="submenu-item">
                              Blue Sapphire (Neelam)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Cats Eye
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Emerald (Panna)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Hessonite (Gomed)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Pearl (Moti)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Ruby (Manik)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Red Coral (Moonga)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              White Sapphire
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Yellow Sapphire - Pukhraj
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="sub-cat">
                        <h3 className="font-bold">Popular Vedic Gems</h3>
                        <ul className="mt-2">
                          <li>
                            <a href="#" className="submenu-item">
                              Amethyst
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Citrine (Sunela)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Fire Opal
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Garnet
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Iolite (Neeli)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Navratna
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Opal
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Peridot
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Pitambari Neelam
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Turquoise
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              White Coral
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Yellow Topaz
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Zircon
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="sub-cat">
                        <h3 className="font-bold">Exclusive Gemstones</h3>
                        <ul className="mt-2">
                          <li>
                            <a href="#" className="submenu-item">
                              Alexandrite
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Burmese Ruby
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Colombian Emerald
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Cornflower Blue Sapphire
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Kashmir Blue Sapphire
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              No Oil Emerald
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Panjshir Emerald
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Padparadscha Sapphire
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Paraiba Tourmaline
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Pigeon Blood Ruby
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Pink Sapphire
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Royal Blue Sapphire
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Tanzanite
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="sub-cat">
                        <h3 className="font-bold">Other Gemstones</h3>
                        <ul className="mt-2">
                          <li>
                            <a href="#" className="submenu-item">
                              Amber
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Ametrine
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Aquamarine
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Blue Topaz
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Kyanite
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Lapis Lazuli
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Moldavite
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Moonstone
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Star Ruby
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Tourmaline
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Spinel
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Blue Zircon
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold">Special Collection</h3>
                        <ul className="mt-2">
                          <li>
                            <a href="#" className="submenu-item">
                              Matched Pairs
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Gemstone Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Parcel Lots
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Fancy Cuts
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Carved Gemstones
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Coral Ganesha
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              GRS Certified Gemstones
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              GIA Certified Gemstones
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              Gubelin Certified Gemstones
                            </a>
                          </li>
                          <li>
                            <a href="#" className="submenu-item">
                              IGI Certified Gemstones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#" className="menu-item" id="rudrakshas">
                  Rudrakshas
                </a>
              </li>
              <li className="group relative">
                <a href="#" className="menu-item" id="mala">
                  Mala
                </a>
                <ul className="absolute left-0 mt-2 hidden bg-white group-hover:block w-48">
                  <li>
                    <a href="#" className="submenu-item" id="japa-mala">
                      Japa Mala
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about" className="menu-item" id="about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="menu-item" id="contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <form className="flex items-center max-w-md submit-form">
            <input
              type="text"
              placeholder={`Search ${placeholder}`}
              className="w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 text-white rounded-r-md border border-blue-500 hover:bg-blue-600 submit-btn"
            >
              <IoSearch className="ml-2" />
            </button>
          </form>
          <div className="icon-container flex justify-center space-x-4">
            {/* <LuRefreshCcw className="icon" />
          <FaRegHeart className="icon" />
          <IoPersonOutline className="icon" />
          <IoCartOutline className="icon" /> */}
            <a href="">
              <i class="fa-regular fa-heart"></i>
            </a>
            <a href="">
              <i class="fa-regular fa-user"></i>
            </a>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default MainHeader;
