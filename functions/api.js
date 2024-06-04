import { getAllTasks, createTask, updateTask, deleteTask } from './controllers/task-controller';
import { register, login } from './controllers/auth-controller';

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.use(express.json());

// Define your routes
router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.post('/register', register);
router.post('/login', login);

// Use the router
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
