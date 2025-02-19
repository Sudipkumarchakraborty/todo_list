const express = require('express')
const {Todo} = require("../models")
const { where } = require('sequelize');

exports.createTodo = async (req, res) => {
    try {
        // Check if req.body exists
        if (!req.body || !req.body.task) {
            return res.status(400).json({ message: "Task is required" });
        }
        const { task, status, action } = req.body;
        console.log(req.body)

        try {
            console.log("Todo:" + Todo);
            console.log("Creating new todo");
            const newTodo = await Todo.create({task, status, action});
            console.log(newTodo)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server error", error: error.message });
        }

        res.status(201).json({ message: "Todo created", todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



exports.getAlltodo = async (req , res) => {
    const { alltodo } = req.body;

    try {
        const alltodo = await Todo.findAll(); 

        res.status(200).json(Todo);

    } catch (error) {
        res.status(500).json({error: error.massage})
    }
};


exports.gettodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todo.findByPk(id, {
            where : { id },
        });
    if (!todo) {
        return res.status(404).json({ error: 'todo not found' });
    }

    res.json(todo);
    } catch (error) {
       res.status(500).json({ error: error.massage });
    }
};

exports.updatetodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await todo.findByPk(id);
        if(!todo) {
            return res.status(404).json({ message: 'todo not found' });
        }
        if (title !== undefined) todo.title = title;
        if (Completed !==undefined) todo.completed;

        await todo.save();
        res.json({ massage: 'todo updated successsfully', todo});
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}