import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Slider from "./components/slider";
import Maincontent from "./components/maincontent";
import Footer from "./components/footer";
import ProductPage from "./pages/productPage";
import Homepage from "./pages/homePage";
import CommingSoon from "./pages/commingSoon";
import Distributer from "./pages/distributer";
import Login from "./pages/login";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/maincontent" element={<Maincontent />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/commingSoon" element={<CommingSoon/>}/>
            <Route path="/commingSoon" element={<CommingSoon/>}/>
            <Route path="/distributer" element={<Distributer/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;