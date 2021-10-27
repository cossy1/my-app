import React from "react";

const Content = React.lazy(() => import('./content'));
const Header = React.lazy(() => import('./header'));

const Layout = () => {
    return(
       <div>
           <Header />
           <Content />
       </div>
    );
};

export default Layout