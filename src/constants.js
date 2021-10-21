const API_KEY = 'afe469c2dcb849cf9363e5db763c991c';
const PAGE_SIZES = [5, 10, 20];
const DEFAULT_CURRENT_PAGE = 1;
const ORDERING = ['date_added', 'name', 'release_date', 'popularity', 'average_rating'];
const PLATFORMS = [
  'pc',
  'playstation',
  'xbox',
  'iOS',
  'Android',
  'Apple_Macintosh',
  'Linux',
  'Nintendo',
  'Atari',
  'Commodore',
  'SEGA',
  '3DO',
  'Neo_Geo',
  'Web',
];
const RELEASE_DATE = ['2020-2021', '2010-2019', '2000-2009', '1990-1999', '1980-1989', '1970-1979', '1960-1969'];
const BUTTON_SIZES = { SMALL: 'small', MEDIUM: 'medium', BIG: 'big' };

export { API_KEY, PAGE_SIZES, DEFAULT_CURRENT_PAGE, ORDERING, PLATFORMS, RELEASE_DATE, BUTTON_SIZES };
