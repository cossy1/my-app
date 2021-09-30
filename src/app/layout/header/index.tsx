import React from "react";
import "./header.scss";
import { ReactComponent as ShoppingCart } from "../../../assets/svg/shopping-cart.svg";
import { Badge, Popover } from "antd";
import {addCart} from "../../../redux/action/cart";
import {connect} from "react-redux";

interface HeaderProps {
    show: boolean;
    count?: number;
    cartItems?: any;
    visible?: boolean;
}

const Header = ({show, cartItems, visible}: HeaderProps) => {

  return (
    <div className='app-header'>
        {show &&  <div className="header">
            <div>
                <ShoppingCart />
            </div>

            <div>
               <Popover
                      content={
                          <div>
                              {cartItems.map((e: any) => (
                                  <div style={{display: 'flex'}}>
                                      <div>{e.name}</div>
                                      <div>{e.name}</div>
                                  </div>
                              ))}
                          </div>
                      }
                    title="Title"
                    // trigger="click"
                    visible={visible}
                >
                    <Badge count={cartItems.length} offset={[0, 50]}>
                        <ShoppingCart />
                    </Badge>
                </Popover>

            </div>
        </div>}

        {show && <hr />}
    </div>
  );
};

const stateProps = (state: any) => ({
    cartItems: state.cart.carts,
});

const dispatchProps = {
    addCart,
};

export default connect(stateProps, dispatchProps) (Header);
