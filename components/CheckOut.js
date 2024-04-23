import Link from "next/link";
import Styles from '../styles/Checkout.module.css'
import { useSelector, useDispatch } from "react-redux";
import  { useEffect, useState } from "react";
const CheckOut = () => {
  const cart = useSelector(state => state.cart);
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartData(cart);
  }, [cart]);
  const getTotalPrice = () => {
    return cartData.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  return (
    <>

      <main className="checkout" style={{ backgroundColor: "white" }}>
        <div >

        </div>
        <div className="checkout-header" style={{ backgroundColor: "black" }}>
          <nav className="only-desktop checkout-container" >
            <Link href="/">
              <a className="img router-link-active" style={{ marginTop: "8px" }}>
                <img src="images/img-logo.png" alt="logo" width={"200"} />
              </a>
            </Link>
            <h1 className="heading" style={{ color: "white" }}>Shopping Bag</h1>
            <div className="secure">
              <img src="images/sprite-secure.png" alt="" />
              <p >100% SECURE</p>
            </div>
          </nav>
        </div>
        <div className="nav_mobile only-mobile-v2">
          <div style={{ display: "flex" }}>
            <div className="div-height" style={{ paddingLeft: "14px" }}>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOSAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTcuNTU2IDcuODQ3aC0xNi41NTZtNi40NS02Ljg0N2wtNi40NSA2Ljg3NyA2LjQ1IDYuODE3IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjU2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIi8+PC9zdmc+Cg==" alt="" className="btn" />
            </div>
            <div className="div-height" style={{ width: "95px", paddingLeft: "22px" }}>
              <a href="/" className="img router-link-active">
                <img src="images/sehgal-logo.png" alt="" />
              </a>
            </div>
            <div className="div-height" style={{ paddingLeft: "10px", paddingBottom: "24px", letterSpacing: "-0.22px", lineHeight: "24px", fontWeight: " 500", fontSize: "12px" }}>SHOPPING BAG</div>
          </div>
        </div>
        <div className="checkout-container">
          <div >
            <div className="only-desktop flex__m mobile-block">
              <div className="checkout-container d-flex">
                <div >
                  <div className={Styles.checkout__form}>
                    <div className="d-flex justify-content-between p-2">

                      <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Contact</h3>
                      <span>
                        Have an account?
                        <Link href="/login">
                          <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}> Log in</span>
                        </Link>
                      </span>
                    </div>

                    <form action="#">
                      <input className={Styles.input} type="text" name="contact"

                        placeholder="Contact" />
                      <div className="d-flex align-content-center mb-2">

                        <input style={{ width: "3px", marginRight: "6px" }} className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        <label className="form-check-label" for="flexCheckIndeterminate">
                          Email me with news and offers
                        </label>
                      </div>
                      <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Delivery</h3>

                      <div className="form-floating mb-3">
                        <select className="form-control" id="countrySelect" defaultValue="">
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          {/* Add more options for other countries */}
                        </select>
                        <label htmlFor="countrySelect">Select Country</label>
                      </div>
                      <div>
                        <input className={Styles.input} style={{ width: "49%", marginRight: "4px" }} type="text" name="firstname"

                          placeholder="First Name" />

                        <input style={{ width: "50%" }} type="text" name="lasttname"

                          placeholder="Last Name" />
                      </div>

                      <input
                        className={Styles.input}
                        type="text"

                        name="address"

                        placeholder="Address" />


                      <input
                        className={Styles.input}
                        type="text"

                        name="city"

                        placeholder="City" />


                      <input
                        className={Styles.input}
                        type="text"

                        name="state"

                        placeholder="State" />


                      <input
                        className={Styles.input}
                        type="text"

                        name="zip"

                        placeholder="Zip Code" />


                      <input
                        className={Styles.input}
                        type="text"

                        name="phone"

                        placeholder="Phone Number" />


                      <input type="email" name="email" placeholder="Email Address" />

                      <select name="shipping_method">
                        <option value="standard">Standard Shipping (3-5 days)</option>
                        <option value="expedited">Expedited Shipping (1-2 days)</option>
                      </select>

                      <input type="submit" value="Complete Order" />
                    </form>
                  </div>
                  <div className="only-mobile-v2 flex__m mobile-block">
                    <div id="step-1" className="step_1">
                      <div className="card address_card">
                        <div className="card _collapse_step" style={{ padding: "4px" }}>
                          <b style={{ fontSize: " 17px" }}>Delivering To</b>
                          <div className="flex-address">
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                              <div style={{ display: "flex", marginBottom: "4px" }}>
                                <p style={{ width: "95%" }}> Shahid Umer </p>
                              </div>
                              <div style={{ display: "flex", marginBottom: "4px" }}>
                                <div style={{ width: "95%" }}>
                                  <p style={{ margin: " 0px" }}> H.No. 751-A, PNG Railway Colony, Wheatman Road, Moghalpura, Lahore, Lahore </p>
                                </div>
                              </div>
                              <div style={{ display: "flex", marginBottom: "4px" }}>
                                <p style={{ width: "95%" }}>923004454490</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="step_address_btns">
                          <button type="button" className="change_address_btn btn-effect">Change or Add Address</button>
                        </div>
                      </div>
                      <div className="cart_card">
                        <div >


                          <div className="card cart_summary">
                            <div className="item">
                              <div className="image">
                                <img src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/25082022/23350_32_1661412197_6307236592de1-1170733068792.jpg" alt="west line men casual shirt" />
                              </div>
                              <div className="des">
                                <div className="detail-price">
                                  <h2> Rs 1,350

                                  </h2>
                                  <del>Rs 1,699</del>
                                  <span className="percentage-text"> (-21%) </span>
                                </div>
                                <p className="title pname"> west line men casual shirt </p>
                                <div className="size-contianer">
                                  <div className="size-items">
                                    <span> Size: <strong>M</strong>
                                    </span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                                  </div>
                                  <div className="size-items">
                                    <span> Qty: <strong>1</strong>
                                    </span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                                  </div>
                                </div>

                                <div className="remove-checkout btn-effect">
                                  <img src="images/delete-icon.0827b56.svg" />
                                  <h1>Remove</h1>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="image">
                                <img src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/25082022/23351_92_1661412234_6307238ada498-558900232534.jpg" alt="west line men casual shirt" />
                              </div>
                              <div className="des">
                                <div className="detail-price">
                                  <h2> Rs 1,350

                                  </h2>
                                  <del>Rs 1,699</del>
                                  <span className="percentage-text"> (-21%) </span>
                                </div>
                                <p className="title pname"> west line men casual shirt </p>
                                <div className="size-contianer">
                                  <div className="size-items">
                                    <span> Size: <strong>L</strong>
                                    </span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                                  </div>
                                  <div className="size-items">
                                    <span> Qty: <strong>1</strong>
                                    </span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                                  </div>
                                </div>

                                <div className="remove-checkout btn-effect">
                                  <img src="images/delete-icon.0827b56.svg" />
                                  <h1>Remove</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card cart_summary card-total">
                            <div className="sub">
                              <div className="table">
                                <h4>Price Details</h4>
                                <div className="price-detail" style={{ display: "flex", flexDirection: "column" }}>
                                  <div style={{ display: " flex", justifyContent: "space-between" }}>
                                    <div>
                                      <p>Price (2 Item)</p>
                                    </div>
                                    <div> Rs 2,700 </div>
                                  </div>
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                      <p>Discount</p>
                                    </div>
                                    <div className="discount-color">- Rs 0</div>
                                  </div>
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                      <p>Delivery Charges</p>
                                    </div>
                                    <div className="delivery"> Rs 150 </div>
                                  </div>



                                  <div className="total-pay" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                      <b style={{ fontSize: "14px", fontWeight: "700" }}>TOTAL TO PAY</b>
                                    </div>
                                    <div>
                                      <b> Rs 2,850 </b>
                                    </div>
                                  </div>


                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card cart_summary">
                            <div className="coupon-main">
                              <div>
                                <h2>Coupons</h2>
                                <div className="cart-copon">
                                  <div className="tag">
                                    <img src="images/images.013cc82.png" />
                                    <p>Apply Coupons</p>
                                  </div>
                                  <button className="aply-coupon btn-effect">APPLY</button>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div ></div>
                    </div>
                    <div className="div">
                      <div className="checkout-ship">

                      </div>
                      <div style={{ padding: "7px" }}>

                        <div >
                          <div >
                            <button type="button" className="order mobile_fixed_btn_step">
                              <span >Place Order</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div >
                  <div className="desktop-sizes">

                  </div>

                  <div className="checkout-details">
                    <div className="coupon-main">
                      <h2>Coupons</h2>
                      <div>
                        <div className="cart-copon">
                          <div className="tag">
                            <img src="images/images.013cc82.png" alt="img" />
                            <p>Apply Coupons</p>
                          </div>
                          <button className="aply-coupon btn-effect">APPLY</button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>

                  <div className="card">
                    {
                      cartData && cartData.map((item)=>{
                        return(
                          <>
                         <div className="item">
                      <div className="image">
                        <img src={item.image} />
                      </div>
                      <div className="des">
                        <div className="detail-price">
                          <h2> {item.price}

                          </h2>
                          <del>Rs 1,699</del>
                          <span className="percentage-text"> (-21%) </span>
                        </div>
                        <p className="title pname"> {item.name} </p>
                        <div className="size-contianer">
                          {/* <div className="size-items">
                            <span> Size: <strong>M</strong>
                            </span>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                          </div> */}
                          <div className="size-items">
                            <span> Qty: <strong>{item.quantity}</strong>
                            </span>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                          </div>
                        </div>

                        {/* <div className="remove-checkout btn-effect">
                          <img src="images/delete-icon.0827b56.svg" />
                          <h1>Remove</h1>
                        </div> */}
                      </div>
                    </div>
                          </>
                        )
                      })
                    }
                    <div className="sub">
                      <div className="table">
                        <table style={{ width: " 100%" }}>
                          <tbody>



                            <tr>
                              <td>
                                <b>Subtotal</b>
                              </td>
                              <td>Rs {getTotalPrice()}</td>
                            </tr>

                            <tr>
                              <td>
                                <b>Delivery Charges</b>
                              </td>
                              <td>Rs 0</td>
                            </tr>





                            <tr>
                              <th>Total</th>
                              <th>Rs {getTotalPrice()}</th>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="only-mobile-v2 flex__m mobile-block">
              <div id="step-1" className="step_1">
                <div className="card address_card">
                  <div className="card _collapse_step" style={{ padding: "4px" }}>
                    <b style={{ fontSize: " 17px" }}>Delivering To</b>
                    <div className="flex-address">
                      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <div style={{ display: "flex", marginBottom: "4px" }}>
                          <p style={{ width: "95%" }}> Shahid Umer </p>
                        </div>
                        <div style={{ display: "flex", marginBottom: "4px" }}>
                          <div style={{ width: "95%" }}>
                            <p style={{ margin: " 0px" }}> H.No. 751-A, PNG Railway Colony, Wheatman Road, Moghalpura, Lahore, Lahore </p>
                          </div>
                        </div>
                        <div style={{ display: "flex", marginBottom: "4px" }}>
                          <p style={{ width: "95%" }}>923004454490</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="step_address_btns">
                    <button type="button" className="change_address_btn btn-effect">Change or Add Address</button>
                  </div>
                </div>
                <div className="cart_card">
                  <div >


                    <div className="card cart_summary">
                      <div className="item">
                        <div className="image">
                          <img src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/25082022/23350_32_1661412197_6307236592de1-1170733068792.jpg" alt="west line men casual shirt" />
                        </div>
                        <div className="des">
                          <div className="detail-price">
                            <h2> Rs 1,350

                            </h2>
                            <del>Rs 1,699</del>
                            <span className="percentage-text"> (-21%) </span>
                          </div>
                          <p className="title pname"> west line men casual shirt </p>
                          <div className="size-contianer">
                            <div className="size-items">
                              <span> Size: <strong>M</strong>
                              </span>
                              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                            </div>
                            <div className="size-items">
                              <span> Qty: <strong>1</strong>
                              </span>
                              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                            </div>
                          </div>

                          <div className="remove-checkout btn-effect">
                            <img src="images/delete-icon.0827b56.svg" />
                            <h1>Remove</h1>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="image">
                          <img src="https://d30fs77zq6vq2v.cloudfront.net/product/100x150/25082022/23351_92_1661412234_6307238ada498-558900232534.jpg" alt="west line men casual shirt" />
                        </div>
                        <div className="des">
                          <div className="detail-price">
                            <h2> Rs 1,350

                            </h2>
                            <del>Rs 1,699</del>
                            <span className="percentage-text"> (-21%) </span>
                          </div>
                          <p className="title pname"> west line men casual shirt </p>
                          <div className="size-contianer">
                            <div className="size-items">
                              <span> Size: <strong>L</strong>
                              </span>
                              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                            </div>
                            <div className="size-items">
                              <span> Qty: <strong>1</strong>
                              </span>
                              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjgwNiIgaGVpZ2h0PSI0LjY0OSIgdmlld0JveD0iMCAwIDguODA2IDQuNjQ5Ij4KICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIyNS45NTEsMjE2LjgzOWwtLjM3Mi0uMzI0LTQuMDMxLTMuNDU1Ljc0NC0uODcsMy42NTksMy4xMzcsMy42NTktMy4xMzcuNzQ0Ljg3LTQuMDMxLDMuNDU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS41NDggLTIxMi4xOSkiIGZpbGw9IiM3ZTdlN2UiLz4KPC9zdmc+Cg==" />
                            </div>
                          </div>

                          <div className="remove-checkout btn-effect">
                            <img src="images/delete-icon.0827b56.svg" />
                            <h1>Remove</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card cart_summary card-total">
                      <div className="sub">
                        <div className="table">
                          <h4>Price Details</h4>
                          <div className="price-detail" style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: " flex", justifyContent: "space-between" }}>
                              <div>
                                <p>Price (2 Item)</p>
                              </div>
                              <div> Rs 2,700 </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <div>
                                <p>Discount</p>
                              </div>
                              <div className="discount-color">- Rs 0</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <div>
                                <p>Delivery Charges</p>
                              </div>
                              <div className="delivery"> Rs 150 </div>
                            </div>



                            <div className="total-pay" style={{ display: "flex", justifyContent: "space-between" }}>
                              <div>
                                <b style={{ fontSize: "14px", fontWeight: "700" }}>TOTAL TO PAY</b>
                              </div>
                              <div>
                                <b> Rs 2,850 </b>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card cart_summary">
                      <div className="coupon-main">
                        <div>
                          <h2>Coupons</h2>
                          <div className="cart-copon">
                            <div className="tag">
                              <img src="images/images.013cc82.png" />
                              <p>Apply Coupons</p>
                            </div>
                            <button className="aply-coupon btn-effect">APPLY</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div ></div>
              </div>
              <div className="div">
                <div className="checkout-ship">

                </div>
                <div style={{ padding: "7px" }}>

                  <div >
                    <div >
                      <button type="button" className="order mobile_fixed_btn_step">
                        <span >Place Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )

}
export default CheckOut