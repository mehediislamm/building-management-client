/* eslint-disable react/no-unescaped-entities */
import discount from '../../../assets/discount-removebg-preview.png'
import coupon from '../../../assets/Cupon1.jpg'

import { useEffect, useState } from 'react';

const Announcements = () => {

    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/announcement`)
            .then(res => res.json())
            .then(data => {
                setAnnouncement(data)
            })

    }, [])


    return (
        <div>
            <div>
                {
                    announcement.map(announcements => <div key={announcements._id}>
                        <h1 className='text-3xl font-bold text-center  font-mono'
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        > Admin Announcement</h1>
                        <img className='mx-auto h-72' src={discount} alt="" 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        />
                        <h1 className='text-2xl font-mono text-center font-bold mb-4'
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        >  {announcements?.title}</h1>
                        <p className='text-xl font-light text-center'
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        >{announcements?.discription}</p>
                        <img src={coupon} alt=""
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        />
                    </div>)
                }
            </div>


        </div>
    );
};

export default Announcements;