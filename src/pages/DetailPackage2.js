import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { tourplaces } from '../data/placedata';
import { LuIndianRupee } from "react-icons/lu";
export const DetailPackage2 = () => {
    const  {tourPackageId}=useParams();
    const thisPlace=tourplaces.find(pla=>pla.place===tourPackageId);
     const [selectedImage, setSelectedImage] = useState(thisPlace.subplaceimg[0]);

     const formattedPrice=(price)=>{
        return new Intl.NumberFormat('en-IN').format(price);
     }
     useEffect(() =>{
      window.scrollTo(0,0);
    },[thisPlace, selectedImage]);

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
          {thisPlace.subplaceimg.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => setSelectedImage(image)}
                  className={`detail__card-img-item ${
                    selectedImage === image ? 'active' : ''
                  }`}
                />
              ))}
          </div>
          <div className="detail__card-data">
            <div className="detail__card-title">
              <h4>Description</h4>
              <h5>Rs. {formattedPrice(thisPlace.price)} <span>/ {thisPlace.duration}</span></h5>
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
