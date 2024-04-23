import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const BudgetDeals = () => {
  const [budget, setbudget] = useState([]);
  const getBudgetData= async () => {
    const url = "http://localhost:8000/BudgetDeals";
    const res = await axios.get(url);
    const brandData = await res.data;
    setbudget(brandData);
  };
  useEffect(() => {
    getBudgetData();
  }, []);
  return (
    
      <div style={{backgroundColor:"black"}}>
        <div data-v-2d12b412 class="widget-best-seller">
          <div data-v-2d12b412 class="head-container">
            <hr data-v-2d12b412 />
            <h6 data-v-2d12b412>BUDGET DEALS</h6>
            <hr data-v-2d12b412 />
          </div>
        </div>
        <div  class="best-seller-product container " style={{display:"flex",}}>
        {
          budget && budget.map((val,i)=>{
            return(
              <>
              <a  data-v-c6f91d1e  href="#" className="offer-card" key={i}>
                    <div  data-v-c6f91d1e className="seller-image">
                      <img data-v-c6f91d1e  src={val.url} />
                     
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
    
  );
};
export default BudgetDeals;
