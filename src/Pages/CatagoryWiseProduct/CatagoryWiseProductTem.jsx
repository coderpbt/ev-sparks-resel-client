import React from "react";

const CatagoryWiseProductTem = ({ item, setBook,}) => {
  const { image, productName, location, reselPrice, originPrice, useOfYear, productCondition,yourName,date} = item;
//picture, name, location, resale price, original price, years of use, the time when it got posted

  return (
    <div>
      <div className="card card-compact shadow-xl">
        <figure>
          <img src={image} alt="logos" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg text-left text-black">{productName}</h2>
          <div className="flex justify-between items-center">
             <h2 className="card-title text-lg text-left text-black">post by <span className="text-blue-600 underline">{yourName}</span></h2>
             <h3 className="text-base text-black text-left">Use : {useOfYear}</h3>
          </div>
          
          <h3 className="text-base text-black text-left">location : {location}</h3>
          <h2 className="card-title text-base text-black">Orginal Price : ${reselPrice} </h2>
          <h2 className="card-title text-base text-black">Resale Price : ${originPrice}</h2>
          <h2 className="card-title text-base text-black">Product Condition: {productCondition}</h2>
          <h3 className="text-base text-black text-left">{date}</h3>
          <div className="card-actions justify-end">
            <label
              htmlFor="booking-modal"
              onClick={() => setBook(item)}
              className="btn btn-primary text-white"
            >
              Book
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagoryWiseProductTem;
