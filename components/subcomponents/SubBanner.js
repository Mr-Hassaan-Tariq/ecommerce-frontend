import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import { useEffect, useState } from "react";

import "swiper/css/bundle";
const SubBanner = ({ banner }) => {
  console.log(banner, "banner");
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className="desktop-banner hero-banner-swipe">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {banner &&
                banner.map((val, i) => (
                  <>
                    <SwiperSlide>
                      <div className="swiper-slide" key={i}>
                        <a href={val.image_path} className="beauty-desktop">
                          <img src={val.image_path} alt={val.title} />
                        </a>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div class="mobile-banner hero-banner-swipe">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              // loop={true}
              // autoplay={true}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {banner &&
                banner.map((val, i) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div
                          class="swiper-slidee"
                          key={i}
                          style={{ height: "112px" }}>
                          <a href={val.url} class="beauty-mobile">
                            <img src={val.image_path} />
                          </a>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubBanner;
