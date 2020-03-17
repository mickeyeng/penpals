import React from 'react';
import styled from 'styled-components';
import coloredLogo from '../../assets/icon.svg';

const StyledLogo = styled.img`
  position: absolute;
  width: 2.5%;
  top: 5%;
  filter: grayscale(100%);
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    filter: grayscale(0%);
    transition: 0.5s;
  }

  @media (max-width: 900px) {
    width: 10%;
  }
`;

const Logo = props => (
  <StyledLogo
    src={coloredLogo}
    alt=""
    {...props}
  />
);

export default Logo;
