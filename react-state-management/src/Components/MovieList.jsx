import React from "react";
import {  useContext } from "react";
import { MovieContext } from "./MovieContactList";
import Movie from "./Movie";

const MovieList = () => {
  const [movie,setMovie] = useContext(MovieContext);

  return (
    <div>
    {movie.map(movies => (
      <Movie  
        name={movies.name}
        price={movies.price}
        key={movies.id}
      />
    ))}
    </div>
  )
};

export default MovieList;
