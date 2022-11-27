import React from 'react';

const MyProductsTem = ({item, handleDelete}) => {
  const { image, productName, location, reselPrice, originPrice, productCondition, date } = item;
  return (
    <div>
            <div className="card card-compact shadow-xl">
        <figure>
          <img src={image} alt="logos" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg text-left text-black">{productName}</h2>
          <h3 className="text-base text-black text-left">location : {location}</h3>
          <h2 className="card-title text-base text-black">Orginal Price : ${reselPrice} </h2>
          <h2 className="card-title text-base text-black">Resale Price : ${originPrice}</h2>
          <h2 className="card-title text-base text-black">Product Condition: {productCondition}</h2>
          <h3 className="text-base text-black text-left">{date}</h3>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(item)}
              className="btn btn-primary text-white"
            >
              Delete
            </button>
            <button className="btn btn-primary text-white">advertise</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductsTem;