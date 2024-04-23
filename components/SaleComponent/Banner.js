import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import { useEffect, useState } from "react";

import "swiper/css/bundle";
const Banner = () => {
  SwiperCore.use([Autoplay]);
  const [banner, getbanner] = useState([]);

  const bannerApi = "http://localhost:8000/banner";

  const getApi = async (url) => {
    const res = await axios.get(url);
    const bannerData = await res.data;
    getbanner(bannerData);
  };
  useEffect(() => {
    getApi(bannerApi);
  }, []);

  return (
    <>
      <div className="desktop-banner hero-banner-swipe">
        <div className="banner-slider-cosmetic">
        <div className="swiper mySwiper" style={{height:"60vh"}}>
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              
            >
              {banner &&
                banner.map((val, i) => (
                  <>
                    <SwiperSlide>
                      <div className="banner-slider-cosmetic" key={i}>
                        <a href={val.url} className="beauty-desktop router-link-active">
                          <img src={val.url} alt={banner.title}/>
                        </a>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
            </Swiper>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
