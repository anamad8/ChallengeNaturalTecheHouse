import axios from "axios";

// esta fumción busca por tipos de pokemon
const searchInApiByTypes = async (types) => {
    try {
        const URL = `https://pokeapi.co/api/v2/type/${types}`;
        const response = await axios.get(URL);

        // Si la respuesta es exitosa
        if (response.status === 200) {
            const pokemonsOfType = response.data.pokemon;

            // Crear un array para almacenar los detalles de todos los Pokémon del tipo
            let pokemonDetails = [];

            // Iterar sobre cada objeto de pokemon y obtener detalles
            for (let i = 0; i < pokemonsOfType.length; i++) {
                const pokemonData = pokemonsOfType[i].pokemon;
                const pokemonURL = pokemonData.url;

                // Hacer una nueva solicitud para obtener los datos del Pokémon
                const pokemonResponse = await axios.get(pokemonURL);

                // Extraer los datos relevantes del Pokémon
                const pokemon = pokemonResponse.data;
                const result = {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other.dream_world.front_default,
                    image2: pokemon.sprites.other["official-artwork"].front_default,
                    hp: pokemon.stats.find(stat => stat.stat.name === "hp").base_stat,
                    attack: pokemon.stats.find(stat => stat.stat.name === "attack").base_stat,
                    defense: pokemon.stats.find(stat => stat.stat.name === "defense").base_stat,
                    speed: pokemon.stats.find(stat => stat.stat.name === "speed").base_stat,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    types: pokemon.types.map((type) => {
                        return { name: type.type.name };
                    }),
                };

                pokemonDetails.push(result);
            }

            return pokemonDetails;
        } else {
            return null;
        }
        
    } catch (error) {

        throw new Error(error.message);

    }
};

export { searchInApiByTypes };