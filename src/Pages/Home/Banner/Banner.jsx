import React from 'react';
import b1 from '../../../images/banner-01.jpg';
import b2 from '../../../images/banner-02.jpg';

import BannerItem from './BannerItem';


const bannerDataItem = [
  {
      image: b1,
      prev: 6,
      id: 1,
      next: 2,
      heading : `A Brand New `,
      subHeading : 'Training Experience.',
      desc : 'Work towards your fitness goal with one of our amazing personal trainers, for the price of just one cup of coffee per week.'
  },
  {
      image: b2,
      prev: 1,
      id: 2,
      next: 3,
      heading : 'Get Support From a',
      subHeading : 'Real Personal Trainer.',
      desc : 'Work towards your fitness goal with one of our amazing personal trainers, for the price of just one cup of coffee per week.'
  },

]


const Banner = () => {
  return (
    <div className="carousel w-full pb-10">
            {
                bannerDataItem.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
  );
};

export default Banner;