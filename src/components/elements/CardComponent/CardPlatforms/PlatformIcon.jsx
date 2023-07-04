// vendor imports
import React from "react";

// local imports
import linux from "assets/svg/platforms/linux.svg";
import mac from "assets/svg/platforms/mac.svg";
import nintendo from "assets/svg/platforms/nintendo.svg";
import pc from "assets/svg/platforms/pc.svg";
import playstation from "assets/svg/platforms/playstation.svg";
import web from "assets/svg/platforms/web.svg";
import xbox from "assets/svg/platforms/xbox.svg";

const PlatformIcon = ({ slug }) => {
  const choiceSrc = (source) => {
    switch (source) {
      case "linux": return linux;
      case "mac": return mac;
      case "nintendo": return nintendo;
      case "pc": return pc;
      case "playstation": return playstation;
      case "web": return web;
      case "xbox": return xbox;
      default: return web;
    }
  };

  return <img src={`.${choiceSrc(slug).slice(1)}`} alt={slug} />;
};

export default PlatformIcon;
