// OrderSummary.js
import React from "react";
import { useCart } from "../context/CartContext";

const OrderSummary = () => {
  const { cart } = useCart(); // Access cart from context

  // Calculate totals
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal; // Adjust if you have discounts, etc.

  return (
    <section className="checkout-order">
      <p className="order-title">Order Summary</p>
      <div className="order-summary">
        <div class="product-cart">
          <div class="cart flex">
            <div class="product-image">
              <img
                src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                alt="Yellow Gold Ring"
              />
            </div>
            <div class="product-detail text-left pl-10">
              <p class="product-name">Yellow Gold Ring</p>
              <p class="price">
                <b>₹ 2473</b>
              </p>
              <p class="sku">RING-ER36-TANZANITE-WHITE-GOLD-AA</p>
              <p class="gold-purity">
                <b>Gold Purity: </b>18K / 14K
              </p>
              <p class="quantity">
                <b>Quantity: </b>1
              </p>
              <p class="expected-date">
                <b>Expected Dispatch Date: </b>26 Sep, 2024
              </p>
            </div>
          </div>
          <div class="cart flex">
            <div class="product-image">
              <img
                src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                alt="Yellow Gold Ring"
              />
            </div>
            <div class="product-detail text-left pl-10">
              <p class="product-name">Yellow Gold Ring</p>
              <p class="price">
                <b>₹ 2473</b>
              </p>
              <p class="sku">RING-ER36-TANZANITE-WHITE-GOLD-AA</p>
              <p class="gold-purity">
                <b>Gold Purity: </b>18K / 14K
              </p>
              <p class="quantity">
                <b>Quantity: </b>1
              </p>
              <p class="expected-date">
                <b>Expected Dispatch Date: </b>26 Sep, 2024
              </p>
            </div>
          </div>
        </div>
        <div className="order-totals">
          <div className="subtotal flex justify-between">
            <p>
              <b>Subtotal:</b>
            </p>
            <p>₹ {subtotal}</p>
          </div>
          <div className="discount flex justify-between">
            <p>
              <b>Coupon Discount:</b>
            </p>
            <p>₹ 0</p>
          </div>
          <div className="shipping-charges flex justify-between mb-4">
            <p>
              <b>Shipping Charges (Standard):</b>
            </p>
            <p>₹ 0</p>
          </div>
          <div className="total flex justify-between">
            <p>
              <b>Total:</b>
            </p>
            <p>₹ {total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
