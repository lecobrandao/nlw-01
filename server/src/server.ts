import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

// Rota: endereço
// Recurso: entidade que estamos acessando

// GET: buscar informações do backend
// POST: Criar uma nova informação no backend
// PUT: Atualizar uma informação existente no backend
// DELETE: Remover uma informação do backend

// Request param: Parâmetros que vem na própria rota que identificam um recurso
// Query param: Parâmetros para filtros/paginação/etc
// Request body: Parâmetros para criação e atualização de informações

// select * from users where name = 'Alex'
// knex('users').where('name', 'Alex').select('*')

/*
const users = [
    'Alex', // 0
    'Michele', // 1
    'João' // 2
];

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // JSON
    return response.json(users);
});

app.get('/searchusers', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
})
*/

app.listen(3333);