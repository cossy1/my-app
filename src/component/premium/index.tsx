import React from "react";
import './premium.scss';

interface PremiumProps {
    height?: number;
    width?: number;
    title?: string;
    subTitle?: string;
    amount?: number;
    src: any;
    addCart?: boolean;
    padLeft?: boolean;
}

const Premium = (props: PremiumProps) => {
    const { height, width, title, subTitle, amount, padLeft, src, addCart = false } = props;

    return(
        <div className='app-premium' style={{paddingLeft: `${padLeft && '40px'}`}}>
            <div className='image'>
                <img src={src} alt='img' width={width} height={height} />
            </div>

            {addCart &&  <div className='add-cart'>
                ADD TO CART
            </div>}

            {title &&  <div className='title'>
                {title}
            </div>}

            {subTitle &&  <div className='subtitle'>
                {subTitle}
            </div>}

            {amount &&  <div className='amount'>
                {`$${amount}`}
            </div>}

        </div>
    );
};

export default Premium;