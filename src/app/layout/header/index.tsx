import React from "react";
import "./header.scss";
import { ReactComponent as ShoppingCart } from "../../../assets/svg/shopping-cart.svg";
import { Badge } from "antd";

const Header = () => {
  return (
    <div className='app-header'>
      <div className="header">
        <div>
          <ShoppingCart />
        </div>

        <div>
            <Badge count={5} offset={[0, 50]}>
                <ShoppingCart />
            </Badge>,
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Header;
