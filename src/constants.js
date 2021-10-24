const API_KEY = 'afe469c2dcb849cf9363e5db763c991c';
const PAGE_SIZES = [5, 10, 20];
const DEFAULT_CURRENT_PAGE = 1;
const ORDERING = {
  POPULARITY_TOP_TO_BOTTOM: { title: 'Popularity(best)', value: '-added' },
  POPULARITY_BOTTOM_TO_TOP: { title: 'Popularity(worst)', value: 'added' },
  RATING_TOP_TO_BOTTOM: { title: 'Rating(best)', value: '-rating' },
  RATING_BOTTOM_TO_TOP: { title: 'Rating(worst)', value: 'rating' },
  RELEASED_TOP_TO_BOTTOM: { title: 'Release date(newest)', value: '-released' },
  RELEASED_BOTTOM_TO_TOP: { title: 'Release date(oldest)', value: 'released' },
  NAME: { title: 'Name', value: '-name' },
  METACRITIC: { title: 'Average rating', value: 'metacritic' },
};
const PLATFORMS = {
  ALL: { title: 'All Platforms', value: '' },
  PC: { title: 'PC', value: '4' },
  PLAYSTATION: { title: 'PlayStation', value: '2' },
  XBOX: { title: 'Xbox', value: '1' },
  IOS: { title: 'iOS', value: '5' },
  Android: { title: 'Android', value: '3' },
  LINUX: { title: 'Linux', value: '6' },
  NINTENDO: { title: 'Nintendo', value: '7' },
};
const GENRES = {
  ALL: { title: 'All', value: '' },
  ACTIONS: { title: 'Action', value: 'action' },
  STRATEGY: { title: 'Strstegy', value: 'strstegy' },
  RPG: { title: 'RPG', value: 'rpg' },
  SHOOTER: { title: 'Shooter', value: 'shooter' },
  ADVENTURE: { title: 'Adventure', value: 'adventure' },
  PUZZLE: { title: 'Puzzle', value: 'puzzle' },
  RACING: { title: 'Racing', value: 'racing' },
  SPORTS: { title: 'Sports', value: 'sports' },
};
const todayDate = new Date();
const todayString = todayDate.toLocaleDateString().split('.').reverse().join('-');

const RELEASE_DATE = {
  ALL_TIME: { title: 'All Time', value: '' },
  PERIOD_2020_2021: { title: '2020-2021', value: `2020-01-01,${todayString}` },
  PERIOD_2010_2019: { title: '2010-2019', value: '2010-01-01,2019-12-31' },
  PERIOD_2000_2009: { title: '2000-2009', value: '2000-01-01,2009-12-31' },
  PERIOD_1990_1999: { title: '1990-1999', value: '1990-01-01,1999-12-31' },
  PERIOD_1980_1989: { title: '1980-1989', value: '1980-01-01,1989-12-31' },
  PERIOD_1970_1979: { title: '1970-1979', value: '1970-01-01,1979-12-31' },
  PERIOD_1960_1969: { title: '1960-1969', value: '1960-01-01,1969-12-31' },
};
const BUTTON_SIZES = { SMALL: 'small', MEDIUM: 'medium', BIG: 'big' };

export { API_KEY, PAGE_SIZES, DEFAULT_CURRENT_PAGE, ORDERING, PLATFORMS, RELEASE_DATE, BUTTON_SIZES, GENRES };
