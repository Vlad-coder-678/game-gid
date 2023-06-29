import React from "react";

import linux from "../assets/svg/linux.svg";
import mac from "../assets/svg/mac.svg";
import nintendo from "../assets/svg/nintendo.svg";
import pc from "../assets/svg/pc.svg";
import playstation from "../assets/svg/playstation.svg";
import web from "../assets/svg/web.svg";
import xbox from "../assets/svg/xbox.svg";

const PlatformLogo = ({ slug }) => {
  const choiceSrc = (source) => {
    switch (source) {
      case "linux":
        return linux;
      case "mac":
        return mac;
      case "nintendo":
        return nintendo;
      case "pc":
        return pc;
      case "playstation":
        return playstation;
      case "web":
        return web;
      case "xbox":
        return xbox;
      default:
        return web;
    }
  };
  const source = `.${choiceSrc(slug).slice(1)}`;

  return <img src={source} alt={slug} />;
};

export default PlatformLogo;
