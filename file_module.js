import fs from 'fs';

export const funcModule = () => { 

    fs.readFile('text.txt', 'utf-8', (err, data) => { 
        fs.writeFile('text.txt', data, () => { 
            console.log('записано', data)
        })
    })

    fs.mkdir('julia-create', () => { 
        fs.writeFileSync('./julia-create/papka', 'hello')
    })

    fs.unlink('./julia-create/papka', () => { 
        fs.rmdir('papka', () => { })
    })
}


