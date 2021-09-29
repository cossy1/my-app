import React from "react";
import "./header.scss";
import { ReactComponent as ShoppingCart } from "../../../assets/svg/shopping-cart.svg";
import { Badge } from "antd";

interface HeaderProps {
    show: boolean;
    count?: number;
}

const Header = ({show, count= 0}: HeaderProps) => {
    const arr: number[] = [1];
  return (
    <div className='app-header'>
        {show &&  <div className="header">
            <div>
                <ShoppingCart />
            </div>

            <div>
                <Badge count={arr.length} offset={[0, 50]}>
                    <ShoppingCart />
                </Badge>,
            </div>
        </div>}

      <hr />
    </div>
  );
};

export default Header;
