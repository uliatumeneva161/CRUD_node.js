import { add} from './math_utils.js'

console.log('═'.repeat(50));

const args = process.argv.slice(2);
console.log('Аргументы:', args);

if (args.length < 3) {
    console.log('\n Ошибка: Недостаточно аргументов!');
    process.exit(1);
}

const operation = args[0].toLowerCase();
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
    console.log('\nОшибка: Аргументы должны быть числами!');
    process.exit(1);
}

let result;
let symbol;

try {
    switch (operation) {
        case 'add':
        case '+':
            result = add(num1, num2);
            symbol = '+';
            break;
        default:
            console.log(`\n❌ Ошибка: Неизвестная операция "${operation}"`);
            process.exit(1);
    }
    
    console.log('\n' + '═'.repeat(50));
    console.log(`Результат: ${num1} ${symbol} ${num2} = ${result}`);
    console.log('═'.repeat(50) + '\n');
    
} catch (error) {
    console.log(`\nОшибка: ${error.message}`);
    process.exit(1);
}