import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ApartmentCart from "./ApartmentCart/ApartmentCart";
import { useLoaderData } from "react-router-dom";



const Apartment = () => {
    const [data, setData] = useState([]);
    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [dataPerPage, setDataPerPage] = useState(6);
    const numberOfPage = Math.ceil(count / dataPerPage)

    const pages = [...Array(numberOfPage).keys()];




    useEffect(() => {
        fetch(`http://localhost:5000/data?page=${currentPage}&size=${dataPerPage}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    }, [currentPage, dataPerPage])
    // console.log(currentPage);


    // paginition handler 

    const handleDataPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setDataPerPage(val);
        setCurrentPage(0);

    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }



    return (
        <div>
            <Helmet>
                <title>BUILDING | Apartment</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 justify-center">
                {
                    data?.map(datas => <ApartmentCart key={datas._id} datas={datas}></ApartmentCart>)

                }



            </div>
            <div className="flex justify-center mb-5">
               
                <button onClick={handlePrevPage} className="btn">prev</button>
                {
                    pages?.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className="btn active:bg-orange-400" key={page}>{page}</button>)
                }
                <button onClick={handleNextPage} className="btn">Next</button>
                <select onChange={handleDataPerPage} className="bg-primary rounded-xl text-white" value={dataPerPage} >
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Apartment;