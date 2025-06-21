import Container from '../Container';
import Flex from '../Flex';
import Logo from '../Logo';
import Menu from '../Menu';
import Button from '../Button';

const Header = () => {
  return (
    <section className="w-full py-7">
      <Container>
        <Flex className={'justify-between'}>
          <Logo />
          <Menu />
          <Button className="py-2 px-8" ButtonText={'HIRE ME'} />
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
