let pokemon = ['Pikachu', 'Bulbasoar'];

module.exports = {
  getPokemon: (req, res, next) => {
    res.status(200).send(pokemon);
  },
  deleteAll: (req, res) => {
    pokemon = [];
    // res.status(200).send();
    res.sendStatus(200);
  },
  deleteOne: (req, res) => {
    let index = pokemon.indexOf(req.params.name);
    pokemon.splice(index, 1);
    res.status(200).send(pokemon);
  },
  newPokemon: (req, res) => {
    pokemon.push(req.body.name);
    res.status(200).send(pokemon);
  },
  changePokemon: (req, res) => {
    let index = pokemon.indexOf(req.params.name);
    pokemon.splice(index, 1, req.body.name);
    res.status(200).send(pokemon);
  }
}