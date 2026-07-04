import './App.css'
import Header from './components/Header'
import { Container } from '@mui/material'
import CharacterList from './components/CharacterList'

function App() {

  return (
    <>
      <Header />
      <Container>
        <CharacterList />
      </Container>
    </>
  );
}

export default App;