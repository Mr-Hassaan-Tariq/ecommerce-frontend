import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DealZone = () => {
  const [deal, setdeal] = useState([]);
  const [deal2, setdeal2] = useState([]);
  const [deal3, setdeal3] = useState([]);
  const [deal4, setdeal4] = useState([]);
  const router = useRouter();
  const getDealZone = async () => {
    const url = "http://localhost:8000/Deals";
    const res = await axios.get(url);
    const dealData = await res.data;
    setdeal(dealData);
  };

  useEffect(() => {
    getDealZone();
  }, []);
  const getDealZone2 = async () => {
    const url2 = "http://localhost:8000/Deals1";
    const res = await axios.get(url2);
    const dealData2 = await res.data;
    setdeal2(dealData2);
  };
  useEffect(() => {
    getDealZone2();
  }, []);

  const getDealZone3 = async () => {
    const url3 = "http://localhost:8000/Deals2";
    const res = await axios.get(url3);
    const dealData3 = await res.data;
    setdeal3(dealData3);
  };
  useEffect(() => {
    getDealZone3();
  }, []);
  const getDealZone4 = async () => {
    const url4 = "http://localhost:8000/Deals3";
    const res = await axios.get(url4);
    const dealData4 = await res.data;
    setdeal4(dealData4);
  };
  useEffect(() => {
    getDealZone4();
  }, []);

  return (
    <div>
      <div class="discount-best-seller discount-best-seller-dealzone">
        <div class="head-container">
          <h6>DEAL ZONE</h6>
        </div>
        <div class="best-seller-product">
          {deal &&
            deal.slice(0, 1).map((val, i) => {
              return (
                <>
                  {/* <figure
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      router.push(`/collections/${val.slug}`);
                    }}
                  > */}
                  < a href="/collections" key={i}>
                    <div className="seller-image">
                      <img src={val.bannerImage} />
                    </div>
                    <h6 style={{ fontSize: "20px", textAlign: "center" }}>
                      {val.name}
                    </h6>
                    </a>
                  {/* </figure> */}
                </>
              );
            })}

          {deal2 &&
            deal2.slice(0, 1).map((val, i) => {
              return (
                <>

                  {/* <figure
                    style={{ margin: "10px 0px", cursor: "pointer" }}
                    onClick={() => {
                      router.push(`/collections/${val.slug}`);
                    }}
                  > */}
                  < a href="/collections" key={i}>
                    <div className="seller-image">
                      <img src={val.bannerImage} />
                    </div>
                    <h6 style={{ fontSize: "20px", textAlign: "center" }}>
                      {val.name}
                    </h6>
                  {/* </figure> */}
                  </a>
                </>
              );
            })}

          {deal3 &&
            deal3.slice(0, 1).map((val, i) => {
              return (
                <>
                  {/* <figure
                    style={{ margin: "10px 0px", cursor: "pointer    " }}
                    onClick={() => {
                      router.push(`/collections/${val.slug}`);
                      
                    }}
                  > */}
                  <a href="/collections" key={i}>
                    <div className="seller-image">
                      <img src={val.bannerImage} />
                    </div>
                    <h6 style={{ fontSize: "20px", textAlign: "center" }}>
                      {val.name}
                    </h6>
                  {/* </figure> */}
                  </a>
                </>
              );
            })}

          {deal4 &&
            deal4.slice(0, 1).map((val, i) => {
              return (
                <>
                  {/* <figure
                    style={{ margin: "10px 0px", cursor: "pointer    " }}
                    onClick={() => {
                      router.push(`/collections/${val.slug}`);                   
                     }}
                  > */}
                  <a href="/collections" key={i}>
                    <div className="seller-image">
                      <img src={val.bannerImage} />
                    </div>
                    <h6 style={{ fontSize: "20px", textAlign: "center" }}>
                      {val.name}
                    </h6>
                    </a>
                  {/* </figure> */}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DealZone;
