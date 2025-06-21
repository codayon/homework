import Section from '../Section';
import Container from '../Container';
import Flex from '../Flex';
import Logo from '../Logo';
import Menu from '../Menu';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <Section className={'py-7 bg-hero'}>
      <Container>
        <Flex className={'justify-between'}>
          <Logo />
          <Menu />
          <Button
            className={'py-2 px-6'}
            ButtonText={
              <>
                HIRE ME
                <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
              </>
            }
          />
        </Flex>
      </Container>
    </Section>
  );
};

export default Header;
