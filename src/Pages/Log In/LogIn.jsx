import Lottie from 'lottie-react';
import React from 'react';
import logIn from '../../../public/Animation -logIn.json'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const LogIn = () => {
    const { userLogIn } = UseAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        userLogIn(data.email, data.password)
            .then(result => {
                Swal.fire({
                    title: "Successfully Log In!",
                    icon: "success",
                    draggable: true
                });
                console.log('Successfully Log In', result)
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }
    return (
        <div className="hero bg-base-200 h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log In</title>
                <link rel="canonical" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xZgoF9Dfsg2PeUkrLHOjSY6P2VjQW8VkvQ&s" />
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-120' animationData={logIn}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mt-2 pt-2">Login now!</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password")} className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Login</button>
                            <p className='mt-2' >Already have an Account? <Link to='/signUp'><span className='font-bold'> Click Here</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;