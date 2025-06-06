import Lottie from 'lottie-react';
import React from 'react';
import signUp from '../../../public/Animation - sign Up.json'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import UseAxiosPrivate from '../../Hooks/UseAxiosPrivate';


const SignUp = () => {
    const axiosPrivate = UseAxiosPrivate()
    const { createUser, userUpdate, signInWithGoogle } = UseAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                userUpdate(data.name, data.photoURL)
                    .then(result => {
                        console.log(result)

                        const user = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPrivate.post('/user', user)
                            .then(res => {
                                console.log(res.data)
                                Swal.fire({
                                    title: "Successfully Sign Up!",
                                    icon: "success",
                                    draggable: true
                                });
                                navigate('/')
                            })
                    })
                    .catch(error => {
                        console.log('Error', error)
                    })
                console.log("Successfully Sign Up", result)
            })
            .catch(error => {
                console.log("Error", error)
            })
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPrivate.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Successfully Sign Up!",
                            icon: "success",
                            draggable: true
                        });
                        navigate('/')
                    })
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero bg-base-200 h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up</title>
                <link rel="canonical" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xZgoF9Dfsg2PeUkrLHOjSY6P2VjQW8VkvQ&s" />
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-120' animationData={signUp}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mt-2 pt-2">Sign Up now!</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="Name" {...register("photoURL")} className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary w-full">Sign Up</button>
                        </div>
                    </form>
                    <div className=' flex m-2 justify-center'>
                        <button className='flex items-center gap-2 btn rounded-full bg-black text-white' onClick={handleSignInWithGoogle}> <p className='border bg-white p-1 rounded-full'><FcGoogle /></p> Sign Up With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;