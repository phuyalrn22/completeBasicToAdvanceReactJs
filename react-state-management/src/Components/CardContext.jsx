import { useState, useContext, createContext, Children } from "react";

export const CardContext = createContext();

export const CardProvider = (props) => {
    const [card, setCard] = useState(
        [
            {
                "name" : "Bipin",
                "bio" : "Coder"
            }
        ]
    )
    return(
        <CardContext.Provider>
            {props.children}
        </CardContext.Provider>
    )
}