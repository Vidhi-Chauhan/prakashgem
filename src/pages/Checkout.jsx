import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import Login from "./Login";
import Shipping from "./Shipping";
import Payment from "./Payment";
import "../css/Checkout.css";

const Checkout = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Login nextStep={() => setStep(2)} />;
      case 2:
        return <Shipping nextStep={() => setStep(3)} />;
      case 3:
        return <Payment />;
      default:
        return <Login nextStep={() => setStep(2)} />;
    }
  };

  const getButtonClass = (stepNumber) => {
    return step === stepNumber ? "active" : "";
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      className="checkout-section"
    >
      <nav className="checkout-btn py-5 flex">
        <button className={getButtonClass(1)} disabled={step === 1}>
          Login
        </button>
        <button className={getButtonClass(2)} disabled={step === 2}>
          Shipping
        </button>
        <button className={getButtonClass(3)} disabled={step === 3}>
          Payment
        </button>
      </nav>
      <div style={{ display: "flex", flex: 1 }} className="checkout-detail">
        <div className="flex justify-center" style={{ flex: 1 }}>
          {renderStep()}
        </div>
        <div style={{ flex: 1 }}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
