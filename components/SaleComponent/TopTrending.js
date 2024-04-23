import { useState, useEffect } from "react";
import axios from "axios";
import TopTrendNav from ".././subcomponents/TopTrendNav"
const  TopTrendingData = () => {
  const [brand, setbrand] = useState([]);
  const getDealZone = async () => {
    const url = "http://localhost:8000/TopTrending";
    const res = await axios.get(url);
    const brandData = await res.data;
    setbrand(brandData);
  }
  useEffect(() => {
    getDealZone();
  }, []);
  return (
    <>
    <TopTrendNav/>
      <div style={{backgroundColor:"black"}}>
      <div className="brand-offers-container">
      <div data-v-c6f91d1e>
        <div data-v-c6f91d1e className="head-container">
          <hr data-v-c6f91d1e />
          <h6 data-v-c6f91d1e>TOP TRENDING</h6>
          <hr data-v-c6f91d1e />
        </div>
       
        <div className="freebies-main">
          <div className="freebies-tab">
            
            {/* <TopTrendNav/> */}
            <div style={{ position: "relative" }}>
              <div
                infinite-scroll-distance="3"
                infinite-scroll-immediate-check="true"
                className="tabpane2">
                <div className="tabcontainer">
                  <div className="tabpane">
                    <div className="freebies-container">
                      {brand &&
                        brand.map((val, i) => {
                          return (
                            <>
                              <div className="freebies-card">
                                <div className="freebies-image">
                                  <img src={val.img} />
                                </div>
                                <h6 className="freebies-detail">{val.price}</h6>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default TopTrendingData;
