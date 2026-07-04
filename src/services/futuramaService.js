import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

export const getCharactersList = async () => {
    try {
        const response = await apiClient.get("/characters?orderBy=id&orderByDirection=asc&page=1&size=50");

        return response.data.items;
    } catch (error) {
        console.error("Error obteniendo la lista de personajes:", error);
        throw error;
    }
}