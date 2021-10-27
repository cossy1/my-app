import React from "react";

const HomeTop = React.lazy(() => import('./home-top'));
const HomeBody = React.lazy(() => import('./home-body'));

const Content = () => {
    return(
        <>
            <HomeTop/>
            <HomeBody />
        </>
    );
};

export default Content;