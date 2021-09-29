import React from "react";
import "./premium.scss";

interface PremiumProps {
  height?: number | string;
  width?: number | string;
  category?: string;
  name?: string;
  price?: number;
  src: any;
  addCart?: boolean;
  padLeft?: boolean;
  bestSeller?: boolean;
  featured?: boolean;
}

const Premium = (props: PremiumProps) => {
  const {
    height,
    width,
    category,
    name,
    price,
    padLeft,
    bestSeller,
    featured,
    src,
    addCart = false,
  } = props;

  return (
    <div
      className="app-premium"
      style={{ paddingLeft: `${padLeft && "40px"}` }}
    >
      <div className="image">
        <img src={src} alt="img" width={width} height={height} />
      </div>

      {addCart && <div className="add-cart">ADD TO CART</div>}

      {category && <div className="title">{category}</div>}

      {name && <div className="name">{name}</div>}

      {price && <div className="price">{`$${price}`}</div>}

      {bestSeller && <div className='best-seller'>Best Seller</div>}

    </div>
  );
};

export default Premium;
