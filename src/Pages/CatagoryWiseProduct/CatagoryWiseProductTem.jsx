import React from "react";

const CatagoryWiseProductTem = ({ item, setBook }) => {
  const {
    image,
    productName,
    location,
    reselPrice,
    originPrice,
    useOfYear,
    productCondition,
    yourName,
    date
  } = item;

  return (
    <div className="bg-[#1a1a1d] border border-[#2a2a2d] shadow-md rounded-xl hover:border-[#3d3d42] transition duration-200">

      <figure className="rounded-t-xl overflow-hidden bg-black/20">
        <img
          src={image}
          alt={productName}
          className="w-full h-64 object-cover hover:scale-[1.03] transition duration-300"
        />
      </figure>

      <div className="card-body text-gray-300 justify-start items-start">
        
        <h2 className="text-2xl font-semibold text-white leading-snug">
          {productName}
        </h2>

        <div className="flex justify-between gap-3 text-sm mt-1 mb-4 items-center">
          <p className="text-gray-400 text-[20px]">
            Posted by{" "}
            <span className="text-blue-400 font-medium underline">
              {yourName}
            </span>
          </p>

          <p className="text-gray-400 text-[20px]">Use: {useOfYear}</p>
          <p className="text-[20px] text-gray-500">{date}</p>
        </div>

        <p className="text-gray-400 text-[22px] font-bold mt-1 leading-[1.2]">
          Location: <span className="text-gray-300">{location}</span>
        </p>

        <div className="text-[20px] font-bold text-left leading-[1.2]">
          <p>
            Original Price:{" "}
            <span className="text-green-400 font-medium text-[18px]">${reselPrice}</span>
          </p>
          <p>
            Resale Price:{" "}
            <span className="text-green-400 font-medium text-[18px]">${originPrice}</span>
          </p>
          <p>
            Condition:{" "}
            <span className="text-green-400 font-medium text-[18px]">{productCondition}</span>
          </p>
        </div>

        

        <div className="card-actions justify-end mt-3">
          <label
            htmlFor="booking-modal"
            onClick={() => setBook(item)}
            className="btn bg-blue-600 hover:bg-blue-700 border-none text-white px-6"
          >
            Book
          </label>
        </div>

      </div>
    </div>
  );
};

export default CatagoryWiseProductTem;
