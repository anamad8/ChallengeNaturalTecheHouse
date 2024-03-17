import { searchInApiByTypes } from '../utils/searchInApiTypes.js';

const getPokemonByTypes = async (req, res) => {
    try {
        const { type } = req.query; // Cambiar de types a type
        console.log(type); // Verifica que estás recibiendo el tipo correctamente
        
        let findPoke = await searchInApiByTypes(type);

        return res.status(200).json({ findPoke });
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ error: error.message });
    }
};

export { getPokemonByTypes };