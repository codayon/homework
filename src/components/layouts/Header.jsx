import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import HeaderLogo from "../../assets/HeaderLogo";
import { Link } from "react-router-dom";
import CategoryFilter from "../../assets/CategoryFilter";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <section className="py-8">
        <Container>
          <Flex className={"justify-between"}>
            <HeaderLogo />
            <div className="w-[24rem]">
              <ul className="flex items-center justify-between">
                <Link to={"/"}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Shop
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    About
                  </li>
                </Link>
                <Link to={"/contacts"}>
                  <li className="text-gray-a hover:text-black transition duration-300">
                    Contacts
                  </li>
                </Link>
                <Link to={"/journal"}>
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
      <section className={"py-6 bg-gray-b"}>
        <Container>
          <Flex className={"justify-between"}>
            <Flex className="gap-x-3">
              <CategoryFilter />
              <p className="text-black-a">Shop by Category</p>
            </Flex>
            <Flex>
              <input
                type="text"
                placeholder="Search Products"
                className="bg-white placeholder-gray-c py-4 px-5 outline-0 w-[32rem]"
              />
              <FaSearch className="-translate-x-8" />
            </Flex>
            <Flex className="gap-x-10">
              <Flex className={"gap-x-2"}>
                <FaUser />
                <FaCaretDown />
              </Flex>
              <FaShoppingCart />
            </Flex>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
