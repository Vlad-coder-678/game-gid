import React from 'react';
import styled from 'styled-components';
import { BUTTON_SIZES } from '../constants';
import ButtonSquare from './ButtonSquare';

// releases
import star from '../assets/svg/star.svg';
import fire from '../assets/svg/fire.svg';
import nextWeek from '../assets/svg/next-week.svg';
import calendar from '../assets/svg/calendar.svg';
// top
import prize from '../assets/svg/prize.svg';
import award from '../assets/svg/award.svg';
import crown from '../assets/svg/crown.svg';
// browse
import joystick from '../assets/svg/joystick.svg';
import download from '../assets/svg/download.svg';
import folder from '../assets/svg/folder.svg';
import reviews from '../assets/svg/reviews.svg';
import pacman from '../assets/svg/pacman.svg';
import user from '../assets/svg/user.svg';
import tags from '../assets/svg/tags.svg';
import dev from '../assets/svg/dev.svg';
import book from '../assets/svg/book.svg';
// platforms
import linux from '../assets/svg/linux.svg';
import mac from '../assets/svg/mac.svg';
import nintendo from '../assets/svg/nintendo.svg';
import pc from '../assets/svg/pc.svg';
import playstation from '../assets/svg/playstation.svg';
import xbox from '../assets/svg/xbox.svg';
// genres
import action from '../assets/png/action.png';
import strategy from '../assets/png/strategy.png';
import rpg from '../assets/png/rpg.png';
import shooter from '../assets/png/shooter.png';
import adventure from '../assets/png/adventure.png';
import puzzle from '../assets/png/puzzle.png';
import racing from '../assets/png/racing.png';
import sports from '../assets/png/sports.png';

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

const Title = styled.h2``;

const Specific = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;

const NavBar = () => (
  <Wrap>
    <button>
      <Title>Home</Title>
    </button>
    <button>
      <Title>Reviews</Title>
    </button>
    <Title>New Realeses</Title>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={star} />
      <span>Last 30 days</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={fire} />
      <span>This week</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={nextWeek} />
      <span>Next week</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={calendar} />
      <span>Release calendar</span>
    </Specific>

    {/* TOP */}

    <Title>Top</Title>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={prize} />
      <span>Best of the year</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={award} />
      <span>Popular on 2020</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={crown} />
      <span>All time top 250</span>
    </Specific>

    {/* ALL GAMES */}

    <button>
      <Title>All Games</Title>
    </button>

    {/* BROWSE */}

    <button>
      <Title>Browse</Title>
    </button>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={joystick} />
      <span>Platforms</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={download} />
      <span>Stores</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={folder} />
      <span>Collection</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={reviews} />
      <span>Reviews</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={pacman} />
      <span>Genres</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={user} />
      <span>Creators</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={tags} />
      <span>Tags</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={dev} />
      <span>Developers</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={book} />
      <span>Pablished</span>
    </Specific>

    {/* Platforms */}

    <button>
      <Title>Platforms</Title>
    </button>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={pc} />
      <span>PC</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={playstation} />
      <span>PlayStation 4</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={xbox} />
      <span>Xbox One</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={nintendo} />
      <span>Nintendo Switch</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={mac} />
      <span>iOS</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={linux} />
      <span>Android</span>
    </Specific>

    {/* GENRES */}

    <button>
      <Title>Genres</Title>
    </button>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={action} />
      <span>Action</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={strategy} />
      <span>Strategy</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={rpg} />
      <span>RPG</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={shooter} />
      <span>Shooter</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={adventure} />
      <span>Adventure</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={puzzle} />
      <span>Puzzle</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={racing} />
      <span>Racing</span>
    </Specific>
    <Specific>
      <ButtonSquare size={BUTTON_SIZES.BIG} source={sports} />
      <span>Sports</span>
    </Specific>
  </Wrap>
);

export default NavBar;
