const express = require("express");
var cors = require('cors')
const { json } = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 8080;
const request = require("request");


app.use(cors())

app.get("/", async (req, res) => {
    try {
        const apiUrl = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos";
        request(req.query.url,{
            'auth': {
                'user': 'phung5u',
                'pass': 'upbwxw66',
            },
        }, function (error, response, body) {            
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); 
            res.send(JSON.parse(body))// Print the HTML for the Google homepage.
        });
    } catch (error) {   
        console.log(error.message)
    }
})


app.listen(PORT, () => { console.log("app is listening on http://localhost:8080 ...") })