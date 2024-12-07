# tarefa-backend
Crie uma aplicação que permita a criação, leitura, atualização e exclusão (CRUD) de tarefas. A API irá gerenciar uma lista de tarefas utilizando o ambiente Node JS.

Testando a API

GET /tasks

Enquanto a lista estiver vazia, será retornado: [].

POST /tasks: Para enviar JSON

JSON para teste:

{ "title": "Comprar ovos", "description": "Ir ao mercado comprar ovos de galinha caipira." }

{ "id": 1, "title": "Comprar ovos", "description": "Ir ao mercado comprar ovos de galinha caipira.", "completed": false }

PUT /tasks/:id: -> Atualiza tarefa

{ "title": "Comprar leite", "completed": true }

DELETE /tasks/:id: -> Exclui uma tarefa.

GET /tasks

Agora, com a lista cheia, os itens aparecerão. 






