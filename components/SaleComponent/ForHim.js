import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const ForHim = () => {
  const [Forhim, setForhim] = useState([]);
  const getoffer = async () => {
    const url = "http://localhost:8000/ForHim";
    const res = await axios.get(url);
    const brandData = await res.data;
    setForhim(brandData);
  };
  useEffect(() => {
    getoffer();
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div class="sales-categories">
        <div class="categories-banner">
          <div class="mobile-banner">
            <img src="https://d30fs77zq6vq2v.cloudfront.net/media/14122021/JiQ8Gbn6VQmeCzS-74ywpEnP-128078343620.png" />
          </div>
          <div class="desktop-banner">
            <img src="https://d30fs77zq6vq2v.cloudfront.net/media/14122021/EEK9jtCTWFvNSh-wBVhNYPkU-235883200826.png" />
          </div>
        </div>
        <div className="parent" style={{display:"flex",flexWrap:"wrap"}}>
        {Forhim &&
          Forhim.map((val, i) => {
            return (
              
              <div className="main-catgery">
                <a data-v-c6f91d1e href="#" className="offer-card" key={i}>
                  <div
                    className="seller-image-ForHim"
                    style={{ width: "195px", display: "flex" }}
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
  );
};
export default ForHim;
