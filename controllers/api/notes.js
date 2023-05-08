const Note = require('../../models/note');
const User = require('../../models/user')

module.exports = {
  index,
  create,
    show
};

async function index(req, res) {
try{
    // console.log('index function')
  const notes = await Note.find({}).populate('string').exec();
  res.json(notes)
} catch (err) {
    res.status(400).json(err);
}}

//check the item controller and see if I need an index and a show

async function show(req, res) {
try {
    // console.log('show function')
    const note = await Note.findById(req.params.id);
    res.json(note)
} catch(err) {
    res.status(400).json(err);
}}

async function create(req, res) {
try{
    // console.log('create function')
    const note = await Note.create(req.body);
    res.json(note);
} catch (err) {
    res.status(400).json(err);
}}