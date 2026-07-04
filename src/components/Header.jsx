import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import hero from "../assets/hero.png";
import "./Header.css";

export default function Header() {
    return (
        <header className="Futurama-header">
            <Container>
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={hero} alt="Futurama" height={100} />
                            <Typography variant="h4" align="center">
                                Futurama API
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </header>
    );
}