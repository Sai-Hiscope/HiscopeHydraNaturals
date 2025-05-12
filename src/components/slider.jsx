import React, { useState, useEffect } from "react";
import "./slider.css"; // Import the CSS styling file
import header_image from "../assets/logo/waterbottle.png";
import Orange_image from "../assets/orange.png"
import Pineapple_image from "../assets/pineapple.png"
import blueberries from "../assets/blueberries.png"





// Slider Component
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Loop through images
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      {/* Directly include the image URLs inside the JSX */}
      <img
        src={
          currentIndex === 0
            ? header_image
            : currentIndex === 1
            ? Orange_image
            : currentIndex === 2
            ? Pineapple_image
            : currentIndex === 3
            ? blueberries
            : header_image
        }
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />
    </div>
  );
};

function Slider() {
  return (
    <div className="App">
      <h1 className="slider-title">Image Slider</h1>
      <ImageSlider />
    </div>
  );
}

export default Slider;
