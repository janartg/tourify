import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useState ,useEffect} from 'react'
import Swal from 'sweetalert2';
export const DetailPackage = () => {
     const [selectedImage, setSelectedImage] = useState('../media/detail-img.jpg');
     useEffect(() =>{
      window.scrollTo(0,0);
    });

    const submitHandler=()=>{
      alert('Thanks for contacting us! We will be in touch with you shortly.');
    }
  return <>
<Header/>
<main className="container" style={{marginTop: "120px"}}>
      <section className="detail">
        <div className="detail__card card">
          <img
            src={selectedImage}
            alt=""
            className="detail__card-img"
          />
          <div className="detail__card-img-list">
            <img
              src="../media/detail-img.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img.jpg')}
              className={`detail__card-img-item ${selectedImage ==='' ? 'active' : '../media/detail-img.jpg'}`}
            />
            <img
              src="../media/detail-img2.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img2.jpg')}
              className={`detail__card-img-item ${selectedImage ==='' ? 'active' : '../media/detail-img2.jpg'}`}
            />
            <img
              src="../media/detail-img3.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img3.jpg')}
              className={`detail__card-img-item ${selectedImage ==='' ? 'active' : '../media/detail-img3.jpg'}`}
            />
            <img
              src="../media/detail-img4.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img4.jpg')}
              className={`detail__card-img-item ${selectedImage ==='' ? 'active' : '../media/detail-img4.jpg'}`}
            />
          </div>
          <div className="detail__card-data">
            <div className="detail__card-title">
              <h4>Description</h4>
              <h5>$100 <span>/ 4D3N</span></h5>
            </div>
            <p className="detail__card-description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or an omised words which don't look even slightly
              believable. If you are goingse a passage of Lorem Ipsum, you need
              to be sure there isn't anything emba rrassing. Variations of
              passages of lorem Ipsum available but the majority have suffered
              alteration in some form,
            </p>
          </div>
        </div>
        <div className="detail__form card">
          <h4 className="detail__form-title">Join Now</h4>
          <form  >
            <div className="form__group">
              <input
                className="form__group-input"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="form__group">
              <input
                className="form__group-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form__group">
              <input
                className="form__group-input"
                type="text"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div className="form__group">
              <input
                className="form__group-input"
                type="text"
                placeholder="City of Residence"
              />
            </div>
            <div className="form__group">
              <input
                className="form__group-input"
                type="number"
                placeholder="No.of People"
              />
            </div>
            <div className="form__group">
              <input
                className="form__group-input"
                type="date"
                placeholder="Date of Travel"
              />
            </div>
           
            <div className="form__group">
              <button className="button button-detail" onClick={submitHandler}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
<Footer/>
  </>
    
}
