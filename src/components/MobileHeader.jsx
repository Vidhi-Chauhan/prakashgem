import React, { useState } from "react";
import {
  IoSearch,
  IoPersonOutline,
  IoCartOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md"; // Dropdown icon

const MobileHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      <section className="sticky top-0 main-menu mobile-header">
        <div className="top-heading">Sale Offer Upto 15% Off On Sale Item!</div>
        <nav className="bottom-nav">
          <div className="menu-container flex items-center justify-between py-2 px-4">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>

          {/* Sliding Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="menu-content overflow-y-auto">
              {/* Close icon inside the menu */}
              <button className="close-menu" onClick={closeMobileMenu}>
                <IoClose size={24} />
              </button>
              <ul className="flex flex-col space-y-2 mt-14">
                <li>
                  <Link to="/" className="menu-item" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                {/* Gemstones Category */}
                <li className="relative">
                  <Link
                    to="#"
                    className="menu-item flex items-center justify-between"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubMenu("gemstones");
                    }}
                  >
                    Gemstones
                    <MdArrowDropDown
                      className={`ml-2 transition-transform ${
                        openSubMenu === "gemstones" ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  {openSubMenu === "gemstones" && (
                    <div className="sub-menu shadow-md">
                      <h3 className="font-bold">Zodiac Stones (Rashi Ratna)</h3>
                      <ul className="mt-2">
                        <li>
                          <Link to="/listing" className="submenu-item">
                            Blue Sapphire (Neelam)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Cats Eye
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Emerald (Panna)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Hessonite (Gomed)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Pearl (Moti)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Ruby (Manik)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Red Coral (Moonga)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            White Sapphire
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Yellow Sapphire - Pukhraj
                          </Link>
                        </li>
                      </ul>

                      <h3 className="font-bold mt-4">Popular Vedic Gems</h3>
                      <ul className="mt-2">
                        <li>
                          <Link to="#" className="submenu-item">
                            Amethyst
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Citrine (Sunela)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Fire Opal
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Garnet
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Iolite (Neeli)
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Navratna
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Opal
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Peridot
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Pitambari Neelam
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Turquoise
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            White Coral
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Yellow Topaz
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Zircon
                          </Link>
                        </li>
                      </ul>

                      <h3 className="font-bold mt-4">Exclusive Gemstones</h3>
                      <ul className="mt-2">
                        <li>
                          <Link to="#" className="submenu-item">
                            Alexandrite
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Burmese Ruby
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Colombian Emerald
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Cornflower Blue Sapphire
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Kashmir Blue Sapphire
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            No Oil Emerald
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Panjshir Emerald
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Padparadscha Sapphire
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Paraiba Tourmaline
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Pigeon Blood Ruby
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Pink Sapphire
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Royal Blue Sapphire
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Tanzanite
                          </Link>
                        </li>
                      </ul>

                      <h3 className="font-bold mt-4">Other Gemstones</h3>
                      <ul className="mt-2">
                        <li>
                          <Link to="#" className="submenu-item">
                            Amber
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Ametrine
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Aquamarine
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Blue Topaz
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Kyanite
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Lapis Lazuli
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Moldavite
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Moonstone
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Star Ruby
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Tourmaline
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Spinel
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Blue Zircon
                          </Link>
                        </li>
                      </ul>

                      <h3 className="font-bold mt-4">Special Collection</h3>
                      <ul className="mt-2">
                        <li>
                          <Link to="#" className="submenu-item">
                            Matched Pairs
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Gemstone Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Parcel Lots
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Fancy Cuts
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Carved Gemstones
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Coral Ganesha
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            GRS Certified Gemstones
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            GIA Certified Gemstones
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Gubelin Certified Gemstones
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            IGI Certified Gemstones
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Rudrakshas Category */}
                <li className="relative">
                  <Link
                    to="#"
                    className="menu-item flex items-center justify-between"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubMenu("rudrakshas");
                    }}
                  >
                    Rudrakshas
                    <MdArrowDropDown
                      className={`ml-2 transition-transform ${
                        openSubMenu === "rudrakshas" ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  {openSubMenu === "rudrakshas" && (
                    <div className="sub-menu shadow-md">
                      <ul className="mt-2">
                        <li>
                          <Link to="#" className="submenu-item">
                            Mukhi Rudraksha
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Mukhi Rudraksha
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Mukhi Rudraksha
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Mukhi Rudraksha
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Mukhi Rudraksha
                          </Link>
                        </li>

                        <li>
                          <Link to="#" className="submenu-item">
                            Gauri Shankar Rudraksha
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Indra Rudraksha
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Panchmukhi Rudraksha
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Mala Category */}
                <li className="relative">
                  <Link
                    to="#"
                    className="menu-item flex items-center justify-between"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubMenu("mala");
                    }}
                  >
                    Mala
                    <MdArrowDropDown
                      className={`ml-2 transition-transform ${
                        openSubMenu === "mala" ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  {openSubMenu === "mala" && (
                    <div className="sub-menu shadow-md">
                      <ul className="mt-2">
                        <li>
                          <Link to="#" className="submenu-item">
                            Japa Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Tulsi Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Sandalwood Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Rudraksha Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Crystal Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Gemstone Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Rosewood Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Lava Stone Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Onyx Mala
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="submenu-item">
                            Quartz Mala
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Additional Categories */}
                <li>
                  <Link
                    to="/about"
                    className="menu-item"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="menu-item"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Search Form */}
          <form className="flex items-center max-w-md submit-form mx-auto my-4">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-r-md border border-blue-500 hover:bg-blue-600 submit-btn"
            >
              <IoSearch className="ml-2" />
            </button>
          </form>

          {/* Icon Container */}
          <div className="icon-container flex justify-center space-x-4">
            <Link to="/favorites mt-2">
              <i className="fa-regular fa-heart"></i>
            </Link>
            <Link to="/profile">
              <IoPersonOutline className="icon" />
            </Link>
            <Link to="/cart">
              <IoCartOutline className="icon" />
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default MobileHeader;
