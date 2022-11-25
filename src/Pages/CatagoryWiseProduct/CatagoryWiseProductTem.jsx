import React from 'react';
import { useNavigate } from 'react-router-dom';

const CatagoryWiseProductTem = ({item}) => {
  const {image_url,title,price,total_lecture,_id} = item;
  const getcoursesId = useNavigate();

  const handlerAddToCart = (_id) => {
    getcoursesId(`/courses/${_id}`)
  }
  return (
    <div>
          <div className="card card-compact shadow-xl">
    <figure><img src={image_url} alt="logos" /></figure>
    <div className="card-body">
      <h2 className="card-title text-lg text-left text-black">{title}</h2>
      <div className='flex justify-between'>
      <h2 className="card-title text-base text-black">$ {price} </h2>
      <h2 className="card-title text-base text-black"> {total_lecture} </h2>
      </div>
      <div className="card-actions justify-end">
          <button onClick={() => handlerAddToCart(_id)} className="btn btn-primary">
           Courses Details
        </button>
      </div>
    </div>
  </div>
    </div>
  );
};

export default CatagoryWiseProductTem;