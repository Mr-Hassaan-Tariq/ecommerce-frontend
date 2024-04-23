import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import Style from '../styles/Banner.module.css';

const Banner = ({ banner }) => {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <>
      <div className="desktop-banner hero-banner-swipe">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper" style={{ height: "400px" }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {banner &&
                banner.map((val, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-slide">
                      <a href={val.image_path} className="beauty-desktop">
                        <img src={val.image} alt={val.title} />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              <div className={`swiper-button-next ${Style.swipper_buttons}`}></div>
              <div className={`swiper-button-prev ${Style.swipper_buttons}`}></div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className={`${Style.mobile_banner} hero-banner-swipe`}>
        <div className={Style.swiper }>
          <div className="swiper-wrapper">
            <Swiper
              height={400}
              spaceBetween={50}
              slidesPerView={1}
              loop
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {banner &&
                banner.map((val, i) => (
                  <SwiperSlide key={i} >
                    <div className={`${Style.swiper_slidee}`}>
                      <a href={val.url} className={`${Style.beauty_mobile}`}>
                        <img
                          src={val.image}
                          alt={val.title}
                          className={Style.mobile_image} // New class for mobile image
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
