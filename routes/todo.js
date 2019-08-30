const { Router } = require('express');
const router = Router();

const Todo = require('../models/todo');

/**
 * Get list tasks
 */
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

/**
 * Create a new task
 */
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
           title: req.body.title,
           done: false
        });

        res.status(201).json({todo});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

/**
 * Update task
 */
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByPk(+req.params.id);
        todo.done = req.body.done;
        await todo.save();
        res.status(200).json({todo});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

/**
 * Delete task
 */
router.delete('/:id', (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;