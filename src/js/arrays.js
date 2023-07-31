/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 Это используется для удобного быстрого перебора массива, она ничего не возвращает, просто обрабатывает коллбеком каждый элемент массива,
  фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'm', 'p', 's'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function forEach(arr, callback) {
  for (let index = 0; index < arr.length; index += 1) {
    const item = arr[index];

    callback(item);
  }
}

function consoleLogCallback(item) {
  console.log(item);
}

forEach(nums, consoleLogCallback);
forEach(letters, consoleLogCallback);

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который получается в результате вычисления callback для каждого элемента.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function map(arr, callback) {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const item = arr[index];
    const transformedItem = callback(item, index, arr);
    result.push(transformedItem);
  }

  return result;
}

function multiplication(item) {
  return item * 5;
}

const mappedArray = map(nums, multiplication);
console.log(mappedArray);

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который включает в себя элементы только те, для которых callback вернул true.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
const goods = [
  {
    name: 'Apple',
    price: 20,
  },
  {
    name: 'Peach',
    price: 22,
  },
  {
    name: 'Melon',
    price: 50,
  },
  {
    name: 'Grapes',
    price: 30,
  },
];

function filter(item, index, arr) {
  return item.price >= 500 && item.price <= 700;
}

const result = goods.filter(filter);
console.log(result);

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива, 3 аргумент изначальный вариант
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Это используется для удобного быстрого перебора массива. Функция должна результат.
 Функция возвращает результат вычислений. В callback передаем 4 аргумента.
 Первый это предыдущий элемент(для первой итерации как раз используется initialValue), второй это текущий элемент перебора, 3 индекс и 4 сам массив.
 Смотрите на пример в example.js
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function callback(acumulator, currentGoods) {
  if (currentGoods.price >= 30 && currentGoods.price <= 40) {
    acumulator.push(currentGoods.name);
  }
  return acumulator;
}

const goodsName = goods.reduce(callback, []);
console.log(goodsName);

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет true, то вся функция возвращает true/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
const resultPrice = phones.some(function (item) {
  return item.price >= 1700;
});
console.log(resultPrice);

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет false, то вся функция возвращает false/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
const resultPricesoftDrink = softDrink.every(function (item) {
  return item.price < 1700;
});
console.log(resultPricesoftDrink);

// Эту часть не удаляем, она важна для проверки результата
module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
};
