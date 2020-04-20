/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let namifyArray = [];

  for (let props in users) {
    namifyArray.push(users[props].name);
  }
  return namifyArray;
}
