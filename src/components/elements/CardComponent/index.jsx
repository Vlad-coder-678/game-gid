// vendor imports
import React from "react";
import { Link } from "react-router-dom";

// local imports
// constants
import ROUTE from "../../../constants/routes";
// utilities
import { setItemToLocalStorage } from "../../../utilities/local-storage-operation";
// components
import CardButtons from "./CardButtons";
import CardDescription from "./CardDescription";
import CardDiscover from "./CardDiscover";
import CardPlatforms from "./CardPlatforms";
import CardPoster from "./CardPoster";

import {
  CardInfo,
  CardMetacritic,
  CardTitle,
  Wrap,
} from "./styles";

const CardComponent = ({ card }) => {
  const handleClick = () => {
    setItemToLocalStorage({ itemName: "card", itemData: card });
  };

  return (
    <Wrap>
      <Link to={`${ROUTE.games}/${card.slug}`} onClick={handleClick}>
        <CardPoster bg={card.background_image} name={card.name} />
        <CardInfo>
          {card.metacritic && <CardMetacritic metacritic={card.metacritic} />}
          <CardPlatforms platforms={card.parent_platforms} />
          <CardTitle title={card.name} />
          <CardButtons added={card.added} />
          <CardDescription released={card.released} genres={card.genres} />
          <CardDiscover />
        </CardInfo>
      </Link>
    </Wrap>
  );
};

export default CardComponent;
