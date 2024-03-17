import { searchInApiAll } from '../utils/searchInApiAll.js';

// busca en la API externa todos los pokemon
const getAllPokemon = async (req, res) => {
    try {
        
        let findPoke = await searchInApiAll();

        return res.status(200).json({findPoke});

    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ error: error.message });
    }
};

export { getAllPokemon };