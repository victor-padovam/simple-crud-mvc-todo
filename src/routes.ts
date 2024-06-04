import express from 'express';
import { json } from 'body-parser';
import { getAllTasks, createTask, updateTask, deleteTask } from './controllers/task-controller';
import { register, login } from './controllers/auth-controller';

const app = express();
app.use(json());

app.use(express.json());

app.get('/tasks', getAllTasks);
app.post('/tasks', createTask);
app.put('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);
app.post('/register', register);
app.post('/login', login);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
