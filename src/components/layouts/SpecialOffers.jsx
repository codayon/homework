import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import ProductOne from '../../assets/product-9.png';
import ProductTwo from '../../assets/product-10.png';
import ProductThree from '../../assets/product-11.png';
import ProductFour from '../../assets/product-12.png';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Compare from '../../assets/Compare';

const SpecialOffers = () => {
  return (
    <section className="py-12">
      <Container>
        <h4 className="text-black-a font-bold text-4xl ">Special Offers</h4>
        <Flex className={'justify-between py-12'}>
          <div className={'relative group'}>
            <div className="relative">
              <img src={ProductOne} alt="ProductOne" />
              <div className="absolute bottom-0 right-0 w-full bg-white py-6 pr-8 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible text-right">
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py transition duration-300'
                    }>
                    <h5 className="text-gray-a hover:text-black">
                      Add to Wish List
                    </h5>
                    <FaHeart />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py-5 transition duration-300'
                    }>
                    <span className="text-gray-a hover:text-black">
                      Compare
                    </span>
                    <Compare />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={'justify-end gap-x-4 transition duration-300'}>
                    <span className="text-gray-a hover:text-black transition duration-300">
                      Add to Cart
                    </span>
                    <FaShoppingCart />
                  </Flex>
                </Link>
              </div>
            </div>
            <Flex className={'gap-x-28 pt-6 pb-11'}>
              <h5 className="font-bold text-xl">Basic Crew Neck Tee</h5>
              <p className="text-gray-a">$44.00</p>
            </Flex>
            <span className="absolute top-5 left-5 bg-black-a text-white font-bold px-8 py-2.5">
              New
            </span>
          </div>
          <div className={'relative group'}>
            <div className="relative">
              <img src={ProductTwo} alt="ProductTwo" />
              <div className="absolute bottom-0 right-0 w-full bg-white py-6 pr-8 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible text-right">
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py transition duration-300'
                    }>
                    <h5 className="text-gray-a hover:text-black">
                      Add to Wish List
                    </h5>
                    <FaHeart />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py-5 transition duration-300'
                    }>
                    <span className="text-gray-a hover:text-black">
                      Compare
                    </span>
                    <Compare />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={'justify-end gap-x-4 transition duration-300'}>
                    <span className="text-gray-a hover:text-black transition duration-300">
                      Add to Cart
                    </span>
                    <FaShoppingCart />
                  </Flex>
                </Link>
              </div>
            </div>
            <Flex className={'gap-x-28 pt-6 pb-11'}>
              <h5 className="font-bold text-xl">Basic Crew Neck Tee</h5>
              <p className="text-gray-a">$44.00</p>
            </Flex>
            <span className="absolute top-5 left-5 bg-black-a text-white font-bold px-8 py-2.5">
              New
            </span>
          </div>
          <div className={'relative group'}>
            <div className="relative">
              <img src={ProductThree} alt="ProductThree" />
              <div className="absolute bottom-0 right-0 w-full bg-white py-6 pr-8 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible text-right">
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py transition duration-300'
                    }>
                    <h5 className="text-gray-a hover:text-black">
                      Add to Wish List
                    </h5>
                    <FaHeart />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py-5 transition duration-300'
                    }>
                    <span className="text-gray-a hover:text-black">
                      Compare
                    </span>
                    <Compare />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={'justify-end gap-x-4 transition duration-300'}>
                    <span className="text-gray-a hover:text-black transition duration-300">
                      Add to Cart
                    </span>
                    <FaShoppingCart />
                  </Flex>
                </Link>
              </div>
            </div>
            <Flex className={'gap-x-28 pt-6 pb-11'}>
              <h5 className="font-bold text-xl">Basic Crew Neck Tee</h5>
              <p className="text-gray-a">$44.00</p>
            </Flex>
            <span className="absolute top-5 left-5 bg-black-a text-white font-bold px-8 py-2.5">
              New
            </span>
          </div>
          <div className={'relative group'}>
            <div className="relative">
              <img src={ProductFour} alt="ProductFour" />
              <div className="absolute bottom-0 right-0 w-full bg-white py-6 pr-8 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible text-right">
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py transition duration-300'
                    }>
                    <h5 className="text-gray-a hover:text-black">
                      Add to Wish List
                    </h5>
                    <FaHeart />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={
                      'justify-end gap-x-4 py-5 transition duration-300'
                    }>
                    <span className="text-gray-a hover:text-black">
                      Compare
                    </span>
                    <Compare />
                  </Flex>
                </Link>
                <Link to={'/'}>
                  <Flex
                    className={'justify-end gap-x-4 transition duration-300'}>
                    <span className="text-gray-a hover:text-black transition duration-300">
                      Add to Cart
                    </span>
                    <FaShoppingCart />
                  </Flex>
                </Link>
              </div>
            </div>
            <Flex className={'gap-x-28 pt-6 pb-11'}>
              <h5 className="font-bold text-xl">Basic Crew Neck Tee</h5>
              <p className="text-gray-a">$44.00</p>
            </Flex>
            <span className="absolute top-5 left-5 bg-black-a text-white font-bold px-8 py-2.5">
              New
            </span>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default SpecialOffers;
