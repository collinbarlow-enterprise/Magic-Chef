const express = require('express');
const router = express.Router();
const recipeCtrl = require('../../controllers/api/recipes');

const ensureLoggedIn = require('../../config/ensureLoggedIn')

// get recipes
router.get('/', ensureLoggedIn, recipeCtrl.index)
// get specific recipe
router.get('/findRecipe/:id', ensureLoggedIn, recipeCtrl.findSpecificRecipe)
// create recipes
router.post('/recipeCreate', ensureLoggedIn, recipeCtrl.createRecipe)
// delete recipes
router.delete('/deleteRecipe', ensureLoggedIn, recipeCtrl.deleteRecipe)
// edit document to make note
router.put('/findRecipe/:id/note', ensureLoggedIn, recipeCtrl.addNote)
// grab document and remove note - delete?
router.put('/findRecipe/:id/removeNote', ensureLoggedIn, recipeCtrl.removeNote)

module.exports = router;