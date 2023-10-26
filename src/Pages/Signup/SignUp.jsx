import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

    const  { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password);

        createUser (email,password)
        .then(result => {

            const user = result.user;
            console.log(user);

        })
        .catch(error => {

            console.error(error)

        })

    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">

                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Join now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white" type="submit" value="Sign Up" />
                            </div>
                            <p className='my-4 text-center'>Already Join in Car Doctors?  <Link to="/login" className='text-[#FF3811] font-bold'>Log in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;