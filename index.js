// index.js
import { app } from './src/routes.js';

// This is the function that Vercel will call to handle incoming requests
export default (req, res) => {
    app(req, res);
};
