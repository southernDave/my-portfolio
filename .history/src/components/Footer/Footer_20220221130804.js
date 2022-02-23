import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { SiAirplayaudio } from "react-icons/si";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Calls</LinkTitle>
          <LinkItem href='tel: +234-706-702-9922'>Call me here</LinkItem>
          <LinkTitle>Text</LinkTitle>
          <LinkItem href='https://wa.link/kiplh0' target="_blank">Text me on whatsApp</LinkItem>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href='mailto:obohdavid2014@gmail.com' target="_blank">Email me here</LinkItem>
        </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>change is constant, move with the times or get left behind </Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href='https://github.com/southernDave' target="_blank">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/david-oboh-833432207/' target="_blank">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/p_o_t_l_s_c' target="_blank">
        <AiFillTwitterSquare size="4rem" />
      </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
