import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const BestSellerComp = () => {
  const [bestSale, setbestSale] = useState([]);
  const getBestsale = async () => {
    const url = "http://localhost:8000/BestSellerComp";
    const res = await axios.get(url);
    const dealData = await res.data;
    setbestSale(dealData);
  };
  useEffect(() => {
    getBestsale();
  }, []);
  return (
    <>
      <div className="sale-wrapper" id="sale-wrapper">
        <div
          className="sale-best-seller"
          style={{ backgroundColor: " rgb(0, 0 , 0)" }}
        >
          <div className="head-container">
            <hr />
            <h6>Best Seller</h6>
            <hr />
          </div>

          <div
            className="best-seller-productt"
            style={{
              display:"flex",
              justifyContent: "space-between",
              maxWidth: "1188px",
              margin: "0 auto",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {bestSale &&
              bestSale.map((val, i) => {
                return (
                  <>
                    <a
                      data-v-c6f91d1e
                      href="#"
                      key={i}
                      className="seler-card"
                      style={{ width: "15%", textAlign: "center" }}
                    >
                      <div className="custom-wrapper">
                        <div className="seller-image" style={{ width: "100%" }}>
                          <img src={val.url} />
                        </div>
                        <h6>{val.title}</h6>
                      </div>
                    </a>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default BestSellerComp;
