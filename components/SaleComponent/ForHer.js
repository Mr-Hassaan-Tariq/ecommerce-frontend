import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const ForHer = () => {
  const [Forher, setForHer] = useState([]);
  const getoffer = async () => {
    const url = "http://localhost:8000/ForHer";
    const res = await axios.get(url);
    const brandData = await res.data;
    setForHer(brandData);
  };
  useEffect(() => {
    getoffer();
  }, []);
  return (
    <div style={{backgroundColor:"black"}}>
      <div class="sales-categories">
        <div class="categories-banner">
          <div class="mobile-banner">
            <img src="https://d30fs77zq6vq2v.cloudfront.net/media/14122021/qZHWscdVpQLTYm9awIo0U9iW-301103419989.png" />
          </div>
          <div class="desktop-banner">
            <img src="https://d30fs77zq6vq2v.cloudfront.net/media/14122021/5hy9kwnFEX8kn-uQYBKHdlvl-1186146650069.png" />
          </div>
        </div>
        <div class="best-seller-product">
        <div className="parent" style={{display:"flex",flexWrap:"wrap"}}>
          {Forher &&
            Forher.map((val, i) => {
              return (
                
                <div className="main-catgery">
                  <a data-v-c6f91d1e href="#" className="offer-card" key={i}>
                    <div
                      className="seller-image"
                      style={{ width: "195px"}}
                    >
                      <img className="seller-image" src={val.url} />
                    </div>
                    <h6>{val.title}</h6>
                  </a>
                </div>
               
              );
            })}
             </div>
        </div>
      </div>
    </div>
  );
};
export default ForHer;
