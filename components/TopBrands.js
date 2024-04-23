import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const TopBrands = () => {
  const [brand, setbrand] = useState([]);

  const getBrandZone = async () => {
    const url = "http://localhost:8000/TopBrand";
    const res = await axios.get(url);
    const brandData = await res.data;
    setbrand(brandData);
  };
  useEffect(() => {
    getBrandZone();
  }, []);

  return (
    <>
      <div class="discount-best-seller">
        <div class="head-container">
          <h6>TOP BRANDS</h6>
        </div>
        <div class="best-seller-product">
          {brand &&
            brand.map((val, i) => {
              return (
                <>
                  <Link href="collections" key={i} className="seller-card">
                    <div className="seller-image">
                      <img src={val.img}></img>
                    </div>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TopBrands;
