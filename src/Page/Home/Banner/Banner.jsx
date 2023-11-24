import "react-responsive-carousel/lib/styles/carousel.min.css";


import img1 from '../../../assets/banner2.jpg'
import img2 from '../../../assets/banner3.jpg'
import img3 from '../../../assets/banner4.jpg'
import img4 from '../../../assets/bannder5.jpg'
import img5 from '../../../assets/banner6.jpg'

import { Carousel } from "react-responsive-carousel";

const Banner = () => {


    return (
        <div className=" mb-10">
            <Carousel>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>

            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img1} />
            </div>

        </Carousel>
        </div>
    );
};

export default Banner;
