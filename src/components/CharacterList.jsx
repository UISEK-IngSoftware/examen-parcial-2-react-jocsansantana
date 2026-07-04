import { useState, useEffect } from "react";
import { Grid, Typography, CircularProgress, Alert } from "@mui/material";
import CharacterCard from "../components/CharacterCard";
import "./CharacterList.css";
import { getCharactersList } from "../services/futuramaService"

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCharactersList().then((charactersData) => {
            setCharacters(charactersData);
        }).catch(() => {
            setErrorMsg("Error al obtener los personajes");
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <Grid container justifyContent="center" sx={{ mt: 5 }}>
                <CircularProgress />
            </Grid>
        );
    }

    if (errorMsg !== "") {
        return (
            <Alert severity="error" sx={{ mt: 3 }}>
                {errorMsg}
            </Alert>
        );
    }

    if (characters.length === 0) {
        return (
            <Typography
                align="center"
                variant="h6"
                sx={{ mt: 5 }}>
                Aqui ya no existen personajes para mostrar
            </Typography>
        );
    }

    return (
        <Grid container spacing={2}>
            {characters.map((character) => (
                <Grid item xs={12} sm={6} md={4} key={character.id}>
                    <CharacterCard character={character} />
                </Grid>
            ))}
        </Grid>
    );
}