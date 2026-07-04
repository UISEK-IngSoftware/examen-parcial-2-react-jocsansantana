// Importación de componentes de Material UI
import { List, ListItem } from '@mui/material';

// Importación del componente que muestra la información de cada personaje
import { CharacterCard } from './CharacterCard';

// Hoja de estilos del componente
import './CharacterList.css';

// Componente que recibe la lista de personajes y una función para seleccionar uno
export const CharacterList = ({ characters, onSelectCharacter }) => {
    return (

        // Contenedor de la lista de personajes
        <List className="character-list">

            {/* Recorre el arreglo de personajes y crea un elemento por cada uno */}
            {characters.map((char) => (

                // Cada elemento de la lista representa un personaje
                <ListItem
                    key={char.id} // Clave única para optimizar el renderizado
                    className="list-item"

                    // Al hacer clic sobre un personaje se envía al componente padre
                    onClick={() => onSelectCharacter(char)}
                >

                    {/* Tarjeta que muestra la información del personaje */}
                    <CharacterCard character={char} />

                </ListItem>
            ))}

        </List>
    );
};