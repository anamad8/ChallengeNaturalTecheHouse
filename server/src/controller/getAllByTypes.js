import { searchInApiAllType } from '../utils/searchInApiAllType.js';

// busca en la API externa todos los pokemon
const getAllByType = async (req, res) => {
    try {
        
        let findPoke = await searchInApiAllType();

        return res.status(200).json({findPoke});

    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ error: error.message });
    }
};

export { getAllByType };