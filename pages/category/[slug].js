import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import axios from "axios";
import { useActiveNavContext } from "../../context/ActiveNavContext";


const categorySceen = () => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState(0);

    const [activeNav, { handleActiveNavChange }] = useActiveNavContext();
  const handleSelectNavChange = val => {
    handleActiveNavChange({
      id: val.id,
      title: val.title,
    });
  };
  
    const getNavApi = async () => {
        const url = "http://localhost:8000/topTrendNav";
        const res = await axios.get(url);
        const navBarData = res.data;
        setData(navBarData);
      };
      const handleClick = id => {
        setActive(id);
        console.log(id);
      };
      // console.log(data);
      useEffect(() => {
        getNavApi();
      }, []);
  return (
    <section>
      <div class="desktop-banner">
        <img src="https://d30fs77zq6vq2v.cloudfront.net/media/01022022/a1eA_Y3TFHZCP8TyZTxnaNMm-1392670483092.jpg" />
      </div>
      <div className="tabs" style={{ position: "sticky" }}>
        <Swiper
          loop={false}
          autoplay={false}
          slidesPerView={7}
          style={{ height: "70px" }}
        >
          {data &&
            data.map((val) => {
              return (
                <SwiperSlide style={{ width: "170px", padding: "0px 10px" }}>
                  <>
                    <button
                      style={{ height: "40px" }}
                      id={val.id}
                      className={`tabitem ${active === val.id && "active"}`}
                      onClick={() => {
                        handleSelectNavChange(val), handleClick(val.id);
                      }}
                    >
                      <p>{val.title}</p>
                    </button>
                  </>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default categorySceen;
