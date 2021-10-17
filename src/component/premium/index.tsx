import React, { useState } from "react";
import "./premium.scss";
import { addCart } from "../../redux/action/cart";
import { connect } from "react-redux";
import Header from "../../app/layout/header";
import { Tooltip, Button } from "antd";
import { isMobile } from "react-device-detect";

interface PremiumProps {
  height?: number | string;
  width?: number | string;
  addCartBtn?: boolean;
  src?: string;
  bestSeller?: boolean;
  featured?: boolean;
  value?: any;
  addCart: any;
}

const Premium = (props: PremiumProps) => {
  const [showItems, setShowItem] = useState(false);

  const {
    height,
    width,
    value,
    src,
    addCart,
    bestSeller,
    addCartBtn = false,
    featured,
  } = props;

  const addToCart = (val: any) => {
    addCart(val);
    setShowItem(!showItems);
  };

  return (
    <div
      className="app-premium"
    >
      <div className="image">
        <Tooltip
          title={
            <Button
              type="text"
              style={{ color: "white" }}
              onClick={(_) => addToCart(value)}
            >
              Add to Cart
            </Button>
          }
        >
          <img
            src={src ?? value.image.src}
            alt="img"
            width={width}
            height={height}
            style={{objectFit: 'cover'}}
          />
        </Tooltip>
      </div>

      {addCartBtn && (
        <div className="add-cart" onClick={(_) => addToCart(value)}>
          ADD TO CART
        </div>
      )}

      {value?.category && <div className="title">{value?.category}</div>}

      {value?.name && <div className="name">{value?.name}</div>}

      {value?.price && <div className="price">{`$${value?.price}`}</div>}

      {(featured || bestSeller) && (
        <div className={isMobile ? "best-seller-mobile" : "best-seller"}>
          {featured ? "Featured" : "Best Seller"}
        </div>
      )}

      <Header show={false} />
    </div>
  );
};

const stateProps = (state: any) => ({
  cartItems: state.cart.carts,
});

const dispatchProps = {
  addCart,
};

export default connect(stateProps, dispatchProps)(Premium);
