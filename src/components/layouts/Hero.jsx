import Section from '../Section';
import Container from '../Container';
import Flex from '../Flex';
import SubHeading from '../SubHeading';
import MainHeading from '../MainHeading';
import Button from '../Button';
import GhostButton from '../GhostButton';
import ProfilePicture from '../ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <Section className={'py-20 bg-off-white'}>
      <Container>
        <Flex className={'justify-between'}>
          <div>
            <SubHeading Text={'SAKIB AL HASAN'} className={'pb-8'} />
            <MainHeading Text={`Hello, my name's Sakib. I'm MERN Stack Developer.`} />
            <Flex className={'pt-8 gap-x-6'}>
              <Button
                className={'py-6 px-10'}
                ButtonText={
                  <>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    CONTACT ME
                  </>
                }
              />
              <GhostButton
                className={'py-5 px-8'}
                ButtonText={
                  <>
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    DOWNLOAD CV
                  </>
                }
              />
            </Flex>
          </div>
          <div>
            <ProfilePicture />
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;
