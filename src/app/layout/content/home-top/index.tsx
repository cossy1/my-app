import React from "react";
import "./home-top.scss";
import Premium from "../../../../component/premium";
import Flower from "../../../../assets/image/flower.png";
import Yellow from "../../../../assets/image/yellow.png";
import EggBallon from "../../../../assets/image/egg-ballon1.png";
import { isMobile } from "react-device-detect";
import {Products} from "../../../../_shared/dummyData";
import { addCart } from "../../../../redux/action";
import { connect } from "react-redux";


interface HomeTopProps {
  addCart?: any;
}

const HomeTop = ({addCart}: HomeTopProps) => {

    const randomImage = Products[Math.floor(Math.random() * Products.length)];

  return (
    <div className="app-home-top">
      <div className="top-row">
        <div className="sam">{randomImage.name}</div>

        <div className="addCart-row" onClick={_ => addCart(randomImage)}>
          ADD TO CART
        </div>
      </div>
      <div className="dog">
        <img alt="img" src={randomImage.image.src} style={{ width: "100vw", height: '34.5rem' }} />
      </div>
      <div className="photo">Photo of the day</div>

      <div>{isMobile && <div className="add-mobile-cart" onClick={_ => addCart(randomImage)}>ADD TO CART</div>}</div>

      <div className="about-pet-row">
        <div className="about">
          <div className="ar">About the Samurai King Resting</div>
          <div className="pets">Pets</div>
          <div className="so">
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </div>
        </div>

          {!isMobile &&  <div className="side-people">
              <div className="buy">People also buy</div>
              <div className="images">
                  <div>
                      <Premium padLeft src={Yellow} />
                  </div>
                  <div>
                      <Premium padLeft src={Flower} />
                  </div>
                  <div>
                      <Premium padLeft src={EggBallon} />
                  </div>
              </div>
              <div className="details">Details</div>
              <div className="detail">Size: 1020 x 1020 pixel</div>
              <div className="detail">Size: 15 mb</div>
          </div>}
      </div>

      <div>
        {isMobile && (
          <div className="mobile-people">
            <div className="buy">People also buy</div>
            <div className="images">
              <div>
                <Premium src={Yellow} />
              </div>
              <div>
                <Premium src={Flower} />
              </div>
              <div>
                <Premium src={EggBallon} />
              </div>
            </div>
            <div className="details">Details</div>
            <div className="detail">Size: 1020 x 1020 pixel</div>
            <div className="detail">Size: 15 mb</div>
          </div>
        )}
      </div>

      <hr style={{ marginTop: 65, width: '100vw' }} />

    </div>
  );
};

const stateProps = (state: any) => ({
  cartItems: state.cart.carts,
});

const dispatchProps = {
  addCart,
};

export default connect(stateProps, dispatchProps)(HomeTop);
