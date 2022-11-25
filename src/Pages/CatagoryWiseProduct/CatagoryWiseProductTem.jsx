import React from "react";

const CatagoryWiseProductTem = ({ item, setBook,}) => {
  const { image_url, name, location, resale_price, orginal_price, years_of_use, dateTime} = item;
//picture, name, location, resale price, original price, years of use, the time when it got posted

  return (
    <div>
      <div className="card card-compact shadow-xl">
        <figure>
          <img src={image_url} alt="logos" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg text-left text-black">{name}</h2>
          <h3 className="text-base text-black text-left">location : {location}</h3>
          <h3 className="text-base text-black text-left">Use : {years_of_use}</h3>
          <h2 className="card-title text-base text-black">Orginal Price : ${orginal_price} </h2>
          <h2 className="card-title text-base text-black">Resale Price : ${resale_price}</h2>
          <h3 className="text-base text-black text-left">{dateTime}</h3>
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
