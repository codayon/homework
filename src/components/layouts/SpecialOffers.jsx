import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import ProductOne from '../../assets/product-9.png';
import ProductTwo from '../../assets/product-10.png';
import ProductThree from '../../assets/product-11.png';
import ProductFour from '../../assets/product-12.png';
import Product from '../Product';

const SpecialOffers = () => {
  return (
    <section className="py-12">
      <Container>
        <h4 className="text-black-a font-bold text-4xl ">Special Offers</h4>
        <Flex className={'justify-between py-12'}>
          <Product
            imgSrc={ProductOne}
            imgAlt={'ProductOne'}
            productName={'Basic Crew Neck Tee'}
            price={'$44.00'}
            badgeName={'New'}
          />
          <Product
            imgSrc={ProductTwo}
            imgAlt={'ProductTwo'}
            productName={'Basic Crew Neck Tee'}
            price={'$44.00'}
            badgeName={'New'}
          />
          <Product
            imgSrc={ProductThree}
            imgAlt={'ProductThree'}
            productName={'Basic Crew Neck Tee'}
            price={'$44.00'}
            badgeName={'New'}
          />
          <Product
            imgSrc={ProductFour}
            imgAlt={'ProductFour'}
            productName={'Basic Crew Neck Tee'}
            price={'$44.00'}
            badgeName={'New'}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default SpecialOffers;
