const { events: modelEvents } = require('../models/events');
const allEvents= modelEvents.getAllEvents();

const index = ( req,res )=>{
    const { id } = req.query;

    if(id){
        const idEvento = parseInt(id);
        const eventoRichiesto = allEvents.find( film => film.id === idEvento);
        if(eventoRichiesto){
            res.format({
                html: ()=>{
                    const { id, title, description, date, maxSeats} = eventoRichiesto
                let html = '<main><ul>';
                    html += `
                    <li>id: ${id}</li>
                    <li>titolo: ${title}</li>
                    <li>descrizione: ${description}</li>
                    <li>data: ${date}</li>
                    <li>Numero massimo di posti: ${maxSeats}</li>
                    `;
                html += '</ul></main>'; 
                res.send(html); 
            },
            json:()=>{
                if(eventoRichiesto){
                    res.json({
                        ...eventoRichiesto,
                    })
                }
            }
            });
        }else
        {
            res.status(404).send('Evento non trovato');
        }
        
    } else{
        res.format({
            html: () => {
                let html = '<main><ul>';
                allEvents.forEach(({ id, title, description, date, maxSeats }) => {
                    html += `
                    <li>id: ${id}</li>
                    <li>titolo: ${title}</li>
                    <li>descrizione: ${description}</li>
                    <li>data: ${date}</li>
                    <li>Numero massimo di posti: ${maxSeats}</li>
                    `;
                });
                html += '</ul></main>'; 
                res.send(html); 
            },
            json: () => {
                res.json(allEvents);
            }
        });
    }
    
};

const store = ( req,res )=>{};

const events = ( req,res )=>{};

module.exports = {
    index,
    store,
    events,
}
