const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

const DadJokesAPIKey = process.env.API_KEY;
const DadJokesAPIURL = 'https://dad-jokes.p.rapidapi.com/random/joke';


// Midleware to parse JSON body
app.use(express.json());


// GET /random-joke
// API endponit to get a random Dad joke
app.get('/random-joke', async (req, res) => {
    try {
        const response = await axios.get(DadJokesAPIURL, {
            headers: {
                'x-rapidapi-key': DadJokesAPIKey,
                'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
            },
        });

        const randomDadJoke = response.data.body[0].setup + ' ' + response.data.body[0].punchline;
        res.json({randomDadJoke});
    }   catch (error) {
        console.error('Unexpected error encountered in retrieving dad joke', error);
        res.status(500).json({error: 'Unable to retrieve dad joke'});
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

