import React from "react";

const Payment = () => {
  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    alert("Payment processed!");
  };

  return (
    <div className="payment-section">
      <p className="payment-heading">Payment</p>
      <div className="card">
        <div className="card-payment flex justify-between mx-4 my-4 px-8">
          Credit Card<i className="fa-regular fa-circle"></i>
          <p className="desc">Save & pay via credit cards</p>
        </div>
      </div>
      <div className="card">
        <div className="card-payment flex justify-between mx-4 my-4 px-8">
          Debit Card<i className="fa-regular fa-circle"></i>
          <p className="desc">Save & pay via debit cards</p>
        </div>
      </div>
      <div className="card">
        <div className="card-payment flex justify-between mx-4 my-4 px-8">
          UPI<i className="fa-regular fa-circle"></i>
          <p className="desc">Paytm, Phonepe, Google Pay, & more</p>
        </div>
      </div>
      <div className="card">
        <div className="card-payment flex justify-between mx-4 my-4 px-8">
          Net Banking<i className="fa-regular fa-circle"></i>
          <p className="desc">Select from a list of banks</p>
        </div>
      </div>
      <button className="paynow">Pay Now</button>

      <div className="address-box mt-14">
        <div className="address-info">
          <p className="name">Vidhi Chauhan</p>
          <p className="address mt-2">Vill-Ajeetpur</p>
          <p className="city">Haridwar, Uttarakhan, 249408</p>
          <p className="country mb-2">India</p>
          <p className="number">
            <b>Phone: 9898989898</b>
          </p>
        </div>
        <div className="edit">
          <a href="">Edit</a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
