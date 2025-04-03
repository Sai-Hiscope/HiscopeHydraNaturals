import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Slider from './components/slider.jsx'
import Maincontent from './components/maincontent.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
   <App />
  // </StrictMode>
)
