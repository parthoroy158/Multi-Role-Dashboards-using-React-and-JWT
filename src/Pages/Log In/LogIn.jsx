import Lottie from 'lottie-react';
import React from 'react';
import logIn from '../../../public/Animation -logIn.json'
import { Helmet } from 'react-helmet';

const LogIn = () => {
    return (
        <div className="hero bg-base-200 mt-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log In</title>
                <link rel="canonical" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xZgoF9Dfsg2PeUkrLHOjSY6P2VjQW8VkvQ&s" />
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie className='w-70' animationData={logIn}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mt-2 pt-2">Login now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;