
import copon from '../../../assets/Cupon1.jpg'
const Coupon = () => {
    return (
        <div className='mb-10'>
            <img className='w-full' src={copon} alt=""
                data-aos="fade-up"
                data-aos-duration="3000"
            />
        </div>
    );
};

export default Coupon;