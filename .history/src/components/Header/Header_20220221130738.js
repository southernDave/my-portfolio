import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiAirplayaudio, SiRadiopublic, SiSpeakerdeck } from 'react-icons/si';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{display:"flex", alignItems: "center", color:"#bfc1d9", marginBottom:"20px"}}>
        <DiCssdeck size="4rem" /> <span> My Portfolio </span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <l1>
        <Link href="#projects">
          <NavLink> Projects </NavLink>
        </Link>
      </l1>
      <l1>
        <Link href="#tech">
          <NavLink> Technologies </NavLink>
        </Link>
      </l1>
      <l1>
        <Link href="#about">
          <NavLink> About </NavLink>
        </Link>
      </l1>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/southernDave' target="_blank">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/david-oboh-833432207/' target="_blank">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/p_o_t_l_s_c' target="_blank">
        <AiFillTwitterCircle size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
