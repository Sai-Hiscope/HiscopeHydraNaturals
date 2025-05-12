import "./maincontent.css"
import MainImage from "../assets/logo/watertanks.png";
import MainImage2 from "../assets/logo/image2.png";
import MainImage3 from "../assets/logo/image3.png";
import MainImage4 from "../assets/logo/droneshot.png";
import { FaLeaf } from "react-icons/fa";
import { FaBan } from "react-icons/fa6";
import { MdWaterDrop } from "react-icons/md";
import { FaBottleWater } from "react-icons/fa6";

function Maincontent(){
    return(
        <>
        {/* first main content started */}
        <div className="head1">
            The Brand our Story
        </div>
        <div className="text1">
        Water in its Purest Form
    Water is life. But in today’s world, finding pure, untainted water is becoming increasingly difficult. Processed beverages filled with artificial ingredients have taken over the shelves, making something as simple as hydration complicated At Hiscope Hydra Naturals, we are redefining what it means to truly hydrate by going back to nature. Our water is not just another bottled drink; it is an experience of purity, refreshment, and well-being, just as nature intended.
When you choose Hiscope Hydra Naturals, you are drinking water that has been preserved in its most authentic form, untouched by artificial enhancements
        </div>
        <img src={MainImage} className="image1"/>
        {/* first main content ended */}
        <img src={MainImage2}className="MainImage2"/>
        <div className="text2">
            
            More than Just Hydration – A Lifestyle Choice
    Hydration isn’t just about quenching thirst—it’s about nourishing your body, refreshing your mind, and embracing a lifestyle that values health and wellness. Hiscope Hydra Naturals is crafted for those who believe in choosing better, not just for themselves but also for the planet.
    With every sip, you are choosing:<br></br>
✅ Water that is naturally enriched—free from artificial additives.
✅ Minimal processing—allowing nature to do its work.
✅ Sustainability—because the environment matters.
✅ Wellness-focused hydration—supporting a balanced, healthy life.
            
        </div>
        {/* second main content ended */}


        {/* third main content started */}
       <img src={MainImage3} className="image3"/>
    <div className="text3">
        
        Our Commitment to Sustainability
At Hiscope Hydra Naturals, we believe in delivering pure, refreshing water while being mindful of our environmental impact. Initially, we considered  manufacturing our own plastic bottles, but we realized that adding more plastic production facilities could contribute to environmental harm. Instead, we chose to partner with responsible  third-party manufacturers who follow sustainable practices, allowing us to reduce our carbon footprint while ensuring high-quality packaging.

By making this conscious choice, we focus  on delivering hydration responsibly. Our future goal is to transition to recycled plastic (rPET) and promote eco-friendly packaging solutions, ensuring that every sip you take supports a healthier planet.
        
    </div>

    {/* forth main content starts here */}

    <img src={MainImage4} className="Image4"/>
    <div className="text4">
    State-of-the-Art Manufacturing Facility
    Our manufacturing unit is strategically located away from residential areas, ensuring a clean, controlled, and contamination-free environment. This helps us maintain the highest hygiene standards, minimize external risks, and adhere to strict safety and quality protocols. At Hiscope Hydra Naturals, we are committed to delivering pure, refreshing water while upholding our promise of quality and sustainability.
    </div>
   {/* above the footer code start here */}
     <div className="logo1">
     <FaLeaf />
     </div>
     <div className="logo1text">
     100% Organic – Infused with real, natural flavors,sourced from organic fruits and botanicals.

     </div>
     {/* logo 2 */}
     <div className="logo2">
     <FaBan />
     </div>
     <div className="logo2text">
     No Sugar, No Color, No Artificial Additives Just pure water with a light, refreshing taste.

     </div>
     {/* logo 3 */}
     <div className="logo3">
     <MdWaterDrop />
     </div>
     <div className="logo3text">
     Hydration with a Subtle Hint of Flavor – Perfect for those who want something fresh without overpowering sweetness.

     </div>
     {/* logo 4 */}
     <div className="logo4">
     <FaBottleWater />
     </div>
     <div className="logo4text">
     A Healthier Alternative – Enjoy the benefits of drinking more water, with added flavor for variety.
     </div>
        </>
    )
}
export default Maincontent;