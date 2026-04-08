import express from 'express';
import mongoose from 'mongoose';
import router from './router.js'
import {funcModule} from './file_module.js';
import { navigation } from './Navigation.js'

funcModule()
navigation()
const DB_URL = 'mongodb+srv://julia2:julia2@new-julia.a8mlkvs.mongodb.net/?appName=new-julia';
const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router)

async function startApp() { 
    try {
        await mongoose.connect(DB_URL);
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port}`);
        });
    } catch (e) { 
        console.log('Ошибка подключения к MongoDB:', e);
    }
}

startApp();