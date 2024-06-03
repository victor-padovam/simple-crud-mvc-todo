// src/routes.js
import express from 'express';

const app = express();

// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello World!');
});

export { app };
