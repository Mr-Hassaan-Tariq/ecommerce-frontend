import { PersonAddAlt1 } from "@styled-icons/material-outlined";
const axios = require("axios").default;
import { useEffect, useState } from "react";
import TopCart from "./TopCart";
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from '../styles/TopNav.module.css'
import { useSelector, useDispatch } from "react-redux";
import { remove, update } from "../redux/features/cartSlice";

const TopNavbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [navData, setnavData] = useState([]);
    const [show, setShow] = useState(false);
    const [dropDownS, setDropDownS] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const cart = useSelector(state => state.cart);
    const [cartData, setCartData] = useState([]);
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };
    useEffect(() => {
        setCartData(cart);
    }, [cart]);

    const deleteItemFromCart = (id) => {
        dispatch(remove(id))
    }
    const updateCartItem = (id) => {
        const existingCartItem = cartData.find((item) => item.id === id);
        console.log(existingCartItem, "-------")
        if (existingCartItem) {
            // If the product is already in the cart, update its quantity
            dispatch(update({ id, quantity: existingCartItem.quantity + 1 }));
        }
    }
    const decreaseQuantity = (id)=>{
        const existingCartItem = cartData.find((item) => item.id === id);
        console.log(existingCartItem, "-------")
        if (existingCartItem) {
            // If the product is already in the cart, update its quantity
            dispatch(update({ id, quantity: existingCartItem.quantity -1}));
        }
    }
    const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <header className="only-desktop" >

                <div className={`top_nav_parent ${Styles.top_nav_dummy} 
                `}>

                    <div className="container top_navbar">
                        <Link href="/" passHref>
                            <a aria-current="page" aria-label="Goto home" className="logo logo-effect router-link-exact-active router-link-active">
                                <img src="/images/img-logo.png" alt="sehgal logo" width={"160px"} />
                            </a>
                        </Link>
                        <div className="search-container">
                            <div className="input">
                                <input type="search" placeholder="Search Products" />
                                <button aria-label="search" className="btn-effect">
                                    <svg viewBox="0 0 17 17">
                                        <title>Search</title>
                                        <path
                                            fill="currentColor"
                                            fillRule="nonzero"
                                            d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>


                            <div className={`header ${Styles.top_nav_dummy}`} style={{ backgroundColor: "#000" }}>

                                <nav className="user_links">
                                    <a aria-label="search" className="only-mobile">
                                        <svg
                                            xmlns="http: //www.w3.org/2000/svg"
                                            width={17}
                                            height={17}
                                            viewBox="0 0 17 17">
                                            <path
                                                fill="#fff"
                                                fillRule="nonzero"
                                                d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="/my/account"
                                        aria-label="account"
                                        className="only-mobile">
                                        <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                fill="#fff"
                                                d="M14 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm2 0A6 6 0 1 1 4 6a6 6 0 0 1 12 0zm-6 9c-3.068 0-5.67 1.223-7.035 3h14.07c-1.365-1.777-3.967-3-7.035-3zm10 5H0c.553-4.006 4.819-7 10-7s9.447 2.994 10 7z"
                                            />
                                        </svg>
                                    </a>
                                    <a className="only-desktop">
                                        <span style={{ position: "relative", top: "2px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                <path fill="#fff" d="M10 0a2.5 2.5 0 0 0-2.5 2.5V5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3V2.5A2.5 2.5 0 0 0 10 0zm2 15H8v2h4v-2zM6 7a4 4 0 0 1 8 0H6z" />
                                            </svg>
                                        </span>
                                        <div class="links_drop notify-drop">
                                            <object>
                                                <div class="dark">
                                                    <a>Notifications</a>
                                                </div> <div class="not-found">
                                                    <h4>no notification</h4>
                                                </div>

                                            </object></div>
                                    </a>
                                    <a className="only-desktop">
                                        <svg
                                            xmlns="http: //www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            onMouseOver={() => setDropDownS(!dropDownS)}>
                                            <path
                                                fill="#fff"
                                                d="M14 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm2 0A6 6 0 1 1 4 6a6 6 0 0 1 12 0zm-6 9c-3.068 0-5.67 1.223-7.035 3h14.07c-1.365-1.777-3.967-3-7.035-3zm10 5H0c.553-4.006 4.819-7 10-7s9.447 2.994 10 7z"
                                            />
                                        </svg>

                                        {dropDownS ? (
                                            <div className="links_drop">
                                                <object>
                                                    <div className="dark" onClick={() => setShow(!show)}>
                                                        <a onClick={() => setDropDownS(false)}>Sign in</a>{" "}
                                                        <a>Join</a>
                                                    </div>{" "}
                                                    <nav className="dropdown-list">
                                                        <Link href="/account">
                                                            <div className="ac acount-drop">My Account</div>
                                                        </Link>
                                                        <Link href="/myorders">
                                                            <div className="ord acount-drop">My Orders</div>
                                                        </Link>
                                                        <Link href="/wishlist">
                                                            <div className="wish acount-drop">My Wishlist</div>
                                                        </Link>
                                                    </nav>
                                                </object>
                                            </div>
                                        ) : null}
                                    </a>
                                    <div className="wishlist-log" >
                                        <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 18">
                                            <path
                                                fill="#fff"
                                                fillRule="nonzero"
                                                d="M10.618 15.474a21.327 21.327 0 0 0 3.137-2.076c2.697-2.166 4.249-4.619 4.245-7.299-.003-2.284-1.757-4.101-3.881-4.099-1.016 0-1.97.417-2.69 1.158l-1.43 1.467-1.432-1.463a3.748 3.748 0 0 0-2.695-1.151C3.749 2.013 1.998 3.837 2 6.12c.003 2.677 1.559 5.123 4.256 7.281a21.32 21.32 0 0 0 3.756 2.39c.191-.096.394-.202.606-.318zM9.996 1.763l.203-.2A5.726 5.726 0 0 1 14.116 0c3.246-.004 5.88 2.725 5.884 6.097C20.01 13.845 10.014 18 10.014 18S.01 13.87 0 6.124C-.003 2.752 2.624.014 5.87.01A5.733 5.733 0 0 1 9.79 1.564l.205.199z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="cart__icon" onClick={toggleCart}>
                                        <span className="count countActive">
                                            {/* {Object.keys(cartData).length} */}
                                            {/* <div>{products.length}</div> */}
                                        </span>
                                        <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                fill="#fff"
                                                fillRule="nonzero"
                                                d="M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z"
                                            />
                                        </svg>
                                    </span>


                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            {show ? (
                <div className="sideNavbar">
                    <ul className="sidebarr d__flex">
                        <div className="desktop_container">
                            <div id="slide" className="desktop_signup">
                                <nav class="tabs">
                                    <div class="register">
                                        <p>Login or Signup </p>
                                        <img
                                            onClick={() => setShow(false)}
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojMmYyZjJmO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzggLTg5KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OCA4OSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc3IDkwKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xOSwxLjksMTcuMSwwLDkuNSw3LjYsMS45LDAsMCwxLjksNy42LDkuNSwwLDE3LjEsMS45LDE5bDcuNi03LjZMMTcuMSwxOSwxOSwxNy4xLDExLjQsOS41WiIvPjwvZz48L2c+PC9zdmc+"
                                        />
                                    </div>
                                </nav>
                                <div>
                                    <section>
                                        <div class="form desk_form">
                                            <div class="sign_up_form">
                                                <form
                                                    data-v-1f0429f0=""
                                                    novalidate="novalidate"
                                                    autocomplete="off">
                                                    <div data-v-1f0429f0="" class="margin">
                                                        <span data-v-1f0429f0="" class="mobile_no_box">
                                                            <input
                                                                data-v-1f0429f0=""
                                                                type="number"
                                                                pattern="\d*"
                                                                name="phone"
                                                                placeholder="Mobile Number"
                                                                class="input_padding"
                                                                aria-required="true"
                                                                aria-invalid="false"
                                                            />{" "}
                                                            <span data-v-1f0429f0="" class="country_code">
                                                                +92
                                                            </span>
                                                        </span>{" "}
                                                        <div data-v-1f0429f0="" class="btn-options">
                                                            <button data-v-1f0429f0="" type="button">
                                                                Login with OTP
                                                            </button>{" "}
                                                            <button data-v-1f0429f0="" type="button">
                                                                Login with password
                                                            </button>
                                                        </div>{" "}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            ) : null}
            {cartOpen ? (
                <div className="sideNavbar">
                    <ul className="sidebarr d__flex">
                        <div className="desktop_container">
                            <div id="slide" className="desktop_signup">
                                <nav class="tabs">
                                    <div class="register">
                                        <h3>Shopping Cart</h3>
                                        <img
                                            className={Styles.flip_on_hover}
                                            onClick={toggleCart}
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojMmYyZjJmO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzggLTg5KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OCA4OSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc3IDkwKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xOSwxLjksMTcuMSwwLDkuNSw3LjYsMS45LDAsMCwxLjksNy42LDkuNSwwLDE3LjEsMS45LDE5bDcuNi03LjZMMTcuMSwxOSwxOSwxNy4xLDExLjQsOS41WiIvPjwvZz48L2c+PC9zdmc+"
                                        />
                                    </div>
                                </nav>
                                <hr></hr>
                                <div>
                                    <section className={Styles.cart}>
                                        <div className={Styles.cart_items}>
                                            {cartData.length === 0 &&
                                                <div className="d-flex flex-column align-items-center mt-2 p-2">
                                                    <svg id="icon-cart-emty" widht="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M263.4 103.4C269.7 97.18 279.8 97.18 286.1 103.4L320 137.4L353.9 103.4C360.2 97.18 370.3 97.18 376.6 103.4C382.8 109.7 382.8 119.8 376.6 126.1L342.6 160L376.6 193.9C382.8 200.2 382.8 210.3 376.6 216.6C370.3 222.8 360.2 222.8 353.9 216.6L320 182.6L286.1 216.6C279.8 222.8 269.7 222.8 263.4 216.6C257.2 210.3 257.2 200.2 263.4 193.9L297.4 160L263.4 126.1C257.2 119.8 257.2 109.7 263.4 103.4zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path></svg>
                                                    <p className="mt-2">Your cart is empty.</p>
                                                    <button className={Styles.return_to_shop_btn}>RETURN TO SHOP</button>
                                                </div>

                                            }
                                            {cartData.map((item) => (
                                                <>

                                                    <div className="d-flex flex-column ">

                                                        <div key={item.id} className="d-flex justify-content-between">
                                                            <img src={item.image} alt={item.name} width={100} />
                                                            <div className="m-lg-2">
                                                                <span>{(item.name).slice(10)}</span>
                                                                <span>PKR {item.price}</span>
                                                                <div className={Styles.Counter}>

                                                                    <button className={Styles.Decrement} onClick={()=>decreaseQuantity(item.id)}>-</button>
                                                                    <input type="text" className={Styles.Count} value={item.quantity} readOnly />

                                                                    <button className={Styles.Increment} onClick={()=>updateCartItem(item.id)} >+</button>
                                                                </div>

                                                                <button style={{ backgroundColor: "transparent", border: "none" }} onClick={() => deleteItemFromCart(item.id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="container position-absolute bottom-0 pb-5">
                                                        <hr></hr>
                                                        <p className={Styles.subtotal}>Subtotal: <span className="subtotal-amount">PKR {getTotalPrice()}</span></p>
                                                        <p className={Styles.viewcart}>View Cart</p>
                                                        <Link href="/checkout">
                                                        <button type="button" className={Styles.checkout} onClick={toggleCart}>Checkout</button>
                                                        </Link>

                                                    </div>

                                                </>
                                            ))}

                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            ) : null}

        </>
    )
}
export default TopNavbar;