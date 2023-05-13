const Pantry = require('../../models/pantry')
// code to access openai
const openai = require('openai');
openai.apiKey = process.env.OPENAI_API_KEY


module.exports = {
    createPantry,
    editPantry,
    deletePantry,
    showPantry,
    getPantry
}

// show pantry - grab all pantries by user and then show (not specific pantry details page)
async function showPantry (req,res) {
    // console.log(req, 'MADE IT TO SHOW Pantry CONTROLLER')
    const pantry = await Pantry.find({}).populate('ingredients').exec();
    // console.log(pantry, 'PANTRY in SHOW pantry before sending back to UI')
    res.json(pantry)
}
async function getPantry(req, res) {
    console.log('made it inside GETPANTRY CONTROLLER')
    try {
        const pantry = await Pantry.findById(req.params.id);
        res.json(pantry);
    } catch (error) {
        res.status(400).json(err)
    }
}

// set a variable to the req.body
// use that variable to create a new pantry document
// may need to split the array into separate strings here...could probably also do it in the views


async function createPantry(req,res) {
    // console.log(req, 'MADE IT TO CREATE Pantry CONTROLLER')
    try {
        // console.log(req.body, 'MADE it inside createPantry')
        req.body.user = req.user._id;
        const ingredients = req.body.ingredients.split(',')
        const newPantry = await Pantry.create({ingredients, user: req.body.user});
        // console.log(newPantry, 'newPantry in controller before sending back')
        res.json(newPantry)
    } catch (err) {
        if (err.name === 'ValidationError') {
          console.log(err.errors);
        }
        res.status(400).json(err);
      }
}

// grab pantry document by ID from req.body
// update pantry from req.body (findOneAndUpdate?)
// maybe a spread operator with a push
async function editPantry(req, res) {
    // console.log(req, 'MADE IT TO EDIT Pantry CONTROLLER')
    try {
        id = req.params.id;
        ingredients = req.body.newPantry.ingredients.split(',');
        // console.log(req.params, 'req.params in EDIT PANTRY')
        // console.log(id, 'ID in EDIT PANTRY')
        // console.log(req.body, 'req.body in EDIT PANTRY')
        // console.log(req.body.ingredients, 'req.body.INGRED in EDIT PANTRY')
        // console.log(ingredients, 'INGREDIENTS in EDIT PANTRY')
        const editedPantry = await Pantry.findByIdAndUpdate(id, {ingredients}, {
            new: true,
        });
        // console.log(editedPantry, 'editedPantry in editPantry CONTROLLER')
        res.json(editedPantry)
    } catch (err) {
        res.status(400).json(err)
    }
}

// grab pantry document ID from req.body
// findOneAndDelete method?
async function deletePantry(req,res) {
    // console.log(req, 'MADE IT TO DELETE Pantry')
    try {
        const pantry = await Pantry.findByIdAndDelete(req.body._id);
        res.json({success: true, pantry})
    } catch (err) {
        res.status(400).json(err)
    }
}