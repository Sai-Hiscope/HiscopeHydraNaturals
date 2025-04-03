import React, { useState } from 'react';
import './productPage.css';
import header_image from "../assets/logo/waterbottle.png";
import Orange_image from "../assets/orange.png";
import Pineapple_image from "../assets/pineapple.png";
import { FaShoppingCart } from "react-icons/fa"; // Using a cart icon from react-icons
import login_logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom";

const ProductPage = () => {
  // State for handling popup visibility and selections
  const [popupVisible, setPopupVisible] = useState(false);
  const [productType, setProductType] = useState("waterBottles"); // "waterBottles" or "cases"
  const [waterBottles, setWaterBottles] = useState(1);
  const [cases, setCases] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [cartPopupVisible, setCartPopupVisible] = useState(false); // State to control cart popup visibility

  // Handle opening and closing the popup
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  // Handle water bottle selection
  const handleWaterBottlesChange = (e) => {
    setWaterBottles(e.target.value);
  };

  // Handle case selection
  const handleCasesChange = (e) => {
    setCases(e.target.value);
  };

  // Handle product type selection
  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  // Add the selected product to the cart
  const addToCart = () => {
    if (productType === "waterBottles") {
      setCartItems([...cartItems, { type: "Water Bottles", quantity: waterBottles }]);
    } else {
      setCartItems([...cartItems, { type: "Cases", quantity: cases }]);
    }
    togglePopup(); // Close popup after adding to cart
  };

  // Toggle cart popup visibility
  const toggleCartPopup = () => {
    setCartPopupVisible(!cartPopupVisible);
  };

  return (
    <>
    <Link to="/">
       <img src={login_logo} className="shop_logo"/></Link>

      <div className="hiscope_hydra-main-container1">
        <div className="container1">
          <header>
            <h1 className="main-heading1">Taste the Purity and Naturality, with All Organicness</h1>
            <p className="subheading1">Choose your preferred products</p>
          </header>

          <div className="cards-container1">
            {/* Card 1 */}
            <div className="card1">
              <img src={header_image} alt="product" className="card-image1" />
              <h3 className="card-title1">Hiscope Hydra Naturals Water 250ml</h3>
              <button className="card-button1" onClick={togglePopup}>Select Product</button>
            </div>
            {/* Card 2 */}
            <div className="card1">
              <img src={header_image} alt="product" className="card-image1" />
              <h3 className="card-title1">Hiscope Hydra Naturals Water 500ml</h3>
              <button className="card-button1" onClick={togglePopup}>Select Product</button>
            </div>
            {/* Card 3 */}
            <div className="card1">
              <img src={header_image} alt="product" className="card-image1" />
              <h3 className="card-title1">Hiscope Hydra Naturals Water 1 Liter</h3>
              <button className="card-button1" onClick={togglePopup}>Select Product</button>
            </div>
            {/* Card 4 */}
            <div className="card1">
              <img src={header_image} alt="product" className="card-image1" />
              <h3 className="card-title1">Hiscope Hydra Naturals Water 2 liters</h3>
              <button className="card-button1" onClick={togglePopup}>Select Product</button>
            </div>
            {/* card 5 */}
            <div className="card1">
              <img src={Orange_image} alt="product" className="card-image1" />
              <h3 className="card-title1">Hiscope Hydra Naturals Water Orange Flavour 500ml</h3>
              <button className="card-button1" onClick={togglePopup}>Select Product</button>
            </div>
            {/* card 6 */}
            <div className="card1">
              <img src={Pineapple_image} alt="product" className="card-image1" />
              <h3 className="card-title1">Hiscope Hydra Naturals Water Pineapple Flavour 500ml</h3>
              <button className="card-button1" onClick={togglePopup}>Select Product</button>
            </div>
          </div>

          {/* Popup */}
          {popupVisible && (
            <div className="popup1">
              <div className="popup-content1">
                <h2>Choose Your Quantity</h2>

                <div className="selection-group1">
                  <label htmlFor="product-type">Product Type:</label>
                  <select id="product-type" value={productType} onChange={handleProductTypeChange}>
                    <option value="waterBottles">Water Bottles</option>
                    <option value="cases">Cases</option>
                  </select>
                </div>

                {productType === "waterBottles" && (
                  <div className="selection-group1">
                    <label htmlFor="water-bottles">Water Bottles:</label>
                    <select id="water-bottles" value={waterBottles} onChange={handleWaterBottlesChange}>
                      {[...Array(10).keys()].map((i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                )}

                {productType === "cases" && (
                  <div className="selection-group1">
                    <label htmlFor="cases">Cases:</label>
                    <select id="cases" value={cases} onChange={handleCasesChange}>
                      {[...Array(5).keys()].map((i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                )}

                <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
                <button className="close-btn1" onClick={togglePopup}>Close</button>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div className="cart-icon" onClick={toggleCartPopup}>
          <FaShoppingCart size={30} color="red" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>

        {/* Cart Popup */}
        {cartPopupVisible && (
          <div className="cart-popup">
            <div className="cart-popup-content">
              <h2>Your Cart</h2>
              {cartItems.length > 0 ? (
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>{item.type} x {item.quantity}</li>
                  ))}
                </ul>
              ) : (
                <p>No items in cart</p>
              )}
              <button className="close-cart-popup" onClick={toggleCartPopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
