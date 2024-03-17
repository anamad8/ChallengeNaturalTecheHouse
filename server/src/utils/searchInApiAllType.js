import axios from "axios";

// Esta función busca todos los tipos de Pokémon
const searchInApiAllType = async () => {
    const URL = "https://pokeapi.co/api/v2/type";
    
    try {
        const response = await axios.get(URL);
        const types = response.data.results;

        // Mapeamos sobre los tipos para extraer solo los nombres
        const typeNames = types.map((type) => type.name);

        return typeNames;
    } catch (error) {
        console.error("Error fetching Pokemon types:", error);
        return [];
    }
};

export { searchInApiAllType };