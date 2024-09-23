import React from "react";
import "../css/ProductDetail.css";
import { FaWhatsapp } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <>
      <section className="product-detail m-10">
        <div className="detail-section flex">
          <div className="image-detail">
            <div className="product-image">
              <img
                src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                alt=""
              />
            </div>
          </div>
          <div className="product-info text-left">
            <h1 className="product-name mb-2">Yellow Gold Ring</h1>
            <span className="price">₹ 2,473.00</span>
            <span className="taxes">(Incl. of All Taxes) </span>
            <div className="promise_tags_wrapper">
              <div className="promise_tags_tracker">
                <div className="promise_tags mt-5" id="promise_tag1">
                  <div
                    className="product__policies flex"
                    data-handle="zircon-heart-studs-rose-gold-61359"
                  >
                    <img
                      width=""
                      height=""
                      src="https://cdn.shopify.com/s/files/1/0613/1400/7297/files/CraftedforDailyUse_png.png?v=1702783783"
                      alt=""
                    />
                    <div className="tag">Crafted for Daily Use</div>
                  </div>
                  <div
                    className="product__policies flex"
                    data-handle="zircon-heart-studs-rose-gold-61359"
                  >
                    <img
                      width=""
                      height=""
                      src="https://cdn.shopify.com/s/files/1/0613/1400/7297/files/SkinSafeJewellery_png.png?v=1702783783"
                      alt=""
                    />
                    <div className="tag">Skin Safe Jewellery </div>
                  </div>
                  <div
                    className="product__policies flex"
                    data-handle="zircon-heart-studs-rose-gold-61359"
                  >
                    <img
                      width=""
                      height=""
                      src="https://cdn.shopify.com/s/files/1/0613/1400/7297/files/18kGoldTone_Plated_png.png?v=1702783783"
                      alt=""
                    />
                    <div className="tag"> Gold Tone Plated</div>
                  </div>
                  <div
                    className="product__policies flex"
                    data-handle="zircon-heart-studs-rose-gold-61359"
                  >
                    <img
                      width=""
                      height=""
                      src="https://cdn.shopify.com/s/files/1/0613/1400/7297/files/EasyReturnExchange_png.png?v=1702783782"
                      alt=""
                    />
                    <div className="tag">Easy Return Exchange</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-desc mt-5">
              <p className="mb-2">Product Description</p>
              <ul>
                <li>Handmade Mala |</li>
                <li>Beads Count: 108 Beads |</li>
                <li>Size: 8 mm |</li>
                <li>Shape Round</li>
                <li>Material: Natural Healing Stones |</li>
                <li>
                  Tiger eye has the power to focus the mind, promoting mental
                  clarity, assisting us to resolve problems objectively and
                  unclouded by emotions.
                </li>
                <li>
                  It is particularly useful for healing and dispelling fear.
                </li>
                <li>It is known for its heart remedial properties.</li>
                <li>The stone is also known as protection stone.</li>
                <li>
                  It is a crystal with beautiful bands of yellow-golden color
                  throughout.
                </li>
                <li>
                  It is related with the Sacral Chakra and Solar Plexus Chakra.
                </li>
                <li>
                  Tiger Eye Japa Mala aid you with all the basic survival needs
                  and aid your ability to work through difficult times.
                </li>
              </ul>
            </div>
            <div className="add-to-cart-btn mt-5">
              <button className="cart">Add To Cart</button>
              <button className="wishlist">
                <a href="">
                  <i class="fa-regular fa-heart"></i>
                </a>
              </button>
            </div>
            <div className="share-link flex mt-8">
              <p className="pr-5">Share : </p>
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8   text-white "
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8  text-white "
              >
                <i class="fab fa-pinterest"></i>
              </a>
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8  text-white "
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="shipping-info mt-14">
          <div className="shipping">
            <div className="ship-img inner-image"></div>
            <div className="info">
              <p className="font-bold">Shipping Worldwide</p>
              <p className="desc">
                Our products are shipped worldwide , and we provide free
                delivery across India.
              </p>
            </div>
          </div>

          <div className="shipping">
            <div className="exchange-img inner-image"></div>
            <div className="info">
              <p className="font-bold">Return and Exchange</p>
              <p className="desc">
                We offer customer-friendly returns and exchanges with our 2-day
                return policy and 10-day exchange policy.
              </p>
            </div>
          </div>
          <div className="shipping">
            <div className="payment-img inner-image"></div>
            <div className="info">
              <p className="font-bold">Secure Payment</p>
              <p className="desc">
                We initiate secure payments with trusted payment gateways and
                multiple payment methods.
              </p>
            </div>
          </div>
          <div className="shipping">
            <div className="support-img inner-image"></div>
            <div className="info">
              <p className="font-bold">Customer Support</p>
              <p className="desc">
                Our customer support team is available from Monday to Saturday
                from 10 a.m. to 7 p.m. IST, Contact: +91 93561 03736
              </p>
            </div>
          </div>
        </div>
        <div className="also-like product-listing">
          <h2 className="mt-20">You May Also Like</h2>
          <div className="products  flex mt-5 ">
            <div class="product-card">
              <div class="product-img">
                <img
                  src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-rose-gold-ametrine-ring-100108158-1.jpg?imgeng=/w_687/"
                  alt="Rose Gold Ring"
                />
              </div>
              <p class="product-name">Rose Gold Ring</p>
              <p class="price">$12</p>
            </div>
            <div class="product-card">
              <div class="product-img">
                <img
                  src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/4/14k-rose-gold-moissanite-necklace-100106946-.jpg?imgeng=/w_687/"
                  alt="Rose Gold Necklace"
                />
              </div>
              <p class="product-name">Rose Gold Necklace</p>
              <p class="price">$122</p>
            </div>
            <div class="product-card">
              <div class="product-img">
                <img
                  src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                  alt="Yellow Gold Ring"
                />
              </div>
              <p class="product-name">Yellow Gold Ring</p>
              <p class="price">$32</p>
            </div>
            <div class="product-card">
              <div class="product-img">
                <img
                  src="https://imgcdn1.gempundit.com/media/testimonials/pictures/w/h/white-gold-ruby-earrings.jpg?imgeng=/w_687/"
                  alt="White Gold Earring"
                />
              </div>
              <p class="product-name">White Gold Earring</p>
              <p class="price">$52</p>
            </div>
            <div class="product-card">
              <div class="product-img">
                <img
                  src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/4/14k-rose-gold-moissanite-necklace-100106946-.jpg?imgeng=/w_687/"
                  alt="Rose Gold Necklace"
                />
              </div>
              <p class="product-name">Rose Gold Necklace</p>
              <p class="price">$122</p>
            </div>
            <div class="product-card">
              <div class="product-img">
                <img
                  src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                  alt="Yellow Gold Ring"
                />
              </div>
              <p class="product-name">Yellow Gold Ring</p>
              <p class="price">$32</p>
            </div>
          </div>
        </div>
      </section>
      <div className="product-ad mt-12">
        <img
          src="https://www.palmonas.com/cdn/shop/files/USP_-_Web-1.jpg?v=1702740141&width=2000"
          alt=""
        />
      </div>
    </>
  );
};

export default ProductDetail;
