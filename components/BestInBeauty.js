import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";
import Link from "next/link";
const BestInBeauty = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div class="best-seller-main container">
        <div class="head-container">
          <h6>BEST IN BEAUTY</h6>
        </div>
        <div class="swiper swipe-product-slide-three">
          <div class="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
              autoplay={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="silde_content">
                    <Link href="/collections" class="">
                      <img src="https://d30fs77zq6vq2v.cloudfront.net/media/08022022/SN-gqUMLLqLQxqL3F1lScwnT-1175851121933.jpg" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="silde_content">
                    <Link href="/collections" class="">
                      <img src="https://d30fs77zq6vq2v.cloudfront.net/media/23032022/pjPXHbGXYcjaIjrxSAyAPSkC-481701842152.jpg" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="silde_content">
                    <Link href="/collections" class="">
                      <img src="https://d30fs77zq6vq2v.cloudfront.net/media/08022022/4ZOH9aku1A2shfJRxWTmicAj-1471867424944.jpg" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="silde_content">
                    <Link href="/collections" class="">
                      <img src="https://d30fs77zq6vq2v.cloudfront.net/media/08022022/6k1VO5Fkb_kag_MqYQZve3qw-1213907684333.jpg" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="silde_content">
                    <Link href="/collections" class="">
                      <img src="https://d30fs77zq6vq2v.cloudfront.net/media/23032022/pjPXHbGXYcjaIjrxSAyAPSkC-481701842152.jpg" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="silde_content">
                    <Link href="/collections" class="">
                      <img src="https://d30fs77zq6vq2v.cloudfront.net/media/08022022/4ZOH9aku1A2shfJRxWTmicAj-1471867424944.jpg" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="silde_content">
                    <Link href="/collections" class="">
                      <img src="https://d30fs77zq6vq2v.cloudfront.net/media/08022022/6k1VO5Fkb_kag_MqYQZve3qw-1213907684333.jpg" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> */}
        </div>
      </div>
    </>
  );
};

export default BestInBeauty;
