import React from 'react';
import { Link } from 'react-router-dom';
import BannerSrc from './banner.png'

const BannerImage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Link to={'/shop'}>
        <img
          src={BannerSrc}
          alt="Website Banner"
          className="w-full h-auto object-cover"
        />
      </Link>
    </div>
  );
};

export default BannerImage;
