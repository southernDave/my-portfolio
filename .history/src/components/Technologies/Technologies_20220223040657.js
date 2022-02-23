import React from 'react';
import { DiFirebase, DiReact, DiStackoverflow, DiZend } from 'react-icons/di';
import { SiEthereum,  } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in my time as a front end and blockchain developer, <br />
      I have experience working with html, css, javascript, react.js, three.js, solidity, hardhat and other blockchain related technologies. <br />
      when I was studying Electrical Engineering at CIU, I did dabble into some C++ and I also handled a robotics project using arduino. <br />
      As someone who never stops learning because I genuinely love this space, I will always show up as a better version of myself everyday.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            html, CSS, TailwindCSS, Javascript, Typescript <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiEthereum size="4rem" />
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, ethers.js, hardhat 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
