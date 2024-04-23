import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import data from "../utils/data";
import Link from "next/link";
import Style from '../styles/NewProducts.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const BestSeller = ({ bestSeller, addToCartHandler }) => {
    const router = useRouter();

    // Configuration for desktop view
    const desktopSwiperConfig = {
        spaceBetween: 50,
        slidesPerView: 4,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    // Configuration for mobile view
    const mobileSwiperConfig = {
        spaceBetween: 16,
        slidesPerView: 2,
        loop: true,
    };

    return (
        <>
            <div className={`best-seller-main container ${Style.bestSellerMain}`}>
                <div className="head-container">
                    <h6>New Products</h6>
                </div>
                <div className={`swiper swipe-product-slide ${Style.desktop_view} ${Style.swipeProductSlide}`}>
                    <div className="swiper-wrapper" >
                        <Swiper {...desktopSwiperConfig} >
                            {bestSeller.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className={`swiper-slide ${Style.productSlide}`}>
                                        <div className={`homeseller-image ${Style.homeSellerImage}`}>
                                            <Link href={`/product/${product.id}`}>
                                                <img src={product.image} alt={product.name} className={Style.productImage} />
                                            </Link>
                                            <div className={Style.addToCart}>
                                                <button onClick={() => addToCartHandler(product)}>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                                                    </span>
                                                    <span>
                                                        Add to Cart
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className={`swiper-button-next ${Style.swipper_buttons}`}></div>
                            <div className={`swiper-button-prev ${Style.swipper_buttons}`}></div>
                        </Swiper>
                    </div>
                </div>
                {/* Mobile View */}
                <div className={`swiper swipe-product-slide-mobile ${Style.swipeProductSlideMobile}`}>
                    <div className={`swiper-wrapper ${Style.mobile_view}`}>
                        <Swiper {...mobileSwiperConfig}>
                            {bestSeller.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className={`swiper-slide ${Style.productSlideMobile}`}>
                                        <div className={`homeseller-image ${Style.homeSellerImageMobile}`}>
                                            <Link href={`/product/${product.id}`}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className={`${Style.productImageMobile} ${Style.mobileImage}`}
                                                />
                                            </Link>
                                            <div className={Style.addToCartMobile}>
                                                    <span className={Style.cartIcon}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="16"
                                                            width="18"
                                                            viewBox="0 0 576 512"
                                                        >
                                                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                                        </svg>
                                                    </span>
                                            </div>
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
