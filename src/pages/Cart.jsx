import React, { useEffect, useState } from "react";
import "../css/Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importing the Cart context

const Cart = () => {
  const { cart, addToCart } = useCart(); // Access cart and addToCart from context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  // Sample product data
  const sampleProduct = {
    id: 1,
    name: "Yellow Gold Ring",
    price: 2473,
    quantity: 1,
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/",
    sku: "RING-ER36-TANZANITE-WHITE-GOLD-AA",
    purity: "18K / 14K",
  };

  // Ensure products are only added once
  useEffect(() => {
    if (cart.length === 0) {
      addToCart(sampleProduct);
    }
  }, [cart, addToCart, sampleProduct]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = couponCode ? 1000 : 0; // Mock discount if coupon is applied
  const total = subtotal - discount;

  return (
    <section className="cart-page m-16">
      <div className="cart-section flex">
        <div className="product-cart">
          {cart.map((item) => (
            <div className="cart flex" key={item.id}>
              <div className="product-image">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className="product-detail text-left pl-10">
                <p className="product-name">{item.name}</p>
                <p className="price">
                  <b>₹ {item.price}</b>
                </p>
                <p className="sku">{item.sku}</p>
                <p className="gold-purity">
                  <b>Gold Purity: </b>
                  {item.purity}
                </p>
                <p className="quantity">
                  <b>Quantity: </b>
                  {item.quantity}
                </p>
                <p className="expected-date">
                  <b>Expected Dispatch Date: </b>26 Sep, 2024
                </p>
              </div>
              <div className="delete-icon text-right">
                <p>
                  <b>x</b>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="billing-section">
          <div>
            <div className="coupon-code mb-4" onClick={openModal}>
              <button className="apply-coupon">Apply Coupon</button>
              <a href="#">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            {isModalOpen && (
              <div className="coupon-modal-overlay" onClick={closeModal}>
                <div
                  className={`modal-content ${isModalOpen ? "show" : ""}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-apply-coupon mb-6 flex justify-between">
                    <p>Apply Coupon</p>
                    <button onClick={closeModal}>X</button>
                  </div>
                  <div className="modal-input-coupon mb-6">
                    <div data-name="promo-input" class="css-1sqy1tp e18f69gd6">
                      <div class="input-wrapper css-1cez3ir ew8hiu40">
                        <label for="couponCode" class="css-jcaw3i ew8hiu41">
                          Enter coupon code
                        </label>
                        <input
                          id="couponCode"
                          spellcheck="false"
                          class="css-1v1lvtj ew8hiu42"
                          type="text"
                          name="couponCode"
                          width="100%"
                          autocomplete="off"
                          value=""
                        />
                      </div>
                      <button>APPLY</button>
                    </div>
                  </div>
                  <div className="modal-coupon-listing">
                    <div class="css-esqegb e18f69gd3">
                      <div class="css-ojiic0 e18f69gd4">
                        <div class="css-fle3r0 e18f69gd5">
                          <p class="css-1cfmwn2 e18f69gd7 pt-4">
                            Other Offers at PrakashGem
                          </p>
                          <div
                            class="not-applicable css-cu2au0 e16vqtx40"
                            role="option"
                            aria-selected="false"
                            tabindex="0"
                            data-name="promocode-card"
                          >
                            <div class="coupon-code-wrapper css-1753rni e16vqtx41">
                              <div class="coupon-code css-5cic0k e16vqtx43">
                                ₹200 OFF
                              </div>
                            </div>
                            <div class="description-wrapper css-1j3ll8k e16vqtx42">
                              <div class="coupon-code-text">
                                <span>SHWCMD98J</span>
                                <p>Valid till October 07 2024</p>
                              </div>
                              <p class="coupon-description">
                                200 off on Shaya order worth 1500 rs
                              </p>
                            </div>
                            <div class="css-1hiy7gv e16vqtx44">
                              Not Applicable
                            </div>
                          </div>
                          <div
                            class="not-applicable css-cu2au0 e16vqtx40"
                            role="option"
                            aria-selected="false"
                            tabindex="0"
                            data-name="promocode-card"
                          >
                            <div class="coupon-code-wrapper css-1753rni e16vqtx41">
                              <div class="coupon-code css-5cic0k e16vqtx43">
                                3% OFF
                              </div>
                            </div>
                            <div class="description-wrapper css-1j3ll8k e16vqtx42">
                              <div class="coupon-code-text">
                                <span>PERFECT3</span>
                                <p>Valid till September 30 2024</p>
                              </div>
                              <p class="coupon-description">
                                Flat 3% Off on Loose Solitaires Only
                              </p>
                            </div>
                            <div class="css-1hiy7gv e16vqtx44">
                              Not Applicable
                            </div>
                          </div>
                          <div
                            class="not-applicable css-cu2au0 e16vqtx40"
                            role="option"
                            aria-selected="false"
                            tabindex="0"
                            data-name="promocode-card"
                          >
                            <div class="coupon-code-wrapper css-1753rni e16vqtx41">
                              <div class="coupon-code css-5cic0k e16vqtx43">
                                5% OFF
                              </div>
                            </div>
                            <div class="description-wrapper css-1j3ll8k e16vqtx42">
                              <div class="coupon-code-text">
                                <span>MOUNT5</span>
                                <p>Valid till September 30 2024</p>
                              </div>
                              <p class="coupon-description">
                                Flat 5% Off on Solitaire Mount SKU
                              </p>
                            </div>
                            <div class="css-1hiy7gv e16vqtx44">
                              Not Applicable
                            </div>
                          </div>
                          <div
                            class="not-applicable css-cu2au0 e16vqtx40"
                            role="option"
                            aria-selected="false"
                            tabindex="0"
                            data-name="promocode-card"
                          >
                            <div class="coupon-code-wrapper css-1753rni e16vqtx41">
                              <div class="coupon-code css-5cic0k e16vqtx43">
                                3% OFF
                              </div>
                            </div>
                            <div class="description-wrapper css-1j3ll8k e16vqtx42">
                              <div class="coupon-code-text">
                                <span>EXTRA3</span>
                                <p>Valid till September 30 2024</p>
                              </div>
                              <p class="coupon-description">
                                Flat 3% off on studded jewellery above 1 lac
                                bill value with max Cap 5K
                              </p>
                            </div>
                            <div class="css-1hiy7gv e16vqtx44">
                              Not Applicable
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="cart-billing">
            <div className="price-detail">
              <div className="subtotal flex justify-between">
                <p className="total">
                  <b>Subtotal</b>
                </p>
                <p className="total-price text-right">₹ {subtotal}</p>
              </div>
              <div className="discount flex justify-between">
                <p className="total-discount">
                  <b>Coupon Discount</b>
                </p>
                <p className="discount-price text-right">₹ {discount}</p>
              </div>
              <div className="shipping flex justify-between">
                <p className="Shipping-text">
                  <b>Shipping (standard)</b>
                </p>
                <p className="shipping-price text-right">Free</p>
              </div>
              <div className="total flex justify-between mt-4">
                <p className="total-text">
                  <b>Total</b>
                </p>
                <p className="total-price text-right">₹ {total}</p>
              </div>
            </div>
          </div>
          <div className="place-order mt-4">
            <Link to="/checkout">
              <button className="checkout">PLACE ORDER</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
