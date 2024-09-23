// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     quote: "This is the best service I have ever used!",
//     name: "John Doe",
//     position: "CEO, Company",
//     image:
//       "https://imgcdn1.gempundit.com/media/wysiwyg/top-banner-emerald-040524.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960",
//   },
//   {
//     quote: "Amazing experience! Highly recommend it.",
//     name: "Jane Smith",
//     position: "Marketing Director, Company",
//     image:
//       "https://imgcdn1.gempundit.com/media/wysiwyg/home-collection-engagement-rings.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960",
//   },
//   {
//     quote: "I am so happy with the results!",
//     name: "Michael Brown",
//     position: "Product Manager, Company",
//     image:
//       "https://imgcdn1.gempundit.com/media/wysiwyg/home-collection-earrings.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960",
//   },
//   {
//     quote: "The best I've ever experienced!",
//     name: "Alice Johnson",
//     position: "CTO, Startup",
//     image:
//       "https://imgcdn1.gempundit.com/media/wysiwyg/home-collection-brooches.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960",
//   },
//   {
//     quote: "I would definitely recommend this to others!",
//     name: "Robert Lee",
//     position: "Designer, Company",
//     image:
//       "https://imgcdn1.gempundit.com/media/wysiwyg/blue_sapphire_ring_blog.webp",
//   },
//   {
//     quote: "Fantastic support and quick results.",
//     name: "Catherine White",
//     position: "HR Manager, Company",
//     image:
//       "https://imgcdn1.gempundit.com/media/testimonials/pictures/1/8/18k-white-gold-swissblue-topaz-100107302-1_1.jpg?imgeng=/w_525/f_webp/cmpr_20/s_7",
//   },
// ];

// // Helper function to chunk the testimonials into groups of 3
// const chunkArray = (arr, size) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// };

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const chunkedTestimonials = chunkArray(testimonials, 3); // Group testimonials in chunks of 3

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex + 1) % chunkedTestimonials.length
//       );
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(timer); // Cleanup interval on component unmount
//   }, [chunkedTestimonials.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? chunkedTestimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex + 1) % chunkedTestimonials.length
//     );
//   };

//   return (
//     <div className="testimonial-slider mt-14">
//       <div className="testimonial-wrapper">
//         {chunkedTestimonials[currentIndex].map((testimonial, index) => (
//           <div key={index} className="testimonial-item">
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="testimonial-image"
//             />
//             <p>"{testimonial.quote}"</p>
//             <h4>{testimonial.name}</h4>
//             <p>{testimonial.position}</p>
//           </div>
//         ))}
//       </div>
//       <div className="slider-controls">
//         <FaChevronLeft className="prev-icon" onClick={prevSlide} />
//         <FaChevronRight className="next-icon" onClick={nextSlide} />
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

import React from "react";
import backgroundImage from "../assets/testimonial-bg.webp";

const TestimonialSlider = () => {
  return (
    <section className="testimonial">
      <div className="testimonials">
        <p className="client-says">What Our Client Says</p>
      </div>
      <div
        className="testimonial-info relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="customer grid px-14 absolute">
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img
                src="https://kinclimg9.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/static/aboutus/Sudeep-Nagar_Co-founder-and-COO.png"
                alt=""
              />
            </div>
            <p className="customer-text">
              I got a Nazariya for my baby boy from BlueStone. It's so cute
              seeing it on my little one's wrist, and it gives me a sense of
              security knowing it's there. Thanks, BlueStone, for making such
              lovely pieces for our little ones!
            </p>
            <div className="customer-name">
              <p>Gaurav Singh Kushwaha</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img
                src="https://kinclimg2.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/static/aboutus/Harshna-Pasari_Head-of-Marketing.png"
                alt=""
              />
            </div>
            <p className="customer-text">
              Delighted with my engagement ring from BlueStone! It's my dream
              ring, fits perfectly and is stunning to look at. Thanks,
              BlueStone, for helping us find the perfect symbol of love!
            </p>
            <div className="customer-name">
              <p>Harshna Dadu</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img
                src="https://kinclimg0.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/static/aboutus/Rumit-Dugar_CFO.png"
                alt=""
              />
            </div>
            <p className="customer-text">
              I was worried about finding good quality fine jewellery pieces
              online, but BlueStone's customer service gave me full assurance
              and the delivery was super quick. Their jewellery is certified,
              and there is no compromise on quality.
            </p>
            <div className="customer-name">
              <p>Rumit Dugar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
