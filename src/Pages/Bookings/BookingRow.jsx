/* eslint-disable react/prop-types */


const BookingRow = ({ booking }) => {

    const {  date, service_title, price,service_img } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {service_img && <img src={service_img} alt={service_title} />}
                    </div>
                </div>

            </td>
            <td>
                {service_title}

            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;