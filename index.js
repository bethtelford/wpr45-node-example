const express = require('express');
const PORT = 4000;
const controller = require('./controller.js');

const app = express();

app.use(express.json());

app.get('/api/pokemon', controller.getPokemon);

app.delete('/api/pokemon', controller.deleteAll);

app.delete('/api/pokemon/:name', controller.deleteOne)

app.post('/api/pokemon', controller.newPokemon)

app.put('/api/pokemon/:name', controller.changePokemon)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

