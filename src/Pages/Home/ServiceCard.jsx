/* eslint-disable react/prop-types */


const ServiceCard = ({ service }) => {

    const { title, img, price } = service || {}

    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt={title} className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl text-[#FF3811]">Price: $ {price}</p>
                    <div className="card-actions">
                        <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;