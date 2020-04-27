/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let salary = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].age <= age) { salary = salary + data[i].name + ', ' + data[i].balance + '\n'; }
  }
  salary = salary.trim();
  return salary;
}
