const app = require("express")();
const http = require("http")
const URL = 'https://us-central1-ssdi-team-mobility.cloudfunctions.net/ITIS-6177-Week06?keyword='
app.get('/', async (req, res) => {
    try {
        const msg = req.query.keyword || req.body.keyword || null;
        if (msg === null) {
            res.send('No keyword sent')
        }
        const response = await http.get(URL + msg);
        res.send(response); 
    } catch (error) {
        res.send(error);
    }

})