import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample data (replace with JSON fetching if needed)
const reviewsData = [
  {
    name: "Subhankar Nath",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    star: 4,
  },
  {
    name: "Aniket Basu",
    review: "Vivamus et felis et mauris posuere venenatis.",
    star: 5,
  },
  {
    name: "Md Salman",
    review: "Sed suscipit nisi id est elementum, ut tincidunt purus.",
    star: 3,
  },
];

// CSS Styles (Internal)
const styles = {
  star: {
    color: "#f9a825",
    fontSize: "1.2rem",
    marginTop: "8px",
  },
};

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next and Previous
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  // Render stars based on rating also its a component
  const renderStars = (count) => {
    
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<i className="bi bi-star-fill text-warning ms-1" key={`filled-${i}`}></i>);
    }
    for (let i = 0; i < 5 - count; i++) {
      stars.push(<i className="bi bi-star text-warning ms-1" key={`unfilled-${i}`}></i>);
    }
    return <>{stars}</>;
  };
  

  // Current Review Data
  const { name, review, star } = reviewsData[currentIndex];

  return (
    <div className="slider-container body-dark-bg-color">
  <h3 className="mb-5 body-light-text-color">Our Customers Review</h3>

  {/* Review Card */}
  <div className="d-flex align-items-center justify-content-between">
    <span onClick={handlePrev} className="bi bi-chevron-left navigation-icon"></span>
    <div className="review-card mx-4">
      <div className="review-box">
        <p className="review-text body-text-color fw-bold fs-6">{review}</p>
      </div>
      <div>
        <img
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}&radius=50&size=96`}
          alt={name}
          className="profile-image mt-3"
        />
        <h5 className="mt-3 body-light-text-color">{name}</h5>
        <div>{renderStars(star)}</div>
      </div>
    </div>
    <span onClick={handleNext} className="bi bi-chevron-right navigation-icon"></span>
  </div>
</div>
  );
};

export default ReviewSlider;
