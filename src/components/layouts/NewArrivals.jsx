import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import ProductOne from '../../assets/product-1.png';
import ProductTwo from '../../assets/product-2.png';
import ProductThree from '../../assets/product-3.png';
import ProductFour from '../../assets/product-4.png';
import Product from '../Product';

const NewArrivals = () => {
  return (
    <section className="py-12">
      <Container>
        <h4 className="text-black-a font-bold text-4xl ">New Arrivals</h4>
        <Flex className={'justify-between py-12'}>
          <Product
            imgSrc={ProductOne}
            imgAlt={'ProductOne'}
            productName={'Basic Crew Neck Tee'}
            price={'$44.00'}
            badgeName={'10%'}
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

export default NewArrivals;
