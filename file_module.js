import fs from 'fs';

export const funcModule = () => { 

    fs.readFile('text.txt', 'utf-8', (err, data) => { 
        fs.writeFile('text.txt', data, () => { 
            // console.log('записано', data)
        })
    })

    fs.mkdir('julia-create', () => { 
        fs.writeFileSync('./julia-create/papka', 'hello')
        fs.writeFileSync('./julia-create/papka2', 'hello2')
          fs.writeFileSync('./julia-create/papka3', 'hello3')
    })
    fs.rm('./julia-create', { recursive: true, force: true }, () => { 
        // console.log('Папка удалена со всем содержимым')
    })
}



