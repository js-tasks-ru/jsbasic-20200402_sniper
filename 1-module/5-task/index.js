/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

function truncate(str, maxlength) {
  // Символ для обрезания строки
  let trunc = "…";

  //  Проверить, что строка не превосходит максимальный размер (меньше или равна)
  if (str.length <= maxlength) {
    return str;
  } else {
    let someStr = str.slice(0, maxlength - trunc.length);
    someStr = someStr + trunc;
    return someStr;
  }
}
