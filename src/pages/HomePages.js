import React from 'react'
import { Header } from '../components/Header'
import { Link } from "react-router-dom";
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { happyClients } from '../data/placedata';
import CarouselCards from '../components/CarouselCards';


export const HomePages = () => {
    const getStarted =() =>{
        window.scrollTo({
            top:700,
            behavior: 'smooth'
        });
    }
    useEffect(() =>{
      window.scrollTo(0,0);
    });

    const popularPlaces = [
      { title: 'India', image: './media/India/indiagate.jpg' },
      { title: 'Dubai', image: './media/Dubai/Dubai.jpg' },
      { title: 'Thailand', image: './media/Thailand/Buddha.jpg' },
  ];


  return (
    <>
    <Header/>
    <main className="main" id="main">

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
            <source src="./media/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="hero__content">
            <h1 className="hero__title" style={{marginBottom:"30px"}}>
              Explore the World <br />
              just one Click
            </h1>
            <button onClick={getStarted} className="button button-hero">
              Get Started
            </button>
          </div>
        </section>
      <section className="section tour container">
        <h3 className="section-title">Popular Tour</h3>

        <div className="tour__container">
        {popularPlaces.map((place, index) => (
                            <div className="tour__card" key={index}>
                                <img src={place.image} alt="" className="tour__card-img" />
                                <div className="tour__data">
                                    <h5 className="tour__data-title">{place.title}</h5>
                                </div>
                                <Link to={`/tour-package/${place.title}`} className="tour__link"></Link>
                            </div>
                        ))}
        </div>
      </section>
      
    </main>
    <Footer/>
    </>

  )
  }
