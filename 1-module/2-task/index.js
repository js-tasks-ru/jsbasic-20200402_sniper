/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function isValid(name) {
  let nameCheck = true;

  // Проверить, что имя содержит больше 4 символов
  if (name.length < 4) {
    nameCheck = false;
    return nameCheck;
  } else {
    // Проверить, что символы не содержат пробел
    for (let char of name) {
      if (char === ' ') {
        nameCheck = false;
      }
    }
  }
  return nameCheck;
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
