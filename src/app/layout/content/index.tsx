import HomeTop from "./home-top";
import HomeBody from "./home-body";

const Content = () => {
    return(
        <>
            <HomeTop/>
            <HomeBody show={true} />
        </>
    );
};

export default Content;