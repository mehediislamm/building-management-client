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
                        <h1 className='text-3xl font-bold text-center  font-mono'> Admin Announcement</h1>
                        <img className='mx-auto h-72' src={discount} alt="" />
                        <h1 className='text-2xl font-mono text-center font-bold mb-4'>  {announcements?.title}</h1>
                        <p className='text-xl font-light text-center'>{announcements?.discription}</p>
                        <img src={coupon} alt="" />
                    </div>)
                }
            </div>


        </div>
    );
};

export default Announcements;