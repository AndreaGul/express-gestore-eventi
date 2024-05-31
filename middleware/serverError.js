module.exports = (err,req,res,next) => {
    console.error(err.stack);

    res.stasu(500).format({
        html:()=>{
            res.send('<h1> 500 - Errore interno del server </h1>')
        },
        json:()=>{
            res.json({ error: '500 - Errore interno del server '})
        }
    })
}