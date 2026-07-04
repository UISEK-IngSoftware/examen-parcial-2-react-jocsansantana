// Importación de componentes de Material UI
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

// Hoja de estilos del componente
import './CharacterCard.css';

// Componente que recibe un personaje como propiedad y muestra su información
export const CharacterCard = ({ character }) => {

    // Función que se ejecuta si la imagen no puede cargarse.
    // En ese caso, se reemplaza por una imagen predeterminada.
    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/250?text=No+Image';
    };

    return (

        // Tarjeta principal del personaje
        <Card className="character-card">

            {/* Imagen del personaje */}
            <CardMedia
                component="img"
                height="250"
                image={character.image}
                alt={character.name}
                className="card-image"

                // Si la imagen falla, se muestra una imagen de reemplazo
                onError={handleImageError}
            />

            {/* Contenido de la tarjeta */}
            <CardContent className="card-content">

                {/* Nombre del personaje */}
                <Typography variant="h6" className="char-name">
                    {character.name}
                </Typography>

                {/* Género del personaje */}
                <Typography variant="body2" className="char-info">
                    Género: {character.gender}
                </Typography>

                {/* Estado actual del personaje */}
                <Typography variant="body2" className="char-info">
                    Estado: {character.status}
                </Typography>

            </CardContent>

        </Card>
    );
};