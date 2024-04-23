import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import data from "../utils/data";
import Link from "next/link";

const BestSeller = ({ bestSeller, addToCartHandler }) => {
  const router = useRouter();
console.log(bestSeller,"------------","best seller");
  return (
    <>
      <div className="best-seller-main container">
        <div className="head-container">
          <h6>BESTSELLERS</h6>
        </div>
        <div className="swiper swipe-product-slide">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              autoplay={true}>
              {bestSeller.map(product => (
                <SwiperSlide>
                  <div
                    className="swiper-slide"
                    style={{ flexDirection: "column" }}>
                    <div className="homeseller-image">
                      <Link href={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                      </Link>
                    </div>
                    <div className="homeseller-detail">
                      <h6>Rs {product.price}</h6>
                      <div className="percent">
                        <del>Rs 100</del>
                        <span className="percentage-text">(-50%)</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
