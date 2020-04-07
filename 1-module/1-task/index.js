/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // Решение скопипащено с хабра. В тестах надо добавлять проверку на infinity при n >170
  let result = 1;
  while (n) {
    result *= n--;
  }
  return result;
}
