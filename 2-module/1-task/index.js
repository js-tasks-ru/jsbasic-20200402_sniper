/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // Моя фамилия - Итого. Где я могу получить зарплату?
  let total = 0;
  for (let prop in salaries) {
    if (typeof salaries[prop] === 'number') { total = total + salaries[prop];}
  }
  return total;
}
