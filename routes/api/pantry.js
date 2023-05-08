const express = require('express');
const router = express.Router();
const pantryCtrl = require('../../controllers/api/pantry');

// show pantry - GET
router.get('/show', pantryCtrl.showPantry)
// create pantry - POST
router.post('/', pantryCtrl.createPantry)
// edit pantry - not sure, think it may be a PUT...need to double check HTTP verg
router.put('/editPantry', pantryCtrl.editPantry)
// delete pantry - DELETE
router.delete('/deletePantry', pantryCtrl.deletePantry)

module.exports = router;