# Dad Jokes API Server

This Node.js server uses Express and Axios to retrieve random Dad jokes from the Dad Jokes API.
<br>
<br>

## Installation

1. Clone the repository:
```
git clone https://github.com/dorcasopatola/dad-jokes-api-server.git
```

2. Install the dependencies:
```
cd dad-jokes-api-server

npm install
```

3. Set up the environmment variables:
    - Create a `.env` file in the root directory.
    - Add your API_KEY to the Dad Jokes URL.
    ```
    API_KEY = YOUR_API_KEY
    ```

4. Start the server:
```
npm start
```

The server runs at `http://localhost:3000`.
<br>
<br>
## Random Dad joke example
```
{
    "randomDadJoke":"Roses are red, violet's are blue When I listen to rock music. My neighbours do too."
}
