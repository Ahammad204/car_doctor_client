import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = (event) => {

        event.preventDefault();

    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">
                       
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               
                                <input className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white" type="submit" value="Login" />
                            </div>
                            <p className='my-4 text-center'>New to Car Doctors?  <Link to="/signup" className='text-[#FF3811] font-bold'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;