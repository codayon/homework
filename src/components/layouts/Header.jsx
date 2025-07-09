import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import HeaderLogo from '../HeaderLogo';
import { Link } from 'react-router-dom';
import CategoryFilter from '../../assets/icons/CategoryFilter';
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <section className="py-8">
        <Container>
          <Flex className={'justify-between'}>
            <Link to={'/'}>
              <HeaderLogo />
            </Link>
            <div className="w-[24rem]">
              <ul className="flex items-center justify-between">
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Home
                  </li>
                </Link>
                <Link to={'/shop'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Shop
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    About
                  </li>
                </Link>
                <Link to={'/contacts'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Contacts
                  </li>
                </Link>
                <Link to={'/journal'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
            <div></div>
          </Flex>
        </Container>
      </section>
      <section className={'py-6 bg-gray-b'}>
        <Container>
          <Flex className={'justify-between'}>
            <Link to={'/'}>
              <Flex className="gap-x-3">
                <CategoryFilter />
                <p className="text-black-a">Shop by Category</p>
              </Flex>
            </Link>
            <Flex>
              <input
                type="text"
                placeholder="Search Products"
                className="bg-white placeholder-gray-c py-4 px-5 outline-0 w-[32rem]"
              />
              <Link to={'/'}>
                <FaSearch className="-translate-x-8" />
              </Link>
            </Flex>
            <Flex className="gap-x-10">
              <Flex className={'gap-x-2'}>
                <Link to={'/'}>
                  <FaUser />
                </Link>
                <Link to={'/'}>
                  <FaCaretDown />
                </Link>
              </Flex>
              <Link to={'/'}>
                <FaShoppingCart />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
