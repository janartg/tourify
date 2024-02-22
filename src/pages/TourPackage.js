import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import {tourplaces} from '../data/placedata'
import PackageCards from '../components/PackageCards';
export const TourPackage = () => {

  const getStarted =() =>{
    window.scrollTo({
        top:700,
        behavior: 'smooth'
    });
}

  useEffect(() =>{
    window.scrollTo(0,0);
  });
  return<>
       <Header/>
       <main className="main" id="main">
      {/* <section
        className="section about-hero"
        style={{ backgroundImage: 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 className="hero__title">Tour Package</h1>
      </section> */}
      <section className="section hero">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: '-1',
            }}
          >
            <source src="./media/Tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero__content">
          <button onClick={getStarted} style={{border:"none",background:"transparent"}}> <h1 className="hero__title" style={{marginBottom:"30px"}}>
              TourPackage 
            </h1>
            </button>
          </div>
        </section>

      <section className="section tour container">
        <div className="tour__container">
          {/* <div className="tour__card">
            <img src="./media/img-1.jpg.jpg" alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Vivekananda Rock Memorial </h5>
              <span className="tour__data-subtitle">Kanyakumari</span>
            </div>
            <Link to="/tour-package/asd" className="tour__link"></Link>
          </div>
          <div className="tour__card">
            <img src="./media/img-2.jpg" alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">kolli Hills</h5>
              <span className="tour__data-subtitle">Namakkal</span>
            </div>
            <Link to="/tour-package/asd" className="tour__link"></Link>
          </div>
          <div className="tour__card">
            <img src="./media/img-3.jpg" alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Varkala</h5>
              <span className="tour__data-subtitle">Thiruvananthapuram</span>
            </div>
            <Link to="/tour-package/asd" className="tour__link"></Link>
          </div>
          <div className="tour__card">
            <img src="./media/img.jpg" alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Shillong Hill</h5>
              <span className="tour__data-subtitle">Meghalaya</span>
            </div>
            <Link to="/tour-package/asd" className="tour__link"></Link>
          </div>
          <div className="tour__card">
            <img src="./media/img-5.jpg" alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Big Mosque</h5>
              <span className="tour__data-subtitle">Bhopal        </span>
            </div>
            <Link to="/tour-package/asd" className="tour__link"></Link>
          </div>
          <div className="tour__card">
            <img src="./media/img..jpg" alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Vantawng Falls</h5>
              <span className="tour__data-subtitle">Mizoram</span>
            </div>
            <Link to="/tour-package/asd" className="tour__link"></Link>
          </div>
           */}
           {tourplaces.map((place) => (
              <PackageCards
                key={place.id}
                imageurl={place.image}
                tourplace={place.place}
              />
            ))}
        </div>
      </section>
    </main>

       <Footer/>
  </> 
 
  
}
