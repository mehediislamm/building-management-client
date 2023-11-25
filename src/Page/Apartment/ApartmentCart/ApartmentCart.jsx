/* eslint-disable react/prop-types */

const ApartmentCart = ({ datas }) => {
    const { image, floor_no, block_name, apartment_no, rent } = datas;
    return (
        <div className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl  ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <div>
                        <div className="flex justify-between mb-2">
                            <h1 className="text-xl font-mono">Apartment_No: {apartment_no}</h1>
                            <h1 className="text-xl font-mono">Block: {block_name}</h1>
                        </div>
                        <h1 className="text-xl font-mono">Floor_No: {floor_no} </h1>

                    </div>
                    <div className="bg-black w-32 mb-3">
                        <h1 className="text-xl font-serif text-white ml-1 ">price: $ {rent}</h1>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary"> Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCart;