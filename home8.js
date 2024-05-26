/**Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

const isNum = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
      console.log(`${i} - это четное число`);
    } else {
      console.log(`${i} - это нечетное число`);
    }
  }
};

// isNum(10);

/**Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr = arr.filter((value) => {
//   return value !== 4 && value !== 5;
// });

// console.log(arr);

/**Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

const newArr = () => {
  let newArr = [];
  for (let i = 0; i < 5; i++) {
    newArr[i] = Math.ceil(Math.random() * 10);
  }
  return newArr;
};

const arr1 = newArr();

const sum = (arr) => {
  let sum = 0;
  arr.forEach((value) => {
    sum += value;
  });
  return sum;
};

const min = (arr) => {
    return Math.min(...arr);
}

const chekThrie = (arr) => {
    return arr.some((value) => (value === 3));
}

console.log(arr1);
console.log(`сумма элементов этого массива = ${sum(arr1)}`);
console.log(`минимальное число = ${min(arr1)}`);
console.log(`${chekThrie(arr1) ? "В этом массиве есть число 3" : "В этом массиве нет числа 3"}`);