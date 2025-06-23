import Button from '../Button';
import Container from '../Container';
import MainHeading from '../MainHeading';
import Section from '../Section';
import SubHeading from '../SubHeading';
import SubText from '../SubText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const About = () => {
  return (
    <Section className={'py-28 bg-[url(https://i.postimg.cc/15Lj8YgT/background.png)]'}>
      <Container>
        <SubHeading Text={'GRAPHIC DESIGNER'} />
        <MainHeading Text={'Graphic Designer With 10 Years Of Experience.'} className={'text-dimmed-black py-6'} />
        <SubText Text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.'} className={'text-dimmed-black max-w-[36.5rem] pb-6'} />
        <Button
          className={'py-6 px-10'}
          ButtonText={
            <>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              CONTACT ME
            </>
          }
        />
      </Container>
    </Section>
  );
};

export default About;
