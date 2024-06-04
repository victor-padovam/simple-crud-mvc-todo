const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.use(json());
app.use(express.json());

app.get('/tasks', getAllTasks);
app.post('/tasks', createTask);
app.put('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);
app.post('/register', register);
app.post('/login', login);

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);