import AboutBuilding from "../AboutBuilding/AboutBuilding";
import Banner from "../Banner/Banner";
import Coupon from "../Couponsection/Coupon";
import Maps from "../map/Maps";


const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <AboutBuilding></AboutBuilding>
           <Coupon></Coupon>
            <Maps></Maps>
          
        </div>
    );
};

export default Home;