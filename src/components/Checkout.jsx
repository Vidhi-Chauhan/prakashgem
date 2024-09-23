import React from "react";
import "../css/Checkout.css";

const Checkout = () => {
  return (
    <section className="checkout-page">
      <div className="checkout mt-10">
        <form action="/submit-order" method="POST">
          <fieldset>
            <legend>Billing Information</legend>
            <div class="form-group">
              <label for="full-name">Full Name:</label>
              <input type="text" id="full-name" name="full-name" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Shipping Information</legend>
            <div class="form-group">
              <label for="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div class="form-group">
              <label for="city">City:</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div class="form-group">
              <label for="state">State:</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div class="form-group">
              <label for="zip">Zip Code:</label>
              <input type="text" id="zip" name="zip" required />
            </div>
            <div class="form-group">
              <label for="country">Country:</label>
              <select id="country" name="country" required>
                <option value="">Select a country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Payment Information</legend>
            <div class="form-group">
              <label for="card-number">Credit Card Number:</label>
              <input type="text" id="card-number" name="card-number" required />
            </div>
            <div class="form-group">
              <label for="exp-date">Expiration Date:</label>
              <input
                type="text"
                id="exp-date"
                name="exp-date"
                placeholder="MM/YY"
                required
              />
            </div>
            <div class="form-group">
              <label for="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
          </fieldset>

          <div class="total">
            Total: $<span id="total-amount">99.99</span>
          </div>

          <div class="form-group">
            <input type="submit" value="Place Order" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
