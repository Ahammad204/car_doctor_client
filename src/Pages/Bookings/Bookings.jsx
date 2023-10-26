import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `https://car-doctor-server-one-rosy.vercel.app/booking?email=${user?.email}`
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setBookings(data)

            })

    }, [url]);

    const handleDelete = id => {

        const proceed = confirm('Are You Sure you want to delete')
        if(proceed){

            fetch(`https://car-doctor-server-one-rosy.vercel.app/booking/${id}`,{

            method:'DELETE'


            })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if(data.deletedCount > 0){

                    alert('deleted successfully')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)

                }

            })

        }

    }

    const handleConfirm = id => {

        fetch(`https://car-doctor-server-one-rosy.vercel.app/booking/${id}`,{

        method:'PATCH',
        headers:{

            'content-type' : 'application/json'

        },
        body:JSON.stringify({status: 'confirm'})

        })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            if(data.modifiedCount > 0){

                //Update Status
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBooking = [updated,...remaining]
                setBookings(newBooking)

            }

        })

    }


    return (
        <div>
            <h2 className="text-5xl text-center"> Your Total Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Date</th>  
                            <th>Price</th>  
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {

                        bookings.map(booking => <BookingRow
                            
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}
                            
                            ></BookingRow>)

                    }
                      
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default Bookings;