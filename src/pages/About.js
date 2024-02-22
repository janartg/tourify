import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useEffect } from 'react'
export const About = () => {

  const getStarted =() =>{
    window.scrollTo({
        top:700,
        behavior: 'smooth'
    });
}
  useEffect(() =>{
    window.scrollTo(0,0);
  });
  return <>
    <Header/>
    <main class="main" id="main">
      {/* <section
        class="section about-hero"
        style={{backgroundImage: 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">About Us</h1>
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
              About 
            </h1>
            </button>
          </div>
        </section>
      <section class="section about container">
        <div class="about__container">
          <img class="about__img" src="./media/about-image.jpg" alt="" />

          <div class="about__data">
            <h3 class="about__data-title">2022</h3>
            <p class="about__data-description">
                At Tourify Travel, we are passionate about helping people explore the world.
                Our mission is to make travel accessible and enjoyable for everyone.
                Our company was founded by friends who shared a love of travel.
                After years of working in the corporate world, we decided to follow our passion and start our own travel company.
                we wanted to create a business that would help others experience the same joy and wonder that we felt when we traveled.
                At Tourify travel,we believe that travel should be sustainable and supporting local communities wherever we go.we also believe in providing our customers with exceptional service every step of the way.
            </p>
            <p class="about__data-description">
                We are proud to have been named the best travel company by travel weekly for three years in a row.Our commitment to exceptional customer service has also earned us a5-star rating on TripAdvisor,and we are thrilled to have helped thousands of travelers create unforgettable memories.<br/>
              "Ready to Start planning your next adventure? Explore our website to find your perfect destination, or contact out team for personalized travel recommendations."
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  
}
