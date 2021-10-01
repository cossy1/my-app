import React from "react";
import Header from "./header";
import Content from "./content";

const Layout = () => {
    return(
       <div>
           <Header show/>
           <Content />
       </div>
    );
};

export default Layout