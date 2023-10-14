const axios = require('axios').default;

exports.getPokemon = async (req, res) => {

    try {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.poke}`);

        if (response.data) {
            const pokemon = response.data;
            let pokeImg = pokemon.sprites.other.home.front_default;
            if (pokemon.id > 904) {
                pokeImg = pokemon.sprites.other['official-artwork'].front_shiny;
            }

            return res.render("pokemon/pokemon", {
                title: pokemon.name,
                pokeName: pokemon.name,
                pokeId: pokemon.id,
                pokeWeight: pokemon.weight,
                pokeImg: pokeImg,
                pokeType: pokemon.types[0].type.name
            });
        } else {
            console.log('Pokemon verileri alınamadı.');
        }

    } catch (error) {
        console.log(error);
    }

}
