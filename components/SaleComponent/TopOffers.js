import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const TopOffers = () => {
  
  const [offer, setoffer] = useState([]);
  const getoffer = async () => {
    const url = "http://localhost:8000/TopBrands";
    const res = await axios.get(url);
    const brandData = await res.data;
    setoffer(brandData);
  };
  useEffect(() => {
    getoffer();
  }, []);
  return (
    <div style={{backgroundColor:"black"}}>
      <div className="brand-offers-container">
        <div className="head-container">
          <hr />
          <h6>TOP OFFERS</h6>
          <hr />
        </div>
        <div className="offer-product">
       { offer && offer.map((val,i)=>{
            return(
              <>
             <a  data-v-c6f91d1e  href="#" className="offer-card" key={i} >
                    <div className="seller-image">
                      <img data className="seller-image" src={val.url} />
                     
                    </div>
                    <h6>
                      {/* {val.title} */}
                    </h6>
                  </a>
              </>
            )
          })
}
        </div>
      </div>
    </div>
    
  );
};
export default TopOffers;
