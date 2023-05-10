const express = require('express');
const router = express.Router();
const recipeCtrl = require('../../controllers/api/recipes');


// get recipes
router.get('/', recipeCtrl.index)
// create recipes
router.post('/recipeCreate', recipeCtrl.createRecipe)
// delete recipes
router.delete('/deleteRecipe', recipeCtrl.deleteRecipe)




// // create pantry - POST
// router.post('/', pantryCtrl.createPantry)

// // show pantry - GET
// router.get('/showPantry', pantryCtrl.showPantry)

// // get pantry - GET
// router.get('/:id', pantryCtrl.getPantry)

// // edit pantry - not sure, think it may be a PUT...need to double check HTTP verg
// router.put('/:id/editPantry', pantryCtrl.editPantry)

// // delete pantry - DELETE
// router.delete('/deletePantry', pantryCtrl.deletePantry)

module.exports = router;