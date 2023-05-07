const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/notes
router.get('/', notesCtrl.index);

// get /api/notes/cart/items/:id
router.get('/:id', notesCtrl.show);

// POST /api/notes/:id
router.post('/notes/:id', notesCtrl.create);


module.exports = router;