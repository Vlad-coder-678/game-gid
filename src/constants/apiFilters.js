// local imports
import getTodayDate from "../utilities/date-operations";

const PAGE_SIZES = [5, 10, 20];

const DEFAULT_CURRENT_PAGE = 1;

const ORDERING = {
  popularityTopToBottom: { title: "Popularity(best)", value: "-added" },
  popularityBottomToTop: { title: "Popularity(worst)", value: "added" },
  ratingTopToBotttom: { title: "Rating(best)", value: "-rating" },
  ratingBottomToTop: { title: "Rating(worst)", value: "rating" },
  releasedTopToBttom: { title: "Release date(newest)", value: "-released" },
  releasedBottomToTop: { title: "Release date(oldest)", value: "released" },
  name: { title: "Name", value: "-name" },
  metacritic: { title: "Average rating", value: "metacritic" },
};

const PLATFORM_NAMES = {
  all: "All Platforms",
  pc: "PC",
  playStation: "PlayStation",
  xbox: "Xbox",
  ios: "iOS",
  android: "Android",
  linux: "Linux",
  nintendo: "Nintendo",
};

const PLATFORM = {
  [PLATFORM_NAMES.all]: "",
  [PLATFORM_NAMES.pc]: "4",
  [PLATFORM_NAMES.playStation]: "187",
  [PLATFORM_NAMES.xbox]: "1",
  [PLATFORM_NAMES.ios]: "5",
  [PLATFORM_NAMES.android]: "3",
  [PLATFORM_NAMES.linux]: "6",
  [PLATFORM_NAMES.nintendo]: "7",
};

const GENRES = {
  ALL: { title: "All", value: "" },
  ACTIONS: { title: "Action", value: "action" },
  STRATEGY: { title: "Strstegy", value: "strstegy" },
  RPG: { title: "RPG", value: "rpg" },
  SHOOTER: { title: "Shooter", value: "shooter" },
  ADVENTURE: { title: "Adventure", value: "adventure" },
  PUZZLE: { title: "Puzzle", value: "puzzle" },
  RACING: { title: "Racing", value: "racing" },
  SPORTS: { title: "Sports", value: "sports" },
};

const RELEASE_DATE = {
  ALL_TIME: { title: "All Time", value: `1960-01-01,${getTodayDate()}` },
  PERIOD_2020_2021: { title: "2020-2021", value: `2020-01-01,${getTodayDate()}` },
  PERIOD_2010_2019: { title: "2010-2019", value: "2010-01-01,2019-12-31" },
  PERIOD_2000_2009: { title: "2000-2009", value: "2000-01-01,2009-12-31" },
  PERIOD_1990_1999: { title: "1990-1999", value: "1990-01-01,1999-12-31" },
  PERIOD_1980_1989: { title: "1980-1989", value: "1980-01-01,1989-12-31" },
  PERIOD_1970_1979: { title: "1970-1979", value: "1970-01-01,1979-12-31" },
  PERIOD_1960_1969: { title: "1960-1969", value: "1960-01-01,1969-12-31" },
};

export {
  DEFAULT_CURRENT_PAGE,
  GENRES,
  ORDERING,
  PAGE_SIZES,
  PLATFORM_NAMES,
  PLATFORM,
  RELEASE_DATE,
};
