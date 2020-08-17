import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            {/* List of all your product */}
            <h2 className="checkout__title">Your Shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        {basket.length > 0 && (
          <p>
            <Subtotal />
          </p>
        )}
      </div>
    </div>
  );
}

export default Checkout;
