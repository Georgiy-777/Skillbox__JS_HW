let objects = [
  { name: 'Василий',
    surname: 'Васильев' },
  { name: 'Иван',
    surname: 'Иванов' },
  { name: 'Пётр',
    surname: 'Петров' }
];

function filterObjValues(objects, key, value) {
  // Нам нужно вернуть новый массив, так что создадим его.
  const result = [];

  // Индексы начинаются с 0. Переменную счётчика лучше объявлять с let.
  // Длина всегда больше последнего индекса, так что он должен быть меньше длины.
  for (let i = 0; i < objects.length; i++) {
    // получаем объект по индексу
    const obj = objects[i];

    // Если значение по key совпадает с value, добавляем объект в массив.
    if (obj[key] === value) result.push(obj);
  }

  // Из функции лучше возвращать значение, а выводить его уже вне функции.
  // Особенно если где-то будет проверятся работа функции и её результат.
  return result;
}

const filteredArray = filterObjValues(objects, 'name', 'Иван'); // Получаем значение.

console.log(filteredArray); // Выводим результат.
export default filterObjValues;
