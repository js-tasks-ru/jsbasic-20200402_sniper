/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // Очищаем строку и приводим к формату, когда все числа разделены запятой
  str = str.replace(/[^0-9,\.\- ]/g, '')
    .replace(/ /g, ',')
    .replace(/,+/g, ',')
    .replace(/^,|,$/g, '');
  // Разбиваем строку на числа и приводим их к Float
  const nums = str.split(',').map(Number.parseFloat);

  // Находим min/max и возвращаем нужную структуру
  return {
    min: Math.min(...nums),
    max: Math.max(...nums)
  };
}
