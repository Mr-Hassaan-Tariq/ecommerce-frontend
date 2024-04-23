const Product = () =>{


    return(
        <>
        <div className="layout-with-footer">
          <main className="product__page">
            <div>
              <div className="d_container" style={{ position: "relative" }}>
                <div className="breadcrumb">
                  <a href="/" className="router-link-active">
                    Home
                  </a>{" "}
                  <span>
                    <span className="arrow">›</span>{" "}
                    <a href="/men" className="">
                      Men
                    </a>
                  </span>
                  <span>
                    <span className="arrow">›</span>{" "}
                    <a href="#" className="">
                      Footwear
                    </a>
                  </span>
                  <span>
                    <span className="arrow">›</span>{" "}
                    <a href="#" className="">
                      Sports Shoes
                    </a>
                  </span>
                  <span>
                    <span className="arrow">›</span>{" "}
                    <a href="#" className="">
                      New Arrivals
                    </a>
                  </span>
                  <span>
                    <span className="arrow">›</span>{" "}
                    <a href="#" className="">
                      Footwear
                    </a>
                  </span>
                </div>
                <div className="mobile-product mobile-slide">
                  <div className="slider-container">
                    <div className="product-cat-slider">
                      <div className="swiper pc-full-slide">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/12092022/23217_63_1662979220_631f0c94a9b4d-1455661756388.jpg" />
                          </div>
                          <div className="swiper-slide">
                            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/12092022/23217_63_1662979220_631f0c94a9b4d-1455661756388.jpg" />
                          </div>
                          <div className="swiper-slide">
                            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/12092022/23217_63_1662979220_631f0c94a9b4d-1455661756388.jpg" />
                          </div>
                          <div className="swiper-slide">
                            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/12092022/23217_63_1662979220_631f0c94a9b4d-1455661756388.jpg" />
                          </div>
                          <div className="swiper-slide">
                            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/12092022/23217_63_1662979220_631f0c94a9b4d-1455661756388.jpg" />
                          </div>
                          <div className="swiper-slide">
                            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/12092022/23217_63_1662979220_631f0c94a9b4d-1455661756388.jpg" />
                          </div>
                        </div>
                        <div className="swiper-pagination"></div>
                      </div>
                    </div>

                    <div className="product-cat-pagination">
                      <p className="btn btn-similar">View Similar</p>
                      <p className="btn btn-review">
                        <img src="images/reviews.svg" />
                        Reviews
                      </p>
                    </div>
                  </div>

                  <section className="container-outer">
                    <div className="sim-wrapper">
                      <div className="d_container recent">
                        <div className="title">
                          <div className="head-container">
                            <h6>Similar Products</h6>
                          </div>
                          <div>
                            <span>✖</span>
                          </div>
                        </div>
                        <section className="flex-container">
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/5237_902_1663655626_63295eca7e41b-717201600377.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/5237_902_1663655626_63295eca7e41b-717201600377.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-sports-shoes-black?id=632825a1eaac89111cad065b"
                                  className="name">
                                  move men black sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN GOLD STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23241_218_1663388904_63254ce8af23b-381989595176.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23241_218_1663388904_63254ce8af23b-381989595176.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-gold-stylish-sneakers-gold?id=63254d4863f525322c46b0a5"
                                  className="name">
                                  move men gold stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN WHITE STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23240_875_1663405398_63258d568a67a-831623405365.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23240_875_1663405398_63258d568a67a-831623405365.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-stylish-sneakers-white?id=63281133eaac89111cacd9e9"
                                  className="name">
                                  move men white stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN GOLD STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23247_363_1661856181_630de9b5115d2-176926757493.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23247_363_1661856181_630de9b5115d2-176926757493.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-gold-stylish-sneakers-gold?id=630dede05d237140e683eb73"
                                  className="name">
                                  move men gold stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN WHITE STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30082022/23244_210_1661856040_630de92885580-1589416815042.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30082022/23244_210_1661856040_630de92885580-1589416815042.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-stylish-sneakers-white?id=630ded445d237140e683e9a7"
                                  className="name">
                                  move men white stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN WHITE STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23248_764_1661856232_630de9e81e7f0-928564221722.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23248_764_1661856232_630de9e81e7f0-928564221722.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-stylish-sneakers-white?id=630dede65d237140e683eb8e"
                                  className="name">
                                  move men white stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN GOLD STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23243_456_1661856530_630deb12f22f2-595832278019.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23243_456_1661856530_630deb12f22f2-595832278019.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-gold-stylish-sneakers-gold?id=630ded3d5d237140e683e987"
                                  className="name">
                                  move men gold stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="Move Men Beige Stylish Sports Shoes"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23212_264_1662979924_631f0f541aac4-1377516795455.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23212_264_1662979924_631f0f541aac4-1377516795455.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-beige-stylish-sports-shoes-beige?id=631c3affd02e4278d93ea051"
                                  className="name">
                                  move men beige stylish sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN RED STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10092022/23245_19_1662798197_631c49758d7ef-1157756011594.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10092022/23245_19_1662798197_631c49758d7ef-1157756011594.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-red-stylish-sneakers-red?id=631c49bcd02e4278d93ec609"
                                  className="name">
                                  move men red stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/01092022/22647_91_1658825080_62dfa9787eb21-890184348935.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/01092022/22647_91_1658825080_62dfa9787eb21-890184348935.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-stylish-sneakers-black?id=6310674ec27bc34c1dc57726"
                                  className="name">
                                  move men black stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLUE STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17092022/23239_725_1663388784_63254c70da358-555427308748.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17092022/23239_725_1663388784_63254c70da358-555427308748.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-blue-stylish-sneakers-blue?id=63254d7363f525322c46b10d"
                                  className="name">
                                  move men blue stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17092022/23238_924_1663388709_63254c257cea2-1037146679926.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17092022/23238_924_1663388709_63254c257cea2-1037146679926.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-stylish-sneakers-black?id=63254d6d63f525322c46b0f1"
                                  className="name">
                                  move men black stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN WHITE STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/22646_755_1658825176_62dfa9d88a55e-619281256334.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/22646_755_1658825176_62dfa9d88a55e-619281256334.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-stylish-sneakers-white?id=6308afce063ccb72d925df63"
                                  className="name">
                                  move men white stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN WHITE STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22648_968_1658825109_62dfa995886e0-28939354621.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22648_968_1658825109_62dfa995886e0-28939354621.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-stylish-sneakers-white?id=6308afd8063ccb72d925df94"
                                  className="name">
                                  move men white stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30082022/23246_598_1661856119_630de97712fbd-125862405863.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30082022/23246_598_1661856119_630de97712fbd-125862405863.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-stylish-sneakers-black?id=630dedd95d237140e683eb4b"
                                  className="name">
                                  move men black stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN RED COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23054_734_1660718189_62fc8c6d411f3-251851315861.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23054_734_1660718189_62fc8c6d411f3-251851315861.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-red-comfortable-sports-shoes-red?id=62fbb69e03dcf87fb5d9dc42"
                                  className="name">
                                  move men red comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 2,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-28%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="Move Men Grey Stylish Sports Shoes"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23210_334_1662979504_631f0db01102a-1493557503387.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23210_334_1662979504_631f0db01102a-1493557503387.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-grey-stylish-sports-shoes-gray?id=631c3af1d02e4278d93ea019"
                                  className="name">
                                  move men grey stylish sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/22645_660_1658825144_62dfa9b8dc2ee-443596123352.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/22645_660_1658825144_62dfa9b8dc2ee-443596123352.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-stylish-sneakers-black?id=6308afc6063ccb72d925df36"
                                  className="name">
                                  move men black stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN RED COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22798_640_1661506476_630893ac7f48b-519598452451.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22798_640_1661506476_630893ac7f48b-519598452451.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-red-comfortable-sports-shoes-red?id=63089a7c063ccb72d9258f6d"
                                  className="name">
                                  move men red comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN GREY STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/14092022/22657_615_1658825468_62dfaafc44e5f-1544091997520.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/14092022/22657_615_1658825468_62dfaafc44e5f-1544091997520.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-grey-stylish-sneakers-gray?id=6321be3cf6b5503ae17046d1"
                                  className="name">
                                  move men grey stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="Move Men Red Sneaker"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/23277_429_1663655963_6329601bf012a-444985429963.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092022/23277_429_1663655963_6329601bf012a-444985429963.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-red-sneaker-brown?id=6325519a63f525322c46b998"
                                  className="name">
                                  move men red sneaker
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLUE COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23049_914_1661412658_63072532a8ae0-638621517417.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23049_914_1661412658_63072532a8ae0-638621517417.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-blue-comfortable-sports-shoes-blue?id=63072557063ccb72d9222225"
                                  className="name">
                                  move men blue comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLUE COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23052_15_1660718085_62fc8c05c0725-1183459400807.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23052_15_1660718085_62fc8c05c0725-1183459400807.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-blue-comfortable-sports-shoes-blue?id=62fbb6a903dcf87fb5d9dc87"
                                  className="name">
                                  move men blue comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 2,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-28%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN WHITE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/22072022/22583_269_1657084835_62c51ba3e1dd7-1135424775600.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/22072022/22583_269_1657084835_62c51ba3e1dd7-1135424775600.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-sports-shoes-white?id=62b5b4e6add6606430a35be3"
                                  className="name">
                                  move men white sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 4,399</del>{" "}
                                    <span className="discounted_price">
                                      Rs 2,950
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-33%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17092022/22655_949_1663389154_63254de25671e-1639498369615.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17092022/22655_949_1663389154_63254de25671e-1639498369615.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-stylish-sneakers-black?id=6321be2bf6b5503ae1704632"
                                  className="name">
                                  move men black stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN WHITE STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/14092022/22656_734_1658825491_62dfab1304105-184357615818.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/14092022/22656_734_1658825491_62dfab1304105-184357615818.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-stylish-sneakers-off-white?id=6321be34f6b5503ae1704691"
                                  className="name">
                                  move men white stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="Move Men Blue Stylish Sports Shoes"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23211_521_1662979531_631f0dcbb1dbe-1236076975519.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23211_521_1662979531_631f0dcbb1dbe-1236076975519.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-blue-stylish-sports-shoes-blue?id=631c3af8d02e4278d93ea035"
                                  className="name">
                                  move men blue stylish sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN RED COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23051_790_1661421169_630746710a2a0-1558984818766.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23051_790_1661421169_630746710a2a0-1558984818766.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-red-comfortable-sports-shoes-red?id=630746d7063ccb72d92275af"
                                  className="name">
                                  move men red comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN GREEN COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23053_459_1660718145_62fc8c411417e-252708760784.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23053_459_1660718145_62fc8c411417e-252708760784.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-green-comfortable-sports-shoes-green?id=62fbb6a403dcf87fb5d9dc67"
                                  className="name">
                                  move men green comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 2,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-28%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="Move Men Beige Stylish Sneakers"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_329_1661856358_630dea667dd0f-1591776891644.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_329_1661856358_630dea667dd0f-1591776891644.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-beige-stylish-sneakers-beige?id=630dee795d237140e683ed1c"
                                  aria-current="page"
                                  className="name router-link-exact-active router-link-active">
                                  move men beige stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLUE COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22799_919_1661506388_630893545a6f1-850884254069.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22799_919_1661506388_630893545a6f1-850884254069.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-blue-comfortable-sports-shoes-blue?id=63089a84063ccb72d9258f9e"
                                  className="name">
                                  move men blue comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLUE COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23059_398_1661506544_630893f0aeaac-347942124334.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23059_398_1661506544_630893f0aeaac-347942124334.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-blue-comfortable-sports-shoes-blue?id=63089b4c063ccb72d925930c"
                                  className="name">
                                  move men blue comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN GRAY COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23060_485_1661412933_63072645b27db-64092450362.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23060_485_1661412933_63072645b27db-64092450362.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-gray-comfortable-sports-shoes-gray?id=63073010063ccb72d9223f19"
                                  className="name">
                                  move men gray comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK STYLISH SNEAKERS"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22643_864_1658826649_62dfaf99848a9-243285588104.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22643_864_1658826649_62dfaf99848a9-243285588104.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-stylish-sneakers-black?id=6308afb3063ccb72d925dedb"
                                  className="name">
                                  move men black stylish sneakers
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,250</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,990
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-39%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN GRAY COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22801_519_1661506451_630893936f483-1424725060039.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/22801_519_1661506451_630893936f483-1424725060039.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-gray-comfortable-sports-shoes-gray?id=63089a92063ccb72d9258ff9"
                                  className="name">
                                  move men gray comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23062_840_1661506162_630892726f45f-1570913556649.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23062_840_1661506162_630892726f45f-1570913556649.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-comfortable-sports-shoes-black?id=6308989b063ccb72d9258660"
                                  className="name">
                                  move men black comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLUE COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23063_479_1661506181_6308928548b1a-458196263044.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23063_479_1661506181_6308928548b1a-458196263044.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-blue-comfortable-sports-shoes-blue?id=630898a5063ccb72d92586b2"
                                  className="name">
                                  move men blue comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN RED COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23047_89_1661507258_630896bae90c1-692819855554.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26082022/23047_89_1661507258_630896bae90c1-692819855554.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-red-comfortable-sports-shoes-red?id=63089ce8063ccb72d9259a2e"
                                  className="name">
                                  move men red comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="MOVE MEN BLACK COMFORTABLE SPORTS SHOES"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23048_373_1661412614_63072506ca091-778851092731.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/23048_373_1661412614_63072506ca091-778851092731.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-black-comfortable-sports-shoes-black?id=63072553063ccb72d9222211"
                                  className="name">
                                  move men black comfortable sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 3,450</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-57%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="outer-container">
                            <div>
                              <div className="image">
                                <img
                                  alt="Move Men White Sports Shoes"
                                  data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23218_634_1662979295_631f0cdfb25a3-612288999350.jpg"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23218_634_1662979295_631f0cdfb25a3-612288999350.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </div>
                            <div className="product__details list_details">
                              <div className="brand_name">
                                <p className="brand_text"> </p>
                                <div className="heart_wrappers mobile-heart">
                                  <div className="">
                                    <div className="heart fav">
                                      <svg
                                        viewBox="0 0 18 16 "
                                        id="heart "
                                        width="100% "
                                        height="100%">
                                        <path
                                          d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                          stroke="#707070 "
                                          stroke-width="2 "></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product_name">
                                <a
                                  href="/move-men-white-sports-shoes-white?id=631c3898d02e4278d93e9aab"
                                  className="name">
                                  move men white sports shoes
                                </a>
                              </div>
                              <div className="price_box">
                                <div className="price-inner-box">
                                  <p className="price">
                                    <del>Rs 2,550</del>{" "}
                                    <span className="discounted_price">
                                      Rs 1,499
                                    </span>{" "}
                                    <span className="percentage-text">
                                      (-41%)
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="product product-detail activeNew bigImage">
                  <div className="images desktop-product main-image">
                    <div className="col">
                      <div className="imgs">
                        <div>
                          <img
                            className="current"
                            src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_329_1661856358_630dea667dd0f-1591776891644.jpg"
                          />
                          <img
                            className=""
                            data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_993_1661856358_630dea667b832-729761779298.jpg"
                            src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_993_1661856358_630dea667b832-729761779298.jpg"
                            lazy="loaded"
                          />
                          <img
                            className=""
                            data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_177_1661856358_630dea66c3ffa-787775465306.jpg"
                            src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_177_1661856358_630dea66c3ffa-787775465306.jpg"
                            lazy="loaded"
                          />
                          <img
                            className=""
                            data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_686_1661856358_630dea66d9ecb-811408606654.jpg"
                            src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_686_1661856358_630dea66d9ecb-811408606654.jpg"
                            lazy="loaded"
                          />
                          <img
                            className=""
                            data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_892_1661856358_630dea66ded2a-795929619807.jpg"
                            src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23209_892_1661856358_630dea66ded2a-795929619807.jpg"
                            lazy="loaded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="share-icon">
                      <div data-v-41ba019c="" className="share-container">
                        <div data-v-41ba019c="" className="icon">
                          <img
                            data-v-41ba019c=""
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS45NDIiIGhlaWdodD0iMTguMjUiIHZpZXdCb3g9IjAgMCAxNS45NDIgMTguMjUiPgogIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNMTcyLjI4NCw2MS42YTMsMywwLDAsMC0yLjg1NiwzLjkyM2wtNC45NTQsMi43NTVhMywzLDAsMSwwLDAsNC42NTJsNC45NjEsMi43NTVhMi45NDcsMi45NDcsMCwwLDAtLjE1MS45MTYsMy4wMTYsMy4wMTYsMCwxLDAsLjg3My0yLjEwNmwtNC44MjUtMi42ODNhMi45ODEsMi45ODEsMCwwLDAsLjI2LTEuMjExLDIuOTQ5LDIuOTQ5LDAsMCwwLS4yNi0xLjIxMUwxNzAuMTUsNjYuN2EzLDMsMCwxLDAsMi4xMzUtNS4xMDZabTAsMS4zODVhMS42MTUsMS42MTUsMCwxLDEtMS42MTUsMS42MTVBMS42LDEuNiwwLDAsMSwxNzIuMjg0LDYyLjk4NFptLTkuNjkyLDZhMS42MTUsMS42MTUsMCwxLDEtMS42MTUsMS42MTVBMS42LDEuNiwwLDAsMSwxNjIuNTkyLDY4Ljk4NFptOS42OTIsNmExLjYxNSwxLjYxNSwwLDEsMS0xLjYxNSwxLjYxNUExLjYsMS42LDAsMCwxLDE3Mi4yODQsNzQuOTg0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1OS40NjcgLTYxLjQ3NCkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+Cjwvc3ZnPgo="
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="img resetImg"
                      style={{
                        backgroundImage: "url("+ "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/12092022/23209_329_1661856358_630dea667dd0f-1591776891644"+")",
                      }}></div>
                  </div>
                  <div className="details new-details">
                    <div className="name_style_box">
                      <h1 className="p_name">
                        move men beige stylish sneakers
                      </h1>
                      <div className="vendor_product_block">
                        <div className="product_style_code clearfix mt15">
                          {" "}
                          By : MOVE{" "}
                        </div>
                      </div>
                      <div className="vendor_product_block">
                        <div className="product_style_code clearfix mt15">
                          {" "}
                          {/* Style : ZYS-Y863-BEIGE{" "} */}
                        </div>
                        <div className="ratings-box">
                          <div data-v-34cbeed1="" className="vue-star-rating">
                            <div data-v-34cbeed1="" className="vue-star-rating">
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "-1px" }}>
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="20"
                                  width="20"
                                  viewBox="0 0 21 21"
                                  className="vue-star-rating-star"
                                  step="100">
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="wu0yz"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0">
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#EEBE00"></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="w69utf"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse">
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#wu0yz)"
                                    stroke="#fff"
                                    filter="url(#w69utf)"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#wu0yz)"
                                    stroke="transparent"
                                    stroke-width="2"
                                    stroke-linejoin="round"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#wu0yz)"></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "-1px" }}>
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="20"
                                  width="20"
                                  viewBox="0 0 21 21"
                                  className="vue-star-rating-star"
                                  step="100">
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="w080m"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0">
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#EEBE00"></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="z4qei47"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse">
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#w080m)"
                                    stroke="#fff"
                                    filter="url(#z4qei47)"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#w080m)"
                                    stroke="transparent"
                                    stroke-width="2"
                                    stroke-linejoin="round"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#w080m)"></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "-1px" }}>
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="20"
                                  width="20"
                                  viewBox="0 0 21 21"
                                  className="vue-star-rating-star"
                                  step="100">
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="slxj73"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0">
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#EEBE00"></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="b0vkk"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse">
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#slxj73)"
                                    stroke="#fff"
                                    filter="url(#b0vkk)"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#slxj73)"
                                    stroke="transparent"
                                    stroke-width="2"
                                    stroke-linejoin="round"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#slxj73)"></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "-1px" }}>
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="20"
                                  width="20"
                                  viewBox="0 0 21 21"
                                  className="vue-star-rating-star"
                                  step="100">
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="jhoaya"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0">
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#EEBE00"></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="y33zmj"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse">
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#jhoaya)"
                                    stroke="#fff"
                                    filter="url(#y33zmj)"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#jhoaya)"
                                    stroke="transparent"
                                    stroke-width="2"
                                    stroke-linejoin="round"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#jhoaya)"></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "-1px" }}>
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="20"
                                  width="20"
                                  viewBox="0 0 21 21"
                                  className="vue-star-rating-star"
                                  step="100">
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="tn6zxa"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0">
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#EEBE00"></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="eg4vpk"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse">
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#tn6zxa)"
                                    stroke="#fff"
                                    filter="url(#eg4vpk)"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#tn6zxa)"
                                    stroke="transparent"
                                    stroke-width="2"
                                    stroke-linejoin="round"></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="11.181818181818182,3.909090909090909,5.727272727272727,21,19.363636363636363,10.09090909090909,3,10.09090909090909,16.636363636363633,21"
                                    fill="url(#tn6zxa)"></polygon>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="review-box">
                            <span>11</span>Reviews{" "}
                          </div>
                        </div>
                        <div></div>
                        <div className="price_container_cl mobile-price-container">
                          <h2 className="price" style={{ marginTop: "0px" }}>
                            <del>Rs 3,250</del>{" "}
                            <span className="set">Rs 1,990</span>{" "}
                            <span className="percentage-text">(-39%)</span>{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="promotion-container"></div>
                    <div
                      className="price_container_cl"
                      style={{ maxHeight: "130px" }}>
                      <div className="price-hot">
                        <h2 className="price" style={{ marginTop: "10px" }}>
                          <del>Rs 3,250</del>{" "}
                          <span className="set">Rs 1,990</span>{" "}
                          <span className="percentage-text">(-39%)</span>{" "}
                        </h2>
                        <div className="copy-wrap">
                          <p className="copy-tip"></p>
                        </div>
                      </div>

                      <div className="db11_price clearfix js-promote-price-elem"></div>
                    </div>
                    <div className="desktop-product">
                      <div className="copy-wrap"></div>
                    </div>
                    <div className="variants_container mobile-product">
                      <div className="mb20">
                        <div className="fx color-container mobile-color">
                          <span className="color_heading">Color:</span>
                          <div className="color_boxes_inner">
                            <a
                              href="/move-men-blue-stylish-sneakers-blue?id=630dee6a5d237140e683ecde"
                              className="color_img_box color-sizes-add">
                              <div className="">
                                <img
                                  alt="Blue"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/12092022/23207_922_1661856387_630dea8328514-1312749427252.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </a>
                            <a
                              href="#"
                              className="color_img_box color-sizes-add">
                              <div className="">
                                <img
                                  alt="Gray"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/12092022/23208_318_1661856469_630dead5c416a-1067813465203.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </a>
                            <a
                              href="#"
                              aria-current="page"
                              className="color_img_box color-sizes-add router-link-exact-active router-link-active color_box_selected">
                              <div className="">
                                <img
                                  alt="Beige"
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/12092022/23209_329_1661856358_630dea667dd0f-1591776891644.jpg"
                                  lazy="loading"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="normal-sizes">
                        <div id="demo" className="without-layout">
                          <div className="sizes-container mobile-sizes">
                            <div className="sizes_main_box">
                              <div className="sizes-dev">
                                <span className="size_heading">
                                  Select Size:&nbsp;
                                </span>{" "}
                                <span className="size_chart_box">
                                  <a href="#">Size Chart</a>
                                </span>
                              </div>
                              <div className="sizes_box">
                                <span className="sizes">41</span>
                                <span className="sizes actives">42</span>
                                <span className="sizes">43</span>
                                <span className="sizes">44</span>
                                <span className="sizes">45</span>
                                <span className="sizes">46</span>
                              </div>
                              <div className="popup-btn-container">
                                <button className="btn-done btn-effect">
                                  Done
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div id="demo" className="popup-sizes">
                          <div className="sizes-container mobile-sizes">
                            <div className="sizes_main_box">
                              <div className="sizes-dev">
                                <span className="size_heading">
                                  Select Size:&nbsp;
                                </span>{" "}
                                <span className="size_chart_box">
                                  <a href="#">Size Chart</a>
                                </span>
                              </div>
                              <div className="sizes_box">
                                <span className="sizes">41</span>
                                <span className="sizes actives">42</span>
                                <span className="sizes">43</span>
                                <span className="sizes">44</span>
                                <span className="sizes">45</span>
                                <span className="sizes">46</span>
                              </div>
                              <div className="popup-btn-container">
                                <button className="btn-done btn-effect">
                                  Done
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="goods-intro mobile-product">
                      <div className="">
                        <div className="title">
                          {" "}
                          Product Description
                          <div className="description_btns">
                            <div className="btn_minus_icon">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAABHNCSVQICAgIfAhkiAAAAGFJREFUGFdjLCgouMDAwHB+woQJiUAaJwCqWwCU1GeEMuKBnAW4NCGpWcgIMhKfJmTFQAMTwBpwaUJXDFIH14CuCWpOApBeCDIZZjCKBjRNIC6KYgwbkJw3AcQGmlyAHmwAMncyF7xdNkUAAAAASUVORK5CYII=" />
                            </div>
                          </div>
                        </div>
                        <div className="description_content">
                          <div className="description_content_text">
                            <p>
                              <p>
                                <strong>Product Details:</strong>
                              </p>
                              <p>Move Men Beige Stylish Sneakers</p>
                              <p>
                                <strong>Specifications:</strong>
                              </p>
                              <p>
                                <strong>Material:</strong>
                              </p>
                              <p>
                                <strong>Upper:&nbsp;</strong>&nbsp;Knitted
                                Polyester Quality.
                              </p>
                              <p>
                                <strong>Bottom:</strong> PolyVinyl Chloride With
                                Injection Moulding Machine Sole.
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="variants_container mobile-product"
                      style={{ padding: "0px" }}>
                      <div className="shipping-container">
                        <div className="delivery-time-img">
                          <img
                            src="images/DeliveryTime.svg"
                            alt="DeliveryTime"
                          />
                        </div>
                        <div>
                          <h5>Delivery Time</h5>
                          <div className="del-text">
                            {" "}
                            Lahore, Rawalpindi, Islamabad: 1-2 days
                            <br /> Other cities: 1-4 days{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        id="variants_box"
                        className="variants_container desktop-product">
                        <div className="mb20">
                          <div className="fx color-container">
                            <span className="color_heading">Color:</span>
                            <div className="color_boxes_inner">
                              <a
                                href="/move-men-blue-stylish-sneakers-blue?id=630dee6a5d237140e683ecde"
                                className="tooltip color_img_box color-sizes-add">
                                <div className="">
                                  <img
                                    alt="Blue"
                                    src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/12092022/23207_922_1661856387_630dea8328514-1312749427252.jpg"
                                  />{" "}
                                  <span className="tooltiptext">Blue</span>
                                </div>
                              </a>
                              <a
                                href="/move-men-grey-stylish-sneakers-gray?id=630dee725d237140e683ecfd"
                                className="tooltip color_img_box color-sizes-add">
                                <div className="">
                                  <img
                                    alt="Gray"
                                    data-src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/12092022/23208_318_1661856469_630dead5c416a-1067813465203.jpg"
                                    src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/12092022/23208_318_1661856469_630dead5c416a-1067813465203.jpg"
                                    lazy="loaded"
                                  />{" "}
                                  <span className="tooltiptext">Gray</span>
                                </div>
                              </a>
                              <a
                                href="/move-men-beige-stylish-sneakers-beige?id=630dee795d237140e683ed1c"
                                aria-current="page"
                                className="tooltip color_img_box color-sizes-add router-link-exact-active router-link-active color_box_selected">
                                <div className="">
                                  <img
                                    alt="Beige"
                                    src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/12092022/23209_329_1661856358_630dea667dd0f-1591776891644.jpg"
                                  />{" "}
                                  <span className="tooltiptext">Beige</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="sizes_main_box desktop-sizes">
                          <span className="size_heading">Size:&nbsp;</span>
                          <div className="sizes_box">
                            <span className="sizes">41</span>
                            <span className="sizes actives">42</span>
                            <span className="sizes">43</span>
                            <span className="sizes">44</span>
                            <span className="sizes">45</span>
                            <span className="sizes">46</span>
                          </div>
                          <span className="size_chart_box">
                            <a href="#">Size Chart</a>
                          </span>
                        </div>
                      </div>

                      <div className="desktop-product">
                        <div>
                          <div className="flex checkout_buttons mobile_fixed_btn">
                            <div style={{ width: "100%" }}>
                              <button className="add_to_bag btn-effect">
                                <div>
                                  <span>ADD TO BAG</span>
                                </div>
                              </button>
                            </div>
                            <div className="wishlist_button mobile_button">
                              <div className="">
                                <div className="heart fav">
                                  <svg
                                    viewBox="0 0 18 16 "
                                    id="heart "
                                    width="100% "
                                    height="100%">
                                    <path
                                      d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                      stroke="#707070 "
                                      stroke-width="2 "></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="variants_container desktop-product"
                          style={{ padding: "0px" }}>
                          <div className="shipping-container">
                            <div className="delivery-time-img">
                              <img src="images/DeliveryTime.svg" />
                            </div>
                            <div>
                              <h5>Delivery Time:</h5>
                              <div style={{ padding: "0px", fontSize: "14px" }}>
                                {" "}
                                Lahore, Rawalpindi, Islamabad: 1-2 days
                                <br /> Other cities: 1-4 days{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="goods-intro desktop-product">
                      <div className="">
                        <div className="title">
                          {" "}
                          Product Description
                          <div className="description_btns">
                            <div className="btn_minus_icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="18"
                                viewBox="0 0 24 24"
                                className="addalign">
                                <path d="M19 13H5v-2h14v2z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="description_content">
                          <div className="description_content_text">
                            <p>
                              <p>
                                <strong>Product Details:</strong>
                              </p>
                              <p>Move Men Beige Stylish Sneakers</p>
                              <p>
                                <strong>Specifications:</strong>
                              </p>
                              <p>
                                <strong>Material:</strong>
                              </p>
                              <p>
                                <strong>Upper:&nbsp;</strong>&nbsp;Knitted
                                Polyester Quality.
                              </p>
                              <p>
                                <strong>Bottom:</strong> PolyVinyl Chloride With
                                Injection Moulding Machine Sole.
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-83af3e7a=""></div>
                <div id="review-container" className="mobile-product"></div>
                <div className="desktop-product"></div>
                <div className="mobile-product add-button">
                  <div className="button-container">
                    <div>
                      <div className="checkout_buttons mobile_fixed_btn">
                        <div className="mobile_button">
                          <div className="wishlist-container">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>{" "}
                            <span>WISHLIST</span>
                          </div>
                        </div>
                        <div style={{ width: "50%" }}>
                          <div>
                            <button
                              className="add_to_bag btn-effect"
                              style={{ width: "100% !important" }}>
                              <span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABHNCSVQICAgIfAhkiAAAAZhJREFUOE+VkksoRGEYhucouZS9khXKykIacmmYiSiXIcXKzqXUhJRSlLIzSiQLe4poSCxMLlMWklJsJCtyyWWlJOV4Xo46TUdz5tTT/3+f93vmnN9veBwe0zSLaI+B1nuYNQxj3SlrxDcZzqe3DzewC2VQCV1I1uLzToIFQgHwM3CrAaQxli9ooPdul/wICGSxVEAKDIH6YVuwxZJOsL7ABSK9ocdgWOENaHL6xn965xIieZIgk2IT0mDE+mVJB23DPexrYECfAbVQh+BagmyKI4jS6KXW6b+yn/8T0NNAO/RBN8xAOZkzCQootmGVxqg+iceMf3X6qfQ/WXXAUfBRxyQott4gRGMx0TmQ95I5hg7yKxL4KA6sQ9lzISgkswVLCMYl6KRYBi+NExeCHDKHECE/LMGkXgcaaVy6EOjO7MAz+aAE0xRBqKJxl0igvzOjq66DDkig+54B9QjeXAoi5HLBL4EOTv86XRRXDzNTBFuhWoJTNo/Q72r6NxTSmUGzBFds0uEjCYGieVAqQRubkiSHFX+AuW9Cl6ON3DV3OwAAAABJRU5ErkJggg==" />{" "}
                                ADD TO BAG
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desktop-product">
                  <div id="reviews" style={{ marginTop: "10px" }}>
                    <div style={{ marginTop: "10px" }}>
                      <div style={{ marginBottom: "10px" }}>
                        <a
                          href="/account/login?return=move-men-beige-stylish-sneakers-beige%3Fid%3D630dee795d237140e683ed1c"
                          className=""
                          style={{
                            padding: "20px",
                            background: "white",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "17px",
                              fontWeight: " 500",
                            }}>
                            {" "}
                            &nbsp;&nbsp; Login to review{" "}
                          </div>
                        </a>
                      </div>
                      <div>
                        <div className="main-reviews">
                          <div className="reviews-header">
                            <div className="reviews-title">Reviews (11)</div>
                          </div>
                        </div>
                        <div className="rating">
                          <div className="rate-header">5.0</div>
                          <div className="rate-stars">
                            <div data-v-34cbeed1="" className="vue-star-rating">
                              <div
                                data-v-34cbeed1=""
                                className="vue-star-rating">
                                <span
                                  data-v-34cbeed1=""
                                  className="vue-star-rating-star"
                                  style={{ marginRight: "0px" }}>
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="25"
                                    width="25"
                                    viewBox="0 0 27.5 27.5"
                                    className="vue-star-rating-star"
                                    step="100">
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="wjvrj8"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0">
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffa800"></stop>{" "}
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"></stop>
                                    </linearGradient>{" "}
                                    <filter
                                      data-v-21f5376e=""
                                      id="rslmse"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse">
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"></feGaussianBlur>{" "}
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"></feMergeNode>{" "}
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"></feMergeNode>
                                      </feMerge>
                                    </filter>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#wjvrj8)"
                                      stroke="#fff"
                                      filter="url(#rslmse)"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#wjvrj8)"
                                      stroke="transparent"
                                      stroke-width="5"
                                      stroke-linejoin="round"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#wjvrj8)"></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  className="vue-star-rating-star"
                                  style={{ marginRight: "0px" }}>
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="25"
                                    width="25"
                                    viewBox="0 0 27.5 27.5"
                                    className="vue-star-rating-star"
                                    step="100">
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="a1mckc"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0">
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffa800"></stop>{" "}
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"></stop>
                                    </linearGradient>{" "}
                                    <filter
                                      data-v-21f5376e=""
                                      id="02mb8y"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse">
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"></feGaussianBlur>{" "}
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"></feMergeNode>{" "}
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"></feMergeNode>
                                      </feMerge>
                                    </filter>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#a1mckc)"
                                      stroke="#fff"
                                      filter="url(#02mb8y)"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#a1mckc)"
                                      stroke="transparent"
                                      stroke-width="5"
                                      stroke-linejoin="round"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#a1mckc)"></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  className="vue-star-rating-star"
                                  style={{ marginRight: "0px" }}>
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="25"
                                    width="25"
                                    viewBox="0 0 27.5 27.5"
                                    className="vue-star-rating-star"
                                    step="100">
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="bslpwt"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0">
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffa800"></stop>{" "}
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"></stop>
                                    </linearGradient>{" "}
                                    <filter
                                      data-v-21f5376e=""
                                      id="m9zaio"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse">
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"></feGaussianBlur>{" "}
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"></feMergeNode>{" "}
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"></feMergeNode>
                                      </feMerge>
                                    </filter>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#bslpwt)"
                                      stroke="#fff"
                                      filter="url(#m9zaio)"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#bslpwt)"
                                      stroke="transparent"
                                      stroke-width="5"
                                      stroke-linejoin="round"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#bslpwt)"></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  className="vue-star-rating-star"
                                  style={{ marginRight: "0px" }}>
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="25"
                                    width="25"
                                    viewBox="0 0 27.5 27.5"
                                    className="vue-star-rating-star"
                                    step="100">
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="ff0jlf"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0">
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffa800"></stop>{" "}
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"></stop>
                                    </linearGradient>{" "}
                                    <filter
                                      data-v-21f5376e=""
                                      id="z7jlx"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse">
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"></feGaussianBlur>{" "}
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"></feMergeNode>{" "}
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"></feMergeNode>
                                      </feMerge>
                                    </filter>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#ff0jlf)"
                                      stroke="#fff"
                                      filter="url(#z7jlx)"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#ff0jlf)"
                                      stroke="transparent"
                                      stroke-width="5"
                                      stroke-linejoin="round"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#ff0jlf)"></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  className="vue-star-rating-star"
                                  style={{ marginRight: "0px" }}>
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="25"
                                    width="25"
                                    viewBox="0 0 27.5 27.5"
                                    className="vue-star-rating-star"
                                    step="100">
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="y8x53w"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0">
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffa800"></stop>{" "}
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"></stop>
                                    </linearGradient>{" "}
                                    <filter
                                      data-v-21f5376e=""
                                      id="n3h6m"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse">
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"></feGaussianBlur>{" "}
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"></feMergeNode>{" "}
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"></feMergeNode>
                                      </feMerge>
                                    </filter>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#y8x53w)"
                                      stroke="#fff"
                                      filter="url(#n3h6m)"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#y8x53w)"
                                      stroke="transparent"
                                      stroke-width="5"
                                      stroke-linejoin="round"></polygon>{" "}
                                    <polygon
                                      data-v-21f5376e=""
                                      points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                      fill="url(#y8x53w)"></polygon>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="reviews">
                          <div className="">
                            <div className="review-head">
                              <div className="icon-title">
                                <div className="icon">
                                  <span
                                    style={{
                                      fontWeight: "bolder",
                                      alignSelf: "center",
                                      position: " relative",
                                      left: "4px",
                                    }}>
                                    C
                                  </span>
                                </div>
                                <div className="reviewer-name">
                                  <span className="self-align">
                                    Mohsin Raza
                                  </span>
                                </div>
                              </div>
                              <div className="reviews-stars">
                                <div
                                  data-v-34cbeed1=""
                                  className="vue-star-rating">
                                  <div
                                    data-v-34cbeed1=""
                                    className="vue-star-rating">
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: "0px" }}>
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height="25"
                                        width="25"
                                        viewBox="0 0 27.5 27.5"
                                        className="vue-star-rating-star"
                                        step="100">
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="q4a91j"
                                          x1="0"
                                          x2="100%"
                                          y1="0"
                                          y2="0">
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#ffa800"></stop>{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#d8d8d8"></stop>
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="kgua6s"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse">
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation="0"
                                            result="coloredBlur"></feGaussianBlur>{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"></feMergeNode>{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"></feMergeNode>
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#q4a91j)"
                                          stroke="#fff"
                                          filter="url(#kgua6s)"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#q4a91j)"
                                          stroke="transparent"
                                          stroke-width="5"
                                          stroke-linejoin="round"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#q4a91j)"></polygon>
                                      </svg>
                                    </span>
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: "0px" }}>
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height="25"
                                        width="25"
                                        viewBox="0 0 27.5 27.5"
                                        className="vue-star-rating-star"
                                        step="100">
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="vilatm"
                                          x1="0"
                                          x2="100%"
                                          y1="0"
                                          y2="0">
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#ffa800"></stop>{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#d8d8d8"></stop>
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="m790m8"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse">
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation="0"
                                            result="coloredBlur"></feGaussianBlur>{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"></feMergeNode>{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"></feMergeNode>
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#vilatm)"
                                          stroke="#fff"
                                          filter="url(#m790m8)"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#vilatm)"
                                          stroke="transparent"
                                          stroke-width="5"
                                          stroke-linejoin="round"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#vilatm)"></polygon>
                                      </svg>
                                    </span>
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: "0px" }}>
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height="25"
                                        width="25"
                                        viewBox="0 0 27.5 27.5"
                                        className="vue-star-rating-star"
                                        step="100">
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="1djpjt"
                                          x1="0"
                                          x2="100%"
                                          y1="0"
                                          y2="0">
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#ffa800"></stop>{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#d8d8d8"></stop>
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="aw4cps"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse">
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation="0"
                                            result="coloredBlur"></feGaussianBlur>{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"></feMergeNode>{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"></feMergeNode>
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#1djpjt)"
                                          stroke="#fff"
                                          filter="url(#aw4cps)"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#1djpjt)"
                                          stroke="transparent"
                                          stroke-width="5"
                                          stroke-linejoin="round"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#1djpjt)"></polygon>
                                      </svg>
                                    </span>
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: "0px" }}>
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height="25"
                                        width="25"
                                        viewBox="0 0 27.5 27.5"
                                        className="vue-star-rating-star"
                                        step="100">
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="6sdqhc"
                                          x1="0"
                                          x2="100%"
                                          y1="0"
                                          y2="0">
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#ffa800"></stop>{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#d8d8d8"></stop>
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="ogxib"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse">
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation="0"
                                            result="coloredBlur"></feGaussianBlur>{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"></feMergeNode>{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"></feMergeNode>
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#6sdqhc)"
                                          stroke="#fff"
                                          filter="url(#ogxib)"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#6sdqhc)"
                                          stroke="transparent"
                                          stroke-width="5"
                                          stroke-linejoin="round"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#6sdqhc)"></polygon>
                                      </svg>
                                    </span>
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: "0px" }}>
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height="25"
                                        width="25"
                                        viewBox="0 0 27.5 27.5"
                                        className="vue-star-rating-star"
                                        step="100">
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="pcyqdh"
                                          x1="0"
                                          x2="100%"
                                          y1="0"
                                          y2="0">
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#ffa800"></stop>{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stop-color="#d8d8d8"></stop>
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="ahpmgq"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse">
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation="0"
                                            result="coloredBlur"></feGaussianBlur>{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"></feMergeNode>{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"></feMergeNode>
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#pcyqdh)"
                                          stroke="#fff"
                                          filter="url(#ahpmgq)"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#pcyqdh)"
                                          stroke="transparent"
                                          stroke-width="5"
                                          stroke-linejoin="round"></polygon>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                          fill="url(#pcyqdh)"></polygon>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-comment">
                              <p>Good quality thanks 👍</p>
                            </div>
                            <div className="review-images">
                              <div
                                className="review-image"
                                style={{
                                  backgroundImage: ` url(&quot;https://d30fs77zq6vq2v.cloudfront.net/reviews/25092022/inbound638338453203268972-783265681369.jpg&quot;)`,
                                }}></div>
                            </div>
                            <div className="review-date">
                              <span>Sep. 25, 2022 at 9:38:59 PM</span>
                            </div>
                            <div className="divider"></div>
                          </div>
                        </div>
                        <div className="view-all-reviews">
                          <span
                            className="self-align"
                            style={{ fontSize: "14px", fontWeight: " bold" }}>
                            View All
                            <img
                              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Mi4wMDQgNDkyLjAwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                              style={{ width: "10px", height: " auto" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desktop-product">
                  <div className="d_container related recent">
                    <div className="related-head">
                      <span></span>
                      <h2 className="related-title">recently viewed</h2>
                      <button className="btn btn-effect">CLEAR</button>
                    </div>
                    <div className="related-products-wrap">
                      <div className="swiper swipe-product-slide">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/21452_44_1661411706_6307217a2969d-1099112493083.jpg"
                                  alt="west line men check casual shirt"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/07092022/21449_663_1661411594_6307210a24106-943442235541.jpg"
                                  alt="west line men check casual shirt"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/06092022/21460_486_1661411933_6307225da6efd-202824226075.jpg"
                                  alt="west line men check casual shirt"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/19504_443_1662119042_6311ec824ad04-924579090636.jpg"
                                  alt="West Line women western jumpsuit"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082022/21452_44_1661411706_6307217a2969d-1099112493083.jpg"
                                  alt="west line men check casual shirt"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/07092022/21449_663_1661411594_6307210a24106-943442235541.jpg"
                                  alt="west line men check casual shirt"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/06092022/21460_486_1661411933_6307225da6efd-202824226075.jpg"
                                  alt="west line men check casual shirt"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="" className="">
                              <div className="homeseller-image">
                                <img
                                  src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/19504_443_1662119042_6311ec824ad04-924579090636.jpg"
                                  alt="West Line women western jumpsuit"
                                />
                              </div>
                              <div className="homeseller-detail">
                                <h6>Rs 1,350</h6>
                                <div className="percent">
                                  <del>Rs 1,699</del>{" "}
                                  <span className="percentage-text">
                                    (-21%)
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desktop-product">
                  <div
                    className="d_container related"
                    style={{ padding: "25px 10px" }}>
                    <h2 className="center" style={{ marginLeft: "10px" }}>
                      similar products
                    </h2>
                    <div className="related-container">
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="MOVE MEN GOLD STYLISH SNEAKERS"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23241_218_1663388904_63254ce8af23b-381989595176.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23241_218_1663388904_63254ce8af23b-381989595176.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-gold-stylish-sneakers-gold?id=63254d4863f525322c46b0a5"
                                className="name">
                                move men gold stylish sneakers
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="MOVE MEN WHITE STYLISH SNEAKERS"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23240_875_1663405398_63258d568a67a-831623405365.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19092022/23240_875_1663405398_63258d568a67a-831623405365.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-white-stylish-sneakers-white?id=63281133eaac89111cacd9e9"
                                className="name">
                                move men white stylish sneakers
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="MOVE MEN GOLD STYLISH SNEAKERS"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23247_363_1661856181_630de9b5115d2-176926757493.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23247_363_1661856181_630de9b5115d2-176926757493.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-gold-stylish-sneakers-gold?id=630dede05d237140e683eb73"
                                className="name">
                                move men gold stylish sneakers
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="MOVE MEN WHITE STYLISH SNEAKERS"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30082022/23244_210_1661856040_630de92885580-1589416815042.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30082022/23244_210_1661856040_630de92885580-1589416815042.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-white-stylish-sneakers-white?id=630ded445d237140e683e9a7"
                                className="name">
                                move men white stylish sneakers
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="MOVE MEN WHITE STYLISH SNEAKERS"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23248_764_1661856232_630de9e81e7f0-928564221722.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23248_764_1661856232_630de9e81e7f0-928564221722.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-white-stylish-sneakers-white?id=630dede65d237140e683eb8e"
                                className="name">
                                move men white stylish sneakers
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="MOVE MEN GOLD STYLISH SNEAKERS"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23243_456_1661856530_630deb12f22f2-595832278019.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/23243_456_1661856530_630deb12f22f2-595832278019.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-gold-stylish-sneakers-gold?id=630ded3d5d237140e683e987"
                                className="name">
                                move men gold stylish sneakers
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="Move Men Beige Stylish Sports Shoes"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23212_264_1662979924_631f0f541aac4-1377516795455.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092022/23212_264_1662979924_631f0f541aac4-1377516795455.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-beige-stylish-sports-shoes-beige?id=631c3affd02e4278d93ea051"
                                aria-current="page"
                                className="name router-link-exact-active router-link-active">
                                move men beige stylish sports shoes
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="heart_wrapper">
                          <div className="">
                            <div className="heart fav">
                              <svg
                                viewBox="0 0 18 16 "
                                id="heart "
                                width="100% "
                                height="100%">
                                <path
                                  d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                  stroke="#707070 "
                                  stroke-width="2 "></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image">
                            <img
                              alt="MOVE MEN RED STYLISH SNEAKERS"
                              data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10092022/23245_19_1662798197_631c49758d7ef-1157756011594.jpg"
                              src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10092022/23245_19_1662798197_631c49758d7ef-1157756011594.jpg"
                              lazy="loaded"
                            />
                          </div>
                          <div className="product__details">
                            <div className="brand_name">
                              <p className="brand_text"> MOVE </p>
                            </div>
                            <div className="product_name">
                              <a
                                href="/move-men-red-stylish-sneakers-red?id=631c49bcd02e4278d93ec609"
                                className="name">
                                move men red stylish sneakers
                              </a>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                <span className="discounted_price">
                                  Rs 1,990
                                </span>{" "}
                                <del>Rs 3,250</del>{" "}
                                <span className="percentage-text">-39%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        </>
    )
}

export default Product