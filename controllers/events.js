const { events: modelEvents } = require('../models/events');
const allEvents= modelEvents.getAllEvents();

const index = ( req,res )=>{

    res.format({
        html:()=>{
            let html = '<main><ul>';
            allEvents.forEach(({id,title,description,date,maxSeats})=>{
                html+=`
                <li>${id}</li>
                <li>${title}</li>
                <li>${description}</li>
                <li>${date}</li>
                <li>${maxSeats}</li>`;
                
            });
            html += '</ul><main>';
            res.send(hmtl);
        },
        json:()=>{
            res.json(allEvents);
        }
        
    });
};

const show = ( req,res )=>{
     res.send('<h1>Sei nell\'index</h1>')};
    

const store = ( req,res )=>{};

const events = ( req,res )=>{};

module.exports = {
    index,
    store,
    events,
    show
}
