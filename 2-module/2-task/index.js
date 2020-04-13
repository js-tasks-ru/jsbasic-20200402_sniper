/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let check = true;
  for (let prop in obj) {
    if (typeof (obj[prop]) === 'undefined' || typeof (obj[prop]) !== '' ) {return false;}
  }
  return check;
}

