import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';

const Wrap = styled.nav`
  width: 100%;
  height: 100px;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  &:hover {
    color: #777;
  }
`;

const SearchWrap = styled.div``;

const LogInWrap = styled.div``;

const Header = () => (
  <Wrap>
    <LogoWrap>
      <Logo>RAWG</Logo>
    </LogoWrap>
    <SearchWrap>
      <Search />
    </SearchWrap>
    <LogInWrap>Log In</LogInWrap>
  </Wrap>
);

export default Header;
