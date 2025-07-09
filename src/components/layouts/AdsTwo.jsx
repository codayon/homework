import React from 'react';
import AdImg from '../../assets/images/ad-4.png';
import Container from '../Container';
import { Link } from 'react-router-dom';

const AdsTwo = () => {
  return (
    <section className="py-12">
      <Container>
        <div>
          <Link to={'/shop'}>
            <img src={AdImg} alt="AdImg" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AdsTwo;
