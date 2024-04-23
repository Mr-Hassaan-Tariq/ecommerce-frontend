import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div>
      {
        products && products.map((items,i) =>(
          <>
            <div>
              <img src={items.img} />
              <p>{items.price}</p>
            </div>
          </>
        )) 
      }
    </div>
  );
};

export default Cart;
