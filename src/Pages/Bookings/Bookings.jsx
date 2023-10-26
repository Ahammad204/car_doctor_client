import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setBookings(data)

            })

    }, [])


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
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {

                        bookings.map(booking => <BookingRow
                            
                            key={booking._id}
                            booking={booking}
                            
                            
                            ></BookingRow>)

                    }
                      
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default Bookings;