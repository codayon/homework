import Flex from './Flex';

const Menu = () => {
  return (
    <ul>
      <Flex className={'gap-x-12'}>
        <li>
          <a className="font-poppins text-sm tracking-widest text-black hover:text-black-hover transition duration-300" href="#">
            HOME
          </a>
        </li>
        <li>
          <a className="font-poppins text-sm tracking-widest text-black hover:text-black-hover transition duration-300" href="#">
            ABOUT US
          </a>
        </li>
        <li>
          <a className="font-poppins text-sm tracking-widest text-black hover:text-black-hover transition duration-300" href="#">
            SERVICES
          </a>
        </li>
        <li>
          <a className="font-poppins text-sm tracking-widest text-black hover:text-black-hover transition duration-300" href="#">
            WORKS
          </a>
        </li>
      </Flex>
    </ul>
  );
};

export default Menu;
