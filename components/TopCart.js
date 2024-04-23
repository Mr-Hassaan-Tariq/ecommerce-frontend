import { Cart } from "@styled-icons/fluentui-system-regular";
import { getStorageData } from "../utils/useLocalStorage";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";
import { remove } from "../redux/features/cartSlice";
const TopCart = () => {
  const router = useRouter()
  const cart = useSelector(state => state.cart);
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();

  const getLocalStorageData = async () => {
    const dataFromLocalStorage = await getStorageData("CART");
    console.log(dataFromLocalStorage, "storage");
    // setCartData(dataFromLocalStorage);
  };

  useEffect(() => {
    getLocalStorageData();
  }, []);

  useEffect(() => {
    setCartData(cart);
  }, [cart]);
  const getTotalPrice = () => {
    return cartData.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
console.log(cartData,"cartdata...")
  return (
    <span className="cart__icon">
      <span className="count countActive">
        {Object.keys(cartData).length}
        {/* <div>{products.length}</div> */}
      </span>
      <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          fill="#fff"
          fillRule="nonzero"
          d="M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z"
        />
      </svg>
      <div class="cart-dropdown">
        <div class="cart-dropdown__header">
          <span class="header__text">My Bag,</span>
          <span class="header__count">{Object.keys(cartData).length} Item</span>
          <span class="header__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              focusable="false">
              <path d="M9.97 8.274L2.335.637.637 2.334 8.274 9.97.637 17.607l1.697 1.697 7.637-7.636 7.636 7.636 1.697-1.697-7.636-7.636 7.636-7.637L17.607.637 9.971 8.274z"></path>
            </svg>
          </span>
        </div>
        <div class="cart-dropdown__items">
          {cartData.length === 0 ? (
            <div>No Item in the Cart</div>
          ) : (
            <>
              {cartData &&
                cartData.map(item => {
                  console.log(item, "r3es");

                  return (
                    <>
                      <div class="cart__item" key={item.slug}>
                        <div class="item__image">
                          <img src={item.image} alt="" />
                        </div>
                        <div class="item__details">
                          <div class="details__price">
                            {item.price * item.quantity}
                          </div>
                          <div class="details__description">{item.name}</div>
                          <div class="details__info">
                            <span>Qty {item.quantity}</span>
                          </div>
                        </div>

                        <div class="item__delete-icon">
                          <span
                            class="remove"
                            onClick={() => dispatch(remove(item.id))}>
                            REMOVE
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
            </>
          )}
        </div>
        {
          // console.log(Object.assign({},...cart))
          //  cart &&  cart.reduce((item)=>{
          //     return(
          //       <>
          //       </>
          //     )
          //   })
        }
        <div class="cart-dropdown__controls">
          <div class="cart-dropdown__subtotal">
            Sub-total
            <span class="subtotal__amount">{getTotalPrice()}</span>
          </div>
          <div class="cart-dropdown__buttons flex">
            <button class="add btn-effect">VIEW BAG</button>{" "}
            <button class="add btn-effect" onClick={()=>router.push("/checkout")}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </span>
  );
};

export default TopCart;
