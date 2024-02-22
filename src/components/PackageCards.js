import React from 'react';
import { Link } from 'react-router-dom';

function PackageCards(props) {
  return (
    <div className="tour__card">
      <img src={props.imageurl} alt="" className="tour__card-img" />
      <div className="tour__data">
        <h5 className="tour__data-title">{props.tourplace}</h5>
        
      </div>
      <Link to={`/tour-package/${props.tourplace}`} className="tour__link"></Link>
    </div>
  );
}

export default PackageCards;
