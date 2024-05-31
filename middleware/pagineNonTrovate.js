module.exports= (req,res,next) => {
    res.status(404).format({
        html: () =>{
            res.send('<h1>404 - Pagina non trovata</h1>');
        },
        json: () => {
            res.json({ error: '404 - Pagina non trovata' });
        }
    });
};