import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

  const filePath = fileURLToPath(import.meta.url)
const thatFolderPath = path.dirname(filePath)
    const newFolderPath = path.join(thatFolderPath, 'new-folder')
      const newFilePath = path.join(newFolderPath, 'new-file.json')
function initDatabase() {
    try {
      
        if (!fs.existsSync(newFolderPath)) {
            fs.mkdirSync(newFolderPath, { recursive: true })
            //  console.log('folder создана')
        } else {
            // console.log('folder уже есть')
        }
        
  

        if (!fs.existsSync(newFilePath)) {
            
            fs.writeFileSync(newFilePath, '[]')
            // console.log('nice file')
        } else {
            // console.log('file уже есть')
        }
            
         
    } catch(e) {
        console.log('bad', e)
    }
    return newFolderPath, newFilePath
}
function addUser(user) { 
    const dateNow = Date.now()
    const newDate = new Date(dateNow)
    const editUser = {
        ...user,
        id: dateNow,
        createdAt: newDate.toLocaleString('ru-RU')
    }
    const read = fs.readFileSync(newFilePath, 'utf-8')
    const parseFile = JSON.parse(read)
    parseFile.push(editUser)
    fs.writeFileSync(newFilePath, JSON.stringify(parseFile))
    return editUser
}
function getAll() { 
    if (!fs.existsSync(newFilePath)) {
        return [];
    }
    const readFile = fs.readFileSync(newFilePath, 'utf-8')
    // const parseFile = JSON.parse(readFile)
    return JSON.parse(readFile)
}
function getU(id) {
    const users = getAll()
    const userId = users.find(u => u.id === id)

    if (userId) {
        return userId
    } else { 
        throw new Error('not found u id')
    }
}
function updateU(id) { 
    const users = getAll()
    
}
export { initDatabase, addUser, getAll, getU, updateU};
// TODO: Реализуй следующие функции (все СИНХРОННЫЕ):

// 1. initDatabase() 
//    - Проверяет, существует ли файл data/users.json
//    - Если нет - создает папку data/ и файл с пустым массивом

// 2. addUser(user)
//    - Принимает объект пользователя { name, email, age }
//    - Добавляет поля id (Date.now()) и createdAt (новая дата)
//    - Читает существующих пользователей, добавляет нового, сохраняет
//    - Возвращает созданного пользователя

// 3. getAllUsers()
//    - Читает файл и возвращает массив пользователей
//    - Если файла нет - возвращает []

// 4. getUserById(id)
//    - Находит пользователя по id
//    - Возвращает пользователя или null

// 5. updateUser(id, newData)
//    - Обновляет пользователя по id
//    - Возвращает обновленного пользователя или null

// 6. deleteUser(id)
//    - Удаляет пользователя по id
//    - Возвращает true если удален, false если не найден

// 7. getUsersByAge(minAge, maxAge)
//    - Возвращает пользователей в заданном диапазоне возраста

// Протестируй все функции в конце файла