/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
// Преобразуем в массив
  let arrayCamelsize = str.split('');
  arrayCamelsize.forEach((item, index, arrayCamelsize) => {
    // Убираем дефис, если он первым символом, и уводим в верхний регистр буквы
    if (item === '-') {
      arrayCamelsize[index + 1] = arrayCamelsize[index + 1].toUpperCase();
      arrayCamelsize.splice(index, 1);
    }
  });
  // Собираем из массива строку обратно
  return arrayCamelsize.join('');
}
