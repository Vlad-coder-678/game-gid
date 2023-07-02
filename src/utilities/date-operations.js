/**
 * @description Возвращает текущую дату в формате YYYY-MM-DD
 * Используется для передачи в параметры апи в качестве даты релиза
 *
 * @returns {string}
 */
const getTodayDate = () => {
  const todayDate = new Date();

  return todayDate.toLocaleDateString().split(".").reverse().join("-");
};

export default getTodayDate;
