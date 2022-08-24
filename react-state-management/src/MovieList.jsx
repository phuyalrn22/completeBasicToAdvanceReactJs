import React from "react";
import {  useContext } from "react";
import { MovieProdiver } from "./MovieContactList";
import Movie from "./Movie";

const MovieList = () => {
  const [movie,setMovie] = useContext(MovieProdiver);

  return (
    <div>
    {movie.map(movies => (
      <Movie  
        name={movies.name}
        price={movies.price}
      />
    ))}
    </div>
  )
};

export default MovieList;
