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
    const userId = req.user._id;
    const pantry = await Pantry.find({user: userId}).populate('ingredients').exec();
    res.json(pantry)
}

async function getPantry(req, res) {
    try {
        const pantry = await Pantry.findById(req.params.id);
        res.json(pantry);
    } catch (error) {
        res.status(400).json(err)
    }
}

async function createPantry(req,res) {
    try {
        req.body.user = req.user._id;
        const ingredients = req.body.ingredients.split(',');
        const newPantry = await Pantry.create({ingredients, user: req.user});
        res.json(newPantry);
    } catch (err) {
        res.status(400).json(err);
      }
}

async function editPantry(req, res) {
    try {
        id = req.params.id;
        ingredients = req.body.newPantry.ingredients.split(',');
        const editedPantry = await Pantry.findByIdAndUpdate(id, {ingredients}, {
            new: true,
        });
        res.json(editedPantry);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deletePantry(req,res) {
    try {
        const pantry = await Pantry.findByIdAndDelete(req.body._id);
        res.json({success: true, pantry});
    } catch (err) {
        res.status(400).json(err);
    }
}