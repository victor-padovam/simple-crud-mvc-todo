const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const { getAllTasks, createTask, updateTask, deleteTask } = require('./controllers/task-controller');
const { register, login } = require('./controllers/auth-controller');

const app = express();
const allowedOrigins = ['http://localhost:3000'];

// const options = {
//   origin: allowedOrigins
// };

app.use(json());
// app.use(cors(options));

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

module.exports = { app };
