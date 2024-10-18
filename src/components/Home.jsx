import React, { useEffect, useState } from "react";
import TabsetPanel from "./TabsetPanel";
import videoFile from "../assets/videos/jwelleryvideo3.mp4";
import "../main.js"; // If main.js is one level up
import connect from "../assets/connect-withus.webp";
import store from "../assets/Store.webp";
import { useCart } from "../context/CartContext";
import career from "../assets/career.jpeg";

import purposegem from "../assets/Gemstones/blue-sapphire/sapphire/blue-gem.webp";
import HomeSlider from "./HomeSlider";
import TestimonialSlider from "./TestimonialSlider";

const Home = () => {
  const { addToCart } = useCart();

  const [isActive, setIsActive] = useState(false); // Track if input is active
  const [inputValue, setInputValue] = useState(""); // Track input value
  const [cities] = useState([
    "Agartala",
    "Agra",
    "Ahmedabad",
    "Aizawl",
    "Ajmer",
    "Aligarh",
    "Alwar",
    "Ambala",
    "Amritsar",
    "Anand",
    "Anantapur",
    "Asansol",
    "Aurangabad",
    "Balasore",
    "Bareilly",
    "Bathinda",
    "Belgaum",
    "Bengaluru",
    "Berhampore",
    "Berhampur",
    "Bhilai",
    "Bhopal",
    "Bhubaneswar",
    "Bhagalpur",
    "Bhavnagar",
    "Bilaspur",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Darbhanga",
    "Dehradun",
    "Delhi/NCR",
    "Dimapur",
    "Erode",
    "Gandhinagar",
    "Gorakhpur",
    "Gwalior",
    "Haridwar",
    "Hosur",
    "Howrah",
    "Jammu",
    "Jodhpur",
    "Kangra",
    "Kanpur",
    "Kolhapur",
    "Kota",
    "Kurnool",
    "Mathura",
    "Moradabad",
    "Muzaffarpur",
    "Nanded",
    "Nellore",
    "Pondicherry",
    "Rohtak",
    "Salem",
    "Sambalpur",
    "Shimla",
    "Tirunelveli",
    "Tirupati",
    "Tirupur",
    "Udaipur",
    "Ujjain",
    "Vapi",
    "Warangal",
    "Yamuna Nagar",
  ]);

  // Filter cities based on input
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputFocus = () => {
    setIsActive(true); // Set active state when input is focused
  };

  const handleInputBlur = () => {
    // Delay the hiding of the dropdown to allow click event to register
    setTimeout(() => {
      setIsActive(false);
    }, 200);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsActive(true); // Update input value on change
  };

  const handleCitySelect = (city) => {
    setInputValue(city); // Set input value to selected city
    setIsActive(false); // Close the dropdown
  };

  return (
    <section className="homepage">
      <div className="homepageslider">
        <HomeSlider />
      </div>
      <div className="category-section pb-10 pt-2 my-10">
        <h2 className="category-title mt-8 mb-4">Our Popural Catories</h2>
        <div className="categories">
          <div className="menu-item">
            <div className="image-wrap">
              <img
                className="item-img transform transition duration-500 ease-in-out hover:scale-110"
                src="https://myratna.com/public//uploads/categories/Blue-Sapphire_400.png"
                alt="Watch Jewellery"
                width="212"
                height="212"
              />
            </div>
            <div className="category-item-info">
              <p className="title">Blue Sapphire</p>
              <p className="desc">
                Divine Luck, Prosperity, Blissful Matrimony
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="image-wrap">
              <img
                className="item-img transform transition duration-500 ease-in-out hover:scale-110"
                src="https://myratna.com/public//uploads/categories/Blue-Sapphire_400.png"
                alt="Watch Jewellery"
                width="212"
                height="212"
              />
            </div>
            <div className="category-item-info">
              <p className="title">Blue Sapphire</p>
              <p className="desc">
                Divine Luck, Prosperity, Blissful Matrimony
              </p>
            </div>
          </div>

          <div className="menu-item">
            <div className="image-wrap">
              <img
                className="item-img transform transition duration-500 ease-in-out hover:scale-110"
                src="https://myratna.com/public//uploads/categories/Blue-Sapphire_400.png"
                alt="Watch Jewellery"
                width="212"
                height="212"
              />
            </div>
            <div className="category-item-info">
              <p className="title">Blue Sapphire</p>
              <p className="desc">
                Divine Luck, Prosperity, Blissful Matrimony
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="image-wrap">
              <img
                className="item-img transform transition duration-500 ease-in-out hover:scale-110"
                src="https://myratna.com/public//uploads/categories/Blue-Sapphire_400.png"
                alt="Watch Jewellery"
                width="212"
                height="212"
              />
            </div>
            <div className="category-item-info">
              <p className="title">Blue Sapphire</p>
              <p className="desc">
                Divine Luck, Prosperity, Blissful Matrimony
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="image-wrap">
              <img
                className="item-img transform transition duration-500 ease-in-out hover:scale-110"
                src="https://myratna.com/public//uploads/categories/Blue-Sapphire_400.png"
                alt="Watch Jewellery"
                width="212"
                height="212"
              />
            </div>
            <div className="category-item-info">
              <p className="title">Blue Sapphire</p>
              <p className="desc">
                Divine Luck, Prosperity, Blissful Matrimony
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="image-wrap">
              <img
                className="item-img transform transition duration-500 ease-in-out hover:scale-110"
                src="https://myratna.com/public//uploads/categories/Blue-Sapphire_400.png"
                alt="Watch Jewellery"
                width="212"
                height="212"
              />
            </div>
            <div className="category-item-info">
              <p className="title">Blue Sapphire</p>
              <p className="desc">
                Divine Luck, Prosperity, Blissful Matrimony
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="video-section">
        <video
          className="homepage-video"
          id="vjs_video_108332_html5_api"
          tabindex="-1"
          role="application"
          preload="metadata"
          loop=""
          muted="muted"
          autoplay="autoplay"
          src={videoFile}
          playsinline="playsinline"
        ></video>
        <div className="video-detail text-center">
          Just Arrived<p>Rings & Pendant Set</p>
          <a href="#" className="shop-now">
            Show Now
          </a>
        </div>
      </div>
      <h2 className="category-title mt-8 mb-4">Our Latest Products</h2>
      <div className="latest-product">
        <div className="products relative top-20">
          <div className="icons">
            <i className="fa-regular fa-heart heart-icon"></i>
          </div>
          <div className="icons">
            <i className="fa-solid fa-arrows-rotate refresh"></i>
          </div>
          <div className="product-detail">
            <p className="product-name">Multi Monsoon Bracelet</p>
            <p className="price">$120</p>
            <button
              href=""
              className="cart-link"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="second-product">
          <div className="products relative">
            <div className="icons">
              <i className="fa-regular fa-heart heart-icon"></i>
            </div>
            <div className="icons">
              <i className="fa-solid fa-arrows-rotate refresh"></i>
            </div>
            <div className="product-detail">
              <p className="product-name">Multi Monsoon Bracelet</p>
              <p className="price">$120</p>
              <button
                href=""
                className="cart-link"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <button className="browse-all mt-8">More Products</button>
        </div>

        <div className="products relative top-20">
          <div className="icons">
            <i className="fa-regular fa-heart heart-icon"></i>
          </div>
          <div className="icons">
            <i className="fa-solid fa-arrows-rotate refresh"></i>
          </div>
          <div className="product-detail">
            <p className="product-name">Multi Monsoon Bracelet</p>
            <p className="price">$120</p>
            <button
              href=""
              className="cart-link"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="home-gallery grid grid-cols-2 my-14">
        <div className="image-div">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/09_Sep/Banners/DT/Unstudded/01/2x.webp"
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/09_Sep/Banners/DT/Bestsellers/2X.webp"
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/09_Sep/Banners/PoP/2x.webp"
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/09_Sep/Banners/DT/FestiveGifts/01/2x_R.webp"
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/AppBanner/peak/01/2X.jpg"
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/Customization/2x.webp"
            alt=""
          />
        </div>
      </div>
      <div className="purpose-gemstone ">
        <div className="gemstone">
          <div className="gemstone-title">
            <h2>Gemstones for Purpose</h2>
          </div>
          <div className="gemstone-list my-10">
            <div className="list-content">
              <div className="content">
                <img className="purpose-img" src={career} alt="" />
                <img className="purpose-gem" src={purposegem} alt="" />
              </div>
              <p className="purpose">Career</p>
            </div>
            <div className="list-content">
              <div className="content">
                <img className="purpose-img" src={career} alt="" />
                <img className="purpose-gem" src={purposegem} alt="" />
              </div>
              <p className="purpose">Career</p>
            </div>
            <div className="list-content">
              <div className="content">
                <img className="purpose-img" src={career} alt="" />
                <img className="purpose-gem" src={purposegem} alt="" />{" "}
              </div>
              <p className="purpose">Career</p>
            </div>
            <div className="list-content">
              <div className="content">
                <img className="purpose-img" src={career} alt="" />
                <img className="purpose-gem" src={purposegem} alt="" />{" "}
              </div>
              <p className="purpose">Career</p>
            </div>
            <div className="list-content">
              <div className="content">
                <img className="purpose-img" src={career} alt="" />
                <img className="purpose-gem" src={purposegem} alt="" />{" "}
              </div>
              <p className="purpose">Career</p>
            </div>
            <div className="list-content">
              <div className="content">
                <img className="purpose-img" src={career} alt="" />
                <img className="purpose-gem" src={purposegem} alt="" />{" "}
              </div>
              <p className="purpose">Career</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner mt-20">
        <div className="banner-detail">
          <p className="banner-title">Prakash Gem Stone</p>
          <button className="explore">Explore More</button>
        </div>
      </div>
      {/* <TabsetPanel /> */}
      <div className="connect-detail flex">
        <div className="connect-withus nearest-store">
          <a href="" className="css-udu230 ecsyaws2">
            <img src={connect} alt="" />
          </a>
          <div data-name="free_tah_txt" class="css-mq0rz3 ecsyaws3">
            <p class="ecsyaws4 css-1bpkpyv">Unsure Which Design To Pick?</p>

            <a href="/contact" class="css-zvv40x ecsyaws6">
              <span class="css-79elbk e123yl5z0">Connect With Us</span>
            </a>
          </div>
        </div>
        <div className="pin-code-detail nearest-store">
          <a href="" className="css-udu230 ecsyaws2">
            <img src={store} alt="" />
          </a>
          <div
            data-name="nearest_store_txt"
            class="css-mq0rz3 ecsyaws3 visit-store"
          >
            <p class="ecsyaws4 css-1bpkpyv">
              Come visit us at any of our stores!
            </p>
            <a href="/about" class="css-zvv40x ecsyaws6">
              <span class="css-79elbk e123yl5z0">Know About Us</span>
            </a>
            {/* <div class="css-17jzvjd ecsyaws7">
              <div tabindex="-1" class="css-nh0dd6 e9xkah20">
                <div class="css-lmc5zi e9xkah21">
                  <span tabindex="-1" class="css-18kofih e9xkah22"></span>
                  <input
                    type="text"
                    placeholder="Enter Pincode or City"
                    class="css-1bew7kc e9xkah23"
                    value={inputValue}
                    onFocus={handleInputFocus} // Change active state on focus
                    onBlur={handleInputBlur} // Reset when input loses focus
                    onChange={handleInputChange}
                  />
                  <button class="css-1jtjfof e9xkah24">Locate</button>
                </div>
                {isActive && (
                  <div class="css-14j54wq e9xkah25">
                    <div
                      className={`e9xkah27 ${
                        isActive ? "css-z21ac0" : "css-1xcz99a"
                      }`}
                    >
                      {filteredCities.length > 0 ? (
                        filteredCities.map((city, index) => (
                          <div
                            key={index}
                            className="css-ww6xgc e9xkah28"
                            onClick={() => handleCitySelect(city)} // Set city on click
                            style={{ cursor: "pointer" }} // Change cursor style
                          >
                            {city}
                          </div>
                        ))
                      ) : (
                        <div className="css-ww6xgc e9xkah28">
                          No results found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div class="css-1v6lp9p eg5fcxs2">
        <div id="caratlane-advantages" class="css-970gen eg5fcxs1">
          <div class="container">
            <div class="css-1r8fhbo eg5fcxs0">
              <div class="css-z1a9gk ew4v93r0">
                <div class="css-1hhaefn" elementoffsetinpercentage="100">
                  <a href="/customer-service/shipping-policy">
                    <div class="css-1c3h18e ew4v93r1">
                      <span
                        width="123px"
                        height="89px"
                        class="ew4v93r6 css-qro45y efp5dbi0"
                      ></span>
                    </div>
                    <div class="css-199dy3z ew4v93r2">
                      <h3 class="css-fpv19m ew4v93r3">
                        100% Certified &amp; Free Shipping
                      </h3>
                      <p class="css-csw0vo ew4v93r4">
                        Our jewellery always comes with a certificate of
                        authentication.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="css-z1a9gk ew4v93r0">
                <div class="css-1hhaefn" elementoffsetinpercentage="100">
                  <a href="/returns-exchanges">
                    <div class="css-1c3h18e ew4v93r1">
                      <span
                        width="104px"
                        height="81px"
                        class="ew4v93r6 css-1659ufd efp5dbi0"
                      ></span>
                    </div>
                    <div class="css-199dy3z ew4v93r2">
                      <h3 class="css-fpv19m ew4v93r3">15 Day Money-Back</h3>
                      <p class="css-csw0vo ew4v93r4">
                        Get 100% refund if you don't like your jewellery.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="css-z1a9gk ew4v93r0">
                <div class="css-1hhaefn" elementoffsetinpercentage="100">
                  <a href="/caratlane-advantage" class="css-ou3ccf epg3bs00">
                    <div class="css-1c3h18e ew4v93r1">
                      <span
                        width="120px"
                        height="81px"
                        class="ew4v93r6 css-lc6gze efp5dbi0"
                      ></span>
                    </div>
                    <div class="css-199dy3z ew4v93r2">
                      <h3 class="css-fpv19m ew4v93r3">Lifetime Exchange</h3>
                      <p class="css-csw0vo ew4v93r4">
                        Exchange your old designs anytime you want an upgrade.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="css-z1a9gk ew4v93r0">
                <div class="css-1hhaefn" elementoffsetinpercentage="100">
                  <a href="/caratlane-advantage" class="css-ou3ccf epg3bs00">
                    <div class="css-1c3h18e ew4v93r1">
                      <span
                        width="103px"
                        height="89px"
                        class="ew4v93r6 css-10jk1cv efp5dbi0"
                      ></span>
                    </div>
                    <div class="css-199dy3z ew4v93r2">
                      <h3 class="css-fpv19m ew4v93r3">One Year Warranty*</h3>
                      <p class="css-csw0vo ew4v93r4">
                        If your jewellery has a defect, we will fix it.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="category-title mt-8 mb-4">Customer Testimonials</h2>
      <TestimonialSlider />
    </section>
  );
};

export default Home;
