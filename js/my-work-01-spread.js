/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([1, 2, 3], [2, 2, 3]);
// console.log(numbers);

const numbers = [...[1, 2, 3, 3, 4]];
console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

const minTemp = Math.min(...temps);
const maxTemp = Math.max(...temps);
console.log(
    `Маємо найменшу температуру - ${minTemp} та найбільшу температуру ${maxTemp}`,
);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9, 333];

// const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

console.log(allTemps);

const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
};

const entries = Object.entries(hotel);
console.log(entries);
for (entrie of entries) {
    const key = entrie[0];
    const value = entrie[1];
    console.log(`${key}: ${value}`);
}

const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
};

let totalSumm = 0;
const valueOfGoods = Object.values(goods);
for (const value of valueOfGoods) {
    totalSumm += value;
}
console.log(`Загальна сума значень обьекта goods = ${totalSumm}`);

const add = function (value, ...args) {
    console.log(value); // первый аргумент
    console.log(args); // массив всех остальных аргументов
};

add(10, 1, 2, 3);
add(15, 1, 2, 3, 4, 5);

const hotelNew = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
};

// Объявим переменные и присвоим им значения из объекта

const { name, stars, sortir = true } = hotelNew;
console.log(stars, name, sortir);

// Деструктуризація массиву

const temperatyres = [56, 77, 12];
const [, , lastTemperatyre] = temperatyres;
console.log(lastTemperatyre);
// console.log(oldTemperatyres);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
