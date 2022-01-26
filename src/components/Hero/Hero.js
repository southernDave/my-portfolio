import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br/>
        I am David Edoise Oboh <br/>
      </SectionTitle>
      <SectionText>
        I am a self-taught frontend and blockchain developer from Nigeria <br />
        I have a burning desire to keep improving and learning new technologies related to the blockchain space
        I want to bring a new experience to users getting started in web3 because I believe that one of the ways
        to get new users acquainted with web3 projects is by making the frontend a lot user friendly
      </SectionText>
      <Button onClick = {() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;