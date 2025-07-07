import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import AdImgOne from '../../assets/ad-1.png';
import AdImgTwo from '../../assets/ad-2.png';
import AdImgThree from '../../assets/ad-3.png';
import { Link } from 'react-router-dom';

const Ads = () => {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <Flex className={'gap-x-10'}>
          <div>
            <Link to={'/shop'}>
              <img src={AdImgOne} alt="AdImgOne" />
            </Link>
          </div>
          <Flex className={'flex-col gap-y-10'}>
            <div>
              <Link to={'/shop'}>
                <img src={AdImgTwo} alt="AdImgTwo" />
              </Link>
            </div>
            <div>
              <Link to={'/shop'}>
                <img src={AdImgThree} alt="AdImgThree" />
              </Link>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Ads;
