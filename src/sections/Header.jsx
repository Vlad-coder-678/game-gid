import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import SectionSearchCards from './homeSections/SectionSearchCards';
// import SectionForms from './homeSections/SectionForms';
import SectionApi from '../components/SectionApi';

const Wrap = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    margin: 0 10px;
    cursor: pointer;
  }

  a:hover {
    color: #777;
  }

  .activeLink {
    color: white;
  }
`;

const LogoWrap = styled.div``;

const Logo = styled.button`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 5px;
  font-weight: 900;
  text-transform: uppercase;
`;

const SearchWrap = styled.div``;

const LogInWrap = styled.div``;

const Header = () => (
  <Wrap>
    <LogoWrap>
      <Logo>RAWG</Logo>
    </LogoWrap>
    <SearchWrap>
      Search
      {/* <SectionSearchCards /> */}
      {/* <SectionForms /> */}
      <SectionApi />
    </SearchWrap>
    <LogInWrap>Log In</LogInWrap>
  </Wrap>
);

export default Header;
