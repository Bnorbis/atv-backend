const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tarefas = [];
let idAtual = 1;

app.get('/tasks', (req, res) => {
    res.json(tarefas);
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ erro: "Título e descrição são obrigatórios." });
    }

    const novaTarefa = {
        id: idAtual++,
        title,
        description,
        completed: false,
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, completed } = req.body;

    const tarefa = tarefas.find((t) => t.id === id);

    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    if (title) tarefa.title = title;
    if (description) tarefa.description = description;
    if (typeof completed === 'boolean') tarefa.completed = completed;

    res.json(tarefa);
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    tarefas.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
