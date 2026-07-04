import axios from "axios";

const API_BASE = "https://futuramaapi.com/api/characters";

export const getCharacters = async () => {
    const response = await axios.get(API_BASE, {
        params: {
            orderBy: "id",
            orderByDirection: "asc",
            page: 1,
            size: 50,
        },
    });
    return response.data.items;
};