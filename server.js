const app = require("express")();
const axios = require("axios");
const https = require("https");
const URL = 'https://us-central1-ssdi-team-mobility.cloudfunctions.net/ITIS-6177-Week06?keyword='
app.get('', async (req, res) => {
    try {
        const msg = req.query.keyword || null;
        if (msg === null) {
            res.send('No keyword sent');
            return;
        }
        const response = (await axios.get(URL + msg)).data;
        res.status(200)
        res.send(response); 
    } catch (error) {
        console.log('error', error);
        res.send(error);
    }

});

app.listen(3000, ()=>{
    console.log('Yay! server started');
})