const express = require('express');
const router = express.Router();
const pantryCtrl = require('../../controllers/api/pantry');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// create pantry - POST
router.post('/', ensureLoggedIn, pantryCtrl.createPantry)

// show pantry - GET
router.get('/showPantry', ensureLoggedIn, pantryCtrl.showPantry)

// get pantry - GET
router.get('/:id', ensureLoggedIn, pantryCtrl.getPantry)

// edit pantry - not sure, think it may be a PUT...need to double check HTTP verg
router.put('/:id/editPantry', ensureLoggedIn, pantryCtrl.editPantry)

// delete pantry - DELETE
router.delete('/deletePantry', ensureLoggedIn,pantryCtrl.deletePantry)

module.exports = router;