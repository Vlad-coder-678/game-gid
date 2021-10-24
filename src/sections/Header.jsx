import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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

const Header = () => {
  const [isRedirectToHome, setIsRedirectToHome] = useState(false);

  return (
    <Wrap>
      <div>
        <Logo onClick={() => setIsRedirectToHome(true)}>RAWG</Logo>
      </div>
      <div>
        <Search />
      </div>
      <button type="button">Log In</button>
      {isRedirectToHome && <Redirect to="/" />}
    </Wrap>
  );
};

export default Header;
