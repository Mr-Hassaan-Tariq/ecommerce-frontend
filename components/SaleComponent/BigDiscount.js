import { useEffect,useState } from "react";
import React from "react";
import axios from "axios";
const BigDiscount=()=>{
  const [deal, setdeal] = useState([]);
  const getDealZone = async () => {
    const url = "http://localhost:8000/DealZone";
    const res = await axios.get(url);
    const dealData = await res.data;
    setdeal(dealData);
  };
  useEffect(() => {
    getDealZone();
  }, []);

  return(
    <>
    <div className="sale-wrapper" style={{backgroundColor:"rgb(0, 0, 0);"}}>
    <div>
       <div class="discount-best-seller discount-best-seller-dealzone" >
        <div  className="head-container">
          <hr data-v-c6f91d1e/>
          <h6 data-v-c6f91d1e>
            Big Discounts
          </h6>
          <hr data-v-c6f91d1e/>
        </div>
        <div data-v-c6f91d1e className="best-seller-product">
        {deal &&
            deal.map((val, i) => {
              return (
                <>
                  <a data-v-c6f91d1e href="#" className="seller-image" key={i}>
                      <img src={val.img} />
                    <h6>
                      {/* {val.title} */}
                    </h6>
                  </a>
                </>
              );
            })}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default BigDiscount;