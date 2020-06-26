/* PROJECT SETUP */

// JS Object acts as route endpoint
projectData = {};

// Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create instance of an express app
const app = express();

// App Middleware
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use(cors());

// Connect to client-side code
app.use(express.static('website'));

// Create a server
const port = 8000;
const server = app.listen(
    port,
    () => {
        console.log(`Server running on localhost ${port}`);
    }
)

// TEST DATA (delete after)
testData = { "date": "06/22/2020", "temperature": "25", "content": "it's muggy today, got my doors painted"  };
//projectData[0] = testData;

/* ROUTE SETUP */

const dataLog = [];

// Send project data to client-side
app.get('/logdata', (req, res) => {
    res.send(projectData);
    console.log(projectData);
})

// Post project data from client-side
app.post('/logdata', (req, res) => {
    req.body = testData;
    console.log(req.body);

    res.send('POST request processed')
})








/* Planning */

/*

Functionality Breakdown

- Get data from the external API
- Via a GET route, grab the JS object (ersatz DB/API endpoint)


*/