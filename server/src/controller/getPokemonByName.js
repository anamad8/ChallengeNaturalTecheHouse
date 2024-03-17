import { searchInApiByName } from '../utils/searchInApiByName.js';

// busca en la API externa por nombre de pokemon
const getPokemonByName = async (req, res) => {
    try {
        const { name } = req.query;
        console.log(name);
        
        let findPoke = await searchInApiByName(name);

        return res.status(200).json({findPoke});

    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ error: error.message });
    }
};


export { getPokemonByName };