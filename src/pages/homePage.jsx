import React from 'react'
import Header from "../components/header";
import Slider from "../components/slider";
import Maincontent from "../components/maincontent";
import Footer from "../components/footer";
import ProductPage from "../pages/productPage";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";


function homePage() {
  return (
    <div>
        <Header />
        <Slider />
        <Maincontent />
        <Footer />
        {/* <ProductPage /> */}
      
    </div>
  )
}

export default homePage
