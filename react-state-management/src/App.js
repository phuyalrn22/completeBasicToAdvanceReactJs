import "./App.css";
import "./MovieList";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProdiver } from "./MovieContactList";

function App() {
  return (
    <MovieProdiver>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProdiver>
  );
}

export default App;
