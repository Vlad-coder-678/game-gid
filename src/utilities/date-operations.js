import { DEFAULT_START_DATE } from "constants/apiFilters";

/**
 * @description Возвращает переданную дату в формате YYYY-MM-DD
 *
 * @returns {string}
 */
const getFormattedDate = (date) => date.toLocaleDateString().split(".").reverse().join("-");

/**
 * @description Возвращает период времени в формате "YYYY-MM-DD,YYYY-MM-DD", в зависимости от переданных дат
 * Используется для передачи в параметры апи в качестве даты релиза
 *
 * @returns {string}
 */
const getFormattedTimePeriod = ({ startDate = DEFAULT_START_DATE, endDate = new Date() }) => {
  // eslint-disable-next-line no-console
  console.log("startDate", startDate);
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);

  return `${formattedStartDate},${formattedEndDate}`;
};

const getFormattedTodayDate = () => getFormattedDate(new Date());

const getLast7DaysPeriod = () => {
  const today = new Date();

  return getFormattedTimePeriod({ startDate: new Date(today.setDate(today.getDate() - 7)) });
};

const getNext7DaysPeriod = () => {
  const today = new Date();

  return getFormattedTimePeriod({ startDate: today, endDate: new Date(today.setDate(today.getDate() + 7)) });
};

const getLast30DaysPeriod = () => {
  const today = new Date();

  return getFormattedTimePeriod({ startDate: new Date(today.setMonth(today.getMonth() - 1)) });
};

const getLast365DaysPeriod = () => getFormattedTimePeriod({ startDate: new Date(new Date().getFullYear(), 0, 1) });

const getLastYearPeriod = () => getFormattedTimePeriod({
  startDate: new Date(new Date().getFullYear() - 1, 0, 1),
  endDate: new Date(new Date().getFullYear() - 1, 12, 31),
});

const getAllTimePeriod = () => getFormattedTimePeriod({ startDate: DEFAULT_START_DATE });

export {
  getAllTimePeriod,
  getFormattedTodayDate,
  getLast7DaysPeriod,
  getLast30DaysPeriod,
  getLast365DaysPeriod,
  getLastYearPeriod,
  getNext7DaysPeriod,
};
