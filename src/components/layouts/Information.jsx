import React from 'react';
import Flex from '../Flex';
import Container from '../Container';
import { PiNumberTwoBold } from 'react-icons/pi';
import { FaTruck, FaUndoAlt } from 'react-icons/fa';

const Information = () => {
  return (
    <section className='pt-6 pb-8 border-b border-gray-e'>
      <Container>
        <Flex className={'justify-between'}>
          <Flex>
            <PiNumberTwoBold />
            <p className="ml-3 text-gray-d">Free shipping</p>
          </Flex>
          <Flex>
            <FaTruck />
            <p className="ml-3 text-gray-d">Free shipping</p>
          </Flex>
          <Flex>
            <FaUndoAlt />
            <p className="ml-3 text-gray-d">Return policy in 30 days</p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Information;
