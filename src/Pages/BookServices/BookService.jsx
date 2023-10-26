/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";


const BookService = () => {

    const service = useLoaderData();

    const { title, _id,price } = service;

    return (
        <div>
            <h3 className="text-3xl text-center">Book service: {title}</h3>

            <form className="card-body ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Last Name" className="input input-bordered" required />

                    </div>       
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={ '$'+price} placeholder="Due Amount" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-block text-white bg-[#FF3811] hover:bg-[#FF3811] " type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;