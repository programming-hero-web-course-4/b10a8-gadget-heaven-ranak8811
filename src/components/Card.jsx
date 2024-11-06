import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ gadget }) => {
  //   console.log(gadget);
  const { product_id, product_title, product_image, price } = gadget;
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className="p-8">
        <img
          className="w-[280px] rounded-xl"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="font-thin">Price: {price}</p>
        <Link to={`/details/${product_id}`} className="card-actions">
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
