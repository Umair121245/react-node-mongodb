const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const insertRoute = require('./User/insert');
const loginRoute = require('./User/login');

app.use('/api/insert', insertRoute(User));
app.use('/api/login', loginRoute(User));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});