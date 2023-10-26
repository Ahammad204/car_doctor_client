/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from './../../Providers/AuthProvider';


const BookService = () => {

    const service = useLoaderData();

    const { title, _id,price,img } = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {

            customerName: name,
            email: email,
            date,
            service_id: _id,
            service_title: title,
            service_img:img,
            price: price,

        }

        console.log(order)

        fetch('https://car-doctor-server-one-rosy.vercel.app/booking',{

            method: 'POST',
            headers:{

                'content-type':'application/json'

            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            if(date){

                alert('Add Service successfully');

            }

        })

    }

    return (
        <div>
            <h3 className="text-3xl text-center">Book service: {title}</h3>

            <form onSubmit={handleBookService} className="card-body ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Your Full Name" className="input input-bordered" required />
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
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />

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