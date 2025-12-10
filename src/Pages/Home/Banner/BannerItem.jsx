import React from 'react';


const BannerItem = ({slide}) => {
    const {image, id, prev, next,heading,subHeading} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/3">
                    <h1 className='lg:text-6xl text-xl font-bold text-white hidden lg:block text-left'>
                       {heading}
                       <br />
                       {subHeading}
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
        </div>
    );
};

export default BannerItem;