const path = require('path');
const fs = require('fs');
let eventsDb= require('../db/events.json');
let eventsDbPath= path.join(__dirname, '../db/events.json');

class events {
    id;
    title;
    description;
    date;
    maxSeats;

    constructor(id,title,description,date,maxSeats){
        this.id=id;
        this.title=title;
        this.description=description;
        this.date=date;
        this.maxSeats=maxSeats;
    }

    //fare un metodo statico che legge i dati in un file json
    static getAllEvents(){
        const  json= fs.readFileSync(eventsDbPath, 'utf-8');
        return JSON.parse(json);
    }

    //fare un metodo statico che salva i dati in un file json

    static save(newEvent){
        let events = this.getAllEvents();
    
        const json = JSON.stringify([...events,newEvent]);
        fs.writeFileSync(eventsDbPath,json);
    }
   

}



// Creazione delle istanze degli eventi
const event1 = new events(1, 'Concerto Rock', 'Concerto di musica rock', '2024-06-15', 200);
const event2 = new events(2, 'Festival del Cinema', 'Proiezione di film indipendenti', '2024-07-20', 150);
const event3 = new events(3, 'Conferenza Tech', 'Discussione sulle ultime novità tecnologiche', '2024-08-10', 300);

// Salvataggio degli eventi nel file JSON
events.save(event1);
events.save(event2);
events.save(event3);

console.log(events.getAllEvents());