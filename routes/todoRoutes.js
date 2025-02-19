const express = require('express');
const router = express.Router();
const { createTodo, getAlltodo, gettodoById, updatetodo } = require('../controller/todocontroller');

router.post('/todo', createTodo);

router.get('/todo',getAlltodo);

router.get('/todo/:id', gettodoById);

router.put('/todo/:id',updatetodo);

module.exports = router;