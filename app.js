const express = require('express');
const axios = require ('axios');

const app = express();
const port = 3000;

const DadJokesAPIKey = 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637';
const DadJokesAPIURL = 'https://dad-jokes.p.rapidapi.com/random/joke';


// Midlewara to parse JSN body
app.use(express.json());


// GET /jokes
// API endponit to get a random Dad joke
app.get('/dad-joke', async (req, res) => {
    try {
        const pesponse = await axios.get(DadJokesAPIURL, {
            headers: {
                'x-rapidapi-key': DadJokesAPIKey,
                'x-rapidapi-host': 'dad-jokes-p.rapidapi.com',
                'useQueryString': true,
            },
        });

        const randomJoke = response.data.body[0].setup + ' ' + response.data.body[0].punchline;
        res.json({ joke: randomJoke });
    }   catch (error) {
        console.error('Unexpected error encountered in retrieving dad joke', error);
        res.status(500).json({error: 'Unable to retrieve dad joke'});
    }
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

