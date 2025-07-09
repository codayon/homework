import React from 'react';
import Flex from './Flex';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Compare from '../assets/Compare';
import { Link } from 'react-router-dom';

const Product = ({ imgSrc, imgAlt, productName, price, badgeName }) => {
  return (
    <div className={'relative group'}>
      <div className="relative">
        <div>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="absolute bottom-0 right-0 w-full bg-white py-6 pr-8 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
          <Link to={'/'}>
            <Flex className={'justify-end gap-x-4 py transition duration-300'}>
              <h5 className="text-gray-a hover:text-black">Add to Wish List</h5>
              <FaHeart />
            </Flex>
          </Link>
          <Link to={'/'}>
            <Flex
              className={'justify-end gap-x-4 py-5 transition duration-300'}>
              <span className="text-gray-a hover:text-black">Compare</span>
              <Compare />
            </Flex>
          </Link>
          <Link to={'/'}>
            <Flex className={'justify-end gap-x-4 transition duration-300'}>
              <span className="text-gray-a hover:text-black transition duration-300">
                Add to Cart
              </span>
              <FaShoppingCart />
            </Flex>
          </Link>
        </div>
      </div>
      <Flex className={'justify-between py-6'}>
        <h5 className="font-bold text-xl">{productName}</h5>
        <p className="text-gray-a">{price}</p>
      </Flex>
      <div className=" absolute top-5 left-5 bg-black-a text-white font-bold px-8 py-2.5">
        {badgeName}
      </div>
    </div>
  );
};

export default Product;
