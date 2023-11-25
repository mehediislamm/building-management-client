import { Helmet } from "react-helmet-async";
import AboutBuilding from "../AboutBuilding/AboutBuilding";
import Banner from "../Banner/Banner";
import Coupon from "../Couponsection/Coupon";
import Maps from "../map/Maps";


const Home = () => {
    return (
        <div >
            <Helmet>
                <title>BUILDING | Home</title>
            </Helmet>
           <Banner></Banner>
           <AboutBuilding></AboutBuilding>
           <Coupon></Coupon>
            <Maps></Maps>
            
          
        </div>
    );
};

export default Home;