const Pantry = require('../../models/pantry')

module.exports = {
    createPantry,
    editPantry,
    deletePantry,
    showPantry
}

// show pantry - grab all pantries by user and then show (not specific pantry details page)
async function showPantry (req,res) {
    console.log(req, 'MADE IT TO SHOW Pantry')
    const pantry = await Pantry.find({}).populate('ingredients').exec();
    console.log(pantry, 'PANTRY in SHOW pantry before sending back to UI')
    res.json(pantry)
}


// set a variable to the req.body
// use that variable to create a new pantry document

async function createPantry(req,res) {
    console.log(req, 'MADE IT TO CREATE Pantry')
    try {

    } catch (err) {
        res.status(400).json(err)
    }
}

// grab pantry document by ID from req.body
// update pantry from req.body (findOneAndUpdate?)
// maybe a spread operator with a push
async function editPantry(req,res) {
    console.log('MADE IT TO EDIT Pantry')
    try {

    } catch (err) {
        res.status(400).json(err)
    }
}

// grab pantry document ID from req.body
// findOneAndDelete method?
async function deletePantry(req,res) {
    console.log('MADE IT TO DELETE Pantry')
    try {

    } catch (err) {
        res.status(400).json(err)
    }
}