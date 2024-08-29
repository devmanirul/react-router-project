import React from "react";

const Card = ({ image, description, title }) => {
  console.log({ image, description, title });
  return (
    <div className="card grid col-span-4 gap-2 w-full bg-base-100 shadow-xl">
      <figure className="w-full">
        <img src={image} alt="Shoes" className="h-96 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
