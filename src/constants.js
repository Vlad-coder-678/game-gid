const API_KEY = 'afe469c2dcb849cf9363e5db763c991c';
const PAGE_SIZES = [5, 10, 20];
const DEFAULT_CURRENT_PAGE = 1;
const ORDERING = {
  ADDED: { title: 'Date added', value: 'added' },
  NAME: { title: 'Name', value: 'name' },
  RELEASED: { title: 'Release date', value: 'released' },
  RATING: { title: 'Popularity', value: 'rating' },
  METACRITIC: { title: 'Average rating', value: 'metacritic' },
  CREATED: { title: 'created', value: 'created' },
  UPDATED: { title: 'updated', value: 'updated' },
};
const PLATFORMS = {
  ALL: { title: 'All Platforms', value: '' },
  PC: { title: 'PC', value: 'pc' },
  PLAYSTATION: { title: 'PlayStation', value: 'playstation' },
  XBOX: { title: 'Xbox', value: 'xbox' },
  IOS: { title: 'iOS', value: 'ios' },
  Android: { title: 'Android', value: 'android' },
  MAC: { title: 'Apple Macintosh', value: 'mac' },
  LINUX: { title: 'Linux', value: 'linux' },
  NINTENDO: { title: 'Nintendo', value: 'nintendo' },
  ATARI: { title: 'Atari', value: 'atari' },
  COMMODORE: { title: 'Commodore', value: 'commodore' },
  SEGA: { title: 'SEGA', value: 'sega' },
  THREEDO: { title: '3DO', value: '3do' },
  NEO_GEO: { title: 'Neo Geo', value: 'neo_geo' },
  WEB: { title: 'Web', value: 'web' },
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
