import React from "react";
import "../css/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="cart-page m-16">
      <div className="cart-section flex">
        <div className="product-cart">
          <div className="cart flex">
            <div className="product-image">
              <img
                src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                alt=""
              />
            </div>
            <div className="product-detail text-left pl-10">
              <p className="product-name">Yellow Gold Ring</p>
              <p className="price">
                <b>₹ 2,473.00</b>
              </p>
              <p className="sku">RING-ER36-TANZANITE-WHITE-GOLD-AA</p>
              <p className="gold-purity">
                <b>Gold Purity : </b>18K / 14K
              </p>
              <p className="quantity">
                <b>Quantity : 1</b>
              </p>
              <p className="expected-date">
                <b>Expected Dispatch Date : </b>
                26 Sep, 2024
              </p>
            </div>
            <div className="delete-icon text-right">
              <p>
                <b>x</b>
              </p>
            </div>
          </div>
          <div className="cart flex">
            <div className="product-image">
              <img
                src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                alt=""
              />
            </div>
            <div className="product-detail text-left pl-10">
              <p className="product-name">Yellow Gold Ring</p>
              <p className="price">
                <b>₹ 2,473.00</b>
              </p>
              <p className="sku">RING-ER36-TANZANITE-WHITE-GOLD-AA</p>
              <p className="gold-purity">
                <b>Gold Purity : </b>18K / 14K
              </p>
              <p className="quantity">
                <b>Quantity : 1</b>
              </p>
              <p className="expected-date">
                <b>Expected Dispatch Date : </b>
                26 Sep, 2024
              </p>
            </div>
            <div className="delete-icon text-right">
              <p>
                <b>x</b>
              </p>
            </div>
          </div>
          <div className="cart flex">
            <div className="product-image">
              <img
                src="https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/"
                alt=""
              />
            </div>
            <div className="product-detail text-left pl-10">
              <p className="product-name">Yellow Gold Ring</p>
              <p className="price">
                <b>₹ 2,473.00</b>
              </p>
              <p className="sku">RING-ER36-TANZANITE-WHITE-GOLD-AA</p>
              <p className="gold-purity">
                <b>Gold Purity : </b>18K / 14K
              </p>
              <p className="quantity">
                <b>Quantity : 1</b>
              </p>
              <p className="expected-date">
                <b>Expected Dispatch Date : </b>
                26 Sep, 2024
              </p>
            </div>
            <div className="delete-icon text-right">
              <p>
                <b>x</b>
              </p>
            </div>
          </div>
        </div>
        <div className="cart-billing">
          <div className="coupon-code ">
            <input type="text" placeholder="Have a Coupon Code" />
            <button className="apply-coupon">APPLY</button>
          </div>
          <div className="price-detail px-8 mt-10">
            <div className="subtotal flex justify-between">
              <p className="total">
                <b>Subtotal</b>
              </p>
              <p className="total-price text-right">₹ 18,000</p>
            </div>
            <div className="discount flex justify-between">
              <p className="total-discount">
                <b>Coupon Discount</b>
              </p>
              <p className="discount-price text-right">₹ 1,000</p>
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
              <p className="total-price text-right">Free</p>
            </div>
          </div>
          <div className="place-order mt-20">
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
