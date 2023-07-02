// vendor imports
import React from "react";

// local imports
import linux from "../../../../assets/svg/linux.svg";
import mac from "../../../../assets/svg/mac.svg";
import nintendo from "../../../../assets/svg/nintendo.svg";
import pc from "../../../../assets/svg/pc.svg";
import playstation from "../../../../assets/svg/playstation.svg";
import web from "../../../../assets/svg/web.svg";
import xbox from "../../../../assets/svg/xbox.svg";

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
