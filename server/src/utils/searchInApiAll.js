import axios from "axios";

// esta fumción busca por a todos los pokemon 
const searchInApiAll= async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0";
    let arrayPokemonsApi = [];
    
    await axios
        .get(`${URL}`)
        .then(async (response) => {
            let arrayResultApi = response.data.results;

            let arrayPromises = [];
            arrayResultApi.map((p) => arrayPromises.push(axios.get(p.url)));
            // se obtiene uno por uno los datos de cada pokemon

            await Promise.all(arrayPromises)
            .then((pokemons) => {
                arrayPokemonsApi = pokemons.map((p) => {
                return {
                    id: p.data.id,
                    name: p.data.name,
                    image: p.data.sprites.other.dream_world.front_default, 
                    image2: p.data.sprites.other.home.front_default,
                    hp: p.data.stats[0].base_stat,
                    attack: p.data.stats[1].base_stat,
                    defense: p.data.stats[2].base_stat,
                    speed: p.data.stats[3].base_stat,
                    height: p.data.height,
                    weight: p.data.weight,
                    types: p.data.types.map((t) => {
                        return {
                            name: t.type.name,
                        };
                    }),
                }; 
            });
        })
        .catch((error) => {
            return error;
        });
    })
    .catch((error) => {
        return error;
    });

    return arrayPokemonsApi;
};

export { searchInApiAll };