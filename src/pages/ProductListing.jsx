import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../css/ProductListing.css";
import Breadcrumbs from "../components/Breadcrumbs";

const productsData = [
  {
    id: 1,
    name: "Rose  Ring",
    price: "$12",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-rose-gold-ametrine-ring-100108158-1.jpg?imgeng=/w_687/",
  },
  {
    id: 2,
    name: "Rose Gold Necklace",
    price: "$122",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/4/14k-rose-gold-moissanite-necklace-100106946-.jpg?imgeng=/w_687/",
  },
  {
    id: 3,
    name: "Yellow Gold Ring",
    price: "$32",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/",
  },
  {
    id: 4,
    name: "White Gold Earring",
    price: "$52",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/w/h/white-gold-ruby-earrings.jpg?imgeng=/w_687/",
  },
  {
    id: 5,
    name: "Rose Gold Ring",
    price: "$12",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-rose-gold-ametrine-ring-100108158-1.jpg?imgeng=/w_687/",
  },
  {
    id: 6,
    name: "Rose Gold Necklace",
    price: "$122",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/4/14k-rose-gold-moissanite-necklace-100106946-.jpg?imgeng=/w_687/",
  },
  {
    id: 7,
    name: "Yellow Gold Ring",
    price: "$32",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/",
  },
  {
    id: 8,
    name: "White Gold Earring",
    price: "$52",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/w/h/white-gold-ruby-earrings.jpg?imgeng=/w_687/",
  },
  {
    id: 9,
    name: "Rose Gold Ring",
    price: "$12",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-rose-gold-ametrine-ring-100108158-1.jpg?imgeng=/w_687/",
  },
  {
    id: 10,
    name: "Rose Gold Necklace",
    price: "$122",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/4/14k-rose-gold-moissanite-necklace-100106946-.jpg?imgeng=/w_687/",
  },
  {
    id: 11,
    name: "Yellow Gold Ring",
    price: "$32",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/",
  },
  {
    id: 12,
    name: "White Gold Earring",
    price: "$52",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/w/h/white-gold-ruby-earrings.jpg?imgeng=/w_687/",
  },
  {
    id: 13,
    name: "Rose Gold Ring",
    price: "$12",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-rose-gold-ametrine-ring-100108158-1.jpg?imgeng=/w_687/",
  },
  {
    id: 14,
    name: "Rose Gold Necklace",
    price: "$122",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/4/14k-rose-gold-moissanite-necklace-100106946-.jpg?imgeng=/w_687/",
  },
  {
    id: 15,
    name: "Yellow Gold Ring",
    price: "$32",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-yellow-gold-aquamarine-with-diamond-ring-100074665.jpg?imgeng=/w_687/",
  },
  {
    id: 16,
    name: "White Gold Earring",
    price: "$52",
    imageUrl:
      "https://imgcdn1.gempundit.com/media/testimonials/pictures/w/h/white-gold-ruby-earrings.jpg?imgeng=/w_687/",
  },
];

const ProductListing = () => {
  const { addToCart } = useCart();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(productsData.length / itemsPerPage);
  const currentItems = productsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="product-listing">
      <div className="page-section">
        <div className="breadcrumbs text-left">
          <Breadcrumbs />
        </div>
        <div className="products flex mt-10 mx-10">
          {currentItems.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <p className="product-name">{product.name}</p>
              <p className="price">{product.price}</p>
              <button
                className="add-cart"
                onClick={() => addToCart(product)} // Add to cart on click
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
        <div className="pagination mt-10">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo; {/* Left arrow */}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-button ${
                index + 1 === currentPage ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo; {/* Right arrow */}
          </button>
        </div>
        <div className="shipping-img mt-10">
          <img
            src="https://www.palmonas.com/cdn/shop/files/Shipping_-_Web.jpg?v=1700751636&width=2000"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
