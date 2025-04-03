import './footer.css';
import logo1 from '../assets/fassai.png';
import logo2 from '../assets/recycle.png';
import logo3 from '../assets/logo/isi.png';



function Footer(){
    return(
        <>
        <div className='footerhead'>
            HISCOPE HYDRA NATURALS
        </div>
        <div className="container2">
    
    <h2>Pure & Safe Drinking Water</h2>
    <table>
        <tbody>
        <tr>
            <th>Processing Method</th>
            <td>Sand Filtration, Carbon Filtration, Micron & Ultra Micron Filtration, Reverse Osmosis, Ultraviolet Treatment, Ozonization</td>
        </tr>
        <tr>
            <th>Nutrition Facts (per 100ml)</th>
            <td>Calories: 0, Fat: 0, Potassium: 0.1mg, Magnesium: 0.5mg, Calcium: 1.0mg</td>
        </tr>
        <tr>
            <th>Certifications</th>
            <td>ISI Certified (IS: 14543), CM/L No.: 6300106994, FSSAI Lic. No.: 13624010000316</td>
        </tr>
        <tr>
            <th>More Details</th>
            <td>For BIS certification details, visit: <a href="https://www.bis.gov.in" target="_blank">www.bis.gov.in</a></td>
        </tr>
        <tr>
            <th>Responsible Consumption</th>
            <td>Recycle After Use (PET 1), Do Not Litter, Make in India, Crush the Bottle After Use</td>
        </tr>
       
        </tbody>
      
    </table>
    <div className="call">Contact : 1800 HYDRA NATURALS , Email : info@hiscopehydranaturals</div>
        <div className="last">© 2025 Hydra Water Company LLC. All Rights Reserved. Hydra, EARTH'S FINEST, EARTH'S FINEST WATER, EARTH'S FINEST FOR FITNESS, UNTOUCHED BY MAN, the Trade Dress, and accompanying logos are trademarks of Hydar Water Company LLC or its affiliates.
        </div>
   
    <img src={logo1} className="logo9"/>
        <img src={logo2} className="logo10"/>
        <img src={logo3} className="logo11"/>
   
</div>
        </>
    )
}
export default Footer;