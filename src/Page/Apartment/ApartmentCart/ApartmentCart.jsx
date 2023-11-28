/* eslint-disable react/prop-types */


import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ApartmentCart = ({ datas }) => {
    const { image, floor_no, block_name, apartment_no, rent, _id} = datas;
    const {user} = useAuth();
    const navigate  = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    

    const handleAddToCartData = data =>{
        if(user && user.email){
            //TODO: send cart item to the database
            console.log(data, user.email);
            const cartData = {
                dataId: _id,
                email: user.email,
                name: user?.displayName,
                userImg: user?.photoURL,
                image,
                floor_no,
                block_name,
                apartment_no,
                rent,
                status:"pending",
                data: (new Date()),
                
                
            }
            axiosSecure.post('/carts',cartData)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${apartment_no} no apartment booking success`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "Your are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send the user to the login page 
                  navigate('/login', {state:{from:location}} )
                }
              });
        }
    }
    return (
        <div className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            
            >
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
                        <button 
                        onClick={()=> handleAddToCartData(datas) }
                        className="btn btn-primary"> Agreement</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ApartmentCart;