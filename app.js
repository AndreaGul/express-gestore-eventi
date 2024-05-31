const express = require('express');
const app = express();
const port = 3000;
const eventsRouter= require("./routers/events")

const pagineNonTrovate = require("./middleware/pagineNonTrovate");
const serverError = require("./middleware/serverError");

app.get('/', ( req,res )=>{
    res.send('<h1>Benvenuto</h1>');
});

app.use("/events", eventsRouter);

app.use(pagineNonTrovate);

app.use(serverError);

app.listen(port,()=>{
    console.log(`Server avviato su http://localhost:${port}`);
})