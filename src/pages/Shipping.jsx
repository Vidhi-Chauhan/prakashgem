import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const Shipping = ({ nextStep }) => {
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useSameAddress, setUseSameAddress] = useState(false);
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);

  const handleShipping = (e) => {
    e.preventDefault();
    // Handle shipping logic here
    nextStep(); // Move to payment after shipping
  };

  const handleSameAddressChange = () => {
    setUseSameAddress(!useSameAddress);
    if (!useSameAddress) {
      setUseDifferentAddress(false); // Deselect different address if same is selected
    }
  };

  const handleDifferentAddressChange = () => {
    setUseDifferentAddress(!useDifferentAddress);
    if (!useDifferentAddress) {
      setUseSameAddress(false); // Deselect same address if different is selected
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="shipping-section">
      <p className="shipping-heading">Shipping Address</p>
      <div className="add-address" onClick={openModal}>
        Add a New Address<span>+</span>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="mb-4">Add a New Address</h2>
        {/* Include your address form here */}
        <div className="address-form">
          <div className="name flex justify-between">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="house-num my-4">
            <input type="text" placeholder="Street & House Number" />
          </div>
          <div className="Additional-info my-4">
            <input
              type="text"
              placeholder="Additional Information (Optional)"
            />
          </div>
          <div className="name flex justify-between my-4">
            <input type="number" placeholder="Pincode" />
            <input type="text" placeholder="City" />
          </div>
          <div className="name flex justify-between my-4">
            <select name="" id="" placeholder="State">
              <option value="Haridwar">Haridwar</option>
              <option value="Delhi">Delhi</option>
            </select>
            <select name="" id="" placeholder="Country">
              <option value="India">India</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className="Ph-num my-4">
            <input type="number" placeholder="Phone Number" />
          </div>
          <button className="save">Save</button>
        </div>
      </Modal>

      <div className="billing-address">
        <p className="billing-heading ">Billing Address</p>
        <div className="select-same-address flex justify-between">
          <div className="flex justify-between">
            <input
              type="checkbox"
              checked={useSameAddress}
              onChange={handleSameAddressChange}
            />
            Same as shipping address<i className="fa-regular fa-circle"></i>
          </div>
        </div>
        <div className="select-different-address flex justify-between">
          <div className="flex justify-between">
            <input
              type="checkbox"
              checked={useDifferentAddress}
              onChange={handleDifferentAddressChange}
            />
            Use different address<i className="fa-regular fa-circle"></i>
          </div>
        </div>

        {useDifferentAddress && (
          <div className="address-form" style={{ marginTop: "40px" }}>
            <form>{/* Your existing form fields for different address */}</form>
          </div>
        )}
      </div>

      <form onSubmit={handleShipping}>
        <button className="continue" type="submit">
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default Shipping;
