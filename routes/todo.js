const { Router } = require('express');
const router = Router();

/**
 * Get list tasks
 */
router.get('/', (req, res) => {
    res.send({
        id: 1
    });
});

/**
 * Create a new task
 */
router.post('/', (req, res) => {

});

/**
 * Update task
 */
router.put('/:id', (req, res) => {

});

/**
 * Delete task
 */
router.delete('/:id', (req, res) => {

});

module.exports = router;