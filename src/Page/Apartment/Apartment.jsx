import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ApartmentCart from "./ApartmentCart/ApartmentCart";


const Apartment = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    }, [])

    return (
        <div>
            <Helmet>
                <title>BUILDING | Apartment</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 pt-20 ml-14">
                {
                    data?.map(datas => <ApartmentCart key={datas._id} datas={datas}></ApartmentCart>)
                }
            </div>
        </div>
    );
};

export default Apartment;