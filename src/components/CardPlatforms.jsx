import React from 'react';
import styled from 'styled-components';

import PlatformLogo from './PlatformLogo';

const Platforms = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const WrapPlatformLogo = styled.div`
  height: 10px;
  margin: 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardPlatforms = ({ platforms }) => (
  <Platforms>
    {platforms.map((item) => (
      <WrapPlatformLogo key={item.platform.slug}>
        <PlatformLogo slug={item.platform.slug} key={item.platform.slug} />
      </WrapPlatformLogo>
    ))}
  </Platforms>
);
export default CardPlatforms;
