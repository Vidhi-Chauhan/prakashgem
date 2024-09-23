import React from "react";
import MyMapComponent from "../components/MyMapComponent";

const Contact = () => {
  return (
    <section className="contact-us">
      <div className="contact-section">
        <div className="contact-banner flex">
          <img
            className="w-1/2"
            src="https://www.palmonas.com/cdn/shop/files/2_3_3d8784d1-66d3-4974-90fd-b5c6fc46e7c4.jpg?v=1689401030&width=900"
            alt=""
          />
          <div className="title w-1/2 justify-center">
            <h1 className="self-center">Contact Us</h1>
          </div>
        </div>
        <div className="desc">
          For questions about orders, shipping & returns, account help and
          products, please contact our customer care team who are available for
          support Monday - Saturday from 9 am to 6 pm IST. They may take up to
          48 hours to respond to your queries during a busy period.
        </div>
        <MyMapComponent />
        <div className="info my-20 px-20 py-20">
          <div className="detail flex">
            <div className="address w-1/2">
              <h2 className="text-left">Contact</h2>
              <p className="text-left pt-5 pb-2">
                <b>Address </b>: Prakash Jawaharat Kendra, Gali Ram Prasad,
                Opposite Mansa Devi Padal Marg, Upper Road Haridwar Uttarakhand.
              </p>
              <p className="text-left py-2">
                <b>Call Us </b>: +91-875-583-0399 / +91-953-630-3999
              </p>
              <p className="text-left py-2">
                <b>Email </b>: prakashgemsstones@gmail.com /
                khurana.shivak@gmail.com
              </p>
            </div>
            <div className="contact-form w-1/2 text-left">
              <h2 className="question-block max-w-md mx-auto my-5">
                Have a Question?
              </h2>
              <form class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <div class="mb-4">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
