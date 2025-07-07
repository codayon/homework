import React from 'react';
import Container from '../Container';
import FooterLogo from '../../assets/FooterLogo';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Flex from '../Flex';

const Footer = () => {
  return (
    <>
      <section className="pt-14 pb-14 bg-gray-b">
        <Container>
          <div className={'flex gap-x-36'}>
            <div>
              <h4 className="mb-4 font-bold text-black-a">MENU</h4>
              <ul className="flex flex-col gap-y-2">
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
            <div>
              <h4 className="mb-4 font-bold text-black-a">SHOP</h4>
              <ul className="flex flex-col gap-y-2">
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Category 1
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Category 2
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Category 3
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Category 4
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Category 5
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-black-a">HELP</h4>
              <ul className="flex flex-col gap-y-2">
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Privacy Policy
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Terms & Conditions
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Special E-shop
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Shipping
                  </li>
                </Link>
                <Link to={'/'}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Secure Payments
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-black-a w-[12rem]">
                (052) 611-5711 company@domain.com
              </h4>
              <p className="text-gray-a">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <div>
              <Link to={'/'}>
                <FooterLogo />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-14 bg-gray-b">
        <Container>
          <Flex className={'justify-between'}>
            <Flex className={'gap-x-6 text-lg'}>
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </Flex>
            <p className="text-gray-a">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Footer;
