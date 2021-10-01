import React from "react";
import "./header.scss";
import { ReactComponent as ShoppingCart } from "../../../assets/svg/shopping-cart.svg";
import { Badge, Popover } from "antd";
import { clearCart } from "../../../redux/action/cart";
import { connect } from "react-redux";
import { ReactComponent as CloseSvg } from "../../../assets/svg/close.svg";

interface HeaderProps {
  show: boolean;
  cartItems?: any;
  clearCart?: any;
  visible?: boolean;
}

const Header = (props: HeaderProps) => {
  const { clearCart, visible, cartItems, show } = props;

  const emptyCart = () => {
    clearCart();
  };

  return (
    <div className="app-header">
      {show && (
        <div className="header">
          <div>
            <ShoppingCart />
          </div>

          <div>
            <Popover
              content={
                cartItems.length > 0 ? (
                  <>
                    <div>
                      {cartItems.length > 0 &&
                        cartItems.map((e: any) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: 443,
                              padding: "10px 0",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: "bold",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {e?.name}
                              </div>
                              <div
                                style={{ fontSize: "1rem" }}
                              >{`$${e?.price}`}</div>
                            </div>
                            <div>
                              <img
                                src={e.image.src}
                                width={"149px"}
                                height={"86px"}
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
                      }}
                      onClick={emptyCart}
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
                <div style={{ textAlign: "right" }}>
                  <CloseSvg />
                </div>
              }
              trigger="click"
              visible={cartItems.length < 1 ? false : visible}
              style={{ border: "4px solid #E4E4E4", width: 443 }}
            >
              <Badge count={cartItems.length} offset={[0, 50]}>
                <ShoppingCart />
              </Badge>
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
});

const dispatchProps = {
  clearCart,
};

export default connect(stateProps, dispatchProps)(Header);
