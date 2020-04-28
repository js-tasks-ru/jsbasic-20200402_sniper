/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  // Выдергиваем все строки из таблицы
  const tableRows = table.querySelectorAll('tbody tr');
  for (let row of tableRows) {
    // age
    if (row.querySelector('td:nth-child(2)').textContent < '18') {
      row.style.textDecoration = 'line-through';
    }
    // sex
    const sex = row.querySelector('td:nth-child(3)').textContent;
    if (sex === 'm') { row.classList.add('male');}
    else {row.classList.add('female');}
    // available
    const availableStatus = row.querySelector('td:nth-child(4)').dataset;
    switch (availableStatus.available) {
    case ('true'):
      row.classList.add('available');
      break;
    case ('false'):
      row.classList.add('unavailable');
      break;
    default:
      row.setAttribute('hidden', '');
    }
  }
}
