
import { Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import "./CharacterCard.css";

export default function CharacterCard({ character }) {

    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={character.image}
                alt={character.name}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Género: {character.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Estado: {character.status}
                </Typography>
                <Typography variant="body2">
                    Especie: {character.species}
                </Typography>
            </CardContent>
            <CardActions>
                <Chip
                    label={character.status}
                    color="success"
                    size="small"
                />
                <Chip
                    label={character.gender}
                    color="secondary"
                    size="small"
                />
                <Chip
                    label={character.species}
                    color="primary"
                    size="small"
                />
            </CardActions>
        </Card>
    )
}