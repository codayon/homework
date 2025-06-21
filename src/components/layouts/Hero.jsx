import Section from '../Section';
import Container from '../Container';
import Flex from '../Flex';
import SubHeader from '../SubHeader';
import ProfilePicture from '../ProfilePicture';
import Button from '../Button';
import GhostButton from '../GhostButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <Section className={'py-20 bg-hero'}>
      <Container>
        <Flex className={'justify-between'}>
          <div>
            <SubHeader SubHeaderText={'SAKIB AL HASAN'} className={'pb-8'} />
            <h1 className="text-6xl font-bold font-poppins max-w-[480px] leading-20">Hello, my name's Sakib. I'm MERN Stack Developer.</h1>
            <Flex className={'pt-8 gap-x-6'}>
              <Button
                className={'py-6 px-9'}
                ButtonText={
                  <>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    CONTACT ME
                  </>
                }
              />
              <GhostButton
                className={'py-6 px-9'}
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
