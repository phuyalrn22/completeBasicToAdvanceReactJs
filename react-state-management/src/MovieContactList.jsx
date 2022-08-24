import React from 'react'
import { useState, createContext } from 'react'


export const MovieContext = createContext();

export const MovieProdiver = (props) => {
    const [movie, setMovie] = useState([
        {
          id: 123,
          name: "Captain America",
          price: "Rs.400",
        },
        {
          id: 143,
          name: "Hulk",
          price: "Rs.300",
        },
        {
          id: 113,
          name: "Ghost Rider",
          price: "Rs.500",
        },
        {
          id: 123,
          name: "Avenger",
          price: "Rs.700",
        },
      ]);

    return(
        <MovieContext.Provider value={[movie,setMovie]}>
           {props.children}
        </MovieContext.Provider>
    );

}