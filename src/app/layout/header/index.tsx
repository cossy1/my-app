import React from "react";
import "./header.scss";
import { ReactComponent as ShoppingCart } from "../../../assets/svg/shopping-cart.svg";

const Header = () => {
  return (
    <div className='app-header'>
      <div className="header">
        <div>
          <ShoppingCart />
        </div>

        <div>
          <ShoppingCart />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Header;
