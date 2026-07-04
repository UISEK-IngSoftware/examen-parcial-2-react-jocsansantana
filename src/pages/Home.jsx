// Importación de los hooks de React
import { useEffect, useState } from 'react';

// Importación de componentes de Material UI
import {
    CircularProgress,
    Alert,
    Container,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent
} from '@mui/material';

// Función que obtiene los personajes desde el servicio
import { getCharacters } from '../services/futuramaService';

// Componente encargado de mostrar la lista de personajes
import { CharacterList } from '../components/CharacterList';

// Hoja de estilos de la página principal
import './Home.css';

export const Home = () => {

    // Estado que almacena la lista de personajes
    const [characters, setCharacters] = useState([]);

    // Estado que controla la carga de la información
    const [loading, setLoading] = useState(true);

    // Estado para almacenar posibles errores de la petición
    const [error, setError] = useState(null);

    // Estado que almacena el personaje seleccionado para mostrar sus detalles
    const [selectedChar, setSelectedChar] = useState(null);

    // Se ejecuta una sola vez al cargar el componente
    useEffect(() => {

        // Función asíncrona para obtener los datos desde la API
        const fetchData = async () => {
            try {
                // Obtiene los personajes
                const data = await getCharacters();

                // Guarda los personajes en el estado
                setCharacters(data);

            } catch (err) {

                // Guarda el mensaje de error si ocurre algún problema
                setError(err.message);

            } finally {

                // Finaliza el estado de carga
                setLoading(false);
            }
        };

        // Llamada a la función
        fetchData();

    }, []);

    // Mientras se cargan los datos muestra un indicador de carga
    if (loading) return <CircularProgress />;

    // Si ocurre un error muestra un mensaje de alerta
    if (error) return <Alert severity="error">{error}</Alert>;

    return (

        // Contenedor principal de la página
        <Container className="home-container">

            {/* Título principal */}
            <Typography variant="h4" className="home-title">
                Personajes de Futurama
            </Typography>

            {/* Lista de personajes.
                Se envía la lista y la función para seleccionar un personaje */}
            <CharacterList
                characters={characters}
                onSelectCharacter={setSelectedChar}
            />

            {/* Ventana modal para mostrar los detalles del personaje */}
            <Dialog
                open={!!selectedChar}
                onClose={() => setSelectedChar(null)}
                fullWidth
                maxWidth="xs"
            >

                {/* Solo muestra el contenido cuando existe un personaje seleccionado */}
                {selectedChar && (
                    <>

                        {/* Título del modal */}
                        <DialogTitle
                            style={{
                                color: '#00ff41',
                                backgroundColor: '#162640'
                            }}
                        >
                            {selectedChar.name}
                        </DialogTitle>

                        {/* Contenido del modal */}
                        <DialogContent
                            style={{
                                backgroundColor: '#162640',
                                color: '#fff'
                            }}
                        >

                            {/* Imagen del personaje */}
                            <img
                                src={selectedChar.image}
                                alt={selectedChar.name}
                                style={{
                                    width: '100%',
                                    borderRadius: '8px'
                                }}
                            />

                            {/* Información del personaje */}
                            <Typography>
                                <strong>Género:</strong> {selectedChar.gender}
                            </Typography>

                            <Typography>
                                <strong>Estado:</strong> {selectedChar.status}
                            </Typography>

                            <Typography>
                                <strong>Especie:</strong> {selectedChar.species}
                            </Typography>

                        </DialogContent>
                    </>
                )}

            </Dialog>

        </Container>
    );
};