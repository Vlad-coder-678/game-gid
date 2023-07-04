// vendor imports
import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

// local imports
// assets
import home from "assets/svg/home.svg";
import pacman from "assets/svg/browse/pacman.svg";
// constants
import ROUTE from "constants/routes";
// components
import DetailsSlider from "components/Slider";
import CardPlatforms from "components/elements/CardComponent/CardPlatforms";
import ButtonSquare from "components/common/SquareButton";
// styles
import {
  Buttons,
  Desc,
  DetailsTitle,
  Wrap,
} from "components/pages/details/styles";

const Details = () => {
  const [cardData, setCardData] = useState({});
  const [linkGame, setLinkGame] = useState("");
  const [isRedirectToHome, setIsRedirectToHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (cardData.slug) {
      const request = cardData.slug.split("-").join("+");
      const link = `https://www.google.com/search?q=${request}`;
      setLinkGame(link);
    }
  }, [cardData]);

  useEffect(() => {
    let data = window.localStorage.getItem("card");
    if (data) {
      data = JSON.parse(data);
      const pathnameFromCard = `${ROUTE.games}/${data.slug}`;
      if (pathnameFromCard !== pathname) setIsRedirectToHome(true);
      else setCardData(data);
    } else setIsRedirectToHome(true);
  }, []);

  return (
    <Wrap>
      <DetailsTitle>{cardData.name}</DetailsTitle>
      {cardData.short_screenshots && cardData.short_screenshots.length > 0 && (
        <DetailsSlider slides={cardData.short_screenshots} />
      )}
      {cardData.platforms && (
        <Desc>
          <h3>Platforms</h3>
          <CardPlatforms platforms={cardData.platforms} />
        </Desc>
      )}
      {cardData.genres && (
        <Desc>
          <h3>Genres</h3>
          <div>
            {cardData.genres.map((genre, index) => (
              <span key={genre.name}>
                {genre.name}
                {index !== cardData.genres.length - 1 && ", "}
              </span>
            ))}
          </div>
        </Desc>
      )}
      {cardData.rating && (
        <Desc>
          <h3>Rating</h3>
          <p>{cardData.rating}</p>
        </Desc>
      )}
      {cardData.metacritic && (
        <Desc>
          <h3>Metacritic</h3>
          <p>{cardData.metacritic}</p>
        </Desc>
      )}
      {cardData.released && (
        <Desc>
          <h3>Release date</h3>
          <span>{cardData.released}</span>
        </Desc>
      )}
      <Buttons>
        <ButtonSquare size="small" source={pacman} added="GameSite" handleClick={() => window.open(linkGame)} />
        <ButtonSquare size="small" source={home} added="Link to home" handleClick={() => setIsRedirectToHome(true)} />
        {isRedirectToHome && <Navigate to={ROUTE.main} />}
      </Buttons>
    </Wrap>
  );
};

export default Details;
