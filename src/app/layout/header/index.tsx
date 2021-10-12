import React from "react";
import "./header.scss";
import { ReactComponent as ShoppingCart } from "../../../assets/svg/shopping-cart.svg";
import { Badge, Popover } from "antd";
import {clearCart, closeCart, openCart} from "../../../redux/action/cart";
import { connect } from "react-redux";
import { ReactComponent as CloseSvg } from "../../../assets/svg/close.svg";
import { isMobile } from "react-device-detect";

interface HeaderProps {
  show: boolean;
  showCart: boolean;
  cartItems?: any;
  clearCart?: any;
  closeCart?: any;
  openCart?: any;
}

const Header = (props: HeaderProps) => {
  const { clearCart, cartItems, showCart, show, openCart, closeCart } = props;

  return (
    <div className="app-header">
      {show && (
        <div className="header">
            <div className='logo'>
              Logo
          </div>

          <div>
            <Popover
              content={
                cartItems?.length > 0 ? (
                  <>
                    <div>
                      {cartItems?.length > 0 &&
                        cartItems?.map((e: any) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: isMobile ? 220 : 443,
                              padding: "10px 0",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: `${isMobile ? '12px' : "1rem"}`,
                                  fontWeight: "bold",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {e?.name}
                              </div>
                              <div
                                style={{ fontSize: `${isMobile ? "15px" : "29px"}`, fontFamily: 'Archivo, sans-serif' }}
                              >{`$${e?.price}`}</div>
                            </div>
                            <div>
                              <img
                                src={e.image.src}
                                width={`${isMobile ? '85px' : '149px'}`}
                                height={`${isMobile ? "50px" : "86px"}`}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                    <hr />
                    <div
                      style={{
                        border: "3px solid #000000",
                        marginTop: 20,
                        fontWeight: 500,
                        fontSize: "1.1rem",
                        height: "2rem",
                        textAlign: "center",
                        cursor: 'pointer',
                      }}
                      onClick={_ => clearCart()}
                    >
                      CLEAR
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    No Item Added
                  </div>
                )
              }
              title={
                <div style={{ textAlign: "right" }} onClick={_ => closeCart()}>
                  <CloseSvg />
                </div>
              }
              trigger="click"
              visible={showCart}
              style={{ border: "4px solid #E4E4E4", width: 443 }}
            >
             <div onClick={_ => openCart()}>
               <Badge count={cartItems?.length} offset={!isMobile ? [-10, 35] : [-5, 23]}>
                 <ShoppingCart className='shopping-cart' />
               </Badge>
             </div>
            </Popover>
          </div>
        </div>
      )}

      {show && <hr />}
    </div>
  );
};

const stateProps = (state: any) => ({
  cartItems: state.cart.carts,
  showCart: state.cart.showCart
});

const dispatchProps = {
  clearCart,
  closeCart,
  openCart
};

export default connect(stateProps, dispatchProps)(Header);
