import React from "react";
import "./home-top.scss";
import Dog from "../../../../assets/image/dog.png";
import Premium from "../../../../component/premium";
import Flower from '../../../../assets/image/flower.png';
import Yellow from '../../../../assets/image/yellow.png';
import EggBallon from '../../../../assets/image/egg-ballon1.png';
import {Space} from "antd";

const HomeTop = () => {
  return (
    <div className="app-home-top">
      <div className="top-row">
        <div className="sam">Samurai King Resting</div>

        <div className="addCart-row">ADD TO CART</div>
      </div>

      <div className="dog">
        <img alt="img" src={Dog} />
      </div>

      <div className='photo'>
          Photo of the day
      </div>

      <div className="about-pet-row">
        <div className="about">
          <div className="a">About the Samurai King Resting</div>
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

        <div className="people">
          <div className="buy">People also buy</div>
          <div className="images">
           <Space size={'large'}>
             <div>
               <Premium src={Yellow} />
             </div>
             <div>
               <Premium src={Flower} />
             </div>
             <div>
               <Premium src={EggBallon} />
             </div>
           </Space>
          </div>
          <div className='details'>Details</div>
          <div className='detail'>Size: 1020 x 1020 pixel</div>
          <div className='detail'>Size: 15 mb</div>
        </div>
      </div>

      <hr style={{marginTop: 65}}/>
    </div>
  );
};

export default HomeTop;
