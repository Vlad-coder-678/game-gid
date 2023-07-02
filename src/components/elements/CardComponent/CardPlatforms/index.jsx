// vendor imports
import React from "react";

// local imports
// components
import PlatformIcon from "./PlatformIcon";

import { Platforms, PlatformLogo } from "./styles";

const CardPlatforms = ({ platforms }) => (
  <Platforms>
    {platforms?.map(({ platform }) => (
      <PlatformLogo key={platform.slug}>
        <PlatformIcon slug={platform.slug} key={platform.slug} />
      </PlatformLogo>
    ))}
  </Platforms>
);

export default CardPlatforms;
