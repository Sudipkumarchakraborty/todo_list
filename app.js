const express = require('express');
const sequelize = require('./config/db.js');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes.js');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use('/api', todoRoutes);

const PORT=3002;
app.listen(PORT ,() =>{
console.log(`Server running on https://localhost:${PORT} `);
});

module.express = app;