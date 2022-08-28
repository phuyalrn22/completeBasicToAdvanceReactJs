import "./index.css";
import MovieList from "./Components/MovieList";
import Nav from "./Components/Nav/Nav";
import { MovieProdiver } from "./Components/MovieContactList";
import { Container } from "./Components/styles/Container.styled";
import AddMovie from "./Components/AddMovie"
import { AddMovieStyle } from "./Components/styles/AddMovieStyle";

function App() {
  return (
    <MovieProdiver>
      <Container>
        <div className="App">
          <Nav />
          <AddMovieStyle>
            <AddMovie />
          </AddMovieStyle>
          <MovieList />
        </div>
        <hr/>
      </Container>
      
    </MovieProdiver>
    
  );
}

export default App;
