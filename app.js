const express = require('express');
const app = express();
const port = 3000;
const eventsRouter= require("./routers/events")

app.get('/', ( req,res )=>{
    res.send('<h1>Benvenuto</h1>');
});

app.use("/events", eventsRouter);

app.listen(port,()=>{
    console.log(`Server avviato su http://localhost:${port}`);
})