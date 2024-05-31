const modelEvents = require('../models/events');

const index = ( req,res )=>{
    res.send('<h1>Sei nell\'index</h1>')};

const store = ( req,res )=>{};

const events = ( req,res )=>{};

module.exports = {
    index,
    store,
    events,
}