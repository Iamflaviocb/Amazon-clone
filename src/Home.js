import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id={123455}
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={40}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id={1234555656}
          title="Apple AirPods Pro (Renewed)"
          price={209.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71eGsUPZm2L._AC_SL1500_.jpg"
        />
      </div>{" "}
      <div className="home__row">
        <Product
          id={123455566755}
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={329.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
        />
        <Product
          id={123455}
          title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Champagne)"
          price={118.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61ie0JOVmtL._AC_SL1001_.jpg"
        />{" "}
        <Product
          id={123455}
          title="Nutribullet 600W Nutrient Extractor, 6pcs"
          price={49}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71D3Qd2CGbL._AC_SL1500_.jpg"
        />
      </div>{" "}
      <div className="home__row">
        <Product
          id={123455}
          title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
          price={497.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
