import React, {useState} from "react";
import "./premium.scss";
import {addCart} from "../../redux/action/cart";
import {connect} from "react-redux";
import Header from "../../app/layout/header";
import { Tooltip, Button } from "antd";

interface PremiumProps {
  height?: number | string;
  width?: number | string;
  addCartBtn?: boolean;
  padLeft?: boolean;
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
    padLeft,
    bestSeller,
    addCartBtn = false,
  } = props;

  const addToCart = (val: any) => {
    addCart(val);
    setShowItem(!showItems);
  };

  return (
    <div
      className="app-premium"
      style={{ paddingLeft: `${padLeft && "40px"}` }}
    >
      <div className="image">
        <Tooltip title={
          <Button type='text' style={{color: 'white'}} onClick={_ => addToCart(value)}>Add to Cart</Button>
        }>
          <img src={src ?? value.image.src} alt="img" width={width} height={height} />

        </Tooltip>
      </div>

      {addCartBtn && <div className="add-cart" onClick={_ => addToCart(value)}>ADD TO CART</div>}

      {value?.category && <div className="title">{value?.category}</div>}

      {value?.name && <div className="name">{value?.name}</div>}

      {value?.price && <div className="price">{`$${value?.price}`}</div>}

      {bestSeller && <div className='best-seller'>Best Seller</div>}

      <Header show={false} visible={showItems}/>
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
