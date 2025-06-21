import Container from '../Container';
import Flex from '../Flex';
import Button from '../Button';
import Logo from '../Logo';
import Menu from '../Menu';

const Header = () => {
  return (
    <>
      <section className="w-full py-7">
        <Container>
          <Flex className={'justify-between'}>
            <Logo />
            <Menu />
            <Button className="py-2 px-8" ButtonText={'HIRE ME'} />
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
