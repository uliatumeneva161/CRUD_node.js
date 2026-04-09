import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

export const navigation=()=>{ 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    console.log('dirname ' + __dirname)
    console.log('IMU ' + import.meta.url)
    console.log('DN '+ fileURLToPath(import.meta.url))
    const app = express();
    const PORT = 3000;

    // Настройка шаблонизатора EJS
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); // Когда пользователь отправляет форму, 
    // браузер кодирует данные особым способом.express.urlencoded()
    // расшифровывает их, чтобы вы могли получить req.body.name
    
    app.use(express.static(path.join(__dirname, 'public'))); //если в папке public лежит style.css, 
    //то файл будет доступен по адресу http://localhost:3000/style.css

    // Данные для страниц
    const pages = {
        '/': { title: 'Главная', heading: 'Добро пожаловать!' },
        '/about': { title: 'О нас', heading: 'О нашей компании' }
    };

    // Динамическая обработка маршрутов
    app.get(['/', '/about'], (req, res) => {
        const page = pages[req.path];
        if (page) {
            res.render('page', { 
                title: page.title, 
                heading: page.heading,
                path: req.path 
            });
        } else {
            res.status(404).render('404', { title: '404' });
        }
    });

    app.listen(PORT, () => {
        console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
}



