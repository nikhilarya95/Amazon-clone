import React from 'react'
import "./Home.css";
import Products from './Products';
function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="image not found" />
           <div className="home_row">
           <Products
           id="12321341"
           title="The Lean Startup: How constant Created"
           price={699}
           rating={5}
           image="https://m.media-amazon.com/images/I/51m-040ryHL._SR500,500_.jpg"
            />

            <Products
           id="12321341"
           title="The Lean Startup: How constant Created"
           price={3999}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/61UnzwX%2B4NL._SX466_.jpg"
            /> 
           </div>

           <div className="home_row">
           <Products
           id="12321341"
           title="The Lean Startup: How constant Created"
           price={1999}
           rating={3}
           image="https://images-na.ssl-images-amazon.com/images/I/516hlJav78L._SY450_.jpg"
            />

            <Products
           id="12321341"
           title="The Lean Startup: How constant Created"
           price={59999}
           rating={5}
           image="https://images.anandtech.com/doci/12783/Acer_IFA_Spin5_15_03.jpg"
            /> 
            
            <Products
           id="12321341"
           title="The Lean Startup: How constant Created"
           price={1599}
           rating={5}
           image="https://www.samedaycreativesolutions.com/uploads/6/1/8/9/61893285/amazon-product-photography-services-requirements-product-photography-studio-miami-53.jpg"
            /> 
            </div>

           <div className="home_row">
           
            <Products
           id="12321341"
           title="The Lean Startup: How constant Created"
           price={78999}
           rating={4}
           image="https://image.made-in-china.com/2f0j00oYWRQiwCarqI/Flat-Screen-32-Inches-Smart-HD-Color-LED-TV.jpg"
            /> 
           </div>
            
        </div>
    )
}

export default Home
