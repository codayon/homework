import Section from '../Section';
import Container from '../Container';
import Flex from '../Flex';
import NumberBox from '../NumberBox';

const Countdown = () => {
  return (
    <Section className={'py-20'}>
      <Container>
        <Flex className={'justify-between'}>
          <NumberBox Number={'100+'} Label={'PROJECTS'} />
          <NumberBox Number={'24'} Label={'WINNING AWARD'} />
          <NumberBox Number={'70+'} Label={'HAPPY CLIENTS'} />
          <NumberBox Number={'10'} Label={'YEAR EXPERIENCE'} />
        </Flex>
      </Container>
    </Section>
  );
};

export default Countdown;
