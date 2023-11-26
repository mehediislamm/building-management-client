/* eslint-disable no-unused-vars */


import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password')


        // console.log(name, photo, email, password);

        setRegisterError('');
        setSuccess('');
        e.target.reset();

        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+~\-=/\\{}\[\]|;:'",.<>?`]).{6,}$/.test(password)) {
            setRegisterError('The password must be 6 characters. There must be one capital letter in English.  There should be special markings.');
            return;
        }




        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess('Create Created Successfull')
                const userInfo = {
                    name,  email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the data base ');
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

                navigate(location?.state ? location.state : '/');
            })

            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="bg-[#e5e9ee] rounded-xl pt-20 mb-10">
            <Helmet>
                <title>BUILDING | Sign up</title>
            </Helmet>
            <h2 className="text-3xl text-center pt-5 font-bold text-yellow-600">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto mb-3">
                <div className="form-control" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"

                >
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"

                >
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"

                >
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <div className="flex justify-center" >
                {
                    registerError && <p className=" text-red-700">{registerError}</p>
                }
                {
                    success && <p className=" text-green-600">{success}</p>
                }
            </div>

            <p className="text-xl text-center pt-3 pb-5">Already account <Link to={'/login'} className=" text-blue-600 text-xl font-bold">Login</Link></p>
        </div>
    );
};

export default SignUp;