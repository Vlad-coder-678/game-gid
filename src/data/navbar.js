// releases
import fire from "assets/svg/releases/fire.svg";
import nextWeek from "assets/svg/releases/next-week.svg";
import star from "assets/svg/releases/star.svg";
// top
import award from "assets/svg/top/award.svg";
import crown from "assets/svg/top/crown.svg";
import prize from "assets/svg/top/prize.svg";
// browse
import book from "assets/svg/browse/book.svg";
import dev from "assets/svg/browse/dev.svg";
import download from "assets/svg/browse/download.svg";
import folder from "assets/svg/browse/folder.svg";
import joystick from "assets/svg/browse/joystick.svg";
import pacman from "assets/svg/browse/pacman.svg";
import reviews from "assets/svg/browse/reviews.svg";
import tags from "assets/svg/browse/tags.svg";
import user from "assets/svg/browse/user.svg";
// platforms
import linux from "assets/svg/platforms/linux.svg";
import mac from "assets/svg/platforms/mac.svg";
import nintendo from "assets/svg/platforms/nintendo.svg";
import pc from "assets/svg/platforms/pc.svg";
import playstation from "assets/svg/platforms/playstation.svg";
import xbox from "assets/svg/platforms/xbox.svg";
// genres
import action from "assets/png/genres/action.png";
import adventure from "assets/png/genres/adventure.png";
import puzzle from "assets/png/genres/puzzle.png";
import racing from "assets/png/genres/racing.png";
import rpg from "assets/png/genres/rpg.png";
import shooter from "assets/png/genres/shooter.png";
import sports from "assets/png/genres/sports.png";
import strategy from "assets/png/genres/strategy.png";
// utilities
import {
  getAllTimePeriod,
  getLast30DaysPeriod,
  getLast365DaysPeriod,
  getLast7DaysPeriod,
  getLastYearPeriod,
  getNext7DaysPeriod,
} from "utilities/date-operations";

const navBarData = {
  releases_data: [
    {
      source: star,
      title: "Last 30 days",
      dates: getLast30DaysPeriod(),
    },
    {
      source: fire,
      title: "This week",
      dates: getLast7DaysPeriod(),
    },
    {
      source: nextWeek,
      title: "Next week",
      dates: getNext7DaysPeriod(),
    },
  ],
  top_data: [
    {
      source: prize,
      title: "Best of the year",
      dates: getLast365DaysPeriod(),
    },
    {
      source: award,
      title: "Popular on 2022",
      dates: getLastYearPeriod(),
    },
    {
      source: crown,
      title: "All time top 250",
      dates: getAllTimePeriod(),
    },
  ],
  browse_data: [
    {
      source: joystick,
      text: "Platforms",
    },
    {
      source: download,
      text: "Stores",
    },
    {
      source: folder,
      text: "Collection",
    },
    {
      source: reviews,
      text: "Reviews",
    },
    {
      source: pacman,
      text: "Genres",
    },
    {
      source: user,
      text: "Creators",
    },
    {
      source: tags,
      text: "Tags",
    },
    {
      source: dev,
      text: "Developers",
    },
    {
      source: book,
      text: "Pablished",
    },
  ],
  platforms_data: [
    {
      source: pc,
      text: "PC",
    },
    {
      source: playstation,
      text: "PlayStation 4",
    },
    {
      source: xbox,
      text: "Xbox One",
    },
    {
      source: nintendo,
      text: "Nintendo Switch",
    },
    {
      source: mac,
      text: "iOS",
    },
    {
      source: linux,
      text: "Android",
    },
  ],
  genres_data: [
    {
      source: action,
      text: "Action",
    },
    {
      source: strategy,
      text: "Strategy",
    },
    {
      source: rpg,
      text: "RPG",
    },
    {
      source: shooter,
      text: "Shooter",
    },
    {
      source: adventure,
      text: "Adventure",
    },
    {
      source: puzzle,
      text: "Puzzle",
    },
    {
      source: racing,
      text: "Racing",
    },
    {
      source: sports,
      text: "Sports",
    },
  ],
};

export default navBarData;
