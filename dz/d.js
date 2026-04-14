import http from 'http';      // HTTP сервер
import fs from 'fs';          // Работа с файлами
import path from 'path';      // Работа с путями
import os from 'os';          // Информация о системе
import url from 'url';        // Парсинг URL

import { add } from './math_utils.js'

const a = add(2, 7)
console.log(a)
console.log('═'.repeat(50));
console.log(process.argv);

// node-practice/math-utils.js

// TODO: Создай и экспортируй следующие функции:

// 1. add(a, b) - сложение
// 2. subtract(a, b) - вычитание
// 3. multiply(a, b) - умножение
// 4. divide(a, b) - деление (проверять деление на ноль!)
// 5. power(base, exponent) - возведение в степень
// 6. circleArea(radius) - площадь круга (используй Math.PI)
// 7. PRIVATE_VARIABLE = "Я невидима снаружи" (не экспортировать!)

// Экспортируй функции через именованный экспорт

// Также создай экспорт по умолчанию - объект со всеми функциями