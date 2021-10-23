import { ORDERING } from '../constants';
// releases
import star from '../assets/svg/star.svg';
import fire from '../assets/svg/fire.svg';
import nextWeek from '../assets/svg/next-week.svg';
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

const last30days = () => {
  const todayDate = new Date();
  const todayString = todayDate.toLocaleDateString().split('.').reverse().join('-');
  const dayMonthAgoDate = new Date();
  dayMonthAgoDate.setMonth(dayMonthAgoDate.getMonth() - 1);
  const dayMonthAgoString = dayMonthAgoDate.toLocaleDateString().split('.').reverse().join('-');
  return `${dayMonthAgoString},${todayString}`;
};

const last7days = () => {
  const todayDate = new Date();
  const todayString = todayDate.toLocaleDateString().split('.').reverse().join('-');
  const dayWeekAgoDate = new Date();
  dayWeekAgoDate.setDate(dayWeekAgoDate.getDate() - 7);
  const dayWeekAgoString = dayWeekAgoDate.toLocaleDateString().split('.').reverse().join('-');
  return `${dayWeekAgoString},${todayString}`;
};

const next7days = () => {
  const todayDate = new Date();
  const todayString = todayDate.toLocaleDateString().split('.').reverse().join('-');
  const dayOfNextWeekDate = new Date();
  dayOfNextWeekDate.setDate(dayOfNextWeekDate.getDate() - 7);
  const dayOfNextWeekString = dayOfNextWeekDate.toLocaleDateString().split('.').reverse().join('-');
  return `${dayOfNextWeekString},${todayString}`;
};

const lastYear = () => {
  const todayDate = new Date();
  const todayString = todayDate.toLocaleDateString().split('.').reverse().join('-');
  const firstDayOfThisYearDate = new Date(new Date().getFullYear(), 0, 1);
  const firstDayOfThisYearString = firstDayOfThisYearDate.toLocaleDateString().split('.').reverse().join('-');
  return `${firstDayOfThisYearString},${todayString}`;
};

const year2020 = () => {
  const firstDayOfPreviosYearDate = new Date(new Date().getFullYear() - 1, 0, 1);
  const firstDayOfPreviosYearString = firstDayOfPreviosYearDate.toLocaleDateString().split('.').reverse().join('-');
  const lastDayOfPreviosYearDate = new Date(new Date().getFullYear() - 1, 12, 31);
  const lastDayOfPreviosYearString = lastDayOfPreviosYearDate.toLocaleDateString().split('.').reverse().join('-');
  return `${firstDayOfPreviosYearString},${lastDayOfPreviosYearString}`;
};

const allTime = () => {
  const todayDate = new Date();
  const todayString = todayDate.toLocaleDateString().split('.').reverse().join('-');
  const firstDayString = '1960-01-01';
  return `${firstDayString},${todayString}`;
};

const navBarData = {
  releases_data: [
    {
      source: star,
      text: 'Last 30 days',
      dates: last30days(),
    },
    {
      source: fire,
      text: 'This week',
      dates: last7days(),
    },
    {
      source: nextWeek,
      text: 'Next week',
      dates: next7days(),
    },
  ],
  top_data: [
    {
      source: prize,
      text: 'Best of the year',
      dates: lastYear(),
      ordering: ORDERING.RATING,
    },
    {
      source: award,
      text: 'Popular on 2020',
      dates: year2020(),
      ordering: ORDERING.RATING,
    },
    {
      source: crown,
      text: 'All time top 250',
      dates: allTime(),
      ordering: ORDERING.RATING,
    },
  ],
  browse_data: [
    {
      source: joystick,
      text: 'Platforms',
    },
    {
      source: download,
      text: 'Stores',
    },
    {
      source: folder,
      text: 'Collection',
    },
    {
      source: reviews,
      text: 'Reviews',
    },
    {
      source: pacman,
      text: 'Genres',
    },
    {
      source: user,
      text: 'Creators',
    },
    {
      source: tags,
      text: 'Tags',
    },
    {
      source: dev,
      text: 'Developers',
    },
    {
      source: book,
      text: 'Pablished',
    },
  ],
  platforms_data: [
    { source: pc, text: 'PC' },
    {
      source: playstation,
      text: 'PlayStation 4',
    },
    {
      source: xbox,
      text: 'Xbox One',
    },
    {
      source: nintendo,
      text: 'Nintendo Switch',
    },
    {
      source: mac,
      text: 'iOS',
    },
    {
      source: linux,
      text: 'Android',
    },
  ],
  genres_data: [
    {
      source: action,
      text: 'Action',
    },
    {
      source: strategy,
      text: 'Strategy',
    },
    {
      source: rpg,
      text: 'RPG',
    },
    {
      source: shooter,
      text: 'Shooter',
    },
    {
      source: adventure,
      text: 'Adventure',
    },
    {
      source: puzzle,
      text: 'Puzzle',
    },
    {
      source: racing,
      text: 'Racing',
    },
    {
      source: sports,
      text: 'Sports',
    },
  ],
};

export default navBarData;
