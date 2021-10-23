import React from 'react';
import styled from 'styled-components';

import NavBarTitle from './NavBarTitle';
import NavBarReleases from './NavBarReleases';
import NavBarSpecific from './NavBarSpecific';

import navBarData from '../data/bodyData';
import { BUTTON_SIZES } from '../constants';

const Wrap = styled.div`
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    margin: 5px 0;
  }
`;

const NavBar = () => (
  <Wrap>
    <NavBarTitle text="Home" />
    <NavBarTitle text="Review" />
    <NavBarTitle text="New Releases" isDisable />
    {navBarData.releases_data.map((item) => (
      <NavBarReleases
        key={item.text}
        buttonSize={BUTTON_SIZES.MEDIUM}
        source={item.source}
        text={item.text}
        dates={item.dates}
      />
    ))}

    <NavBarTitle text="Top" isDisable />
    {navBarData.top_data.map((item) => (
      <NavBarSpecific key={item.text} buttonSize={BUTTON_SIZES.MEDIUM} source={item.source} text={item.text} />
    ))}

    <NavBarTitle text="All Games" />
    <NavBarTitle text="Browse" isDisable />
    {navBarData.browse_data.map((item) => (
      <NavBarSpecific key={item.text} buttonSize={BUTTON_SIZES.MEDIUM} source={item.source} text={item.text} />
    ))}

    <NavBarTitle text="Platforms" isDisable />
    {navBarData.platforms_data.map((item) => (
      <NavBarSpecific key={item.text} buttonSize={BUTTON_SIZES.MEDIUM} source={item.source} text={item.text} />
    ))}

    <NavBarTitle text="Genres" isDisable />
    {navBarData.genres_data.map((item) => (
      <NavBarSpecific key={item.text} buttonSize={BUTTON_SIZES.BIG} source={item.source} text={item.text} />
    ))}
  </Wrap>
);

export default NavBar;
