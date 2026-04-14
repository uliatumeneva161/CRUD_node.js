/ Путь к файлу с заметками
const notesPath = path.join(__dirname, 'notes.json');

// 1. Функция инициализации - создает пустой массив заметок, если файла нет
function initNotes() {
    // Твой код здесь
    // Подсказка: проверь существует ли файл через fs.existsSync()
    // Если нет - создай через fs.writeFileSync() с пустым массивом '[]'
}

// 2. Добавление заметки
function addNote(title, content) {
    // Твой код здесь
    // 1. Прочитать существующие заметки (fs.readFileSync)
    // 2. Распарсить JSON (JSON.parse)
    // 3. Добавить новую заметку с id (Date.now()) и датой создания
    // 4. Записать обратно в файл
}

// 3. Просмотр всех заметок
function listNotes() {
    // Твой код здесь
    // Прочитать и красиво вывести в консоль
}

// 4. Удаление заметки по id
function deleteNote(id) {
    // Твой код здесь
}

// Обработка аргументов командной строки
const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

initNotes();

switch(command) {
    case 'add':
        addNote(arg1, arg2);
        break;
    case 'list':
        listNotes();
        break;
    case 'delete':
        deleteNote(arg1);
        break;
    default:
        console.log('Используйте: node notes-manager.js add "Заголовок" "Содержание"');
}